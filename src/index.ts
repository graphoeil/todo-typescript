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

// Displaying all items
collection.getTodoItems(true).forEach((item) => {
	return item.printDetails();
});