<template>
  <v-dialog
    :value="show"
    :max-width="maxWidth"
    persistent
  >
    <component
      :is="component"
      @cancel="$emit('cancel')"
      @close="$emit('close')"
    ></component>
  </v-dialog>
</template>

<script>
export default {
  name: 'AppDialog',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    component: {
      type: Object,
      default: () => undefined,
    },
    maxWidth: {
      type: [ String, Number ],
      default: '600px',
    },
  },
};
</script>
