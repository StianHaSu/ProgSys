<script>
const bilde1 = new URL('../assets/Sims.png', import.meta.url).href;
const bilde2 = new URL('../assets/baalTur.png', import.meta.url).href;
const bilde3 = new URL('../assets/Bowling.png', import.meta.url).href;

export default{
    data (){
        return {
            array: [bilde1, bilde2, bilde3],
            bilde: bilde1,
            counter: 0,
            pressed: false,
        }
    },
    methods: {
        async changePicture(dir){
            var b = document.getElementById("bilde");
            b.style.opacity = "0";

            await new Promise(r => setTimeout(r, 500));

            console.log(this.counter);
            this.counter += dir

            if (this.counter < 0){
                this.counter = this.array.length-1
            } else if (this.counter > this.array.length-1){
                this.counter = 0
            }

            this.bilde = this.array[this.counter];

            b.style.opacity = "1";

        },


        async autoChange(){
            while (!this.pressed){
                await new Promise(r => setTimeout(r, 6000));
                if (!this.pressed) this.changePicture(1);
            }
        },
    },

    beforeMount(){
        this.autoChange()
    },
}


</script>

<template>
<div>
    <div class="border border-black border-y-2 border-x-2 shadow-sm shadow-black bg-black bg-opacity-60">
        <img id="bilde" class="b" :src="bilde" alt="">
    </div>
    <div class="space-x-4 mt-2 flex justify-center text-4xl ">
        <div class="border border-black shadow shadow-black">
            <button class="mx-16" @click="changePicture(-1), this.pressed=true"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></button>
        </div>
        <div class="border border-black shadow shadow-black">
            <button class="mx-16" @click="changePicture(1), this.pressed=true"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </button></div>
    </div>
</div>
</template>

<style>

.b{ 
    transition-duration: 500ms;
    @apply
    transition-opacity
    w-[350px] h-[350px]
    
}

</style>
