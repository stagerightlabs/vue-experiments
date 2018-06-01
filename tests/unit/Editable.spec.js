import { shallowMount } from '@vue/test-utils';
import Editable from '@/components/Editable.vue';

describe('Editable.vue', () => {
  it('is displayed inline', () => {
    const wrapper = shallowMount(Editable);
    const div = wrapper.findAll('div').at(0);
    expect(div.element.style.display).toBe('inline');
  });

  it('contains a content ref', () => {
    const wrapper = shallowMount(Editable);
    const refs = wrapper.findAll({ ref: 'content' });
    expect(refs.length).toBe(1);
  });

  it('renders the value prop', () => {
    const msg = 'content string';

    const wrapper = shallowMount(Editable, {
      propsData: { value: msg },
    });

    expect(wrapper.find({ ref: 'content' }).element.innerText).toBe(msg);
    expect(wrapper.vm.original).toBe(msg);
  });

  it('sets a tabindex of zero', () => {
    const wrapper = shallowMount(Editable);
    const content = wrapper.find({ ref: 'content' });
    expect(content.attributes().tabindex).toBe('0');
  });

  it('sets the input type', () => {
    const wrapper = shallowMount(Editable, {
      propsData: { type: 'email' },
    });
    const content = wrapper.find({ ref: 'content' });
    expect(content.attributes().type).toBe('email');
  });

  it('displays a placeholder', () => {
    const wrapper = shallowMount(Editable, {
      propsData: { placeholder: 'this is a placeholder...' },
    });
    const content = wrapper.find({ ref: 'content' });

    expect(content.attributes().placeholder).toBe('this is a placeholder...');
  });

  it('sets an aria-labeledby value', () => {
    const wrapper = shallowMount(Editable, {
      propsData: { ariaLabelledby: 'label-string' },
    });
    const content = wrapper.find({ ref: 'content' });
    expect(content.attributes()['aria-labelledby']).toBe('label-string');
  });

  it('sets an aria-describedby value', () => {
    const wrapper = shallowMount(Editable, {
      propsData: { ariaDescribedby: 'label-string' },
    });
    const content = wrapper.find({ ref: 'content' });
    expect(content.attributes()['aria-describedby']).toBe('label-string');
  });

  it('sets an autofocus value', () => {
    const wrapper = shallowMount(Editable, {
      propsData: { autofocus: true },
    });
    const content = wrapper.find({ ref: 'content' });
    expect(content.attributes().autofocus).toBe('autofocus');
  });

  it('sets contenteditable', () => {
    const wrapper = shallowMount(Editable);
    const content = wrapper.find({ ref: 'content' });
    expect(content.attributes().contenteditable).toBe('true');
  });

  it('sets classes on the input div', () => {
    const wrapper = shallowMount(Editable, {
      propsData: { inputClass: 'mx-2' },
    });
    const content = wrapper.find({ ref: 'content' });
    expect(content.classes()).toContain('mx-2');
  });

  it('it emits user input events', () => {
    const wrapper = shallowMount(Editable, {
      propsData: { value: 'content-string' },
    });
    const content = wrapper.find({ ref: 'content' });
    content.element.innerText = 'user-content';
    wrapper.vm.sync();

    expect(wrapper.emitted.length).toBe(1);
    expect(wrapper.emitted().input[0][0]).toBe('user-content');
  });

  it('it emits user input events', () => {
    const wrapper = shallowMount(Editable, {
      propsData: { value: 'content-string' },
    });
    const content = wrapper.find({ ref: 'content' });
    content.element.innerText = 'user-content';
    wrapper.vm.sync();

    expect(wrapper.emitted.length).toBe(1);
    expect(wrapper.emitted().input[0][0]).toBe('user-content');
  });
});
