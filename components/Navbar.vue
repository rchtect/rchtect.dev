<template>
  <div class="navbar bg-white bg-opacity-10 backdrop-blur-sm shadow-sm">
    <div class="navbar-start">
      <div class="dropdown mobile">
        <label tabindex="0" class="btn btn-ghost lg:hidden" onclick="this.parentElement.classList.toggle('dropdown-open');document.activeElement.blur()">
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
            <nuxt-link to="/projects" class="hover:bg-white hover:bg-opacity-20 hover:text-primary"
              ><a class="text-lg"
                >Projects</a
              ></nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/about" class="hover:bg-white hover:bg-opacity-20 hover:text-primary"
              ><a class="text-lg"
                >About</a
              ></nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/contact" class="hover:bg-white hover:bg-opacity-20 hover:text-primary"
              ><a class="text-lg"
                >Contact</a
              ></nuxt-link
            >
          </li>
        </ul>
      </div>
      <div class="hidden lg:flex">
        <nuxt-link to="/"
          ><a
            class="text-lg font-bold hover:text-primary hover:cursor-pointer"
            v-text="Author"
          ></a
        ></nuxt-link>
      </div>
    </div>
    <div class="lg:hidden navbar-center">
      <nuxt-link to="/"><a class="text-xl" v-text="Author"></a></nuxt-link>
    </div>
    <div class="navbar-center hidden lg:flex lg:justify-items">
      <ul class="menu menu-horizontal px-1">
        <li class="mx-2">
          <nuxt-link to="/projects" class="hover:bg-white hover:bg-opacity-20 hover:text-primary"
            ><a
              >Projects</a
            ></nuxt-link
          >
        </li>
        <li class="mx-2">
          <nuxt-link to="/about" class="hover:bg-white hover:bg-opacity-20 hover:text-primary"
            ><a
              >About</a
            ></nuxt-link
          >
        </li>
        <li class="mx-2">
          <nuxt-link to="/contact" class="hover:bg-white hover:bg-opacity-20 hover:text-primary"
            ><a
              >Contact</a
            ></nuxt-link
          >
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <ThemeButton />
    </div>
  </div>
</template>

<script setup>
const Author = "<rchtect/>";
</script>
