<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

</script>

<template>
    <div class="min-h-[100vh]">
        <div><Header></Header></div>
        <div>
            <h1 class="text-center mt-5 text-3xl font-JuliasFavoritt font-medium mx-6">ProgSys styret 2022-2023</h1>
            <i class="fa fa-users mt-6 flex justify-center scale-[2]" aria-hidden="true"></i>
            <div class="medlemmer">
                <div class="mx-auto w-[80%] rounded-sm">
                    <img class="rounded-md" src="../../public/Julia-kopi.jpg" alt="Bilde av Julia">
                    <h3 class="text-start font-JuliasFavoritt font-medium">Julia Lundeby</h3>
                    <h3 class="text-start font-JuliasFavoritt text-gray-500">Leder</h3>
                </div>
                <div class="mx-auto  w-[80%] rounded-sm">
                    <img class="rounded-md" src="../../public/Ingela-kopi.jpg" alt="Bilde av Julia">
                    <h3 class="text-start font-JuliasFavoritt font-medium">Ingela Aaser</h3>
                    <h3 class="text-start font-JuliasFavoritt text-gray-500">Nestleder</h3>
                </div>
                <div class="mx-auto  w-[80%] rounded-sm ">
                    <img class="rounded-md" src="../../public/Kjetil-kopi.jpg" alt="Bilde av Julia">
                    <h3 class="text-start font-JuliasFavoritt font-medium">Kjetil Omang</h3>
                    <h3 class="text-start font-JuliasFavoritt text-gray-500">Økonomiansvarlig</h3>
                </div>
                <div class="mx-auto w-[80%] rounded-sm ">
                    <img class="rounded-md" src="../../public/Kenneth-kopi.jpg" alt="Bilde av Julia">
                    <h3 class="text-start font-JuliasFavoritt font-medium">Kenneth Sydness</h3>
                    <h3 class="text-start font-JuliasFavoritt text-gray-500">Teknisk ansvarlig</h3>
                </div>
                <div class="mx-auto w-[80%] rounded-sm ">
                    <img class="rounded-md" src="../../public/Stian-kopi.jpg" alt="Bilde av Julia">
                    <h3 class="text-start font-JuliasFavoritt font-medium">Stian Sundkvist</h3>
                    <h3 class="text-start font-JuliasFavoritt text-gray-500">Arrangement <br> ansvarlig</h3>
                </div>
                <div class="mx-auto w-[80%] rounded-sm ">
                    <img class="rounded-md" src="../../public/Triera-kopi.jpg" alt="Bilde av Julia">
                    <h3 class="text-start font-JuliasFavoritt font-medium">Triera Gashi</h3>
                    <h3 class="text-start font-JuliasFavoritt text-gray-500">Promoterings <br> ansvarlig</h3>
                </div>
                <div class="mx-auto  w-[80%] rounded-sm ">
                    <img class="rounded-md" src="../../public/Marius-kopi.jpg" alt="Bilde av Julia">
                    <h3 class="text-start font-JuliasFavoritt font-medium">Marius Lund-Hansen</h3>
                    <h3 class="text-start font-JuliasFavoritt text-gray-500">Internansvarlig</h3>
                </div>
                <div class="mx-auto w-[80%] rounded-sm ">
                    <img class="rounded-md" src="../../public/Peter-kopi.jpg" alt="Bilde av Julia">
                    <h3 class="text-start font-JuliasFavoritt font-medium">Peter Petersen-Øverleis</h3>
                    <h3 class="text-start font-JuliasFavoritt text-gray-500">Styremedlem</h3>
                </div>
                <div class="mx-auto w-[80%] rounded-sm ">
                    <img class="rounded-md" src="../../public/Magnus-kopi.jpg" alt="Bilde av Julia">
                    <h3 class="text-start font-JuliasFavoritt font-medium">Magnus Økstad</h3>
                    <h3 class="text-start font-JuliasFavoritt text-gray-500">Styremedlem</h3>
                </div>
                
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<style scoped>
.medlemmer{
    @apply
    mt-11
    grid grid-rows-5
    grid-cols-2
    grid-flow-row-dense
}


@media only screen and (min-width: 800px){
    .medlemmer{
        @apply
        grid-cols-3
        grid-rows-3

    }
}

@media only screen and (min-width: 1200px){
    .medlemmer{
        @apply
        grid-cols-4
        grid-rows-2

    }
}


</style>