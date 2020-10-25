import _Vue, { PluginFunction } from 'vue';
import * as components from '@/lib-components/index';

interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

const install: InstallFunction = function installHovorun2510(Vue: typeof _Vue) {
  if (install.installed) return;

  install.installed = true;

  Object.entries(components).forEach(([name, component]) => Vue.component(name, component));
};

const plugin = {
  install,
};

if (process.env.ES_BUILD === 'false') {
  let GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = (global as any).Vue;
  }

  if (GlobalVue) {
    (GlobalVue as typeof _Vue).use(plugin);
  }
}

export default plugin;
export * from '@/lib-components/index';
