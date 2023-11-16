import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import 'html-escaper';
import 'clsx';
import './chunks/astro_cacb00bf.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.17158c12.js"}],"styles":[{"type":"external","src":"/_astro/index.aef57137.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.17158c12.js"}],"styles":[{"type":"external","src":"/_astro/index.aef57137.css"}],"routeData":{"route":"/playlist/[id]","type":"page","pattern":"^\\/playlist\\/([^/]+?)\\/?$","segments":[[{"content":"playlist","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/playlist/[id].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/get-info-playlist.json","type":"endpoint","pattern":"^\\/api\\/get-info-playlist\\.json$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"get-info-playlist.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/get-info-playlist.json.js","pathname":"/api/get-info-playlist.json","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Js/Desktop/Portafolio/cloneSpotify/certain-comet/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Js/Desktop/Portafolio/cloneSpotify/certain-comet/src/pages/playlist/[id].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Js/Desktop/Portafolio/cloneSpotify/certain-comet/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/playlist/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Js/Desktop/Portafolio/cloneSpotify/certain-comet/src/components/PlayListItemCard.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_8176aee0.mjs","/src/pages/api/get-info-playlist.json.js":"chunks/pages/get-info-playlist_8a0205dd.mjs","/src/pages/index.astro":"chunks/pages/index_cffd2cbb.mjs","\u0000@astrojs-manifest":"manifest_805e15d5.mjs","C:/Users/Js/Desktop/Portafolio/cloneSpotify/certain-comet/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_fe124244.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_b7023300.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_24414d0a.mjs","\u0000@astro-page:src/pages/playlist/[id]@_@astro":"chunks/_id__a223bf47.mjs","\u0000@astro-page:src/pages/api/get-info-playlist@_@json.js":"chunks/get-info-playlist_e1fb9710.mjs","@astrojs/svelte/client.js":"_astro/client.ef651e53.js","@/components/Player":"_astro/Player.73b43d65.js","C:/Users/Js/Desktop/Portafolio/cloneSpotify/certain-comet/src/components/CardPlayButton":"_astro/CardPlayButton.2ed4632b.js","@astrojs/react/client.js":"_astro/client.7f9782d5.js","@/components/CardPlayButton":"_astro/CardPlayButton.f71f9f65.js","/astro/hoisted.js?q=0":"_astro/hoisted.17158c12.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.aef57137.css","/favicon.svg","/fonts/CircularStd-Black.woff2","/fonts/CircularStd-Bold.woff2","/fonts/CircularStd-Book.woff2","/fonts/CircularStd-Light.woff2","/fonts/CircularStd-Medium.woff2","/_astro/CardPlayButton.2ed4632b.js","/_astro/CardPlayButton.f71f9f65.js","/_astro/client.7f9782d5.js","/_astro/client.ef651e53.js","/_astro/hoisted.17158c12.js","/_astro/index.5a952168.js","/_astro/Player.73b43d65.js","/_astro/Player.ed18a5d2.js","/music/1/01.mp3","/music/1/02.mp3","/music/1/03.mp3","/music/1/04.mp3","/music/1/05.mp3","/music/2/01.mp3","/music/2/02.mp3","/music/2/03.mp3","/music/2/04.mp3","/music/2/05.mp3","/music/3/01.mp3","/music/3/02.mp3","/music/3/03.mp3","/music/3/04.mp3","/music/3/05.mp3","/music/4/01.mp3","/music/4/02.mp3","/music/4/03.mp3","/music/4/04.mp3","/music/4/05.mp3","/music/5/01.mp3","/music/5/02.mp3","/music/5/03.mp3","/music/5/04.mp3","/music/5/05.mp3","/music/6/01.mp3","/music/6/02.mp3","/music/6/03.mp3","/music/6/04.mp3","/music/6/05.mp3"]});

export { manifest };
