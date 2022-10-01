<script setup lang="ts"> 
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Bilder from "../components/Bilder.vue";

</script>

<template>
    <div class="min-h-screen">
        <div>
            <Header></Header>
        </div>

        <div><h1 class="text-3xl font-light underline flex justify-center mt-8">Kommende arrangementer</h1></div>
        <div class="flex justify-center">
            <div class="kommende">
                <div class="kommendeBilder">
                    <Bilder></Bilder>
                </div>
            </div>
        </div>

        <div class="flex justify-center mt-16 text-center">
            <h1 class="text-3xl font-light underline">Bilder fra tidligere arrangement</h1>
        </div>
        <div class="wrapper">
            <div class="element">
                <div class="picture"><img class="rounded-sm" src="@/assets/sims-real.jpg" alt=""></div>
                <div class="beskrivelse">   
                    <p class="mx-8 text-lg fontFamily-JuliasFavoritt font-light">
                        18. semptember skal vi ha Sims-lan! Kom å møt oss for en snack,
                        spill og morro! :) <br>
                        Jippi! JA!
                    </p>
                </div>
            </div>
            <div class="element">
                <div class="picture"><img class="rounded-sm" src="@/assets/telttur-real.jpg" alt=""></div>
                <div class="beskrivelse">   
                    <p class="mx-8 text-lg fontFamily-JuliasFavoritt font-light">
                        18. semptember skal vi ha Sims-lan! Kom å møt oss for en snack,
                        spill og morro! :) <br>
                        Jippi! JA!
                    </p>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<style>

.kommende{
    @apply
    mt-6
}

.kommendeBilder{
    @apply
    max-w-[350px] 
    mx-2
    my-2
}

.wrapper{
    @apply
    mt-12
    my-2
}

.beskrivelse{
    @apply
    py-3 max-w-[350px] 
    mx-auto
}

.picture{
    @apply
    max-w-[350px] 
    mx-auto 
    shadow-sm shadow-black
}


@media only screen and (min-width: 900px){
    .wrapper{
        @apply
        grid grid-cols-2
    }

    .kommende{
        @apply
        grid-cols-2
        grid-rows-1
    }
    
}

@media only screen and (min-width: 1200px){
    .wrapper{
        @apply
        grid-cols-3
    }
}
    
</style>