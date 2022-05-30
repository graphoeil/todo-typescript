// Class
class TodoItem{

	// Variables
	public id:number;
	public task:string;
	public complete:boolean = false;

	// Constructor
	public constructor(id:number, task:string, complete:boolean = false){
		this.id = id;
		this.task = task;
		this.complete = complete;
	};

	// Methods
	public printDetails(): void{
		console.log(`${ this.id }\t${ this.task } ${ this.complete ? '\t(complete)' : '' }`);
		
	};

};

// Export
export default TodoItem;