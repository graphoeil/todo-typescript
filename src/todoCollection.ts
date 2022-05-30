// This class will collect the todo items
// Imports
import TodoItem from "./todoItem";

// Class
class TodoCollection{

	// Variables
	private nextID:number = 1;
	// A Map allows storing key-value pairs
	// Here key => id (number) : value (TodoItem)
	private itemMap = new Map<number, TodoItem>(); // https://howtodoinjava.com/typescript/maps/

	// Constructor
	constructor(
		public userName:string,
		public todoItems:TodoItem[] = []
	){
		todoItems.forEach((item) => {
			// As Map is a collection, meaning it has a size, an order
			// and we can iterate over its keys and values.
			return this.itemMap.set(item.id, item);
		});
	};

	// Methods
	addTodo(task:string):number{
		// Get the last nextID and generate another ++
		while (this.getTodoByID(this.nextID)){
			this.nextID++;
		}
		// map.set(key, value) – adds a new entry in the Map.
		this.itemMap.set(this.nextID, new TodoItem(this.nextID, task));
		return this.nextID;
	};
	getTodoByID(id:number):TodoItem{
		// map.get(key) – retrieves the value for a given key from the Map.
		return this.itemMap.get(id);
	};
	getTodoItems(includeComplete:boolean):TodoItem[]{
		return [ ...this.itemMap.values() ].filter((item) => {
			// return true (all) or !item.complete ,-)
			return includeComplete || !item.complete;
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