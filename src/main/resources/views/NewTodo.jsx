/** @jsx React.DOM */

define(["react","models/Todo","jsx!views/TodosButtonList"], function(React, Todo, TodosButtonList){

    return React.createClass({
        getInitialState: function(){
            return {
                todo: new Todo()
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

});
