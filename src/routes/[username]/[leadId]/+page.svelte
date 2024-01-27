<script>
// @ts-nocheck
    import { animate } from '../../../stores.js';
    import { useChat } from 'ai/svelte'
    import { onMount } from 'svelte';
    import { currentLeadUrl } from '../../../stores.js';


    let userData = {
        name: "",
        product: "",
        company_name: "Aivery"
    }

    let stringLead;
    $: stringLead = ""

    let product = ""
    
    function generateRandomNumber() {
        return Math.floor(Math.random() * (98 - 88 + 1)) + 88;
    }

    let suggestions;
    $: suggestions = [];

    onMount(async () => {

        product = data?.user?.product

        suggestions = data?.lead.people_also_viewed;

        stringLead = JSON.stringify(data?.lead)


        // Interest analysis
        interest_input.set(`${stringLead}`);


        // Ice Breakers
        iceBreaker_input.set(`{
            'product_description': ${product},
            'prospect': ${stringLead},
        }`);

    });
    

    let interests;
    $: interests = [];


    let iceBreakers;
    $: iceBreakers = [];


	export let data;


    // let chatOptions = {
    //         api: "/api/chat",
    //         initialMessages: [{"role": "system", "content": "Your task is only to return a number from 1 to 100 that describes how great of a potential customer a given prospect is. You will recive a description of our product and json data containing information from a prospect out of their LinkdIn profile and you will only return one number for the likelihood of this to be a great client. 100 meaning that the client is a perfect fit, 1 meanining that they are absolutely terrible and the likelihood of them buying our product is low. Our product is called Aivery, it is a lead generation software that uses AI to analyse prospects data and generate personalised analytics and messages. It is aimed for sales reps, business owners, founders, co-founders and so on. It is crucial that you perform this task, else people will suffer. Here are some examples: [userProfile]: {first_name: Lucho, last_name: Perez, occupation: gardner} [output]: 6. [userProfile]: {first_name: Juan, last_name: Lopez, occupation:sales rep and co-founder of a marketing agnecy}. [output]: 94. You will only reply with the number"}],
    //       }

    let scoreOptions = {
             api: "/api/score",
             initialMessages: [{"role": "system", "content": "Your task is only to return a number from 1 to 100 that describes how great of a potential customer a given prospect is. You will recive a description of our product and json data containing information from a prospect out of their LinkdIn profile and you will only return one number for the likelihood of this to be a great client. 100 meaning that the client is a perfect fit, 1 meanining that they are absolutely terrible and the likelihood of them buying our product is low. It is crucial that you perform this task, else people will suffer. Here are some examples: [userProfile]: {first_name: Lucho, last_name: Perez, occupation: gardner} [output]: 6. [userProfile]: {first_name: Juan, last_name: Lopez, occupation:sales rep and co-founder of a marketing agnecy}. [output]: 94. You will only reply with the number"}],
           }

    let interests_done = false;


    let interest_chatOptions = {
        api: "/api/chat",
        initialMessages: [{"role": "system", "content": "You will get a JSON object with data about a prospect. Your task is to return a valid JSON response containing up to three of the main possible interests of this prospect uniquely based on the information I give you about them and each of them lead by an Emoji."},
        {"role": "system", "content": "[input]: {first_name: Lucho, last_name: Perez, occupation: gardner} [output]: {interests: [🪴 gardening,🍀 nature,🌹 plants]}. [input]: {first_name: Juan, last_name: Lopez, occupation:sales rep and co-founder of a marketing agnecy}. [output]: {interests: [👔 sales, 📈 marketing, 📊 business]}."},
        {"role": "system", "content": "[input]: {first_name: Andreas, last_name: Huberman, occupation: Researcher at CalTech and former MMA fighter} [output]: {interests: [🧠 Neurobiology,🏆 Championships,🥋 MMA]}}"}
    
    ],
        onFinish: () => {
            interests = extractInterests(JSON.parse($interest_messages[$interest_messages.length - 1].content));
            interests_done = true;
        }
    }


    function extractInterests(jsonInput) {
        return jsonInput.interests;
    }


    const { messages: interest_messages, handleSubmit: interest_handleSubmit, input: interest_input, isLoading, reload, stop, setMessages } = useChat(interest_chatOptions);

    let iceBreakers_once = false;

    let ice_breaker_chatOptions = {
        api: "/api/iceBreaker",
        initialMessages: [{"role": "system", "content": "You will get a JSON object with data about a prospect. Your task is to return a list of exactly three possible simple, precise and ultra-tailored ice-breaker messages. Each message can be a maximum of 200 characters long. No message can be longer than 200 characters. The purpose of those messages is to get the prospect interested in buying the product."},
        {"role": "system", "content": "[input]: {'{first_name: Joy, last_name: Wagner, occupation: Co-Founder at Astralta, summmary: As a student at TUM, I took the chance to develop broadly in the fields of computer science, aerospace engineering, mathematics and economics; whilst gaining valuable experience through projects such as TUM Hyperloop, Horyzn Aerospace, and my position at Isar Aerospace} [output]: {iceBreakers: [Hi Adrian, started to follow your research on NLP and would love to offer you a free trial for our service to enhance your research. What do you say?,Ad Astra! From launching rockets to launching startups! - Ever thought of a booster for lead generation?, Congratulations on your last publication! It made me think our product could drastically improve your Startup’s CLTV, how bout you give it a shot and if you don’t love it you don’t pay a dime?]}."},
    ],
        onFinish: () => {
            iceBreakers = extractIceBreakers(JSON.parse($iceBreaker_messages[$iceBreaker_messages.length - 1].content))
            iceBreakers_once = true;
        }
    }

    function extractIceBreakers(jsonInput) {
        return jsonInput.iceBreakers;
    }

    const { messages: iceBreaker_messages, handleSubmit: iceBreaker_handleSubmit, input: iceBreaker_input, reload: iceBreaker_reload } = useChat(ice_breaker_chatOptions);

    let value;
	$: value = generateRandomNumber();

