vue fastclick directive

### Installation

``` sh
yarn global add v-fastclick
```

### Usage

``` js
import 'v-fastclick'
```

``` html
<template>
  <div v-fastclick="{ method: fastclick, value: 'hello world!' }"></div>
</template>

<script>
export default {
  methods: {
    fastclick (v) {
      console.log(v)
    }
  }
}
</script>
```
