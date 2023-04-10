// Definition for a binary tree node.
// class TreeNode {
//   constructor(val = 0, left = null, right = null) {
//   this.val = val;
//   this.left = left;
//   this.right = right;
//   }
// }
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// levelorder === BFS

const levelOrderTraversal = (root) => {
  let result = [];
  let arr = [];
  if(root === null){
    return [];
  }
  arr.push(root);

  while(arr.length > 0){ // arr안의 노드가 모두 사라지기 전까지 
    const sub = [];
    const count = arr.length; // 밖에서 정해주고 들어가야 길이가 똑같음, 정해주지않고 For문 안에 들어가면 arr에 추가해주면서 길이가 바뀜

    for(let i = 0; i < count; i++){
      const node = arr.shift();

      sub.push(node.val);

      if(node.left) arr.push(node.left);
      if(node.right) arr.push(node.right);

    }
    result.push(sub);
  }  
  return result;
}
