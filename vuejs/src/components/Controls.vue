<template>
    <div class="btn-toolbar fixed-bottom justify-content-center p-4" role="toolbar"
        aria-label="Toolbar with button groups" @mouseenter="hide" @mouseleave="hide">
        <div class="btn-group me-2" :class="{ 'invisible': !visible }" role="group" aria-label="First group">
            <button type="button" class="btn btn-dark bi bi-layout-text-sidebar-reverse" @click="showIndex"></button>
            <button type="button" class="btn btn-dark bi bi-caret-left-fill" @click="prevPage"></button>
            <button type="button" class="btn btn-dark">{{ page_number }}</button>
            <button type="button" class="btn btn-dark bi bi-caret-right-fill" @click="nextPage"></button>
            <button type="button" class="btn btn-dark bi"
                :class="{ 'bi-sun-fill': store.mode == 'light', 'bi-moon-fill': store.mode == 'dark' }"
                @click="changeMode"></button>
        </div>
    </div>
    <Index ref="thisIndex" />
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '/js/store.js';
import Hammer from "hammerjs";
import index from "/assets/index.json";
import Index from './Index.vue';

const router = useRouter();
const thisIndex = ref(null);
const visible = ref(false);
const max_pages = ref(index.poems.length + 1);
const page_number = ref(1);

const query_param = computed(() => {
    return router.currentRoute.value.params.number;
})

async function showIndex() {
    thisIndex.value.show();
}

async function changeMode() {
    if (store.mode == 'light') {
        store.mode = 'dark';
        document.getElementsByTagName("html")[0].setAttribute('data-bs-theme', 'dark')
    } else {
        store.mode = 'light';
        document.getElementsByTagName("html")[0].setAttribute('data-bs-theme', 'light')
    }
}

async function hide() {
    visible.value = !visible.value;
}

function nextPage() {
    if (page_number.value < max_pages.value) {
        router.push("/page/" + (page_number.value + 1));
    }
}

function prevPage() {
    if (page_number.value > 1) {
        router.push("/page/" + (page_number.value - 1));
    }
}

async function keyPress(event) {
    if (event.key == 'ArrowLeft') {
        event.preventDefault();
        prevPage();
        return;
    }

    if (event.key == 'ArrowRight') {
        event.preventDefault();
        nextPage();
        return;
    }
}

watch(query_param, () => {
    page_number.value = parseInt(query_param.value);
})

onMounted(() => {
    page_number.value = parseInt(query_param.value);

    let hammertime = new Hammer(document.body);
    hammertime.on("swiperight", function () {
        prevPage();
        return;
    });
    hammertime.on("swipeleft", function () {
        nextPage();
        return;
    });

    window.focus();
    window.addEventListener('keydown', keyPress);
})
</script>