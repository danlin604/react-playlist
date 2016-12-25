var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var TodoComponent = React.createClass({
    getInitialState: function() {
       return {
           todos: ['washup', 'eat some cheese', 'nap', 'buy flowers']
       } 
    }, // getInitialState
    render: function() {
        var todos = this.state.todos;
        todos = todos.map(function(item, index) {
            return (
                <li>{item}</li>
            );
        });
        return(
            <div id="todo-list">
                <p>The busiest people have the most leisure...</p>
                <p>{this.state.age}</p>
                <ul>{todos}</ul>
            </div>
        );
    } // render
});

//put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
