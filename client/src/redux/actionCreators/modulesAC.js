import { INIT_MODULES } from '../actionTypes/modulesAT';

export function initModulesAC(payload) {
  return { type: INIT_MODULES, payload };
}
