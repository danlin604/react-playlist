var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');

// Module requires
var TodoItem = require('./todoItem');

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
                <TodoItem item={item} key={index} onDelete={this.onDelete}/>
            );
        }.bind(this));
        return(
            <div id="todo-list">
                <p>The busiest people have the most leisure...</p>
                <p>{this.state.age}</p>
                <ul>{todos}</ul>
            </div>
        );
    }, // render

    // Customer functions
    onDelete: function(item) {
        var updatedTodos = this.state.todos.filter(function(val, index) {
            return item !== val;
        });
        this.setState({
            todos: updatedTodos
        });
    }    
});

//put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
