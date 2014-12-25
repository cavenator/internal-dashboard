/** @jsx React.DOM */

define(["jquery", "underscore","react","models/TodoCollection", "models/Todo","lib/bootstrap/js/bootstrap"], function($, _, React, TodoCollection, TodoModel){
		var todoCollection = new TodoCollection();
   var Button = React.createClass({
      render: function(){
         var propsToOmit = _.omit(this.props, ["className","onClick","label"])
         return <button disabled={this.props.disabled} type="button" className={this.props.className} onClick={this.props.onClick} style={this.props.style}>{this.props.label}</button>;
      }
   });

		var NewTodo = React.createClass({
			getInitialState: function(){
				return {
					todo: new TodoModel()
				};
			},
			onSave: function(){
				var callback = this.props.onSuccess;
				this.state.todo.save().done(function(data){
					callback(data);
				});
			},
			fillInTitle: function(e){
				var todo = this.state.todo;
				todo.set("title", e.target.value);
				this.setState({todo: todo});
			},
			fillInDescription: function(e){
				var todo = this.state.todo;
				todo.set("description", e.target.value);
				this.setState({todo: todo});
			},
			render: function(){
				var floatRight = {
					float: 'right'
				}, disabled = this.state.todo.isValid();
				return (
					<div className="row-fluid" style={this.props.style}>
						<div className="span3" />
						<div className="span6 todo-pane">
							<div className="row-fluid">
								<div className="span4"><span style={floatRight}>Title:</span></div>
								<div className="span8">
									<input id="todoTitle" onChange={this.fillInTitle} />
								</div>
							</div>
							<div className="row-fluid">
								<div className="span4"><span style={floatRight}>Description:</span></div>
								<div className="span8"><input id="todoDescription" onChange={this.fillInDescription} /></div>
							</div>
							<TodosButtonList submitLabel="Save" disabled={!disabled} cancelLabel="Cancel" onSubmit={this.onSave} onCancel={this.props.onCancel} />
						</div>
						<div className="span3" />
					</div>
				);
			}
		});

		var Todo = React.createClass({
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

		var TodosButtonList = React.createClass({
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

    var TodosContainerView = React.createClass({
			getInitialState: function(){
				return {
					createNew: false,
					data: []
				};
			},
			onAdd: function(){
				this.setState({createNew: true});
			},
			onCancel: function(){
				this.setState({createNew: false});
			},
			onDelete: function(id){
				this.setState({data: _.filter(this.state.data, function(todo){ return todo.id != id})});
			},
			onSuccess: function(todo){
				this.state.data.push(todo);
				this.setState({createNew: false });
			},
			clearAll: function(){
				var self = this;
				todoCollection.removeAll().done(function(){
					self.setState({createNew: false, data: [] });
				});
			},
			createReadonlyTodos: function(){
				var self = this;
				return _.map(this.state.data, function(todo){
					return <Todo todo={new TodoModel(todo)} onDelete={self.onDelete} />
				});
			},
			componentDidMount: function(){
				var self = this;
				todoCollection.fetch().done(function(todos){
					self.setState({data: todos});
				});
			},
       render: function(){
					 var todo, down4EM={
							margin: "0 0 4em 0"
						}, mappedChildren = this.createReadonlyTodos();
						if (this.state.createNew){
							todo = <NewTodo style={down4EM} onCancel={this.onCancel} onSuccess={this.onSuccess} />
						}
           return (
						<div>
							<TodosButtonList style={down4EM} submitLabel="Add" cancelLabel="Clear all" onSubmit={this.onAdd} onCancel={this.clearAll} />
							{todo}
							<div id="todosList">
								{mappedChildren}
							</div>
						</div>
					);
       }

    });

    return TodosContainerView;
});
