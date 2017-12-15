import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';

import MyButton from './Button.vue';

storiesOf('MyButton', module)
  .add('story as a template', () => '<my-button :rounded="false">story as a function template</my-button>')
  .add('story as a component', () => ({
    components: { MyButton },
    template: '<my-button :rounded="true">rounded</my-button>'
  }))
  .add('Action only', () => ({
    template: '<my-button :handle-click="log">Click me to log the action</my-button>',
    methods: {
      log: action('log1'),
    },
  }))
  .add('Action and method', () => ({
    template: '<my-button :handle-click="log">Click me to log the action</my-button>',
    methods: {
      log: e => {
        e.preventDefault();
        action('log2')(e.target);
      },
    },
  }));
