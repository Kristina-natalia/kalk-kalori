<template>
  <div>
    <MenuMakanan @tambah-makanan="tambahkanMakanan" />
    <DaftarMakanan :pilihanMakanan="pilihanMakanan" @hapus-makanan="hapusMakanan" />
    <HitungKalori :pilihanMakanan="pilihanMakanan" :kebutuhanKalori="kebutuhanKalori" />
  </div>
</template>

<script>
import MenuMakanan from '@/components/MenuMakanan.vue';
import DaftarMakanan from '@/components/DaftarMakanan.vue';
import HitungKalori from '@/components/HitungKalori.vue';

export default {
  name: 'Home',
  components: {
    MenuMakanan,
    DaftarMakanan,
    HitungKalori,
  },
  data() {
    return {
      pilihanMakanan: [],
      kebutuhanKalori: 2000, // Ganti dengan kebutuhan kalori yang sesuai
    };
  },
  methods: {
    tambahkanMakanan(makanan) {
      this.pilihanMakanan.push(makanan);
    },
    hapusMakanan(index) {
      this.pilihanMakanan.splice(index, 1);
    },
  },
};
</script>

<style scoped>
/* Gaya CSS sesuai keinginan Anda */
</style>
