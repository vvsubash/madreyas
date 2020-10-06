import { mount } from '@vue/test-utils'
import AnimalDisplayCard from '@/components/animal-display-card'

describe('AnimalDisplayCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AnimalDisplayCard)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
