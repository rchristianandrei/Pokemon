<script setup lang="ts">
import type { BasePokemon } from '~/lib/pokemons/basePokemon';

const props = defineProps<{
    isPlayer: boolean,
    pokemon: BasePokemon
}>()
</script>
<template>
    <section class="flex-1 flex justify-center items-center relative"
        :class="props.isPlayer ? 'bg-blue-300' : 'bg-red-300'">

        <div :class="props.isPlayer ? 'transform scale-x-[-1]' : ''">
            <img class="w-[300px]" :src="props.pokemon.sprite" :alt="props.pokemon.name">
        </div>

        <section class="absolute bottom-2 border rounded w-[90%] p-1">
            <div class="flex flex-col sm:flex-row justify-between">
                <p>{{ props.pokemon.name }}</p>
                <p>Lvl: 1</p>
            </div>
            <healthbar :current-hp="props.pokemon.currentHp" :max-hp="props.pokemon.maxHp"></healthbar>
        </section>

    </section>
</template>
<style scoped>
@keyframes shake {

    0%,
    100% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-5px);
    }

    50% {
        transform: translateX(5px);
    }

    75% {
        transform: translateX(-5px);
    }
}

.shake {
    animation: shake 0.5s ease-in-out infinite;
}
</style>