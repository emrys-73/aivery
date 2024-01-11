<script>
    import { animate, userDataStore } from "../../../stores";

    export let data;



</script>

<div class="w-full h-full min-h-screen flex flex-row p-2 gap-2 justify-center items-center text-white relative">
    <div class="absolute bg-gradient-to-b from-black to-transparent w-full h-40 top-0 justify-between p-4 flex flex-row">
        <div class="">
            <a href="/" class="{$animate} opacity-80 hover:opacity-100">
                <img src="/light_aivery.png" alt="logo" class="w-8">
            </a>
        </div>
        <div class="">
            <a href="/{data.user.username}/settings" class="{$animate} opacity-80 hover:opacity-100">
                <span class="font-light opacity-80">
                    {data?.user?.name} {data?.user?.lastname}
                </span>
            </a>
        </div>
    </div>
    <div class="bg-transparent w-1/2 py-2 rounded-2xl altashadow-xl flex flex-col gap-2">
        <div class="px-8 py-6 flex flex-col gap-4">
            <h1 class="text-4xl font-semibold">
                Lead Analysis
            </h1>

            <form action="?/analyseLead" method="POST" class="flex flex-row gap-2 items-center justify-center py-4">

                <input type="text" name="url" class="w-full md:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px] min-w-[300px] px-6 border-none rounded-full inner-shadow-xl placeholder:opacity-60 text-white placeholder:text-white bg-transparent" placeholder="LinkdIn URL">
                
                <button class="{$animate} py-1 w-20 text-center bg-[#1FB46A] rounded-full text-white hover:bg-[#2d865a]">
                    Go
                </button>
            </form>

        </div>
    </div>
</div>



<!-- <div class="w-full h-full min-h-screen flex flex-row p-2 gap-2">
    <div class="w-[300px] h-full">
        <div class="bg-[#0c0c0c] rounded-xl w-full h-full">

        </div>

    </div>
    <div class="w-full h-full">
        <div class="bg-[#0c0c0c] rounded-xl w-full h-full">

        </div>
    </div>
</div> -->
