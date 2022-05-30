// This class will collect the todo items
// Imports
import TodoItem from "./todoItem";

// Class
class TodoCollection{

	// Variables
	private nextID:number = 1;

	// Constructor
	constructor(
		public userName:string,
		public todoItems:TodoItem[] = []
	){};

	// Methods
	addTodo(task:string):number{
		while (this.getTodoByID(this.nextID)){
			this.nextID++;
		}
		this.todoItems.push(new TodoItem(this.nextID, task));
		return this.nextID;
	};
	getTodoByID(id:number):TodoItem{
		return this.todoItems.find((item) => {
			return item.id === id;
		});
	};
	markComplete(id:number, complete:boolean){
		const todoItem = this.getTodoByID(id);
		if (todoItem){
			todoItem.complete = complete;
		}
	};

};

// Export
export default TodoCollection;