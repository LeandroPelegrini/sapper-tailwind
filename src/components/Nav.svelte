<script>
  export let segment;
</script>

<nav class="">
  	<div class="mx-auto flex items-center text-black justify-between flex-wrap p-6 max-w-6xl">
		<div class="flex items-center flex-shrink-0 text-black mr-6">
			<span class="font-semibold text-xl tracking-tight">Sapper Tailwind</span>
		</div>
		<div class="flex">
			<a
			class="p-3 hover:bg-gray-100 content-center flex text-black
			hover:bg-grey-300 rounded-lg"
			aria-current={segment === undefined ? 'page' : undefined}
			href=".">
			Home
			</a>
			<a
			class="p-3 hover:bg-gray-100 content-center flex text-black
			hover:bg-grey-300 rounded-lg"
			aria-current={segment === 'about' ? 'page' : undefined}
			href="about">
			Sobre
			</a>
		</div>
  	</div>
</nav>
