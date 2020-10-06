import { mount } from '@vue/test-utils'
import EditAnimalInseminated from '@/components/edit-animal-inseminated'

describe('EditAnimalInseminated', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(EditAnimalInseminated)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
