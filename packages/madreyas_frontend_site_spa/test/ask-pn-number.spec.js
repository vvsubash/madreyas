
import { mount } from '@vue/test-utils'
import AskPnNumber from '@/components/ask-pn-number'

describe('AskPnNumber', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AskPnNumber)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})