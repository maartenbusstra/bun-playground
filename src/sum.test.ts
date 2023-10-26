import { describe, it, expect } from "bun:test"
import { CountNode, sumNodes, sumUntilN } from "./sum"

const root: CountNode = {
  count: 2,
  children: [
    {
      count: 3,
      children: [
        {
          count: 5,
        },
        {
          count: 6,
        },
      ],
    },
    {
      count: 4,
    },
  ],
}

describe("sumNodes", () => {
  it("should sum all counts", () => {
    expect(sumNodes(root)).toBe(20)
  })
})

describe("sumUntilN", () => {
  it("should sum until n", () => {
    expect(sumUntilN(5)).toBe(15)
  })
})
