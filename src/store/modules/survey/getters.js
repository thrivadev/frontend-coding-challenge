const addPadding = (number) => {
  return number > 9 ? number : `0${number}`
}

const isValidDate = (date) => {
  return date instanceof Date && !isNaN(date)
}

export default {
  getName: (state) => state.name,
  getGoals: (state) => {
    return Object.entries(state.goals).map(([key, value]) => value.name)
  },
  getDiet: (state) => {
    return Object.entries(state.diet).map(([key, value]) => value.name)[0] || ''
  },
  getDob: (state) => state.dob,
  getFormattedGoals: (state, getters) => {
    return getters.getGoals.join(', ')
  },
  getFormattedDob: (state, getters) => {
    const date = new Date(getters.getDob)
    return isValidDate(date) ? `${addPadding(date.getDate())}/${addPadding(date.getMonth() + 1)}/${date.getFullYear()}` : ''
  }
}
