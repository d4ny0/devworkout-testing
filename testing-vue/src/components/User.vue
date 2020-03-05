<template>
  <li class="userCard">
    <p>{{ user.name }}</p>
    <p>{{ user.email }}</p>
    <p>
      {{ user.address.city }} {{ user.address.zipcode }} <br />
      {{ user.address.street }} {{ user.address.suite }}
    </p>
  </li>
</template>
<script>
export default {
  name: "user",
  props: {
    user: {
      type: Object,
      default: null
    }
  }
};
</script>

<style>
.userCard {
  flex: 1 0 25%;
  padding: 1em;
  margin: 1em;
  border: 1px solid #2f2f2f;
  background: #42b983;
  color: #2f2f2f;
  border-radius: 1em;
}
</style>
