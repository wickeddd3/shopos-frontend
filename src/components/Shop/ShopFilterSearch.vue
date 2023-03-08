<template>
  <div class="d-flex justify-content-between align-center">
    <v-text-field
      class="mr-4"
      prepend-inner-icon="mdi-magnify"
      solo
      hide-details
      clearable
    ></v-text-field>

    <v-btn icon>
      <v-icon>mdi-format-list-bulleted-square</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'ShopFilterSearch',
};
</script>
