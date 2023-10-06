<template>
  <div>
    <h2>Total Kalori</h2>
    <p>Total Kalori: {{ totalKalori }}</p>
    <p>Status: {{ statusKebutuhanKalori }}</p>
  </div>
</template>

<script>
export default {
  props: ['pilihanMakanan', 'kebutuhanKalori'],
  computed: {
    totalKalori() {
      return this.pilihanMakanan.reduce((total, makanan) => total + makanan.kalori, 0);
    },
    statusKebutuhanKalori() {
      if (this.totalKalori >= this.kebutuhanKalori) {
        return 'Cukup';
      } else {
        return 'Kurang';
      }
    },
  },
};
</script>
