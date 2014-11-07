define(['jquery','underscore','backbone','react', 'jsx!views/TodosContainerView'], function($,_,Backbone, React, TodosContainerView){

    return Backbone.Router.extend({
      initialize: function(){
          var htmlIntro = "<h1 style='text-align:center'>My Todos List</h1><div id='todos-pane'></div>";
          this.mainContent = $("#mainContent");
          this.mainContent.html(htmlIntro);
      },

      routes: {
          "":  "loadToDos"
      },

      loadToDos: function(){
         var todosEl = document.getElementById("todos-pane");
         React.render(React.createElement(TodosContainerView), todosEl);
      }
      
   });
});
