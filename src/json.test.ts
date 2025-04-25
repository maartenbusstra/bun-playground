import { describe, it, expect } from "bun:test"
import { parse } from "./json"

const object1 = {
  foo: "bar",
}

const object2 = {
  foo: "bar",
  baz: {
    quux: 5,
  },
}

const json = JSON.stringify(object1)

describe("parse", () => {
  it("should sum all counts", () => {
    expect(parse(json)).toStrictEqual(object1)
  })
})
