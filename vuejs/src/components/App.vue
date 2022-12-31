<template>
    <div class="vh-100 vw-100">
        <div class="row h-100 g-0 justify-content-center">
            <div class="col-12 col-sm-10 col-md-8 col-lg-8 col-xl-6 col-xxl-4 h-100 p-4">
                <router-view></router-view>
            </div>
        </div>
    </div>
    <Controls />
</template>

<script setup>
import Controls from './Controls.vue';
</script>