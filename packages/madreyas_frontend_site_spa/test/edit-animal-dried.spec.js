import { mount } from '@vue/test-utils'
import EditAnimalDried from '@/components/edit-animal-dried'

describe('EditAnimalDried', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(EditAnimalDried)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
