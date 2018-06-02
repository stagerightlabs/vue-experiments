import { expect } from 'chai';
import sinon from 'sinon';
import { shallowMount } from '@vue/test-utils';
import Editable from '@/components/Editable.vue';

describe('Editable.vue', () => {
  it('is displayed inline', () => {
    const wrapper = shallowMount(Editable);
    const div = wrapper.findAll('div').at(0);
    expect(div.element.style.display).to.equal('inline');
    expect(wrapper.vm.hasValue).to.equal(false);
  });

  it('contains a content ref', () => {
    const wrapper = shallowMount(Editable);
    const refs = wrapper.findAll({ ref: 'content' });
    expect(refs.length).to.equal(1);
  });

  it('renders the value prop', () => {
    const msg = 'content string';

    const wrapper = shallowMount(Editable, {
      propsData: { value: msg },
    });

    expect(wrapper.vm.hasValue).to.equal(true);
    expect(wrapper.find({ ref: 'content' }).element.innerText).to.equal(msg);
    expect(wrapper.vm.original).to.equal(msg);
  });

  it('sets a tabindex of zero', () => {
    const wrapper = shallowMount(Editable);
    const content = wrapper.find({ ref: 'content' });
    expect(content.attributes().tabindex).to.equal('0');
  });

  it('sets the input type', () => {
    const wrapper = shallowMount(Editable, {
      propsData: { type: 'email' },
    });
    const content = wrapper.find({ ref: 'content' });
    expect(content.attributes().type).to.equal('email');
  });

  it('displays a placeholder', () => {
    const wrapper = shallowMount(Editable, {
      propsData: { placeholder: 'this is a placeholder...' },
    });
    const content = wrapper.find({ ref: 'content' });

    expect(content.attributes().placeholder).to.equal('this is a placeholder...');
  });

  it('sets an aria-labelledby value', () => {
    const wrapper = shallowMount(Editable, {
      propsData: { ariaLabelledby: 'label-string' },
    });
    const content = wrapper.find({ ref: 'content' });
    expect(content.attributes()['aria-labelledby']).to.equal('label-string');
  });

  it('sets an aria-describedby value', () => {
    const wrapper = shallowMount(Editable, {
      propsData: { ariaDescribedby: 'label-string' },
    });
    const content = wrapper.find({ ref: 'content' });
    expect(content.attributes()['aria-describedby']).to.equal('label-string');
  });

  it('sets an autofocus value', () => {
    const wrapper = shallowMount(Editable, {
      propsData: { autofocus: true },
    });
    const content = wrapper.find({ ref: 'content' });
    expect(content.attributes().autofocus).to.equal('autofocus');
  });

  it('sets contenteditable', () => {
    const wrapper = shallowMount(Editable);
    const content = wrapper.find({ ref: 'content' });
    expect(content.attributes().contenteditable).to.equal('true');
  });

  it('sets classes on the input div', () => {
    const wrapper = shallowMount(Editable, {
      propsData: { inputClass: 'mx-2' },
    });
    const content = wrapper.find({ ref: 'content' });
    expect(content.classes()).to.contain('mx-2');
  });

  it('emits user input events', () => {
    const wrapper = shallowMount(Editable, {
      propsData: { value: 'content-string' },
    });
    const content = wrapper.find({ ref: 'content' });
    content.element.innerText = 'user-content';
    wrapper.vm.sync();

    expect(wrapper.emitted().input.length).to.equal(1);
    expect(wrapper.emitted().input[0][0]).to.equal('user-content');
  });

  it('emits user input events', () => {
    const wrapper = shallowMount(Editable, {
      propsData: { value: 'content-string' },
    });
    const content = wrapper.find({ ref: 'content' });
    content.element.innerText = 'user-content';
    wrapper.vm.sync();

    expect(wrapper.emitted.length).to.equal(1);
    expect(wrapper.emitted().input[0][0]).to.equal('user-content');
  });

  it('receives focus', async () => {
    // document.execCommand is not available in jsdom
    document.execCommand = sinon.spy();

    // Mound the component
    const wrapper = shallowMount(Editable, {
      propsData: { value: 'content-string' },
    });

    // Find the content div
    const content = wrapper.find({ ref: 'content' });

    // Trigger the focus event
    await wrapper.vm.focus();

    // Assert
    const focusedElement = document.activeElement;
    expect(content.element).to.equal(focusedElement);
    expect(wrapper.vm.original).to.equal('content-string');
    expect(document.execCommand.calledWith('selectAll'));
  });

  it('emits an update event on blur if the value has changed', () => {
    // Mound the component
    const wrapper = shallowMount(Editable, {
      propsData: { value: 'content-string' },
    });

    // Find the content div
    const content = wrapper.find({ ref: 'content' });

    // Simulate user input
    content.element.innerText = 'user-content';

    // Trigger the blur event
    wrapper.vm.blur();

    // Assert
    expect(wrapper.emitted()).to.have.property('updated');
  });

  it('does not emit updated event on blur if the value has not changed', () => {
    // Mound the component
    const wrapper = shallowMount(Editable, {
      propsData: { value: 'content-string' },
    });

    // Find the content div
    // const content = wrapper.find({ ref: 'content' });

    // Trigger the blur event
    wrapper.vm.blur();

    // Assert
    expect(wrapper.emitted()).to.not.have.property('updated');
  });

  it('restores the original content when escape is pressed', () => {
    // Mound the component
    const wrapper = shallowMount(Editable, {
      propsData: { value: 'content-string' },
    });

    // Find the content div
    const content = wrapper.find({ ref: 'content' });

    // Simulate user input
    content.element.innerText = 'user-content';

    // Trigger the blur event
    wrapper.vm.escape();

    // Assert
    expect(wrapper.vm.value).to.equal('content-string');
  });
});
