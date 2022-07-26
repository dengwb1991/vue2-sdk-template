<template>
  <div>
    1
  </div>
</template>

<script>
import myLib from 'lib/index'
export default {
  created() {
    myLib.set(2)

    console.log(myLib.get())
  }
}
</script>
