<template>
  <div class="fetch-example">
    <h1>This is the fetch example page</h1>
    <h3 v-if="!userList">click here to fetch some users</h3>
    <button type="button" @click="fetchData" v-if="!userList">
      fetch users
    </button>
    <button type="button" @click="reset" v-else>reset users</button>
    <ul data-testid="userlist" class="userList" v-if="userList">
      <user v-for="user in userList" :key="user.id" :user="user" />
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import user from "../components/User";
export default {
  components: { user },
  props: {
    url: {
      type: String,
      default: "https://jsonplaceholder.typicode.com/users"
    },
    options: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      userList: null
    };
  },
  methods: {
    async fetchData() {
      try {
        const res = await axios.get(this.url, this.options);
        this.userList = res.data;
      } catch (error) {
        console.error(error);
      }
    },
    reset() {
      this.userList = null;
    }
  }
};
</script>

<style>
.fetch-example {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.userList {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  width: 80%;
  flex-wrap: wrap;
}
</style>
