/** @jsx React.DOM */

define(["jquery", "underscore","react", "jsx!views/CommentList","lib/bootstrap/js/bootstrap"], function($, _, React, CommentList){

   var Button = React.createClass({
      render: function(){
         var propsToOmit = _.omit(this.props, ["className","onClick","label"])
         return <button type="button" className={this.props.className} onClick={this.props.onClick} style={this.props.style}>{this.props.label}</button>;
      }
   });

		var TodosList = React.createClass({
			defaultProps: {
				data: []
			},
			createTodosFrom: function(data){
				return (
						<div>
							<span>Title</span><span>{data.title}</span><br />
							<span>Description</span><span>{data.description}</span>
						</div>
					);
			},
			render: function(){
				var mappedChildren = _.map(this.props.data, function(data){ return this.createTodosFrom(data) }, this);
				return (
					<div className="row-fluid">
						<div className="span2" />
						{mappedChildren}
						<div className="span2" />
					</div>
				);
			}
		});

		var TodosButtonList = React.createClass({
			render: function(){
				var floatRight = {
					float: 'right'
				};
				return (
					<div className="row-fluid">
						<div className="span3" />
						<div className="span3"><Button label="Add" className="btn btn-primary" style={floatRight} /></div>
						<div className="span3"><Button label="Clear all" className="btn" /></div>
						<div className="span3" />
					</div>
				);
			}
		});

    var TodosContainerView = React.createClass({
       render: function(){
           return (
										<div>
											<TodosButtonList />
											<TodosList url="/todo" />
										</div>
					);
       }

    });

    return TodosContainerView;
});
