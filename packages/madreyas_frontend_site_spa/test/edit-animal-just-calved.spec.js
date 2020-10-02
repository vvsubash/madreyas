import { mount } from '@vue/test-utils'
import EditAnimalJustCalved from '@/components/edit-animal-just-calved'

describe('EditAnimalJustCalved', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(EditAnimalJustCalved)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
