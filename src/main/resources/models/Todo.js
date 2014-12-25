define(['backbone'], function(Backbone){
   return Backbone.Model.extend({
       defaults: {
          "title": null,
          "description": null
       },
       urlRoot: function(){
         return "/todo";
       },
			 validate: function(attrs){
				 var isBlank = function(value){
						return value === null || value === undefined || value === "";
					};
					if (isBlank(attrs.title) || isBlank(attrs.description)){
						return "title and description cannot be empty";
					}
			 }
   });
});
