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
    <v-form
      ref="form"
      @submit.prevent="$emit('submit')"
    >
      <v-card>
        <slot
          v-if="$scopedSlots.header"
          name="header"
        ></slot>
        <div
          v-else
          class="d-flex justify-space-between align-center pa-4"
        >
          <span
            class="subtitle-1 font-weight-medium text-uppercase"
            v-text="title"
          ></span>
          <v-btn
            icon
            @click="$emit('cancel')"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
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
        <v-card-actions
          v-if="hasActionButtons"
          class="pa-5"
        >
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
    </v-form>
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
    hasActionButtons: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
