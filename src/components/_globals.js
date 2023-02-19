import Vue from 'vue';
import { camelCase, upperFirst } from 'lodash';

const components = {
  install (Vue) {
    // Autoload all components inside
    // core/components and core/modules/**/components.
    this.requireComponent(require.context(
      // The relative path of the components folder
      '@/components/App',
      // Whether or not to look in subfolders
      true,
      // The regular expression used to match base component filenames
      /(components|modules\/.*\/components).*\.vue$/,
    )).forEach(item => Vue.component(item.name, item.component));

    // Autoload all components inside
    // src/components and src/modules/**/components.
    this.requireComponent(require.context(
      // The relative path of the components folder
      '@',
      // Whether or not to look in subfolders
      true,
      // The regular expression used to match base component filenames
      /(components|modules\/.*\/components).*\.vue$/,
    )).forEach(item => Vue.component(item.name, item.component));
  },

  requireComponent (r) {
    return r.keys().map(fileName => {
      const componentConfig = r(fileName);
      const componentName = componentConfig.default.name || upperFirst(
        camelCase(
          fileName
            .split('/')
            .pop()
            .replace(/\.[^/.]+$/, '')
            .replace(/^\.\/(.*)\.\w+$/, '$1'),
        ),
      );

      return {
        name: componentName,
        component: componentConfig.default || componentConfig,
      };
    });
  },
};

Vue.use(components);
