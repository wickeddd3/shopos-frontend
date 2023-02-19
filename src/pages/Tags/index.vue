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

    <v-list class="px-0">
      <template v-for="(n, index) in 5">
        <div :key="n+index">
          <v-list-item class="px-0">
            <v-list-item-content class="px-0">
              <v-list-item-title>Spicy</v-list-item-title>
              <v-list-item-subtitle>8 Products</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-divider class="my-1"></v-divider>
        </div>
      </template>
    </v-list>
  </app-content>
</template>

<script>
export default {
  name: 'Tags',
};
</script>
