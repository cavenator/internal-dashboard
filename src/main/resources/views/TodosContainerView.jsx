/** @jsx React.DOM */

define(["jquery", "underscore","react", "jsx!views/CommentList","lib/bootstrap/js/bootstrap"], function($, _, React, CommentList){

   var Button = React.createClass({
      render: function(){
         var propsToOmit = _.omit(this.props, ["className","onClick","label"])
         return <button type="button" className={this.props.className} onClick={this.props.onClick} style={this.props.style}>{this.props.label}</button>;
      }
   });

		var Todo = React.createClass({
			getDefaultProps: function(){
				return {
					readonly: true,
					todo: {}
				};
			},
			render: function(){
				var floatRight = {
					float: 'right'
				}, title, description;
				if (this.props.readonly){
					title = this.props.todo.title;
					description = this.props.todo.description;
				} else {
					title = <input id="todoTitle" />;
					description = <input id="todoDescription" />;
				}
				return (
					<div className="row-fluid">
						<div className="span3" />
						<div className="span6">
							<div className="row-fluid">
								<div className="span4"><span style={floatRight}>Title:</span></div>
								<div className="span8">{title}</div>
							</div>
							<div className="row-fluid">
								<div className="span4"><span style={floatRight}>Description:</span></div>
								<div className="span8">{description}</div>
							</div>
						</div>
						<div className="span3" />
					</div>
				);
			}
		});

		var TodosList = React.createClass({
			getDefaultProps: function(){
				return {
					data: [{title: "Okay", description: "What is going on?"}]
				};
			},
			createTodosFrom: function(data){
				return <Todo todo={data} />
 			},
			render: function(){
				var self = this, mappedChildren = _.map(this.props.data, function(data){
					return self.createTodosFrom(data);
				});
				return (
					<div id="todosList">
						{mappedChildren}
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
						<div className="span3"><Button label="Add" className="btn btn-primary" style={floatRight} onClick={this.props.onAdd} /></div>
						<div className="span3"><Button label="Clear all" className="btn" /></div>
						<div className="span3" />
					</div>
				);
			}
		});

    var TodosContainerView = React.createClass({
			getInitialState: function(){
				return {
					createNew: false
				};
			},
			onAdd: function(){
				this.setState({createNew: true});
			},
       render: function(){
					 var todo;
						if (this.state.createNew){
							todo = <Todo readonly={false} />
						}
           return (
										<div>
											<TodosButtonList onAdd={this.onAdd} />
											{todo}
											<TodosList url="/todo" />
										</div>
					);
       }

    });

    return TodosContainerView;
});
