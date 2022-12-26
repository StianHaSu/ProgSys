<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue"

</script>

<template>
    <div>
        <Header></Header>
    </div>
    <div class="greenhouse">
        <div class="overskrift">
            <h1 class="flex justify-center">Vår samarbeidspartner</h1>
            <h1 class="flex justify-center">DNB Greenhouse!</h1>
        </div>
        <div class="rammeWrapper">
            <div class="ramme">
                <img class="greenPicture" src="@/assets/greenhouse.jpg" alt="Bilde av fire ansatte ved DNB.">
            </div>
        </div>
        <div class="flex justify-center">
            <div class="wrapper">
                <div class="innhold">
                    <div class="description">
                        <p>
                            Greenhouse er et graudate-program for unge tech-talenter innen IT,
                            datateknologi og sikkerhet. Programmet er skreddersydd for at du
                            skal tilegne deg unik faglig kompetanse gjennom kombinasjon av
                            teori og praksis.
                        </p>
                        <p class="mt-4">
                            Som en del av Greenhouse blir du godt kjent med
                            banken og får muligheter til å jobbe med fagpersoner i flere ulike
                            IT-team. Greenhouse tilbyr tre ulike linjer; ettårig for utvikling,
                            toårig for sikkerhet og treårig for arkitektur.
                        </p>

                    </div>
                    <div class="quote">
                        <i class="fa fa-quote-right text-3xl mt-1" aria-hidden="true"></i>
                        <p class="text-2xl font-serif max-w-[400px]">
                            Vi er et ungt miljø med mye engasjement til å utvikle bærekraftige
                            løsninger for millioner av mennesker. Sammen finner vi på mye gøy.
                        </p>
                    </div>
                </div>
                <div class="jobs">
                    <div class="flex justify-center mt-2">
                        <i class="fa fa-briefcase text-3xl" aria-hidden="true"></i>
                    </div>
                    <div class="flex justify-center mt-2">
                        <a href="https://jobb.dnb.no/go/Studenter-og-Nyutdannede/4224101/" target="_blank">
                            <div class="border-2 border-slate-900 rounded-full max-w-[300px] hover:bg-emerald-500 hover:text-white">
                                    <h3 class="text-xl font-semibold my-2 mx-2 text-center">
                                        Sjekk ut ledige stillinger <i class="fa fa-external-link ml-1" aria-hidden="true"></i>
                                    </h3>
                            </div>
                        </a>
                    </div>
                    <div class="flex justify-center mt-16">
                        <p>
                            Klikk <a href="https://www.dnb.no/om-oss/jobb-og-karriere/greenhouse" target="_blank">her</a> for å lese mer om DNB Greenhouse:
                        </p>
                    </div>
                    <div class="flex justify-center mt-3">
                        <a href="https://www.dnb.no/om-oss/jobb-og-karriere/greenhouse" target="_blank">
                            <i class="fa fa-info-circle text-5xl hover:text-emerald-300" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <Footer></Footer>
    </div>
</template>

<style scoped>

.greenhouse {
    @apply
    min-h-screen
}

.jobs{
    @apply
    mt-12
    bg-slate-700
    pt-4
    pb-12
    bg-opacity-30
    px-4
}

.description {
    @apply
    mx-auto
    mt-12
    max-w-[600px]
    text-xl
    
}

.quote {
    @apply
    flex justify-center
    space-x-2
    mt-12
    mx-6 
}


.overskrift {
    @apply
    text-4xl
    font-sans
    mt-12
    space-y-3
    
}
.greenPicture{
    @apply
    rounded-md
    border-[3px]
    border-black
    
    
}

.ramme {
    @apply
    px-5 py-5
    rounded-md
    max-w-[1050px] 
}
.rammeWrapper {
    @apply
    flex justify-center
    mt-16
    
    
}

@media only screen and (max-width: 700px){
    .ramme {
        @apply
        px-2
        py-2
        mx-3
    }

    .ramme {
        @apply
        border-none
        shadow-none
    }

    .description {
        max-width: calc((100vw)*(4/5));
        @apply
        mt-6
    }


}

@media only screen and (min-width: 700px){
    .ramme {
        @apply
        px-3
        py-3
        mx-4
    }

    .overskrift {
        @apply
        text-[3rem]
        space-y-5
    }
}

@media only screen and (min-width: 1300px){
    .ramme {
        @apply
        px-4
        py-4
    }

    .overskrift {
        @apply
        text-[4rem]
        space-y-6
    }
}

@media screen and (min-width: 1000px) {
    .wrapper {
        @apply
        flex justify-items-start
        space-x-6
    }

    .innhold {
        @apply
        bg-none
    }

    .jobs {
        @apply
        mr-auto
        rounded-sm
        max-h-[300px]
    }
}

</style>