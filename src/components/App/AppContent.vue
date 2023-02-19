<template>
  <div>
    <appbar></appbar>
    <sidebar></sidebar>
    <v-main>
      <v-container
        v-bind="$attrs"
        class="app-content px-8"
        fluid
      >
        <app-snackbar
          :show="snackbarShow"
          :text="snackbarText"
          @close="closeSnackbar"
        ></app-snackbar>
        <breadcrumbs></breadcrumbs>
        <slot></slot>
        <app-dialog
          :show="dialogShow"
          :component="dialogComponent"
          :max-width="dialogMaxwidth"
          @cancel="closeDialog"
          @close="closeDialog"
        ></app-dialog>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Appbar from '@/components/Appbar/index.vue';
import Sidebar from '@/components/Sidebar/index.vue';
import Breadcrumbs from '@/components/Breadcrumbs';

export default {
  name: 'AppContent',
  components: {
    Appbar,
    Sidebar,
    Breadcrumbs,
  },
  computed: {
    ...mapGetters({
      snackbarText: 'appsnackbar/text',
      snackbarShow: 'appsnackbar/show',
      dialogShow: 'appdialog/show',
      dialogComponent: 'appdialog/component',
      dialogMaxwidth: 'appdialog/maxwidth',
    }),
  },
  methods: {
    ...mapActions({
      closeSnackbar: 'appsnackbar/close',
      closeDialog: 'appdialog/close',
    }),
  },
};
</script>
