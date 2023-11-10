import { createApp } from 'vue';

import App from './App.vue';
import FormResult from './components/FormResults';
import InputForm from './components/InputForm'

const app = createApp(App);
app.component('form-result', FormResult);
app.component('input-form', InputForm)

app.mount('#app')
