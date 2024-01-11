<script>
    import { animate } from "../../stores";

</script>

<div class="w-full h-full min-h-screen flex flex-col justify-center items-center text-white">

    <form action="?/register" method="POST" class="min-w-80 px-10 bg-transparent py-12 altashadow-xl rounded-3xl justify-center items-center flex flex-col gap-4">

        <h1 class="text-4xl font-semibold mb-6 w-full justify-start">
            Welcome
        </h1>

        <input type="text" name="name" class="w-full min-w-[300px] md:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px] px-6 border-none rounded-full inner-shadow-xl placeholder:opacity-60 text-white placeholder:text-white bg-transparent" placeholder="Name">

        <input type="text" name="email" class="w-full md:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px] px-6 border-none rounded-full inner-shadow-xl placeholder:opacity-60 text-white placeholder:text-white bg-transparent" placeholder="Email">

        <input type="password" name="password" class="w-full md:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px] px-6 border-none rounded-full inner-shadow-xl placeholder:opacity-60 text-white placeholder:text-white bg-transparent" placeholder="Password">

        <input type="password" name="passwordConfirm" class="w-full md:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px] px-6 border-none rounded-full inner-shadow-xl placeholder:opacity-60 text-white placeholder:text-white bg-transparent" placeholder="Confirm Password">

        <a href="/login" class="{$animate} opacity-60 hover:opacity-100 my-2">
            <span>
                I already have an account
            </span>
        </a>

        <button class="{$animate} my-8  py-1 px-8 w-40 bg-[#1FB46A] rounded-full text-white hover:w-52 hover:bg-[#2d865a]">
            Join Aivery
        </button>
    </form>
</div>