import getters from '@/store/modules/survey/getters'

const fakeGetters = {
  getGoals: ['Energy', 'Sleep'],
  getDob: '2020-09-23T17:05:04.606Z'
}

describe('Getters', () => {
  const state = {
    name: 'Naomi',
    goals: {
      improveEnergy: { name: 'Energy', value: 'improveEnergy', selected: true },
      improveSleep: { name: 'Sleep', value: 'improveSleep', selected: true }
    },
    diet: { 'no': { 'name': 'No', 'value': 'no', 'selected': true } },
    dob: '2020-09-23T17:05:04.606Z'
  }
  test('getName, should return name', () => {
    expect(getters.getName(state)).toBe('Naomi')
  })
  test('getGoals, should return goals', () => {
    expect(getters.getGoals(state)).toEqual(['Energy', 'Sleep'])
  })
  test('getDiet, should return diet', () => {
    expect(getters.getDiet(state)).toBe('No')
  })
  test('getDob, should return dob', () => {
    expect(getters.getDob(state)).toBe('2020-09-23T17:05:04.606Z')
  })
  test('getFormattedGoals, should return goals as a string with a comma space between them', () => {
    expect(getters.getFormattedGoals(state, fakeGetters)).toBe('Energy, Sleep')
  })
  test('getFormattedDob, should return the date in a human readable format DD/MM/YYYY', () => {
    expect(getters.getFormattedDob(state, fakeGetters)).toBe(`23/09/2020`)
  })
})
