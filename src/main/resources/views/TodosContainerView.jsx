/** @jsx React.DOM */

define(["jquery", "underscore","react", "jsx!views/CommentList","lib/bootstrap/js/bootstrap"], function($, _, React, CommentList){

   var Button = React.createClass({
      render: function(){
         var propsToOmit = _.omit(this.props, ["className","onClick","label"])
         return <button type="button" className={this.props.classes} onClick={this.props.onClick}>{this.props.label}</button>;
      }
   });
   var Modal = React.createClass({
      render: function(){
          var children = this.props.children, transformedChildren = [];
          var transform = function(obj){
             return <div className={obj.className}>{obj.child}</div>
          };
          transformedChildren.push(transform({className: "modal-body", child: children[0]}));
          transformedChildren.push(transform({className: "modal-footer", child: children[1]}));
         return (<div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-hidden="true">
                 <div className="modal-header"><Button classes="close" label="x"></Button><h4>{this.props.title}</h4></div>
                    { transformedChildren }
                </div>);
      }
   });
   var ModalSection = React.createClass({
      render: function(){
          var modalClasses = "modal-"+this.props.type;
          if (this.props.classes){
             modalClasses += " " + this.props.classes;
          }

          return <div className={modalClasses}>{ this.props.children }</div>;
      }
   });

   var ModalMixin = {
       setModalId: function(id){
          this.modalId = id;
       },
       showModal: function(){
          var modal = document.getElementById(this.modalId);
          $(modal).modal('show');
       },
       hideModal: function(){
          var modal = document.getElementById(this.modalId);
          $(modal).modal('hide');
       }
   };

   var CommentBox = React.createClass({
      mixins: [ModalMixin],
      getInitialState: function(){
          return { data: [] };
      },
      loadTodos: function(){
         $.ajax({
            url: this.props.url,
            dataType: "json",
            success: function(data){
               this.setState({data: data});
            }.bind(this)
         });
      },
      componentDidMount: function(){
          this.loadTodos();
          if (this.props.pollingInterval){
            setInterval(this.loadTodos, this.props.pollingInterval);
          }
      },
      render: function(){
          var modalId = "myModal";
          this.setModalId(modalId);
          return (<div id="commentBox">
                      <h1>{this.props.headline}</h1>
                      <CommentList data={this.state.data} />
                      <Modal id={modalId} title="I am the title of the modal">
                          <div>I am the body</div>
                          <div>I am the footer <Button classes="btn btn-inverse" onClick={this.hideModal} label="Close" /></div>
                      </Modal>
                      <Button classes="btn btn-info" onClick={this.showModal} label="Click me for a modal" />
                  </div>);
      }
   });

    var TodosContainerView = React.createClass({
       render: function(){
           return <CommentBox headline="The main Comments box" url="/todo" />;
       }

    });

    return TodosContainerView;
});
