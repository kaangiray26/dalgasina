<template>
    <div ref="thisElem" class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasRight"
        aria-labelledby="offcanvasLeftLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title text-decoration-underline" id="offcanvasLeftLabel">İçindekiler</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="list-group">
                <li v-for="(item, ind) in Object.keys(index)" class="list-group-item clickable list-group-item-action"
                    @click="changeTo(item)">
                    {{ ind + 2 }}. {{ index[item].title }}
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

async function changeTo(item) {
    offcanvas.hide();
    router.push("/page/" + item)
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