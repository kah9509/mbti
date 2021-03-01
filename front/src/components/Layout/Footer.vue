<template>
  <v-footer class="indigo lighten-1 white--text text-center" absolute>
    <div>
      Developed with ❤️  by {{ developer }} &copy; {{ new Date().getFullYear() }}
    </div>
  </v-footer>
</template>
<script>
export default {
  name: 'Footer',
  data: () => ({
    developer: 'Amy',
  }),
};
</script>
