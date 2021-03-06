package selfservice.shibboleth;

import java.util.Arrays;

public enum ShibbolethHeader {

  Name_Id("name-id"),
  Shib_Authenticating_Authority("Shib-Authenticating-Authority"),
  Shib_DisplayName("Shib-displayName"),
  Shib_Email("Shib-email"),
  Shib_HomeOrg("Shib-homeOrg"),
  Shib_Uid("Shib-uid"),
  Shib_SurName("Shib-surName"),
  Shib_GivenName("Shib-givenName"),
  Shib_CommonName("Shib-commonName"),
  Shib_EduPersonAffiliation("Shib-eduPersonAffiliation"),
  Shib_EduPersonEntitlement("Shib-eduPersonEntitlement"),
  Shib_EduPersonPN("Shib-eduPersonPN"),
  Shib_PreferredLanguage("Shib-preferredLanguage"),
  Shib_SchacHomeOrganizationType("Shib-schacHomeOrganizationType"),
  Shib_NlEduPersonHomeOrganization("Shib-nlEduPersonHomeOrganization"),
  Shib_NlEduPersonStudyBranch("Shib-nlEduPersonStudyBranch"),
  Shib_NlStudielinkNummer("Shib-nlStudielinkNummer"),
  Shib_NlDigitalAuthorIdentifier("Shib-nlDigitalAuthorIdentifier"),
  Shib_NlEduPersonOrgUnit("Shib-nlEduPersonOrgUnit"),
  Shib_UserStatus("Shib-userStatus"),
  Shib_Accountstatus("Shib-accountstatus"),
  Shib_VoName("Shib-voName"),
  Shib_MemberOf("Shib-memberOf");

  private final String value;

  private ShibbolethHeader(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  public static ShibbolethHeader findByValue(String value) {
    return Arrays.stream(values())
        .filter(e -> e.getValue().equals(value))
        .findFirst()
        .orElseThrow(() -> new IllegalArgumentException("ShibbolethHeader not found for " + value));
  }
}