import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import HelloWorld from '../../src/components/HelloWorld.vue'

describe('helloWorld', () => {
  it('renders correctly', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.html()).contain('Hello, world!')
  })
})
