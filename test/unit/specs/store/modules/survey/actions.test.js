import actions from '@/store/modules/survey/actions'
import axios from 'axios'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

jest.mock('axios')

const API_URL = 'http://localhost:3000/users'

const buildRequestObject = (name, goals, diet, dob) => {
  return {
    user: {
      name,
      goals,
      diet,
      dob
    }
  }
}

const localVue = createLocalVue()
localVue.use(Vuex)
const storeOptions = {
  getters: {
    getName: jest.fn(() => 'Naomi'),
    getGoals: jest.fn(() => ['weight']),
    getDiet: jest.fn(() => 'no'),
    getDob: jest.fn(() => '2020-09-23T17:05:04.606Z')
  },
  actions: {
    fetchListData: jest.fn(() => Promise.resolve())
  }
}
const store = new Vuex.Store(storeOptions)

describe('actions', () => {
  describe('sendToApi', () => {
    test('Should post the formatted values to /users having got them from state, with the correct headers set', async () => {
      const request = buildRequestObject('Naomi', ['weight'], 'no', '2020-09-23T17:05:04.606Z')
      await actions.sendToApi(store)
      expect(axios.post).toHaveBeenCalledWith(API_URL, request, { headers: { 'Content-Type': 'application/json' } })
    })
  })
})
