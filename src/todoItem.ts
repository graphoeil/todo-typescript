// Class
class TodoItem{

	// Constructor
	constructor(public id:number, public task:string, public complete:boolean = false){
		// No statement required
	};

	// Methods
	// By default TS assumes that all methods are public unless another access level is used.
	printDetails(): void{
		console.log(`${ this.id }\t${ this.task } ${ this.complete ? '\t(complete)' : '' }`);
		
	};

};

// Export
export default TodoItem;