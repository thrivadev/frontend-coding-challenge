export default {
  getCurrentStep: (state) => {
    return state.totalSteps.indexOf(state.currentStep)
  },
  getAllSteps: (state) => state.totalSteps
}
