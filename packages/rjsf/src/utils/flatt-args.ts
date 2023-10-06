import set from "lodash.set"
import reduce from "lodash.reduce"

export const unflatArgs = (obj: object): object => {
  const p = reduce(obj, (acc, v, k) => {
    set(acc, k, v)

    return acc
  }, {})

  if ("color" in p && typeof p.color === "object" && p.color && "v" in p.color) {
    if (!("l" in p.color) || !p.color.l) p.color = p.color.v
  }
  if ("bg" in p && typeof p.bg === "object" && p.bg && "v" in p.bg) {
    if (!("l" in p.bg) || !p.bg.l) p.bg = p.bg.v
  }

  return p
}