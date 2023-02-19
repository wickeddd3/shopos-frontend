<template>
  <app-dialog-content
    title="Add Store"
    @cancel="$emit('cancel')"
    @close="$emit('close')"
  >
    <template v-slot:default>
      <v-container>
        <v-text-field
          value=""
          label="Store Code"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          value=""
          label="Store Name"
          outlined
          dense
        ></v-text-field>
      </v-container>
    </template>
  </app-dialog-content>
</template>

<script>
export default {
  name: 'StoreForm',
};
</script>
