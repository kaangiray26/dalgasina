<template>
    <div ref="thisElem" class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasRight"
        aria-labelledby="offcanvasLeftLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title text-decoration-underline" id="offcanvasLeftLabel">İçindekiler</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="list-group">
                <li class="list-group-item clickable list-group-item-action" @click="changeToCover">
                    <span class="fw-bold text-decoration-underline">Kapak</span>
                </li>
                <li v-for="(item, ind) in index.poems"
                    class="list-group-item clickable list-group-item-action d-flex align-items-center"
                    @click="changeTo(ind)">
                    <span class="badge text-bg-dark me-2">{{ ind + 1 }}</span><span class="fw-bold">{{ item.title
                        }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Offcanvas } from 'bootstrap';
import { useRouter } from 'vue-router';
import index from "/assets/index.json";

const router = useRouter();

let offcanvas = null;
const thisElem = ref(null);

async function changeToCover() {
    offcanvas.hide();
    router.push("/cover")
}

async function changeTo(index) {
    offcanvas.hide();
    router.push("/page/" + (index + 1))
}

async function _show() {
    offcanvas.show();
}

defineExpose({
    show: _show
});

onMounted(() => {
    offcanvas = new Offcanvas(thisElem.value);
})
</script>