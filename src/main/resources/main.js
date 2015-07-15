require.config({
   paths: {
     "jquery"      : "https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min",
     "bootstrap"   : "lib/bootstrap/js/bootstrap",
     "underscore"  : "lib/underscore",
     "react"       : "lib/react/react",
     "JSXTransformer": "lib/react/JSXTransformer",
     "text"        : "lib/plugins/text",
     "jsx"        : "lib/plugins/jsx"
   },
    jsx: {
        fileExtension: '.jsx'
    }
});

require(['jquery','underscore', 'react','jsx!components/SampleDiv', 'jsx'], function($, _, React, Div){

    React.render(React.createElement(Div),document.getElementById("mainContent"));
});
