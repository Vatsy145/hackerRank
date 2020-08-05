`use strict`

function parseAnInteger(S) {
    try {
        let ans = parseInt(S) || ans.toString();
        console.log(parseInt(S));
    } catch (e) {
        console.log("Bad String");
    }

    // try {
    //   let N = Number(S);
    //   N == N || ((e) => { throw e; })("Bad String");
    //   console.log(N);
    // } catch(e) {
    //     console.log(e);
    // }
}
parseAnInteger(3)
parseAnInteger(0) // ????
parseAnInteger(`za`)