<script setup lang="ts">
import Header from "../components/Header.vue";

</script>

<template>
    <div>
        <div><Header></Header></div>
        <div>
            <h1 class="text-center mt-5 text-3xl font-JuliasFavoritt font-medium mb-8 mx-6">ProgSys styret 2022-2023</h1>
            <div class="medlemmer">
                <div class="mx-auto  w-[80%] rounded-sm">
                    <img class="rounded-md" src="../../public/Julia.png" alt="Bilde av Julia">
                    <h3 class="text-start font-JuliasFavoritt font-medium">Julia Lundeby</h3>
                    <h3 class="text-start font-JuliasFavoritt text-gray-500">Leder</h3>
                </div>
                <div class="mx-auto  w-[80%] rounded-sm">
                    <img class="rounded-md" src="../../public/Ingela.png" alt="Bilde av Julia">
                    <h3 class="text-start font-JuliasFavoritt font-medium">Ingela</h3>
                    <h3 class="text-start font-JuliasFavoritt text-gray-500">Nestleder</h3>
                </div>
                <div class="mx-auto  w-[80%] rounded-sm ">
                    <img class="rounded-md" src="../../public/Kjetil.png" alt="Bilde av Julia">
                    <h3 class="text-start font-JuliasFavoritt font-medium">Kjetil Omang</h3>
                    <h3 class="text-start font-JuliasFavoritt text-gray-500">Økonomiansvarlig</h3>
                </div>
                <div class="mx-auto w-[80%] rounded-sm ">
                    <img class="rounded-md" src="../../public/Stian.png" alt="Bilde av Julia">
                    <h3 class="text-start font-JuliasFavoritt font-medium">Stian Sundkvist</h3>
                    <h3 class="text-start font-JuliasFavoritt text-gray-500">Arrangement <br> ansvarlig</h3>
                </div>
                <div class="mx-auto w-[80%] rounded-sm ">
                    <img class="rounded-md" src="../../public/Kenneth.png" alt="Bilde av Julia">
                    <h3 class="text-start font-JuliasFavoritt font-medium">Kenneth</h3>
                    <h3 class="text-start font-JuliasFavoritt text-gray-500">Teknisk ansvarlig</h3>
                </div>
                <div class="mx-auto  w-[80%] rounded-sm ">
                    <img class="rounded-md" src="../../public/Marius.png" alt="Bilde av Julia">
                    <h3 class="text-start font-JuliasFavoritt font-medium">Marius</h3>
                    <h3 class="text-start font-JuliasFavoritt text-gray-500">Internansvarlig</h3>
                </div>
                <div class="mx-auto w-[80%] rounded-sm ">
                    <img class="rounded-md" src="../../public/Peter.png" alt="Bilde av Julia">
                    <h3 class="text-start font-JuliasFavoritt font-medium">Peter</h3>
                    <h3 class="text-start font-JuliasFavoritt text-gray-500">Styremedlem</h3>
                </div>
                <div class="mx-auto w-[80%] rounded-sm ">
                    <img class="rounded-md" src="../../public/Magnus.png" alt="Bilde av Julia">
                    <h3 class="text-start font-JuliasFavoritt font-medium">Magnus</h3>
                    <h3 class="text-start font-JuliasFavoritt text-gray-500">Styremedlem</h3>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style>
.medlemmer{
    @apply
    mt-6
    grid grid-rows-4
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