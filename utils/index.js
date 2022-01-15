const fs = require('fs')
const path = require('path')

/**
 * 递归查询当前目录的结构
 * @author mathink12 2022-01-15T15:57:21+0800
 * @param  {String}
 * @param  {String}
 * @return {Array}
 */
function getDirTree (dir = './', parentId = '', tree = []) {
  const files = fs.readdirSync(dir)
  files.forEach((v, i) => {
    const stat = fs.lstatSync(path.resolve(dir, v))

    const treeNode = {
      name: v,
      id: `${parentId}/${v}`,
      parentId,
      isLeaf: true,
      children: null
    }

    if (stat.isDirectory()) {
      treeNode.isLeaf = false
      treeNode.children = getDirTree(
        path.resolve(dir, v),
        `${parentId}/${v}`
      )
    }

    tree.push(treeNode)
  })

  return tree
}

module.exports = getDirTree
