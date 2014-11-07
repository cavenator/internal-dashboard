require.config({
   paths: {
     "jquery"      : "https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min",
     "underscore"  : "lib/underscore",
     "backbone"    : "lib/backbone",
     "react"       : "lib/react-with-addons",
     "JSXTransformer": "lib/JSXTransformer",
     "text"        : "lib/plugins/text",
     "jsx"        : "lib/plugins/jsx"
   },
    jsx: {
        fileExtension: '.jsx'
    }
});

require(['jquery','underscore', 'routers/router','jsx'], function($, _, Router){
   new Router()
   Backbone.history.start({pushState:true});
});
