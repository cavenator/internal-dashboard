/** @jsx React.DOM */

define(["underscore","react","models/TodoCollection", "models/Todo","jsx!views/TodosButtonList","jsx!views/NewTodo","jsx!views/ReadOnlyTodo"], 
       function(_, React, TodoCollection, Todo, TodosButtonList, NewTodo, ReadOnlyTodo){
    var todoCollection = new TodoCollection();

    return React.createClass({
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
					return <ReadOnlyTodo todo={new Todo(todo)} onDelete={self.onDelete} />
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

});
