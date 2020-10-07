import { mount } from '@vue/test-utils'
import ViewAnimalInseminated from '@/components/view-animal-inseminated'

describe('ViewAnimalInseminated', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ViewAnimalInseminated)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
