<script lang="ts">
export default{
    data (){
        return{}
    },
}
</script>

<template>
    <div class="footer">
        <div>
            <div class="mb-4">
                <h3 class="font-JuliasFavoritt font-semibold flex justify-center text-center">E-post </h3>
                <h3 class="font-JuliasFavoritt font-light flex justify-center text-center">progsys-styret@uio.no</h3>
            </div>
            <div class="flex justify-center">
                <div class="flex justify-between space-x-12">
                    <div class="scale-[300%]">
                        <a href="https://www.instagram.com/ifiprogsys/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                    <div class="scale-[300%]">
                        <a href="https://www.facebook.com/ifiprogsys" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.footer{
    @apply
    -z-50
    h-[100px]
    w-screen
    mb-8
    
}

</style>