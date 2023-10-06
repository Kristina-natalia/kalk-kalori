<template>
  <div>
    <h2>Daftar Makanan Dipilih</h2>
    <ul class="daftar-list">
      <li v-for="(makanan, index) in pilihanMakanan" :key="index" class="daftar-item">
        <div class="makanan-item">
          <img :src="makanan.gambar" :alt="makanan.nama" class="makanan-gambar" />
          <div class="makanan-detail">
            <p>{{ makanan.nama }}</p>
            <p>{{ makanan.kalori }} kalori</p>
            <button @click="hapusMakanan(index)" class="btn-hapus">Hapus</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['pilihanMakanan'],
  methods: {
    hapusMakanan(index) {
      this.$emit('hapus-makanan', index);
    },
  },
};
</script>

<style scoped>
/* Gaya CSS untuk tampilan daftar makanan */
.daftar-list {
  list-style: none;
  padding: 0;
}

.daftar-item {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-hapus {
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-hapus:hover {
  background-color: #c82333;
}
</style>
