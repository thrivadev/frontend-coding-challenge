export default {
  getName: (state) => state.name,
  getGoals: (state) => {
    return Object.entries(state.goals).map(([key, value]) => value.name)
  },
  getDiet: (state) => {
    return Object.entries(state.diet).map(([key, value]) => value.name)[0] || ''
  },
  getDob: (state) => state.dob
}
