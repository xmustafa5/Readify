<template>
    <div>
        <h1>Data List</h1>
        <ul>
            <li v-for="item in dataStore.books" :key="item.id">{{ item.title }}</li>
        </ul>
    </div>
    {{ dataStore }}
</template>
  
<script  setup>
import { useGet } from '@/stores/store';

const dataStore = useGet();
console.log(dataStore);
//if you wont to use onmuounted to run data or play
dataStore.getTasks()



// onMounted(() => {
//   dataStore.fetchData();
// });
</script>
  