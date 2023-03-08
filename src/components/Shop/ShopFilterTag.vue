<template>
  <div class="my-6">
    <v-slide-group
      multiple
      show-arrows
    >
      <v-slide-item
        v-for="item in tagItems"
        :key="item.id"
        v-slot="{ active, toggle }"
      >
        <v-btn
          class="mx-2"
          :input-value="active"
          active-class="primary white--text"
          depressed
          label
          small
          @click="toggle"
        >
          <v-icon left>mdi-label</v-icon>
          {{ item.name }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ShopFilterTag',
  computed: {
    ...mapGetters({
      tagReady: 'tags/list/ready',
      tagItems: 'tags/list/value/items',
    }),
  },
};
</script>
