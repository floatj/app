import { request } from './base';

export function getPlurks(options={}) {
  return request('GET', '/APP/Timeline/getPlurks', options);
}

export function getPlurk(plurk_id, options={}) {
  return request('GET', '/APP/Timeline/getPlurk', {plurk_id, ...options});
}
