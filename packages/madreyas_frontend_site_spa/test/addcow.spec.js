import { mount } from '@vue/test-utils'
import Addcow from '@/pages/addcow'

describe('Addcow', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Addcow)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
