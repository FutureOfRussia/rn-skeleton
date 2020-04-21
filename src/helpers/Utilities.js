const aroundHitSlop = (offset) => ({
  top: offset.top || offset,
  left: offset.left || offset,
  bottom: offset.bottom || offset,
  right: offset.right || offset,
})

export {
  aroundHitSlop,
}
