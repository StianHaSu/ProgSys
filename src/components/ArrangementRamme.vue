<script lang="ts">

export default{
    name: "ArrangementRamme",
    props: {
        pathToPicture: String 
    }
}
</script>
<template>
    <div class="arrangement"><img class="rounded-sm" :src="require('@/assets/' + pathToPicture)" ></div>
</template>

<style>

.arrangement{
    @apply
    scale-[90%]
}


</style>