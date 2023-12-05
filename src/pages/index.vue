<script setup lang="ts">
// const client = useSupabaseClient()

// const { data: boxes } = await useAsyncData('boxes', async () => client.from('boxes').select('*'))
// // const countries = ref(data)
// console.log(boxes.value)
</script>

<template>
  <div>
    <p>{{ $t('welcome') }}</p>
  </div>
</template>
