/** @jsx React.DOM */

define(["react","jsx!views/Button"], function(React, Button){

    return React.createClass({
			getDefaultProps: function(){
				return {
					todo: {}
				};
			},
			deleteTodo: function(){
				var self = this, id = this.props.todo.get("id");
				this.props.todo.destroy().done(function(){
					self.props.onDelete(id);
				});
			},
			render: function(){
				var floatRight = {
					float: 'right'
				}, title, description, buttonOptions;
				title = this.props.todo.get("title");
				description = this.props.todo.get("description");
				return (
					<div className="row-fluid" style={this.props.style}>
						<div className="span3" />
						<div className="span6 todo-pane">
							<div className="row-fluid">
								<div className="span4"><span style={floatRight}>Title:</span></div>
								<div className="span8">{title}</div>
							</div>
							<div className="row-fluid">
								<div className="span4"><span style={floatRight}>Description:</span></div>
								<div className="span8">{description}</div>
							</div>
							<Button className="close-button" label="X" onClick={this.deleteTodo} />
						</div>
						<div className="span3" />
					</div>
				);
			}
		});

});
