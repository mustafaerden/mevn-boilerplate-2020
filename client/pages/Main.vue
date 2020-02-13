<template>
  <div class="main-page">
    <div class="h-2 w-full bg-yellow-600"></div>
    <div class="w-full h-16 px-6 flex items-center justify-between">
      <router-link to="/" class="text-yellow-600 font-bold text-2xl"
        >MevnStack</router-link
      >
      <div>
        <router-link
          class="text-gray-700 mr-3 hover:text-yellow-600"
          to="/auth/login"
          >Sign In</router-link
        >
        <router-link
          class="text-gray-700 border-2 border-yellow-600 px-3 py-2 rounded-full hover:text-yellow-600"
          to="/auth/register"
          >Join Now</router-link
        >
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
