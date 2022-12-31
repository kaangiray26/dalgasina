<template>
    <div class="card h-100 shadow-lg clickable" @click="startReading">
        <div class="card-body h-100 p-0">
            <img src="/cover.jpg" class="card-img h-100" alt="Cover">
            <div class="card-img-overlay">
                <div class="d-flex justify-content-center bg-dark py-3 mb-2">
                    <h3 class="card-title text-center fw-bold text-white m-0">Kaan Giray Buzluk</h3>
                </div>
                <h1 class="card-text text-center text-dark">Dalgasına</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

async function startReading() {
    router.push("/page/1");
}
</script>