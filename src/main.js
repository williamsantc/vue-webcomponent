import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import InputComponent from "./components/InputComponent";

const customInput = wrap(Vue, InputComponent);

customElements.define('custom-input', customInput);
