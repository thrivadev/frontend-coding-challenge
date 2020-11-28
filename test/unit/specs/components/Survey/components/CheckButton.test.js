import { shallowMount } from '@vue/test-utils'
import CheckButton from '@/components/Survey/components/CheckButton'

describe('CheckButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(CheckButton, {
      propsData: {
        text: 'Lorem ipsum',
        value: 'dummy-value',
        selected: false
      }
    })
  })

  // Complete the following statements by implementing tests for the described behaviours

  it('should exist as a component', () => {
    expect(wrapper.find(CheckButton)).toBeTruthy()
  })

  it('should render the text value passed as prop correctly', () => {
    expect(wrapper.text()).toBe('Lorem ipsum')
  })

  it('should not attach the dynamic "check-button--selected" class when the selected prop is set to false', () => {
    expect(wrapper.classes('check-button--selected')).toBeFalsy()
  })

  it('should attach the dynamic "check-button--selected" class when the selected prop is set to true', () => {
    wrapper.setProps({ selected: true })
    expect(wrapper.classes('check-button--selected')).toBeTruthy()
  })

  it('should emit a click event when clicked and return the value and text', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toEqual({ 'click': [['dummy-value', 'Lorem ipsum']] })
  })

  // Write additional tests based on the new logic added to the CheckButton component as part of the challenge
})
