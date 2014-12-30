/** @jsx React.DOM */

define(["react"], function(React){

    return React.createClass({
        render: function(){
            var remainingProps = _.omit(this.props, ["className","onClick","label"])
            return <button type="button" className={this.props.className} onClick={this.props.onClick} style={this.props.style} disabled={this.props.disabled}>{this.props.label}</button>;
        }
    });

});
