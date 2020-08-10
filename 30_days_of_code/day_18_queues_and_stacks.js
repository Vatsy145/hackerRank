`use strict`

function Solution() {
    this.stack = [];
    this.queue = [];

    this.pushCharacter = char => {
        this.stack.push(char)
    };
    this.enqueueCharacter = char => {
        this.queue.unshift(char)
    };
    this.popCharacter = () => {
        return this.stack.pop()
    };
    this.dequeueCharacter = () => {
        return this.queue.pop()
    };
}
// Solution.prototype.pushCharacter = function(char) {
//   this.stack.push(char)
// }
// Solution.prototype.enqueueCharacter = function(char){
//   this.stack.push(char)
// }
function main() {
    const obj = new Solution()
    let s = 'racecar'
    var len = s.length;
    for (var i = 0; i < len; i++) {
        obj.pushCharacter(s.charAt(i));
        obj.enqueueCharacter(s.charAt(i));
    }
    console.log(obj.stack)
    console.log(obj.queue)
}
main()