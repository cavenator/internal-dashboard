define(["jquery", "react"], function($, React){
   var Button = React.createClass({
      render: function(){
          return <button className={this.props.style}>{this.props.label}</button>;
      }
   });

   var ButtonGroup = React.createClass({
       render: function(){
           return <div><Button style="btn btn-primary" label="Edit" /><Button style="btn btn-danger" label="Remove"/></div>;
       }
   });

   return ButtonGroup;
});