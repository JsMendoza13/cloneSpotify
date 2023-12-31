import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_d20c12dc.mjs';

const _page0  = () => import('./chunks/generic_b7023300.mjs');
const _page1  = () => import('./chunks/index_24414d0a.mjs');
const _page2  = () => import('./chunks/_id__a223bf47.mjs');
const _page3  = () => import('./chunks/get-info-playlist_e1fb9710.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/playlist/[id].astro", _page2],["src/pages/api/get-info-playlist.json.js", _page3]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
