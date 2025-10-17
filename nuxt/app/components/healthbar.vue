<script setup lang="ts">
const props = defineProps<{
    currentHp: number,
    maxHp: number
}>()
const hpVisual = computed(() => `${(props.currentHp / props.maxHp) * 100}%`)
</script>
<template>
    <div class="flex flex-col sm:flex-row items-center sm:gap-2">
        <div class="w-full sm:w-0 sm:flex-1 h-[5px] rounded relative">
            <div class="w-full h-full bg-slate-300"></div>
            <div class="h-full bg-green-600 transition-all duration-300 absolute top-0 left-0" :style="{width: hpVisual}"></div>
        </div>
        <div></div>
        <span>{{ props.currentHp }} / {{ props.maxHp }}</span>
    </div>
</template>