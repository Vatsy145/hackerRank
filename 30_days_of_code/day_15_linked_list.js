`use strict`

function Node(data) {
    this.data = data;
    this.next = null;
}

function Solution() {

    this.insert = function(head, data) {
        let newNode = new Node(data)
        if (!head) {
            head = newNode
            return head
        }
        let current = head
        while (current.next) {
            current = current.next
        }
        current.next = newNode
        return head
    };

    this.display = function(head) {
        var start = head;
        while (start) {
            console.log(start.data + " ");
            start = start.next;
        }
    };
}

function main() {
    let arr = [2, 3, 4, 1]
    let head = null;
    let mylist = new Solution();
    for (let i = 0; i < arr.length; i++) {
        var data = arr[i];
        head = mylist.insert(head, data);
    }
    mylist.display(head);
}
main()