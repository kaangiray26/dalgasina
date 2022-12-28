<template>
    <div class="vh-100 vw-100">
        <div class="row h-100 g-0 justify-content-center">
            <div class="col-12 col-sm-12 col-md-10  col-lg-4 h-100 p-4">
                <router-view :key="$route.fullPath"></router-view>
            </div>
        </div>
        <Controls />
    </div>
</template>

<script setup>
import Controls from './Controls.vue';
</script>