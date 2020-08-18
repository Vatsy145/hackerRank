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
    
    this.levelOrder = function(root) {
  
        // Add your code here
        // To print values separated by spaces use process.stdout.write(someValue + ' ')
        const levels = [];
        let depth = 0, order = '';
        const _BFS = (node, depth) => {
      
          if (!node) return;
          if (levels.length === depth) levels.push([]);
          levels[depth].push(node.data);
          
          _BFS(node.left, depth + 1);
          _BFS(node.right, depth + 1);
        }
        _BFS(root, depth);
        
        levels.forEach(val => {
          for(let i=0; i < val.length; i++) {
            order += `${val[i]} `;
            // process.stdout.write(val[i] + ' ')
          }
        })
        console.log(order)
    };
  };
  
  function main() {
    var tree = new BinarySearchTree();
    var root = null;
    
    // var values = [3, 5, 2, 1, 4, 6, 7]; 
    var values = [3, 5, 4, 7, 2, 1];
    
    for (let i = 0; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    
    tree.levelOrder(root);
  };
  
  main()