/** @jsx React.DOM */

App.Components.LicenseInfoPanel = React.createClass({
  render: function() {
    return (
      <div className="l-middle">
        <div className="mod-title">
          <h1>{I18n.t("license_info_panel.title")}</h1>
        </div>

        <div className="mod-connection">
          <App.Components.LicenseInfo app={this.props.app} split={false} />
        </div>
        {this.renderLicenseStatus()}
      </div>
    );
  },

  renderLicenseStatus: function() {
    switch (this.props.app.licenseInfo) {
      case "has_license_surfmarket":
        return this.renderHasLicense(I18n.t("license_info_panel.has_license_surfmarket_html")) ;
      case "has_license_sp":
        return this.renderHasLicense(I18n.t("license_info_panel.has_license_sp_html", {serviceName: this.props.app.name , serviceUrl: this.props.app.serviceUrl})) ;
      case "no_license":
        return this.renderNoLicense();
      case "not_needed":
        return this.renderNoLicenseNeeded();
      case "unknown":
        return this.renderUnknownLicense();
    }
  },

  renderHasLicense: function(msg) {
    return (
      <div className="mod-title">
        <h3 dangerouslySetInnerHTML={{ __html: msg}} />
      </div>
    );
  },

  renderNoLicense: function() {
    return (
      <div className="mod-title">
        <h3 dangerouslySetInnerHTML={{ __html: I18n.t("license_info_panel.no_license_html")}} />
        <br />
        <div className="mod-description" dangerouslySetInnerHTML={{ __html: I18n.t("license_info_panel.no_license_description_html")}} />
      </div>
    );
  },

  renderNoLicenseNeeded: function() {
    return (
      <div className="mod-title">
        <h3 dangerouslySetInnerHTML={{ __html: I18n.t("license_info_panel.not_needed_html")}} />
      </div>
    );
  },

  renderUnknownLicense: function() {
    return (
      <div className="mod-title">
        <h3>{I18n.t("license_info_panel.unknown_license")}</h3>
        <br />
        <div className="mod-description" dangerouslySetInnerHTML={{ __html: I18n.t("license_info_panel.unknown_license_description_html")}} />
      </div>
    );
  }
});
