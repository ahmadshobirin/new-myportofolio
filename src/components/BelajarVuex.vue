<template>
  <div>
    <div class="w-1/3 mx-auto mt-10 border-solid border-b-2 border-gray-400 mb-10">
      <div class="mt-2 mb-2">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Username</label>
        <input
          class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
          v-model="name"
        />
      </div>

      <div class="mt-2 mb-2">
        <button class="bg-green-800 text-white px-2 py-1 rounded" @click="addUsers()">Tambah</button>
      </div>
    </div>
    <div
      class="flex w-1/3 mx-auto mt-10 shadow-md px-6 py-4"
      v-for="(users, user) in users"
      :key="user"
    >
      <img :src="users.image" :alt="users.name" class="w-16 h-16 rounded-full" />

      <div class="ml-16">
        <h1 class="text-bold text-2xl">{{ users.name }}</h1>
        <div class="uppercase font-light text-xs tracking-widest">{{ users.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
    };
  },
  methods: {
    addUsers() {
      this.$store.dispatch("actionAddUser", this.name)
    },
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
};
</script>