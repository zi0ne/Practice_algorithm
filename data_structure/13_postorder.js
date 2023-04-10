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

const postOrderTraversal = (root) => {
  // 배열로 리턴
  // value가 자식을 갖고 있는 지 확인하고 갖고 있다면 왼쪽, 오른쪽 확인 후 배열에 저장
  // 배열 리턴
  let arr = [];

  const postTraverse = (el) =>{
    if(el === null) return;

    postTraverse(el.left);
    postTraverse(el.right);

    arr.push(el.val);
  }

  postTraverse(root);

  return arr;

}
