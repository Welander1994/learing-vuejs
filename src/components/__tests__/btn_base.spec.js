import { expect, test } from 'vitest'
import { mount } from "@vue/test-utils";

import btn_base from 'src/components/btn_base.vue'


test("mount component", async () => {
    expect(btn_base).toBeTruthy();

    const wrapper = mount(btn_base, {
        props: {
            buttonText: 'online',
            likes: '21'
        }

    });

    const byId = wrapper.find('button')
    expect(byId.classes('online')).toBe(true);

})