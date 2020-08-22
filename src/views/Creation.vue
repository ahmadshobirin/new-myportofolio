<template>
  <div>
    <div class="mt-10">
      <h3 class="font-bold text-3xl text-center title-menu">Karya</h3>
      <!-- <div class="border-b-2 border-red-400 mx-64 mt-2"></div> -->
    </div>
    <div class="flex flex-wrap items-center justify-center mt-10">
      <div class="shadow-lg w-1/4 my-2 rounded mx-4" v-for="(obj, val) in creations" :key="val">
        <img
          :src="val.cover"
          :alt="val.title"
        />
        <div class="p-6">
          <h4 class="font-bold">{{val.title}}</h4>
          <p class="text-sm mt-2">
            {{ val.content }}
          </p>
        </div>
        <div class="text-right mt-4 p-2">
          <button class="bg-blue-600 text-sm text-white py-1 px-3 rounded">Read More</button>
        </div>
      </div>

    </div>
    <div className="mt-4">
      <ul class="flex list-reset justify-center rounded w-auto font-sans">
        <li><a class="block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2" href="#">Previous</a></li>
        <li><a class="block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2" href="#">1</a></li>
        <li><a class="block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2" href="#">2</a></li>
        <li><a class="block text-white bg-blue border-r border-blue px-3 py-2" href="#">3</a></li>
        <li><a class="block hover:text-white hover:bg-blue text-blue px-3 py-2" href="#">Next</a></li>
      </ul>
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