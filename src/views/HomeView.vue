<script setup lang="ts">
    import Header from "../components/Header.vue"
    import Footer from "../components/Footer.vue"
</script>
<template>
    <div class="min-h-[100vh]">
        <div>
            <Header></Header>
        </div>
        <div class="semester">
            <img src="../../public/Semesterplan.png" alt="Semesterplan">
        </div>
    </div>
    <Footer></Footer>
</template>
<style>

.semester{
    @apply
    scale-75
    flex justify-center
}

</style>