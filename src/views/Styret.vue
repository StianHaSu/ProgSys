<script setup lang="ts">
import Header from "../components/Header.vue";

</script>

<template>
    <div>
        <div><Header></Header></div>
        <div>
            <h1 class="text-center mt-5 text-2xl font-semibold">ProgSys styret 2022-2023</h1>
            <div class="medlemmer">
                <div class="mx-auto row-start-1 col-start-1 w-[80%] rounded-sm">
                    <img class="rounded-md" src="../../public/Julia.png" alt="Bilde av Julia">
                    <h3 class="text-start font-bold">Julia Lundeby</h3>
                    <h3 class="text-start font-semibold text-gray-500">Leder</h3>
                </div>
                <div class="mx-auto row-start-1 col-start-2 w-[80%] rounded-sm">
                    <img class="rounded-md" src="../../public/Ingela.png" alt="Bilde av Julia">
                    <h3 class="text-start font-bold">Ingela</h3>
                    <h3 class="text-start font-semibold text-gray-500">Nestleder</h3>
                </div>
                <div class="mx-auto row-start-2 col-start-1 w-[80%] rounded-sm mt-4">
                    <img class="rounded-md" src="../../public/Kjetil.png" alt="Bilde av Julia">
                    <h3 class="text-start font-bold">Kjetil Omang</h3>
                    <h3 class="text-start font-semibold text-gray-500">Økonomiansvarlig</h3>
                </div>
                <div class="mx-auto row-start-2 col-start-2 w-[80%] rounded-sm mt-4">
                    <img class="rounded-md" src="../../public/Stian.png" alt="Bilde av Julia">
                    <h3 class="text-start font-bold">Stian Sundkvist</h3>
                    <h3 class="text-start font-semibold text-gray-500">Arrangementansvarlig</h3>
                </div>
                <div class="mx-auto row-start-3 col-start-1 w-[80%] rounded-sm mt-4">
                    <img class="rounded-md" src="../../public/Kenneth.png" alt="Bilde av Julia">
                    <h3 class="text-start font-bold">Kenneth</h3>
                    <h3 class="text-start font-semibold text-gray-500">Teknisk ansvarlig</h3>
                </div>
                <div class="mx-auto row-start-3 col-start-2 w-[80%] rounded-sm mt-4">
                    <img class="rounded-md" src="../../public/Marius.png" alt="Bilde av Julia">
                    <h3 class="text-start font-bold">Marius</h3>
                    <h3 class="text-start font-semibold text-gray-500">Internansvarlig</h3>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<style>
.medlemmer{
    @apply
    mt-6
    grid grid-rows-[9]
    grid-cols-2
    grid-flow-row-dense
}
</style>