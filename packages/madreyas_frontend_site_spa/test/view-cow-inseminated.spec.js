import { mount } from '@vue/test-utils'
import ViewCowInseminated from '@/components/view-cow-inseminated'

describe('ViewCowInseminated', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ViewCowInseminated)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
