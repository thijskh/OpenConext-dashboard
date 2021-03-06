/** @jsx React.DOM */

App.Components.Navigation = React.createClass({

  componentDidUpdate: function() {
    if (this.props.loading) {
      if (!this.spinner) {
        this.spinner = new Spinner({
          lines: 25, // The number of lines to draw
          length: 25, // The length of each line
          width: 4, // The line thickness
          radius: 20, // The radius of the inner circle
          color: '#4DB3CF', // #rgb or #rrggbb or array of colors
        }).spin(this.refs.spinner.getDOMNode());
      }
    } else {
      this.spinner = null;
    }
  },

  render: function () {
    return (
      <div className="mod-navigation">
        <ul>
          {this.renderItem("/apps", "apps")}
          {this.renderPoliciesMenu()}
          {this.renderItem("/notifications", "notifications")}
          {this.renderItem("/history", "history")}
          {this.renderItem("/statistics", "stats")}
          {this.renderItem("/my-idp", "my_idp")}
        </ul>

        {this.renderSpinner()}
      </div>
    );
  },

  renderPoliciesMenu: function () {
    if (App.policiesAvailable) {
      return this.renderItem("/policies", "policies");
    } else {
      return null;
    }
  },

  renderItem: function(href, value, beta) {
    var className = (this.props.active == value ? "active" : "");
    var betaClassName = beta ? "beta" : "";
    return (
      <li className={className}><a href={href} className={betaClassName}>{I18n.t("navigation." + value)}</a></li>
    );
  },

  renderSpinner: function() {
    if (this.props.loading) {
      return <div className="spinner" ref="spinner" />;
    }
  }
});
