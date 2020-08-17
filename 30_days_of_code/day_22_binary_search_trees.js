`use strict`

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
};

function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            return this.root;
        }
        if (data <= root.data) {
            if (root.left) this.insert(root.left, data);
            else root.left = new Node(data);
        } else {
            if (root.right) this.insert(root.right, data);
            else root.right = new Node(data);
        }
        return this.root;
    };
    this.getHeight = function(root) {
        // Add your code here
        // let _walk = node => {
        //   if(!node) return -1;
        //   let leftHeight = _walk(node.left);
        //   let rightHeight = _walk(node.right);
        //   return 1 + Math.max(leftHeight, rightHeight);
        // };
        // return _walk(root);

        let leftHeight = 0,
            rightHeight = 0;
        if (root.left != null) leftHeight = this.getHeight(root.left) + 1;
        if (root.right != null) rightHeight = this.getHeight(root.right) + 1;
        return Math.max(leftHeight, rightHeight);
    };
};

function main() {
    var tree = new BinarySearchTree();
    var root = null;
    var values = [3, 5, 2, 1, 4, 6, 7];
    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    console.log(tree.getHeight(root));
}

main()