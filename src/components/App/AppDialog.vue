<template>
  <v-dialog
    :value="show"
    :max-width="maxWidth"
    :transition="transition"
    :fullscreen="fullscreen"
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
    transition: {
      type: String,
      default: 'scale-transition',
    },
    fullscreen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
