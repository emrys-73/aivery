<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import { AppShell } from '@skeletonlabs/skeleton';


</script>



<AppShell class="bg-[#141519] font-sans">
	<!-- <div class="w-full h-12 bg-[#0D1118] altashadow justify-center flex flex-row fixed top-0">
		<div class="justify-center flex items-center w-10">
			<img src="/light_aivery.png" alt="smol_aivery" class="">
		</div>
		<div class="justify-center flex items-center uppercase text-3xl font-semibold text-white">
			Aivery
		</div>
	</div> -->

		<slot/>

</AppShell>