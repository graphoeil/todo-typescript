// Imports
import TodoCollection from "./todoCollection";
import TodoItem from "./todoItem";

// Variables
let todos = [
	new TodoItem(1, 'Buy flowers'),
	new TodoItem(2, 'Get shoes'),
	new TodoItem(3, 'Collect tickets'),
	new TodoItem(4, 'Call Jambon', true)
];
let collection = new TodoCollection('Cahouet', todos);

// Show todo list
console.clear();
console.log(`${ collection.userName }'s Todo List`);

// Don't forget that addTodo methods return an id !
let newID = collection.addTodo('Go for run');
// getTodoByID return a todoItem object
let todoItem = collection.getTodoByID(newID);
// Accessing the printDetails methods of TodoItem object
todoItem.printDetails();

console.log(JSON.stringify(todoItem));