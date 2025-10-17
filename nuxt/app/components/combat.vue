<script setup lang="ts">
import { BasePokemon } from '~/lib/pokemons/basePokemon';
import { Bulbasaur } from '~/lib/pokemons/bulbasaur';
import { Charmander } from '~/lib/pokemons/charmander';

const player = ref<BasePokemon>(new Bulbasaur());
const enemy = ref<BasePokemon>(new Charmander());

function Attack() {
    player.value.Attack(enemy.value)
}

function Run() {
    alert("You can't run!!")
}
</script>
<template>
    <main class="h-screen flex flex-col relative">
        <section class="absolute top-1 left-5 right-5 rounded p-3 bg-blue-700 z-10 text-center text-white">
            <span class="text-3xl">Your Turn!</span>
        </section>
        <section class="flex flex-1">
            <Combatant :is-player="true" :pokemon="player"></Combatant>
            <Combatant :is-player="false" :pokemon="enemy"></Combatant>
        </section>
        <section class="bg-slate-600 h-[30%] py-2 flex justify-center items-center">
            <div class="text-center text-white border rounded py-1 px-2">
                <p>What will you do?</p>
                <div class="r">
                    <ul class="grid grid-cols-2 grid-rows-2 gap-2">
                        <li class="cursor-pointer hover:text-[black]" @click="Attack">Attack</li>
                        <li class="cursor-pointer hover:text-[black]">Items</li>
                        <li class="cursor-pointer hover:text-[black]" @click="Run">Run</li>
                        <!-- <li class="cursor-pointer hover:text-[black]">> ???</li> -->
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>