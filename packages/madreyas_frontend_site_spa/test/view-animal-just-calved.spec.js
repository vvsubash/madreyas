import { mount } from '@vue/test-utils'
import ViewAnimalJustCalved from '@/components/view-animal-just-calved'

describe('ViewAnimalJustCalved', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ViewAnimalJustCalved)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
