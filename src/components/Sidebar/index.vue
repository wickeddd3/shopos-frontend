<template>
  <v-navigation-drawer
    :value="show"
    :mini-variant.sync="mini"
    :permanent="isDesktop && show"
    :stateless="isMobile"
    app
  >
    <v-list-item class="px-2">
      <v-list-item-avatar tile>
        <img src="./../../assets/logo.png">
      </v-list-item-avatar>
      <v-list-item-title>s h o p o s</v-list-item-title>
      <v-btn icon @click.stop="toggleMini()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-list dense>
      <template v-for="(item, index) in menu">
        <v-divider
          v-if="item.type === 'divider'"
          :key="`${item.type}-${index}`"
          :inset="item.inset"
          class="my-2 mx-4"
        ></v-divider>
        <v-subheader
          v-else-if="item.type === 'subheader' && !mini"
          :key="`${item.type}-${index}`"
          :inset="item.inset"
          class="px-4 text-uppercase"
          v-text="item.title"
        ></v-subheader>
        <v-list-item
          v-else-if="item.type === 'list-item'"
          :key="`${item.type}-${index}`"
          :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group
          v-if="item.type === 'list-item-group'"
          :key="`${item.type}-${index}`"
          :prepend-icon="item.icon"
        >
          <template v-slot:activator>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </template>
          <v-list dense>
            <v-list-item
              v-for="item in item.children"
              :key="item.title"
              :to="item.route"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Breakpoints from '@/mixins/Breakpoints';
import menu from './index';

export default {
  name: 'Sidebar',
  data () {
    return {
      menu,
    };
  },
  mixins: [ Breakpoints ],
  computed: {
    ...mapGetters({
      show: 'sidebar/show',
    }),
    mini: {
      ...mapGetters({ get: 'sidebar/mini' }),
      ...mapActions({ set: 'sidebar/mini/toggle' }),
    },
  },
  methods: {
    ...mapActions({
      toggleMini: 'sidebar/mini/toggle',
    }),
  },
};
</script>
