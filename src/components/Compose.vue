<template>
  <div class="flex gap-3 items-center w-full">
    <textarea
      :value="value"
      rows="1"
      @input="$emit('input', $event.target.value)"
      @keypress.enter.prevent="$emit('submit')"
      class="flex-1 bg-light-gray appearance-none p-3 outline-none resize-none rounded-lg text-lg :max-rows:h-12 max-h-12"
      placeholder="Type your message here"
    />
    <button @click="$emit('submit')">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        enable-background="new 0 0 16 16"
      >
        <path
          d="M0,9l4,1.5L6,16l2.861-3.82L14,14l2-14L0,9z M7.169,11.44l-0.916,2.485l-1.086-3.118l8.402-7.631L7.169,11.44z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ComposeComponent',
  computed: {
    me() {
      return this.$store.state.me
    },
  },
  props: {
    value: {
      type: String,
      required: false,
    },
  },
}
</script>
