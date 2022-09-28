<script setup lang="ts">
    import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
</script>
<template>
    <div>
        <Header></Header>
    </div>
    <div class="semester">
        <img src="../../public/Semesterplan.png" alt="Semesterplan">
    </div>
</template>
<style>

.semester{
    @apply
    scale-75
}

</style>