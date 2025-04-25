const OBJECT_START = "{"
const OBJECT_END = "}"
const ARRAY_START = "["
const ARRAY_END = "]"
const STRING_DELIMETER = '"'
const STRING_ESCAPE = "\\"
const LINE_BREAK = "\n"
const LINE_DELIMETER = ","

type StringNode = {
  type: "string"
  value: string
}

type NumberNode = {
  type: "number"
  value: number
}

type BooleanNode = {
  type: "boolean"
  value: boolean
}

type ObjectNode = {
  type: "object"
  properties: Record<string, Node>
}

type ArrayNode = {
  type: "array"
  items: Node[]
}

type Node = {
  type: "object" | "array" | "string" | "number" | "boolean" | "null"
}

export const object = {
  foo: "bar",
  baz: {
    quux: 5,
  },
}

export const ast = {
  type: "object",
  properties: {
    foo: {
      type: "string",
      value: "bar",
    },
    baz: {
      type: "object",
      properties: {
        quux: {
          type: "number",
          value: 5,
        },
      },
    },
  },
}

const serialize = (ast: any) => {}

export const parse = (s: string) => {
  let ast

  for (const char of s) {
    console.log(char)
  }

  return {}
}
