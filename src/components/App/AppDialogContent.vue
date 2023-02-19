<template>
  <validation-observer
    v-slot="{
      handleSubmit,
      pristine,
      invalid,
    }"
    ref="observer"
    slim
  >
    <v-card>
      <v-card-title>
        <slot
          v-if="$scopedSlots.header"
          name="header"
        ></slot>
        <span
          v-else
          class="subtitle-1 font-weight-medium text-uppercase"
          v-text="title"
        ></span>
      </v-card-title>
      <v-card-text class="px-2 py-0">
        <slot
          :default="{
            handleSubmit,
            pristine,
            invalid,
          }"
        ></slot>
      </v-card-text>
      <v-divider class="mx-5"></v-divider>
      <v-card-actions class="pa-5">
        <slot
          v-if="$scopedSlots.footer"
          name="footer"
          v-bind="{
            handleSubmit,
            pristine,
            invalid,
          }"
        ></slot>
        <template v-else>
          <v-spacer></v-spacer>
          <v-btn
            depressed
            class="px-8 mr-4"
            @click="$emit('cancel')"
          >
            Cancel
          </v-btn>
          <v-btn
            depressed
            class="px-11"
            type="submit"
          >
            Save
          </v-btn>
        </template>
      </v-card-actions>
    </v-card>
  </validation-observer>
</template>

<script>
export default {
  name: 'AppDialogContent',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
