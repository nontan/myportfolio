<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <h1 class="text-4xl font-bold tracking-widest mb-4">Hello, World!</h1>
<div>

    <ul class="sns-icons">
      <li v-for="(link, index) in snsLinks" :key="index">
        <a :href="link.url" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-pink-200">
<font-awesome-icon :icon="[link.prefix, link.name]"  :aria-label="link.alt"/>
        </a>
      </li>
    </ul>

</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      snsLinks: [
        {name: 'github', prefix: 'fab', url: 'https://github.com/nontan', alt: 'GitHub'},
        {name: 'dribbble',prefix: 'fab',url: 'https://dribbble.com/rice_galaxy/shots', alt: 'Dribbble'},
        {name: 'envelope',prefix: 'far',url: 'mailto:', alt: 'Contact'},
//       {name: 'key',prefix: 'fas',url: 'https://nozomiwork.myportfolio.com', alt: 'Protfolio'}, //
      ],
    };
  },
};
</script>

</script>
