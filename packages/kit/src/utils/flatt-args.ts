import _ from "_"

export const unflatArgs = (obj: object): object => {
  const p = _.reduce(obj, (acc, v, k) => {
    _.set(acc, k, v)

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