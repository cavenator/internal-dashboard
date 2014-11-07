define(["jquery", "react","jsx!views/ButtonGroup"], function($, React, ButtonGroup){
   var Comment = React.createClass({
      render: function(){
           return <div><h3>{this.props.title}</h3><span>{this.props.description}</span>{this.props.children}</div>;
      }
   });

   var CommentList = React.createClass({
      render: function(){
         var comments = this.props.data.map(function(comment){
             return  <Comment title={comment.title} description={comment.description}><ButtonGroup /></Comment>;
         });

        return <div>{comments}</div>;
      }
   });
   return CommentList;
});