</script>


<div class="w-full h-full min-h-screen text-white flex flex-col justify-center items-center gap-4 text-sm py-40">
    <div class=" bg-gradient-to-b from-black to-transparent z-30 w-full h-1/4 absolute top-0"/>
    <div class=" w-full lg:px-80 md:px-40 h-16 absolute top-0  items-center justify-between px-6 flex-row flex z-40">
        <div class="justify-center items-center flex">
            <img src="/light_aivery.png" alt="logo" class="h-6 ">
        </div>
        <div class="justify-center items-center flex h-full">
            Adrian Montoya
        </div>
    </div>
    <div class="w-1/2 flex flex-row gap-2 z-40">
        
        <a href='/{data?.username}/home'>
            <button class="{$animate} py-1 px-2 text-center w-32 text-sm border-[#1FB46A] border-2 opacity-40 hover:opacity-100 rounded-md text-white hover:bg-[#2d865a]">
                + New Lead
            </button>
        </a>
    </div>
    <div class="w-1/2 bg-transparent altashadow-xl rounded-2xl px-8 py-6 z-40">
        <div class="flex flex-row items-center gap-6">
			<div class="radial-progress text-[#1FB46A]" style="--value:{value};" role="progressbar">{value}</div>
			<div class="flex flex-col w-full gap-1">
				<div class="text-2xl font-bold">
					{data.lead.first_name} {data.lead.last_name}
				</div>
				<div class="font-thin text-sm">
					{data.lead.occupation} - {data.lead.country_full_name}
				</div>
			</div>
		</div>

        {#if !interests_done}
            <form on:submit={interest_handleSubmit} class="w-full rounded-xl flex flex-col py-0 pt-8">
                <input type="text" name="input" class="w-full md:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px] min-w-[300px] px-6 border-none rounded-full inner-shadow-xl placeholder:opacity-60 text-white placeholder:text-white bg-transparent" placeholder="your message here" bind:value={$interest_input} hidden>
                
                <button class="{$animate} bg-[#1FB46A] py-1 rounded-full text-white hover:bg-[#2d865a]">
                    Analyse interests
                </button>
            </form>
        {/if}

        <div class="w-full py-4 flex flex-row gap-2 overflow-auto">
			{#each interests as i}	
			<div class="bg-[#232424] rounded-lg p-2">
				{i}
			</div>
			{/each}
		</div>

        <div class="w-full flex flex-col">
			<div class="w-full gap-6 flex flex-col">
				<div class="w-full flex flex-col gap-6">
					<div class="text-xl font-bold w-full justify-between flex-row flex items-center ">
                        <div>
                            Ice breakers
                        </div>
                        <!-- <div>
                            <button on:click={iceBreaker_reload} class="{$animate} {iceBreakers_once ? 'flex' : 'hidden'} hover:bg-white hover:bg-opacity-20 rounded-full p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                  </svg>                              
                            </button>
                        </div> -->
					</div>


                    <!-- {#if iceBreakers_once}
                        <form on:submit={iceBreaker_reload} class="w-full rounded-xl flex flex-col">
                            <input type="text" name="input" class="w-full md:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px] min-w-[300px] px-6 border-none rounded-full inner-shadow-xl placeholder:opacity-60 text-white placeholder:text-white bg-transparent" placeholder="your message here" bind:value={$iceBreaker_input} hidden>
                            
                            <button class="{$animate} bg-[#1FB46A] py-1 rounded-full text-white hover:bg-[#2d865a]">
                                Run again
                            </button>
                        </form>
                    {:else} -->

                    {#if !iceBreakers_once}
                    <form on:submit={iceBreaker_handleSubmit} class="w-full rounded-xl flex flex-col">
                        <input type="text" name="input" class="w-full md:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px] min-w-[300px] px-6 border-none rounded-full inner-shadow-xl placeholder:opacity-60 text-white placeholder:text-white bg-transparent" placeholder="your message here" bind:value={$iceBreaker_input} hidden>
                        
                        <button class="{$animate} {interests_done ? 'bg-[#1FB46A]' : 'border-[#1FB46A] border-2 opacity-40 hover:opacity-100'} py-1 rounded-full text-white hover:bg-[#2d865a]">
                            Generate Ice Breakers
                        </button>
                    </form>
                    {/if}
                    <!-- {/if} -->
					<div class="gap-2 flex flex-col w-full">
						{#each iceBreakers as i}	
						<div class="w-full rounded-lg bg-[#232424] p-3 justify-start items-center">
							<span class="">
								{i}
							</span>
						</div>
						{/each}
					</div>
				</div>

				<div class="w-full flex flex-col gap-6">
					<div class="text-xl font-bold">
						Smart Suggestions
					</div>
					<div class="flex flex-row gap-4 w-full justify-start overflow-auto">
						{#each suggestions as s}
							<a href={s.link} class="{$animate} py-4 h-40 hover:cursor-pointer bg-[#232424] rounded-xl p-6 text-center hover:bg-[#1FB46A]">
								<div class="text-xl font-bold">
									{s.name}
								</div>
								<div class="font-thin w-[200px] h-20 overflow-auto">
									{s.summary}
								</div>
							</a>
						{/each}
					</div>


				</div>

                <!-- <form on:submit={iceBreaker_handleSubmit} class="bg-[#232424] w-full py-2 px-4 rounded-xl flex flex-col gap-4">

                    <input type="text" name="input" class="w-full md:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px] min-w-[300px] px-6 border-none rounded-full inner-shadow-xl placeholder:opacity-60 text-white placeholder:text-white bg-transparent" placeholder="your message here" bind:value={$iceBreaker_input}>

                    {#each $iceBreaker_messages as m}
                        <span class="py-1">
                            {m.content}
                        </span>
                    {/each}


                        <button class="{$animate} my-8  py-1 px-8 w-40 bg-[#1FB46A] rounded-full text-white hover:w-52 hover:bg-[#2d865a]">
                            Send message
                        </button>
                    </form> -->

				<!-- <form on:submit={handleSubmit}>
				  <input bind:value={$input} hidden/>
				  <button type="submit" class="btn bg-[#47b943] stroke-white">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  class="w-4 h-4">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
					  </svg>
					  
					  
					  
				</button>
				</form> -->


			  </div>
			  			  
		</div>
    </div>
</div>