<template>
  <div>
    {{ person.name }}
  </div>
  <div>
    {{
      name.name.first +
      " " +
      name.name.middle +
      " " +
      name.name.last +
      " " +
      name.name.full
    }}
  </div>
  <div v-for="item in province.array">
    {{ item.name }}
  </div>
  {{ someText.text }}

  <div>
    <button @click="handleAjaxRequest">ajax request</button>
    <button @click="handleAjaxRequestName">ajax request Name</button>
    <button @click="handleAjaxRequestArray">ajax request Province</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onBeforeMount } from "vue";
import {
  ajaxRequest,
  ajaxRequestName,
  ajaxRequestArray,
  ajaxRequestSomeText,
} from "./api/request";

const person = ref({
  name: "Jackson",
  age: "15",
  color: "black",
});

const name = ref({
  name: {
    first: "Jackson",
    middle: "J",
    last: "Yee",
    full: "Jackson J Yee",
  },
});

const province = ref({
  array: [
    {
      name: "Ontario",
    },
  ],
});

const someText = ref({
  text: "",
});

// handleAjaxRequest, make it async.
const handleAjaxRequest = async () => {
  person.value = await ajaxRequest();
};

const handleAjaxRequestName = async () => {
  name.value = await ajaxRequestName();
};

const handleAjaxRequestArray = async () => {
  var provinceMidle;
  provinceMidle = await ajaxRequestArray();
  province.value = provinceMidle;
};

// before component create
onBeforeMount(async () => {
  someText.value = await ajaxRequestSomeText();
});
</script>
