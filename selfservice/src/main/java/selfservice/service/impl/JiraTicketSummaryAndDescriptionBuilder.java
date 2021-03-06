package selfservice.service.impl;

import static com.google.common.base.Preconditions.checkNotNull;
import static selfservice.domain.Action.Type.LINKREQUEST;
import static selfservice.domain.Action.Type.QUESTION;
import static selfservice.domain.Action.Type.UNLINKREQUEST;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.google.common.base.MoreObjects;

import selfservice.domain.Action;

class JiraTicketSummaryAndDescriptionBuilder {

  static SummaryAndDescription build(final Action action) {
    checkNotNull(action);

    StringBuilder description = new StringBuilder();

    final StringBuilder summary = new StringBuilder();

    if (action.getType().equals(QUESTION)) {
      description.append("Question: ").append(action.getBody()).append("\n");
      summary.
        append("Question about ").
        append(action.getSpId());
    } else if (LINKREQUEST.equals(action.getType())) {
      description.append("Request: Create a new connection").append("\n");
      summary.
        append("New connection for IdP ").
        append(action.getIdpId()).
        append(" to SP ").
        append(action.getSpId());
    } else if (UNLINKREQUEST.equals(action.getType())) {
      description.append("Request: terminate a connection").append("\n");
      summary.
        append("Disconnect IdP ").
        append(action.getIdpId()).
        append(" and SP ").
        append(action.getSpId());
    } else {
      throw new IllegalArgumentException("Don't know how to handle tasks of type " + action.getType());
    }

    description.append("Applicant name: ").append(action.getUserName()).append("\n");
    description.append("Applicant email: ").append(action.getUserEmail()).append("\n");
    description.append("Identity Provider: ").append(action.getIdpId()).append("\n");
    description.append("Service Provider: ").append(action.getSpId()).append("\n");
    description.append("Time: ").append(new SimpleDateFormat("HH:mm dd-MM-yy").format(new Date())).append("\n");

    if (!action.getType().equals(QUESTION)) {
      description.append("Remark from user: ").append(action.getBody()).append("\n");
    }

    return new SummaryAndDescription(summary.toString(), description.toString());
  }

  static class SummaryAndDescription {
    public final String summary;
    public final String description;

    public SummaryAndDescription(String summary, String description) {
      this.summary = summary;
      this.description = description;
    }

    @Override
    public String toString() {
      return MoreObjects.toStringHelper(SummaryAndDescription.class)
          .add("summary", summary)
          .add("description", description).toString();
    }
  }
}
