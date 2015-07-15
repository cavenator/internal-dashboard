define(["react"],function(React){
    var SampleDiv = React.createClass({
        render: function() {
            return (
                <div className="commentBox">
                    Hello, you! I am located in the components folder under resources :-)
                </div>
            );
        }
    });
    return SampleDiv;
});