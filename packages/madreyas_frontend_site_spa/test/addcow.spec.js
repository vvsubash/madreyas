import { mount } from '@vue/test-utils'
import AddAnimal from '@/pages/addanimal'

describe('AddAnimal', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AddAnimal)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
