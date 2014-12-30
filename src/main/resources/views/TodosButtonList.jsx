/** @jsx React.DOM */

define(["react","jsx!views/Button"], function(React, Button){

    return React.createClass({
        render: function(){
            var floatRight = {
                float: 'right'
            };
            return (
                <div className="row-fluid" style={this.props.style}>
                    <div className="span3" />
                    <div className="span3"><Button disabled={this.props.disabled} label={this.props.submitLabel} className="btn btn-primary" style={floatRight} onClick={this.props.onSubmit} /></div>
                    <div className="span3"><Button label={this.props.cancelLabel} className="btn" onClick={this.props.onCancel} /></div>
                    <div className="span3" />
                </div>
            );
        }
    });

});
