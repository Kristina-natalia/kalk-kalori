<template>
  <div>
    <h2>Menu Makanan</h2>
    <ul class="menu-list">
      <li v-for="(makanan, index) in menuMakanan" :key="index" class="menu-item">
        <div class="makanan-item">
          <img :src="makanan.gambar" :alt="makanan.nama" class="makanan-gambar" @click="tambahkanMakanan(makanan)" />
          <div class="makanan-detail">
            <p>{{ makanan.nama }}</p>
            <p>{{ makanan.kalori }} kalori</p>
            <p>{{ makanan.deskripsi }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuMakanan: [
        { nama: 'Makanan 1', kalori: 200
