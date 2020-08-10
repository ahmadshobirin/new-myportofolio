<template>
  <div>
    <div
      class="flex w-1/3 mx-auto mt-10 shadow-lg px-6 py-4" v-for="(users, user) in $store.state.users" :key="user"
    >
      <img :src="users.image" :alt="users.name" class="w-16 h-16 rounded-full" />

      <div class="ml-16">
        <h1 class="text-bold text-2xl">{{ users.name }}</h1>
        <div class="uppercase font-light text-xs tracking-widest">{{ users.description }}</div>
      </div>

    </div>
  </div>
</template>