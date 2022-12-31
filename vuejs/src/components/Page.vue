<template>
    <div class="card h-100 position-relative overflow-scroll shadow-lg">
        <div class="card-body p-5">
            <div class="d-inline-flex bg-body mb-4">
                <h5 class="card-title text-start text-body text-decoration-underline fw-bold m-0">{{ title }}</h5>
            </div>
            <div>
                <p class="card-text text-content">{{ content }}</p>
            </div>
        </div>
        <div class="d-flex justify-content-end p-4">
            <span>{{ page_number }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import index from "/assets/index.json";

const router = useRouter();
const title = ref('');
const content = ref('');

const page_number = computed(() => {
    return router.currentRoute.value.params.number;
})

async function get_poem() {
    let poem = index.poems[page_number.value - 1];
    title.value = poem.title;
    content.value = poem.content;
}

watch(page_number, () => {
    get_poem();
})

onMounted(() => {
    console.log("Get Page...");
    get_poem();
})
</script>