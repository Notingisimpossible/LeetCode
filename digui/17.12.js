//1. 中序遍历
var convertBiNode = function(root) {
  let preNode = new TreeNode(0)
  let result = preNode
  const getLink = (root) => {
      if(!root) {
          return null
      }
      getLink(root.left)
      preNode.right = root
      preNode = root
      getLink(root.right)
      root.left = null
      return preNode
  }
  getLink(root)
  return result.right
};

// 反中序遍历（右-中-左）
var convertBiNode = function(root) {
  let result = null
  const getLink = (root) => {
      if(!root) {
          return null
      }
      getLink(root.right)
      root.right = result
      result = root
      getLink(root.left)
      root.left = null
      return result
  }
  return getLink(root)
};