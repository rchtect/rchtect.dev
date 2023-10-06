<template>
  <div
    class="navbar bg-white bg-opacity-10 backdrop-blur-sm shadow-sm"
  >
    <div class="navbar-start">
      <div class="dropdown mobile">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a href="#" class="text-lg hover:bg-white hover:bg-opacity-20"
              >Projects</a
            >
          </li>
          <li>
            <a href="#" class="text-lg hover:bg-white hover:bg-opacity-20"
              >About</a
            >
          </li>
          <li>
            <a href="#" class="text-lg hover:bg-white hover:bg-opacity-20"
              >Contact</a
            >
          </li>
        </ul>
      </div>
      <div class="hidden lg:flex">
        <nuxt-link to="/"
          ><a
            class="text-xl font-bold hover:text-primary hover:cursor-pointer"
            v-text="Author"
          ></a
        ></nuxt-link>
      </div>
    </div>
    <div class="lg:hidden navbar-center">
      <nuxt-link to="/"
        ><a class="text-xl font-bold" v-text="Author"></a
      ></nuxt-link>
    </div>
    <div class="navbar-center hidden lg:flex lg:justify-items">
      <ul class="menu menu-horizontal px-1">
        <li class="mx-2">
          <a href="#" class="hover:text-primary hover:bg-base-200">Projects</a>
        </li>
        <li class="mx-2">
          <a href="#" class="hover:text-primary hover:bg-base-200">About</a>
        </li>
        <li class="mx-2">
          <a href="#" class="hover:text-primary hover:bg-base-200">Contact</a>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <ThemeButton/>
    </div>
  </div>
</template>

<script setup>
const Author = "<rchtect/>";
</script>
