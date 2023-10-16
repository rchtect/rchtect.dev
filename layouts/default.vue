<template>

<div class=" px-9 py-2 flex flex-col justify-between h-[100vh] place-items-center">
    <Navbar class="px-9 rounded-xl h-15 fixed" />
    <div class="mt-28 prose max-w-[80vw]">
      <slot />
    </div>
    <Footer class="mt-10"/>
  </div>

</template>