<template>
  <button
    class="
      m-4
      flex
      w-5/6
      flex-row
      items-start
      justify-center
      rounded-xl
      bg-indigo-500
      py-3
      text-center text-2xl
      font-bold
      uppercase
      text-white
      no-underline
      hover:bg-indigo-600
      active:border-black active:bg-indigo-900 active:text-indigo-200
    "
  >
    <slot />
  </button>
</template>
