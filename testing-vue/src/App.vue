<template>
  <div id="app">
    <ul class="nav">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/counter">Counter</router-link>
      </li>
      <li>
        <router-link to="/fetch-example">Fetch Example</router-link>
      </li>
    </ul>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
}

.nav {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  padding: 0;
}
.nav li {
  flex: 1;
  text-align: center;
  background-color: #282c34;
}

.nav a {
  color: white;
  text-decoration: none;
  padding: 1em 0;
  display: block;
}
.nav li:hover {
  background-color: #42b983;
}
.nav a.router-link-exact-active {
  color: white;
  background-color: #42b983;
}

button {
  border: 1px solid white;
  background: transparent;
  color: white;
  padding: 1em;
  margin: 1em;
  border-radius: 5px;
  min-width: 150px;
  font-size: 0.5em;
  cursor: pointer;
}
button:hover {
  background: rgba(255, 255, 255, 0.7);
  color: #2f2f2f;
}
</style>
