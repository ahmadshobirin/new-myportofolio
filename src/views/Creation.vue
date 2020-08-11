<template>
  <div>
    <div class="mt-10">
      <h3 class="font-bold text-3xl text-center title-menu">Karya</h3>
      <!-- <div class="border-b-2 border-red-400 mx-64 mt-2"></div> -->
    </div>
    <div class="flex items-center justify-center mt-10">
      <div class="shadow-lg w-64 mx-4">
        <img
          src="https://images.unsplash.com/photo-1504575958497-ccdd586c2997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=754&q=80"
          alt="koala"
        />
        <div class="p-6">
          <h4 class="font-bold">Halo, nama saya Koala!</h4>
          <p
            class="text-sm mt-2"
          >Saya kadang menjadi seekor kadang pula seseorang yang hidup di dalam rumah dan saya bekerja sebagai programmer.</p>
        </div>
        <div class="text-right mt-4 p-2">
          <button class="bg-blue-600 text-sm text-white py-1 px-3 rounded">Read More</button>
        </div>
      </div>
      <div class="shadow-lg w-64 mx-4">
        <img
          src="https://images.unsplash.com/photo-1504575958497-ccdd586c2997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=754&q=80"
          alt="koala"
        />
        <div class="p-6">
          <h4 class="font-bold">Halo, nama saya Koala!</h4>
          <p
            class="text-sm mt-2"
          >Saya kadang menjadi seekor kadang pula seseorang yang hidup di dalam rumah dan saya bekerja sebagai programmer.</p>
        </div>
        <div class="text-right mt-4 p-2">
          <button class="bg-blue-600 text-sm text-white py-1 px-3 rounded">Read More</button>
        </div>
      </div>
      <div class="shadow-lg w-64 mx-4">
        <img
          src="https://images.unsplash.com/photo-1504575958497-ccdd586c2997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=754&q=80"
          alt="koala"
        />
        <div class="p-6">
          <h4 class="font-bold">Halo, nama saya Koala!</h4>
          <p
            class="text-sm mt-2"
          >Saya kadang menjadi seekor kadang pula seseorang yang hidup di dalam rumah dan saya bekerja sebagai programmer.</p>
        </div>
        <div class="text-right mt-4 p-2">
          <button class="bg-blue-600 text-sm text-white py-1 px-3 rounded">Read More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Creation",
  computed: {
    creations() {
      return this.$store.state.creations;
    },
  },
  mounted() {
    this.$store.dispatch("getCreations");
  },
};
</script>