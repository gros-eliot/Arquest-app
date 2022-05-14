<template>
  <div
    class="
      bg-transparent
      text-indigo-500
      border-2 border-indigo-500
      font-bold
      w-5/6
      py-3
      m-4
      uppercase
      text-center
      no-underline
      rounded-xl
      text-base
      flex flex-row
      items-start
      justify-center
      active:bg-black active:bg-opacity-25 active:text-black active:border-black
      hover:bg-indigo-500 hover:bg-opacity-25
    "
  >
    <slot />
  </div>
</template>