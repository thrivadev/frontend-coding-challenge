export default {
  saveName (state, name) {
    state.name = name
  },
  saveGoals (state, goals) {
    state.goals = { ...goals }
  },
  saveDiet (state, diet) {
    state.diet = { ...diet }
  }
}
