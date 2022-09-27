<script setup lang="ts">

function showMenu (){
    var banner = document.getElementById("normalBannerId");
    var show = document.getElementById("menuId");
    var outer = document.getElementById("bannerId");

    if (show!.style.visibility != "visible"){
        outer!.style.backgroundColor = "rgb(249 115 22 / 70%)"
        
        banner!.style.visibility = "hidden"
        outer!.style.borderBottomLeftRadius= "0px";
        outer!.style.borderBottomRightRadius = "0px";

        show!.style.visibility = "visible";
        show!.style.display = "block";
        show!.style.height = "100vh";

    } else {
        outer!.style.backgroundColor = "rgb(255 218 185 / 80%)"

        outer!.style.borderBottomLeftRadius= "12px";
        outer!.style.borderBottomRightRadius = "12px";

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
            <div class="mt-[25px] inline-block align-middle"><button @click="$router.push({name: 'home'})"><img class="ml-10" src="../../public/LogoPSys.png" alt="ProgSys logoen"></button></div>
            <div class="normal">
                <ul class="flex space-x-6 font-mono text-2xl mr-8">
                    <li><button>Arrangement</button></li>
                    <li><button>Kontakt</button></li>
                    <li><button>Styret</button></li>
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
                <li class="py-8 text-3xl font-bold"><button>ProgSys</button></li>
                <li><button class="hover:underline">Arrangement</button></li>
                <li><button class="hover:underline">Kontakt</button></li>
                <li><button @click="$router.push({ name: 'styret' })" class="hover:underline">Styret</button></li>
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
    h-[100px]
    bg-peach
    bg-opacity-80
    rounded-b-xl
}

.headerContent{
    @apply
    flex justify-between
    align-middle
}

.normal{
    @apply
    mt-[25px]
    text-center
}

.mobile{
    @apply
    hidden
    rotate-[90deg]
    text-4xl
    mr-12
    mt-[25px]
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


.rounded-b-xl {
    border-bottom-right-radius: 0.75rem/* 12px */;
    border-bottom-left-radius: 0.75rem/* 12px */;
}

.rounded-b-none {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

@media only screen and (min-width: 1100px){
    .header{
        @apply
        h-[120px]
        
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