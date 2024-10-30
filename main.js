import './style.css'
document.querySelector('#app').innerHTML = `
	<main class="min-h-svh w-full bg-slate-100 text-black dark:bg-slate-950 dark:text-white noto-sans-400 flex flex-col items-center justify-between">
		<div class="w-full calc-height py-5 px-5 text-center flex flex-col justify-center items-center">
			<h2 class="noto-sans-500 text-2xl sm:text-4xl">Hello, My Name Is <span class="underline noto-sans-800 text-blue-600">Danial Nasr</span></h2>
			<p class="mt-3 text-base sm:text-xl max-w-96">
				I am Daniel. And I live in the city of Isfahan. I was born in 2008. I am a middle level in the field of frontend. My hobbies are watching movies and I am an anime fan. I love to code.
			</p>
			<span class="mt-5 text-xl sm:text-2xl">
				My Skills:
			</span>
			<ul class="mt-1 list-decimal text-base sm:text-xl grid grid-cols-1 sm:grid-cols-2 gap-10 text-center">
				<li>HTML / CSS</li>
				<li>JavaScript / Vite</li>
				<li>Tailwind / Sass</li>
				<li>Vue.js / Nuxt.js</li>
			</ul>
		</div>
		<div class="w-full text-center">
			<div class="h-1 w-full bg-black dark:bg-white"></div>
			<nav class="flex flex-wrap justify-between items-center gap-4 px-4 py-4">
				<h1 class="text-xl sm:text-4xl noto-sans-500">Daniel Web Dev</h1>
				<ul class="flex flex-wrap gap-4 flex-around items-center text-base sm:text-lg">
					<li><a href="//imdanieldev.ir" class="underline text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">New Website</a></li>
					<li><a href="//github.com/imdanieldev" class="underline text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Github</a></li>
					<li><a href="//imdanieln.t.me" class="underline text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Telegram</a></li>
					<li><a href="mailto:danialnasronline@gmail.com" class="underline text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Email</a></li>
				</ul>
			</nav>
		</div>
	</main>
`