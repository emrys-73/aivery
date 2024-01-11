<script>
// @ts-nocheck
	import { useChat } from 'ai/svelte'
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { animate } from '../stores.js';
	
	export let data;


	let chatOptions = {
            api: "/api/chat",
            initialMessages: [{"role": "system", "content": "Your task is only to return a number from 1 to 100 that describes how great of a potential customer a given prospect is. You will recive a description of our product and json data containing information from a prospect out of their LinkdIn profile and you will only return one number for the likelihood of this to be a great client. 100 meaning that the client is a perfect fit, 1 meanining that they are absolutely terrible and the likelihood of them buying our product is low. Our product is called Aivery, it is a lead generation software that uses AI to analyse prospects data and generate personalised analytics and messages. It is aimed for sales reps, business owners, founders, co-founders and so on. It is crucial that you perform this task, else people will suffer. Here are some examples: [userProfile]: {first_name: Lucho, last_name: Perez, occupation: gardner} [output]: 6. [userProfile]: {first_name: Juan, last_name: Lopez, occupation:sales rep and co-founder of a marketing agnecy}. [output]: 94. You will only reply with the number"}],
          }
    
    const { messages, handleSubmit, input, isLoading, reload, stop, setMessages } = useChat(chatOptions);


	let iceBreakers = [
		"Hi Adrian, started to follow your research on NLP and would love to offer you a free trial of our service in exchange for a review. What do you say?",
		"Ad Astra! Look, I love how you went from launching rockets to launching startups. Let's hop on a call and maybe you can be a great fit for our software",
		"Hey! Congratulations on joining Techstars. Any chance you know somebody who would be interested to test our software?"
	]

	let suggested = [
		{
          link: 'https://www.linkedin.com/in/vanessa-wenisch',
          name: 'Vanessa Wenisch',
          summary: 'Passionate innovator with a tech-driven approach to marketing | track record of leveraging technologies and building strong brands. | TUM.ai batch',
          location: null
        },
        {
          link: 'https://www.linkedin.com/in/nikitaheumann',
          name: 'Nikita-Tarass H.',
          summary: 'Senior Product Manager @ SIXT | MBA HHL, NYU Stern | TUM.ai',
          location: null
        },
        {
          link: 'https://www.linkedin.com/in/wllr',
          name: 'Niklas Weller',
          summary: 'University of Edinburgh | TUM',
          location: null
        },
	]


	let interests = [
		"🚀 Aerospace Engineering",
		"📚 Mathematics and Economics",
		"🎶 Music",
		"📖 Literature",
		"🧠 Neurobiology and Psychology"
	]

	let value;
	$: value = 94;

</script>


<div class="w-full h-full min-h-screen flex justify-center items-center flex-col gap-4">
	<div>
		<a href="/login" class="h-full w-full">
			<button class="{$animate} altashadow py-1 px-8 w-40 bg-[#1FB46A] rounded-full text-white hover:w-52 hover:bg-[#2d865a]">
				Log In
			</button>
		</a>
	</div>
	<div>
		<a href="/register" class="w-full h-full">
			<button class="{$animate} py-1 px-8 altashadow w-40 bg-[#000000] bg-opacity-0 rounded-full text-white opacity-60 hover:opacity-100 hover:w-52">
				Register
			</button>
		</a>
	</div>

</div>
<!-- 
<div class="flex flex-col lg:mx-60 px-4 text-white gap-6 h-screen w-full">
	<div class="w-full bg-[#0D1118] rounded-3xl altashadow p-8 flex flex-col gap-6">
		<div class="text-2xl font-bold">
			Find profile
		</div>

		<div>
			<form method="POST" action="?/mockScrap" class="flex flex-row gap-2 w-full h-full  justify-center items-center">
				<input type="text" name="linkdIn" placeholder="Type in LinkdIn URL here" class="w-full h-10 placeholder:italic placeholder:text-opacity-60 rounded-md border-none bg-[#D9D9D9] text-black">
				
				<button type="submit" class="btn bg-[#47b943] stroke-white">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-4 h-4">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
					  </svg>
					  
					  
				</button>
			</form>
		</div>
	</div>

	{#if data.userData}
	<div class="bg-[#0D1118] rounded-3xl altashadow p-8 flex flex-col gap-6">
		<div class="flex flex-row items-center gap-6">
			<div class="radial-progress text-[#47b943]" style="--value:{value};" role="progressbar">{value}</div>
			<div class="flex flex-col w-full gap-2">
				<div class="text-2xl font-bold">
					{data.userData.first_name} {data.userData.last_name}
				</div>
				<div class="">
					{data.userData.occupation} - {data.userData.country_full_name}
				</div>
			</div>
		</div>

		<div class="w-full h-full py-4 flex flex-row gap-2 overflow-auto">
			{#each interests as i}	
			<div class="bg-white rounded-lg p-2 text-black">
				{i}
			</div>
			{/each}
		</div>
		
		<div class="w-full h-full flex flex-col">
			<div class="w-full h-full gap-6 flex flex-col">
				<div class="w-full flex flex-col gap-6">
					<div class="text-xl font-bold">
						Ice breakers
					</div>
					<div class="gap-2 flex flex-col w-full">
						{#each iceBreakers as i}	
						<div class="w-full rounded-lg bg-[#ffffff] p-3 justify-start items-center">
							<span class="text-black">
								{i}
							</span>
						</div>
						{/each}
					</div>
				</div>

				<div class="w-full h-full flex flex-col gap-6">
					<div class="text-xl font-bold">
						Suggestions
					</div>
					<div class="flex flex-row gap-4 w-full justify-around px-20">
						{#each suggested as s}
							<a href={s.link} class="{$animate} hover:cursor-pointer bg-white rounded-xl p-6 w-full text-center text-black hover:text-white hover:bg-[#000]">
								<div class="text-xl font-bold">
									{s.name}
								</div>
								<div>
									{s.summary}
								</div>
							</a>
						{/each}
					</div>


				</div>


				<form on:submit={handleSubmit}>
				  <input bind:value={$input} hidden/>
				  <button type="submit" class="btn bg-[#47b943] stroke-white hidden">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  class="w-4 h-4">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
					  </svg>
					  
					  
					  
				</button>
				</form>
			  </div>
			  			  
		</div>
		

	</div>

	{/if}
	
</div> -->