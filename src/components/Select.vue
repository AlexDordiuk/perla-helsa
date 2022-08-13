<template>
  <div class="flex-col justify-start">
    <label class="d-block">{{ label }}</label>
    <select>
      <option v-for="option of value">{{option}} <img :src="checkedIcon" alt="checked"/> </option>
    </select>
  </div>
</template>

<script>
import checkedIcon from '@/assets/icons/checked.svg';

export default {
  name: 'Select',
  props: {
    label: {
      required: true,
      type: String
    },
    value: {
      required: true,
      type: Array
    }
  },
  data: () => {
    return {
      checkedIcon
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/imports";

label {
  @extend %fs-12;
  color: $grey-03;
  padding-left: 4px;
  margin-bottom: 12px;
}

select {
  @extend %fs-17;
  color: $dark-c;
  border: none;
  outline: none;

}
</style>