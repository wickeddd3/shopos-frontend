<template>
  <v-snackbar
    :value="show"
    top
  >
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn
        color="red"
        text
        small
        v-bind="attrs"
        @click="$emit('close')"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'AppSnackbar',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
