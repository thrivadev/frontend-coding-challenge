import axios from 'axios'
const API_URL = 'http://localhost:3000'

export default {
  async sendToApi (context) {
    const body = {
      user: {
        name: context.getters['getName'],
        goals: context.getters['getGoals'],
        diet: context.getters['getDiet'],
        dob: context.getters['getDob']
      }
    }
    const config = { headers: {
      'Content-Type': 'application/json'
    } }
    return axios.post(`${API_URL}/users`, body, config)
  },
  saveName (context, name) {
    context.commit('SAVE_NAME', name)
  },
  saveGoals (context, goals) {
    context.commit('SAVE_GOALS', goals)
  },
  saveDiet (context, diet) {
    context.commit('SAVE_DIET', diet)
  },
  saveDob (context, dob) {
    context.commit('SAVE_DOB', dob)
  }
}
