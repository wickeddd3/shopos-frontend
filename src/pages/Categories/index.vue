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
    <v-row>
      <v-col v-for="(n, index) in 15" :key="n+index" cols="2">
        <v-card>
          <v-img
            height="100px"
            src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
          ></v-img>
          <v-card-actions class="d-flex justify-space-between align-center">
            <div class="d-flex flex-column align-start">
              <span class="subtitle-2">Noodles</span>
              <span class="subtitle-2 font-weight-light">12 Products</span>
            </div>
            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </app-content>
</template>

<script>
export default {
  name: 'Categories',
};
</script>
