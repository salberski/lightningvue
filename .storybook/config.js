import { configure } from '@storybook/vue';

import Vue from 'vue';
//import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
import LvButton from '../src/components/LvButton';

// Install Vue plugins.
//Vue.use(Vuex);

// Register custom components.
Vue.component(LvButton.name, LvButton);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');
}

configure(loadStories, module);