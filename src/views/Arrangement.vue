<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
    
</script>

<template>
    <div class="min-h-screen">
        <div>
            <Header></Header>
        </div>
        <div class="wrapper">
            <div class="firstArr">
                <div class="picture1"><img class="rounded-md" src="@/assets/baalTur.png" alt=""></div>
                <div class="py-3 max-w-[600px] mx-auto">
                    <p class="mx-8 text-lg fontFamily-JuliasFavoritt font-light">
                        Fredag 30. september tar vi turen opp til Sognsvann for en koselig 
                        båltur. Bli med oss for en hyggelig og uformell opplevelse!
                    </p>
                </div>
            </div>
            <div class="secondArr">
                <div class="picture2"><img class="rounded-md" src="@/assets/Sims.png" alt=""></div>
                <div class="">
                    <div class="py-3 max-w-[600px] mx-auto">   
                        <p class="mx-8 text-lg fontFamily-JuliasFavoritt font-light">
                            18. semptember skal vi ha Sims-lan! Kom å møt oss for en snack,
                            spill og morro! :) <br>
                            Jippi! JA!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<style>

.picture1{
    @apply
    max-w-[600px] 
    mx-auto 
    scale-[90%]
}

.picture2{
    @apply
    scale-[90%] 
    max-w-[600px] 
    mx-auto 
}

@media only screen and (min-width: 700px){
    .wrapper{
        @apply
        grid grid-cols-2
        
    }
    .firstArr{
        @apply
        col-start-1
        mx-4
    }
    .secondArr{
        @apply
        col-start-2
        mt-0
        mx-4
    }
}
    
</style>