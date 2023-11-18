<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import { AppShell } from '@skeletonlabs/skeleton';


</script>



<AppShell class="bg-[#EFEFEF] text-black font-sans" slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
	<div class="w-full h-12 bg-[#478D61] altashadow justify-center flex flex-row fixed top-0">
		<div class="justify-center flex items-center w-10">
			<img src="/light_aivery.png" alt="smol_aivery" class="">
		</div>
		<div class="justify-center flex items-center uppercase text-3xl font-semibold text-white">
			Aivery
		</div>
	</div>

	<div class="w-full h-full flex mt-24">

		<slot/>
	</div>

</AppShell>