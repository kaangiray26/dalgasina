<template>
    <div class="card h-100 overflow-scroll shadow-lg">
        <div class="card-body position-relative p-5">
            <div class="d-inline-flex bg-body mb-4">
                <h5 class="card-title text-start text-body text-decoration-underline fw-bold m-0">Dalgasına - Kaan Giray
                    Buzluk</h5>
            </div>
            <div class="mb-4">
                <p class="card-text text-content">Bu şiir kitabı sekiz yılı aşkın bir zamanın ürünü olup, içinden
                    geçtiği farklı dönemlerin etkilerini dizelerinde taşımaktadır. Kitabı okumak için herhangi bir ücret
                    talep etmiyorum, çünkü şiir yazana değil; ihtiyacı olana aittir.</p>
                <p class="card-text text-content">Yazdıklarıma zaman ayıran herkese teşekkür ediyor ve iyi okumalar
                    diliyorum.</p>
            </div>
            <div class="d-flex justify-content-end">
                <button class="btn btn-dark" @click="readBook">Kitabı oku</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();


async function readBook() {
    router.push("/cover");
}
</script>