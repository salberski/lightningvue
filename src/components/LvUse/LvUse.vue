<template>
    <svg class="slds-button__icon_stateful slds-button__icon_left" aria-hidden="true">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="svgicon" />
    </svg>
</template>

<script>
import { LvComponent } from '../../core';
import utilitySprite from '@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg';
import actionSprite from '@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg';
import customSprite from '@salesforce-ux/design-system/assets/icons/custom-sprite/svg/symbols.svg';
import doctypeSprite from '@salesforce-ux/design-system/assets/icons/doctype-sprite/svg/symbols.svg';
import standardSprite from '@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg';

export default {
  name: 'lv-use',
  extends: LvComponent,
  props: {
      type: {
          type: String,
          default: 'utility'
      },
      symbol: {
          type: String,
          required: true
      }
  },
  data: function() {
      return {
          svgicon: `${utilitySprite}#${this.symbol}`
      }
  },
  methods: {
      
  }
}
</script>