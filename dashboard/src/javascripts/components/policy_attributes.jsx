/** @jsx React.DOM */

App.Components.PolicyAttributes = React.createClass({

  markAttributes: function (policy) {
    policy.attributes = policy.attributes.map(function (attr, index) {
      attr.index = index;
      return attr;
    });
    return policy;
  },

  getInitialState: function () {
    return this.markAttributes(this.props.policy);
  },

  componentWillReceiveProps: function (nextProps) {
    this.state = this.markAttributes(nextProps.policy);
  },

  addAttribute: function (attrName) {
    var attributes = this.state.attributes || [];
    var index = attributes.length + 1;
    attributes.push({name: attrName, value: "", index: index});
    this.props.setAttributeState({attributes: attributes});
  },

  removeAttribute: function (name) {
    var attributes = this.state.attributes || [];
    attributes = this.state.attributes.filter(function (attribute) {
      return attribute.name !== name;
    });
    this.props.setAttributeState({attributes: attributes});
  },

  preventProp: function preventProp(e) {
    e.preventDefault();
    e.stopPropagation();
  },

  handleAttributeValueChanged: function (attrName, index) {
    return function (e) {
      this.preventProp(e);
      //change attribute value
      var attributes = this.state.attributes.map(function (attr) {
        if (attr.name === attrName && attr.index === index) {
          attr.value = e.target.value;
        }
        return attr;
      });
      this.props.setAttributeState({attributes: attributes});
    }.bind(this);
  },

  handleRemoveAttributeValue: function (attrName, index) {
    return function (e) {
      this.preventProp(e);
      //remove attribute value
      var attributes = this.state.attributes.filter(function (attr) {
        return !(attr.name === attrName && attr.index === index);
      });
      this.props.setAttributeState({attributes: attributes});
    }.bind(this);
  },

  handleNewAttributeValue: function (attrName) {
    return function (e) {
      this.preventProp(e);
      //change attribute value
      this.addAttribute(attrName);
    }.bind(this);
  },

  handleNewAttribute: function (e) {
    this.preventProp(e);
    //change attribute value
    var attrName = e.target.value;
    this.addAttribute(attrName);
  },

  handleRemoveAttribute: function (attrName) {
    return function (e) {
      this.preventProp(e);
      //change attribute value
      this.removeAttribute(attrName);
    }.bind(this);
  },

  renderAttributeInfo: function(attrName, index) {
    if (index !== 0) {
      return;
    }
    if ("urn:collab:sab:surfnet.nl" === attrName) {
      return (<em className="attribute-value"><sup>*</sup>{I18n.t("policy_attributes.sab_info")}</em>);
    } else if ("urn:collab:group:surfteams.nl" === attrName) {
      return (<em className="attribute-value"><sup>*</sup>{I18n.t("policy_attributes.group_info")}</em>);
    }
  },

  renderAttributeValue: function (attrName, attribute, index) {
    var className = this.renderAttributeInfo(attrName, index) === undefined ? "" : "before-em";
    return (
        <div className="value-container" key={"div-" + attrName + "-" + attribute.index}>
          <input type="text" name="value" className={"form-input " + className}
                 key={attrName + "-" + attribute.index}
                 value={attribute.value}
                 placeholder={I18n.t("policy_attributes.attribute_value_placeholder")}
                 onChange={this.handleAttributeValueChanged(attrName, attribute.index)}/>
          {this.renderAttributeInfo(attrName, index)}
          <a href="#" className="remove" onClick={this.handleRemoveAttributeValue(attrName, attribute.index)}>
            <i className="fa fa-remove"></i>
          </a>

        </div>
    )
  },

  render: function () {
    var policy = this.state;
    var grouped = _.groupBy(policy.attributes, function (attr) {
      return attr.name;
    });
    var attrNames = Object.keys(grouped);
    var allowedAttributes = this.props.allowedAttributes.filter(function (attr) {
      return _.isEmpty(grouped[attr.name]);
    });
    var self = this;
    var emptyAttributes = policy.attributes.filter(function (attr) {
      return _.isEmpty(attr.value);
    });
    var validClassName = (_.isEmpty(policy.attributes) || emptyAttributes.length > 0) ? "failure" : "success";
    var css = this.props.css || "";
    return (
        <div className="form-element">
            <fieldset className={css+" "+validClassName}>
            {
              attrNames.map(function (attrName) {
                return (
                    <div key={attrName}>
                      <p className="label">{I18n.t("policy_attributes.attribute")}</p>

                      <div className="attribute-container">
                        <input type="text" name="attribute" className="form-input disabled" value={attrName}
                               disabled="disabled"/>
                        <a href="#" onClick={self.handleRemoveAttribute(attrName)} className="remove">
                          <i className="fa fa-remove"></i>
                        </a>
                      </div>
                      <div className="attribute-values">
                        <p className="label">{I18n.t("policy_attributes.values")}</p>
                        {
                          grouped[attrName].map(function (attribute, index) {
                            return self.renderAttributeValue(attrName, attribute, index);
                          })
                        }
                        <a href="#" onClick={self.handleNewAttributeValue(attrName)} className="plus">
                          <i className="fa fa-plus"></i>
                          {I18n.t("policy_attributes.new_value")}
                        </a>
                      </div>
                    </div>
                );
              })
            }
            <p className="label">{I18n.t("policy_attributes.attribute")}</p>
            <select value="" onChange={self.handleNewAttribute}>
              <option value="" disabled="disabled">{I18n.t("policy_attributes.new_attribute")}</option>
              {
                allowedAttributes.map(function (allowedAttribute) {
                  return (<option value={allowedAttribute.name}
                                  key={allowedAttribute.name}>{allowedAttribute.name}</option>);
                })
              }
            </select>
          </fieldset>
        </div>);

  }
});
