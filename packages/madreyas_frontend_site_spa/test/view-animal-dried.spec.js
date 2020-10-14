import { mount } from '@vue/test-utils'
import ViewAnimalDried from '@/components/view-animal-dried'

describe('ViewAnimalDried', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ViewAnimalDried)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
