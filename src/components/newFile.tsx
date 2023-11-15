import { artistsString } from "./PlayListItemCard.astro";

<Fragment>
<article class="group relative">
<div class={`absolute right-4 bottom-10 translate-y-4 transition-all duration-500 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-10`}>
<CardPlayButton id={id} />
</div>
<a href={`/playlist/${id}`} class="playlist-item transition-all duration-300 flex relative p-2 overflow-hidden gap-2 pb-6 rounded-md hover:bg-zinc-800 shadow-lg hover:shadow-xl bg-zinc-500/30 w-44 flex-col" transition: name={`playlist ${id} box`}>
<picture class="aspect-square w-full h-auto flex-none">
<img src={cover} alt={`Cover of ${title} by ${artistsString}`} class="object-cover w-full h-full rounded-md" transition: name={`playlist ${id} image`} />
</picture>

<div class="flex flex-auto flex-col px-2">
<h1 class="text-white text-sm" transition: name={`playlist ${playlist?.id} title`}>
{title}
</h1>
<span class="text-xs text-gray-400" transition: name={`playlist ${playlist?.id} artists`}>
{artistsString}
</span>
</div>
</a>
</article>

</Fragment>;
