<template>
  <div
    class="flex gap-4 justify-start items-start"
    :class="{
      'flex-row-reverse items-end': entry.from.id === me.id,
    }"
  >
    <div
      class="w-12 h-12 rounded-full bg-cover"
      :style="{ backgroundImage: `url(${entry.from.thumbnail})` }"
    ></div>
    <div
      class="flex-grow-0 rounded-lg p-2 max-w-[60%] bg-light-gray text-black"
      :class="{
        '!bg-blue text-white': entry.from.id === me.id,
      }"
    >
      {{ entry.message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageEntryComponent',
  components: {},
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
  computed: {
    me() {
      return this.$store.state.me
    },
  },
}
</script>
