<script setup lang="ts">

function showMenu (){
    var banner = document.getElementById("normalBannerId");
    var show = document.getElementById("menuId");
    var outer = document.getElementById("bannerId");
    
    var burger = document.getElementById("burger");
    var b1 = document.getElementById("burger1");
    var b2 = document.getElementById("burger2");
    var b3 = document.getElementById("burger3");

    if (show!.style.visibility != "visible"){
        outer!.style.backgroundColor = "rgb(249 115 22 / 70%)"
        
        banner!.style.visibility = "hidden"

        show!.style.visibility = "visible";
        show!.style.display = "block";
        show!.style.height = "100vh";

        b2!.style.opacity ="0%";
        b2!.style.visibility ="hidden";

        b3!.innerHTML = "|";
        

        b1!.style.position = "absolute";
        b3!.style.position = "absolute";

        b3!.style.marginLeft = "5px";

        b1!.style.rotate = "-45deg";
        b3!.style.rotate = "45deg";

        

    } else {
        outer!.style.backgroundColor = "rgb(255 218 185 / 5%)"

        show!.style.visibility = "hidden";
        show!.style.display = "none";
        show!.style.height = "0vh";

        banner!.style.visibility = "visible"
        b2!.style.opacity ="100%";

        b1!.style.rotate = "0deg";
        b3!.style.rotate = "0deg";

        b3!.innerHTML = "|";

        b3!.style.marginLeft = "0px";
        
        b1!.style.position = "relative";
        b3!.style.position = "relative";
        b2!.style.visibility ="visible";

        
    }
    
}
</script>
<template>
    <div id = "bannerId" class="header">
        <div id="normalBannerId" class="headerContent">
            <div class="mt-[15px] inline-block align-middle"><button @click="$router.push({name: 'home'})"><h1 class="font-light font-['Open Sans'] text-[2.2rem] ml-8 ">ProgSys</h1></button></div>
            <div class="normal">
                <ul class="flex space-x-6 fontFamily-JuliasFavoritt font-light text-2xl mr-20">
                    <li><button @click="$router.push({ name: 'arrangement' })">Arrangement</button></li>
                    <li><button @click="$router.push({ name: 'samarbeidspartner' })">Samarbeidspartner</button></li>
                    <li><button @click="$router.push({ name: 'styret' })">Styret</button></li>
                </ul>
            </div>
            <div class="mobile">
                <button @click="showMenu()">
                    <div id="burger" class="burgeren">
                        <div id="burger1" class="text-center"><h1>|</h1></div>
                        <div id="burger2" class="text-center"><h1>|</h1></div>
                        <div id="burger3" class="text-center"><h1>|</h1></div>
                    </div>
                </button>
            </div>
        </div>
    </div>
    <div>
        <div id="menuId" class="menu">
            <ul class="space-y-5 font-mono text-2xl">
                <li class="py-8 text-3xl font-JuliasFavoritt font['Open Sans']"><button @click="$router.push({ name: 'home' })">ProgSys</button></li>
                <li><button @click="$router.push({ name: 'arrangement' }), showMenu()" class="hover:underline">Arrangement</button></li>
                <li><button @click="$router.push({ name: 'samarbeidspartner' }), showMenu()" class="hover:underline">Samarbeidspartner</button></li>
                <li><button @click="$router.push({ name: 'styret' }), showMenu()" class="hover:underline">Styret</button></li>
            </ul>
        </div>
    </div>

</template>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.burgeren{
    @apply
    flex justify-between
}

.header{
    @apply
    w-screen
    h-[70px]
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

#burger1{
    @apply
    transition-[rotate]
    duration-300
    
}

#burger2{
    @apply
    transition-[opacity]
    duration-[1s]
}

#burger3{
    @apply
    transition-[rotate]
    duration-300
}

.mobile{
    @apply
    hidden
    rotate-[90deg]
    text-4xl
    mr-12
    mt-[20px]
    font-light

}

#menuId{
    @apply
    animate-[height] 
    duration-300

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