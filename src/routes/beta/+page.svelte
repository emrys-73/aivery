<script>
    export let data;

</script>


<div class="w-full h-screen  flex flex-col lg:mx-60 px-4">

    <div class="text-3xl font-bold">
		Smart Outbound
	</div>

    <form method="POST">
        <input type="text" name="lead" placeholder="Type in LinkdIn URL here" class="w-full h-10 placeholder:italic placeholder:text-opacity-60 rounded-md border-none bg-[#D9D9D9]">

        <input type="text" id="url" name="url" class="input text-white" placeholder="Enter URL" />
		
        <button type="submit" class="btn">
			Fetch Data Mock
		</button>
    </form>

    <div>

        {#if data.userData}
        <span>
            {data.userData.public_identifier}
        </span>
        {/if}
    </div>
</div>