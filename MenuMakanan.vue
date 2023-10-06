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
        { nama: 'Makanan 1', kalori: 200, gambar: 'path/ke/gambar1.jpg', deskripsi: 'Deskripsi Makanan 1' },
        { nama: 'Makanan 2', kalori: 300, gambar: 'path/ke/gambar2.jpg', deskripsi: 'Deskripsi Makanan 2' },
        // Tambahkan menu makanan lainnya dengan gambar, deskripsi yang sesuai
      ],
    };
  },
  methods: {
    tambahkanMakanan(makanan) {
      this.$emit('tambah-makanan', makanan);
    },
  },
};
</script>

<style scoped>
/* Gaya CSS untuk tampilan menu makanan */
.menu-list {
  list-style: none;
  padding: 0;
}

.menu-item {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer; /* Menambahkan efek pointer ketika hover */
}

.makanan-item {
  display: flex;
  align-items: center;
}

.makanan-gambar {
  max-width: 100px;
  margin-right: 10px;
}

/* Menambahkan transisi ketika dihover */
.menu-item:hover {
  transform: scale(1.03);
  transition: transform 0.2s ease-in-out;
}
</style>
