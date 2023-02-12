<template>
  <app-content>
    <v-row justify="space-between" class="mb-4">
      <v-col cols="auto">
        <v-text-field
          label="Search..."
          prepend-inner-icon="mdi-magnify"
          clearable
          solo
          dense
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="auto">
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-plus-circle-outline</v-icon>
            </v-btn>
          </template>
          Add Branch
        </v-tooltip>
      </v-col>
    </v-row>

    <v-list>
      <template v-for="(n, index) in 5">
        <div :key="n+index">
          <v-list-item>
            <v-card
              width="120"
              height="70"
              flat
            >
              <v-img
                height="70px"
                src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
              ></v-img>
            </v-card>
            <v-list-item-content class="px-4">
              <v-list-item-title>Lucky Me</v-list-item-title>
              <v-list-item-subtitle>8 Products</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-divider class="my-4"></v-divider>
        </div>
      </template>
    </v-list>
  </app-content>
</template>

<script>
import AppContent from '@/components/App/AppContent';

export default {
  name: 'Brands',
  components: {
    AppContent,
  },
};
</script>

<style scoped>
.v-divider {
  margin-left: 150px;
}
</style>
