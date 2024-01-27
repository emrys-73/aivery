<script>
// @ts-nocheck
    
	import { onMount } from "svelte";
    import { animate } from "../../../stores";
    

    let productDefault = "Aivery - an AI powered software that brings sales intelligence to the entire lead generation process for startups and small and mid-size businesses. Our product is called Aivery, it is a lead generation software that uses AI to analyse prospects data and generate personalised analytics and messages. It is aimed for sales reps, business owners, founders, co-founders and so on. ";


    let product;
    $: product = "";

    onMount(async () => {
            product = data?.user?.product
        }
    )
    


    export let data
</script>


<div class="w-full h-full min-h-screen text-white flex flex-col justify-center items-center gap-4 text-sm py-40">
    <div class=" bg-gradient-to-b from-black to-transparent z-30 w-full h-1/4 absolute top-0"/>
    <div class=" w-full lg:px-80 md:px-40 h-16 absolute top-0  items-center justify-between px-6 flex-row flex z-40">
        <a href="/{data?.username}/home">
            <div class="justify-center items-center flex">
                <img src="/light_aivery.png" alt="logo" class="h-6 ">
            </div>
        </a>
        <a href="/{data?.username}/home">        
            <div class="justify-center items-center flex h-full">
                Adrian Montoya
            </div>
        </a>
    </div>

    <div class="w-full h-full flex items-center justify-center">
        <div class="w-1/2 bg-transparent px-8 py-6 altashadow-xl rounded-3xl <min-></min->h-[400px] flex flex-col">
            <div class="py-6">
                <h1 class="text-4xl font-bold">
                    {data?.user?.name} {data?.user?.lastname}
                </h1>

            </div>
            <div>
                
                <div>
                    <form action="?/updateProduct" method="POST" class="flex flex-col gap-8 py-8">
                        <h2 class="text-2xl font-semibold">
                            Product
                        </h2>
                        <span>
                            {product}
                        </span>

                        <input type="text" name="id" class="w-full md:min-w-[400px] overflow-auto lg:min-w-[500px] xl:min-w-[600px] min-w-[300px] px-6 border-none rounded-full inner-shadow-xl placeholder:opacity-60 text-white placeholder:text-white bg-transparent" placeholder="UserId" value={data?.user?.id} hidden>

                        <input type="text" name="prod" class="w-full md:min-w-[400px] overflow-auto lg:min-w-[500px] xl:min-w-[600px] min-w-[300px] px-6 border-none rounded-full inner-shadow-xl placeholder:opacity-60 text-white placeholder:text-white bg-transparent" placeholder="New product description">

                        <button type="submit" class="{$animate} py-1 px-8 w-52 bg-[#1FB46A] rounded-full text-white hover:w-60 hover:bg-[#2d865a]">
                            Update product
                        </button>
                    </form>


                    <form action="?/resetProduct" method="POST" class="pt-8">

                        <input type="text" name="id" class="w-full md:min-w-[400px] overflow-auto lg:min-w-[500px] xl:min-w-[600px] min-w-[300px] px-6 border-none rounded-full inner-shadow-xl placeholder:opacity-60 text-white placeholder:text-white bg-transparent" placeholder="UserId" value={data?.user?.id} hidden>

                        <input type="text" hidden name="prod" value={productDefault} class="w-full md:min-w-[400px] overflow-auto lg:min-w-[500px] xl:min-w-[600px] min-w-[300px] px-6 border-none rounded-full inner-shadow-xl placeholder:opacity-60 text-white placeholder:text-white bg-transparent" placeholder="New product description">

                        <button type="submit" class="{$animate} my-8  py-1 px-8 w-40 bg-transparent border-2 opacity-40 hover:opacity-100 hover:border-none rounded-full text-white hover:w-52 hover:bg-[#2d865a]">
                            Reset Product
                        </button>
                    </form>

                </div>
            </div>
        </div>



    </div>

</div>