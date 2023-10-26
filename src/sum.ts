export type CountNode = {
  count: number
  children?: CountNode[]
}

export function sumNodes(node: CountNode) {
  if (!node.children) return node.count

  return node.count + node.children.reduce((total, n) => total + sumNodes(n), 0)
}

export function sumUntilN(n: number) {
  if (n <= 0) return 0

  return n + sumUntilN(n - 1)
}
