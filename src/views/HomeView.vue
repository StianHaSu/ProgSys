<script setup lang="ts">
    import Header from "../components/Header.vue"
    import Footer from "../components/Footer.vue"
</script>
<template>
    <div class="min-h-[100vh]">
        <div>
            <Header></Header>
        </div>
        <div class="text-center text-3xl font-['Open Sans'] mt-8 mx-3">
            <h1 >Linjeforenningen for programmering og systemarkitektur</h1>
        </div>
        <div class="introduksjon">
            <div class="text-center text-xl font-['Open Sans'] font-light mt-10 mx-3">
                <i class="fa fa-graduation-cap scale-[2] mt-4" aria-hidden="true"></i>
                <p class="max-w-[500px] mt-4">
                    Vi er forening av og for studenter som går linjen programmering og systemarkitektur, 
                    ved instituttet for i informatikk, UIO. Vi arrangerer faglige og sosiale arrangementer
                    for studentene.
                </p>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>
<style>

.introduksjon{
    @apply
    flex justify-center
}

.semester{
    @apply
    scale-75
    flex justify-center
}

</style>