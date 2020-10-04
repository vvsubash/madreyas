
import { mount } from '@vue/test-utils'
import ViewAnimalCardList from '@/components/view-animal-card-list'

describe('ViewAnimalCardList', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ViewAnimalCardList)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})