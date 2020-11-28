export const getSelectedItems = (item) => {
  return Object.fromEntries(
    Object.entries(item).filter(([key, value]) => value.selected === true)
  )
}
