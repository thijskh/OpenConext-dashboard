/** @jsx React.DOM */

App.Components.Select2Selector = React.createClass({

  getInitialState: function () {
    var initialValue = this.props.defaultValue || (this.props.multiple ? [] : '');
    return {
      value: initialValue
    }
  },

  componentDidMount: function () {
    var rootNode = $('[data-select2selector-id="' + this.props.select2selectorId + '"]');
    var minimumResultsForSearch = this.props.minimumResultsForSearch || 7
    rootNode.select2({
      width: '100%',
      placeholder: this.props.placeholder,
      minimumResultsForSearch: minimumResultsForSearch,
      allowClear: false,
      forceBelow: true
    });
    var initialValue = this.props.defaultValue || (this.props.multiple ? [] : '');
    rootNode.val(initialValue).trigger("change");
    //This is not the react way, but this react version does not support native Select2 ports
    rootNode.on("change", this.handleChange);
  },

  componentWillUnmount: function () {
    var rootNode = $('[data-select2selector-id="' + this.props.select2selectorId + '"]');
    rootNode.select2("destroy");
  },

  handleChange: function (e) {
    var newValue = this.props.multiple ? $('[data-select2selector-id="' + this.props.select2selectorId + '"]').val() : e.target.value;
    this.props.handleChange(newValue);
  },

  render: function () {
    var initialValue = this.props.defaultValue || (this.props.multiple ? [] : '');
    var renderOption = this.props.options.map(function (option, index) {
      return (<option key={option.value} value={option.value}>{option.display}</option>);
    });
    var multiple = this.props.multiple ? {multiple: "multiple"} : {};
    return (
        <div>
          <select id="lang" value={initialValue} data-select2selector-id={this.props.select2selectorId} {...multiple}>
            {renderOption}
          </select>
        </div>
    );
  }
});
