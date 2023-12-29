<script lang="ts">
	import { SurfaceProps } from '$lib/css-props';

</script>

<svelte:head>
  <title>Surfaces | Frieda.css</title>
</svelte:head>

<h1>Surfaces</h1>

<div class="grid grid-cols-1 lg:grid-cols-2">
	<section>
		<h2>Properties</h2>
    {#each SurfaceProps as p} 
    {@const name = p.name.split('-').join(' ')}
    <div>
      <h3>{name}</h3>
      <p class="text-sm text-neutral-600">
        {p.description}
      </p>
    </div>
      
    {/each}
	</section>
</div>
