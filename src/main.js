import InputComponent from './components/InputComponent';
import wrap from "@vue/web-component-wrapper";
import Vue from "vue";

const customInput = wrap(Vue, InputComponent);
customElements.define('custom-input', customInput);