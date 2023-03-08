<template>
  <div class="my-6">
    <v-slide-group
      multiple
      show-arrows
    >
      <v-slide-item
        v-for="item in categoryItems"
        :key="item.id"
        v-slot="{ active, toggle }"
      >
        <v-btn
          class="mx-2"
          :input-value="active"
          active-class="primary white--text"
          depressed
          rounded
          small
          @click="toggle"
        >
          {{ item.name }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ShopFilterCategory',
  computed: {
    ...mapGetters({
      categoryReady: 'categories/list/ready',
      categoryItems: 'categories/list/value/items',
    }),
  },
};
</script>
