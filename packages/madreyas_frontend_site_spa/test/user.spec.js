
import { mount } from '@vue/test-utils'
import User from '@/pages/user'

describe('User', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(User)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})