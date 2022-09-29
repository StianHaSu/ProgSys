<script setup lang="ts">

function showMenu (){
    var banner = document.getElementById("normalBannerId");
    var show = document.getElementById("menuId");
    var outer = document.getElementById("bannerId");

    if (show!.style.visibility != "visible"){
        outer!.style.backgroundColor = "rgb(249 115 22 / 70%)"
        
        banner!.style.visibility = "hidden"

        show!.style.visibility = "visible";
        show!.style.display = "block";
        show!.style.height = "100vh";

    } else {
        outer!.style.backgroundColor = "rgb(255 218 185 / 80%)"

        show!.style.visibility = "hidden";
        show!.style.display = "none";
        show!.style.height = "0vh";

        banner!.style.visibility = "visible"
    }
    
}
</script>
<template>
    <div id = "bannerId" class="header">
        <div id="normalBannerId" class="headerContent">
            <div class="mt-[15px] inline-block align-middle"><button @click="$router.push({name: 'home'})"><h1 class="font-bold text-[2rem] ml-8 hover:scale-105">ProgSys</h1></button></div>
            <div class="normal">
                <ul class="flex space-x-6 fontFamily-JuliasFavoritt font-light text-2xl mr-20">
                    <li><button class="hover:underline hover:scale-105" @click="$router.push({ name: 'arrangement' })">Arrangement</button></li>
                    <li><button class="hover:underline hover:scale-105" @click="$router.push({ name: 'kontakt' })">Kontakt</button></li>
                    <li><button class="hover:underline hover:scale-105" @click="$router.push({ name: 'styret' })">Styret</button></li>
                </ul>
            </div>
            <div class="mobile">
                <button @click="showMenu()"><h1>|||</h1></button>
            </div>
        </div>
    </div>
    <div>
        <div id="menuId" class="menu">
            <ul class="space-y-5 font-mono text-2xl">
                <li class="py-8 text-3xl font-bold"><button @click="$router.push({ name: 'home' })">ProgSys</button></li>
                <li><button @click="$router.push({ name: 'arrangement' }), showMenu()" class="hover:underline">Arrangement</button></li>
                <li><button @click="$router.push({ name: 'kontakt' }), showMenu()" class="hover:underline">Kontakt</button></li>
                <li><button @click="$router.push({ name: 'styret' }), showMenu()" class="hover:underline">Styret</button></li>
            </ul>
        </div>
    </div>

</template>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.header{
    @apply
    w-screen
    h-[70px]
    bg-peach
    bg-opacity-80
    z-50
}

.headerContent{
    @apply
    flex justify-between
    align-middle
}

.normal{
    @apply
    mt-[20px]
    text-center
}

.mobile{
    @apply
    hidden
    rotate-[90deg]
    text-4xl
    mr-12
    mt-[20px]
    font-semibold

}

.menu{
    @apply
    h-0
    bg-orange-500
    bg-opacity-70
    invisible
    text-center
}


@media only screen and (min-width: 1100px){
    .header{
        @apply
        h-[90px]
    }

    .normal{
        @apply
        mt-[25px]
    }
}

@media only screen and (max-width: 700px){
    .normal{
        @apply
        hidden
    }
    .mobile{
        display: inline;
        @apply
        visible
    }
}

</style>