console.log("Linked list data structure");
var NewNode = /** @class */ (function () {
    function NewNode(data) {
        this.data = data;
        this.next = null;
    }
    return NewNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.size = 0;
        this.head = null;
    }
    Object.defineProperty(LinkedList.prototype, "Size", {
        get: function () {
            return this.size;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.addNewNode = function (element) {
        var newNode = new NewNode(element);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    };
    LinkedList.prototype.printLinkedList = function () {
        var result = "";
        while (this.head) {
            result = this.head.data + " -> " + result;
            this.head = this.head.next;
        }
        console.log(result);
        console.log(this.size);
    };
    return LinkedList;
}());
var list = new LinkedList();
list.addNewNode(4);
list.addNewNode(5);
list.printLinkedList();
