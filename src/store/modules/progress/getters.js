export default {
  getCurrentStep: (state) => {
    return state.totalSteps.indexOf(state.currentStep)
  },
  getAllSteps: (state) => {
    return state.totalSteps
  }
}
