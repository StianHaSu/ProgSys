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
        <h1 class="text-4xl mt-12 flex justify-center font-light">Semesterplan</h1>
        <div class="flex justify-center">
            <div class="semester">
                <div class="maaned">
                    <div class="text-center space-y-8">
                        <h1 class="text-2xl mt-6 underline">September</h1>
                        <h1>Telttur</h1>
                        <h1>Karaoke</h1>
                        <h1>Sims-LAN</h1>
                    </div>
                </div>
                <div class="maaned">
                    <div class="text-center space-y-8">
                        <h1 class="text-2xl mt-6 underline">Oktober</h1>
                        <h1>Telttur</h1>
                        <h1>Karaoke</h1>
                        <h1>Sims-LAN</h1>
                    </div>
                </div>
                <div class="maaned">
                    <div class="text-center space-y-8">
                        <h1 class="text-2xl mt-6 underline">November</h1>
                        <h1>Telttur</h1>
                        <h1>Karaoke</h1>
                        <h1>Sims-LAN</h1>
                    </div>
                </div>
                <div class="maaned">
                    <div class="text-center space-y-8">
                        <h1 class="text-2xl mt-6 underline">Desember</h1>
                        <h1>Telttur</h1>
                        <h1>Karaoke</h1>
                        <h1>Sims-LAN</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>
<style>

.semester{
    @apply
    grid
    grid-cols-1
    grid-rows-4
    mt-8
    mb-8
}

.maaned{
    @apply
    border-2
    border-black
    w-[275px]
    h-[350px]
    shadow-sm
    shadow-black
    mx-2
    my-2
}

.introduksjon{
    @apply
    flex justify-center
}

@media only screen and (min-width: 600px){
    .semester{
        @apply
        grid-cols-2
        grid-rows-2
        
    }
}

@media only screen and (min-width: 1200px){
    .semester{
        @apply
        grid-cols-4
        grid-rows-1
    }
}


</style>