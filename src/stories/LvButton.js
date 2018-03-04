import { storiesOf } from '@storybook/vue';
import LvButton from '../components/LvButton/LvButton.vue';

storiesOf('LvButton', module)
  .add('story as a template', () => ({ 
    components: { LvButton },
    template: '<lv-button>My lv-button first</lv-button>'}))
  .add('story as a component', () => ({
    components: { LvButton },
    template: '<lv-button>My lv-button</lv-button>'
  }));