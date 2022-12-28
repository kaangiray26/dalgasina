<template>
    <div class="card m-4">
        <div class="card-body">
            <h5 class="card-title text-center fw-bold pb-2">{{ title }}</h5>
            <p class="card-text text-start">{{ text }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('Kitap İsmi Üzerine');
const text = ref(`Kitap ismi olarak öncesinde "Çocukluk" ismini düşünmüştüm, benim toy hallerimi, zayıflıklarımı, gülünç, çocuksu düşüncelerimi anlatacaktı. Şimdiyse daha güzel bir isim bulduğumu sanıyorum; "Dalgasına". "Dalgasına" hem denizi çağrıştırıyor, hem de yazılan tüm bunların bir hiç uğruna yazıldığını anlatıyor. Madem yapılan her şey zaten bir gün geri dönecek, bunu biliyorum ve "Dalgasına" diyorum.`);
</script>