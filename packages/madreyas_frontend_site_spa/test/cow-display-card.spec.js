import { mount } from '@vue/test-utils'
import CowDisplayCard from '@/components/cow-display-card'

describe('CowDisplayCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CowDisplayCard)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
