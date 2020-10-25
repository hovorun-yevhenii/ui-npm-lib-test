import Vue, { PluginFunction, VueConstructor } from 'vue';

interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const Hovorun2510: { install: InstallFunction };
export default Hovorun2510;

export const HButton: VueConstructor<Vue>;
