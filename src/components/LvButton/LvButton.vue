<template>
    <button 
        class="slds-button slds-button_neutral"
    >
        <span class="slds-text-not-selected">
            <svg class="slds-button__icon_stateful slds-button__icon_left" aria-hidden="true">
                <lv-use symbol="add" />
            </svg>
            Follow
        </span>
        <slot>Button</slot>
    </button>
</template>

<script>
import { LvComponent } from '../../core';
import LvUse from '../LvUse';

export default {
  name: 'lv-button',
  extends: LvComponent,
  components: {
      LvUse
  },
  props: {
  },
  data: function() {
      return {
      }
  }
}
</script>

