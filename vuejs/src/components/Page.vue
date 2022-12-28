<template>
    <div class="card h-100 overflow-scroll shadow-lg">
        <div class="card-body position-relative p-5">
            <div class="d-inline-flex bg-body mb-4">
                <h5 class="card-title text-start text-body text-decoration-underline fw-bold m-0">{{ title }}</h5>
            </div>
            <div>
                <p class="card-text text-content">{{ content }}</p>
            </div>
            <div class="position-absolute bottom-0 right-0 p-5">
                <span>{{ page_number }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import index from "/assets/index.json";

const router = useRouter();

const page_number = ref(0);
const title = ref('');
const content = ref('');

const query_param = computed(() => {
    return router.currentRoute.value.params.number;
})

async function get_poem() {
    page_number.value = parseInt(router.currentRoute.value.params.number);
    let poem = index[page_number.value];
    title.value = poem.title;
    content.value = poem.content;
}

watch(query_param, () => {
    get_poem();
})

onMounted(() => {
    get_poem();
})
</script>