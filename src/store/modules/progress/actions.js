export default {
  updateProgress (context, step) {
    // pass in page name and calculate step?
    context.commit('UPDATE_PROGRESS', step)
  }
}
