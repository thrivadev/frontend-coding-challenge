export default {
  SAVE_NAME (state, name) {
    state.name = name
  },
  SAVE_GOALS (state, goals) {
    state.goals = { ...goals }
  },
  SAVE_DIET (state, diet) {
    state.diet = { ...diet }
  },
  SAVE_DOB (state, dob) {
    state.dob = dob
  }
}
