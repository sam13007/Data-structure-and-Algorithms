console.log("Linked list data structure");

class NewNode {
	public data: number;
	public next;
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}
class LinkedList {
	private size: number;
	public head;
	constructor() {
		this.size = 0;
		this.head = null;
	}

	get Size(): number {
		return this.size;
	}

	addNewNode(element) {
		let newNode = new NewNode(element);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.size++;
	}

	printLinkedList() {
		let result = "";
		while (this.head) {
			result = this.head.data + " -> " + result;
			this.head = this.head.next;
		}
		console.log(result);

		console.log(this.size);
	}
}

const list = new LinkedList();

list.addNewNode(4);
list.addNewNode(5);

list.printLinkedList();
