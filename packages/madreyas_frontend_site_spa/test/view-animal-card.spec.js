import { mount } from '@vue/test-utils'
import ViewCowCard from '@/components/view-cow-card'

describe('ViewCowCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ViewCowCard)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
