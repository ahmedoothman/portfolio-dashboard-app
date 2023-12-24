<template>
  <header class="header">
    <h1 class="title">Welcome to My Website</h1>
    <nav class="nav">
      <ul>
        <li><router-link to="/">Landing Page</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li>
          <router-link to="/forget-password">Forget Password</router-link>
        </li>
        <li><router-link to="/dashboard">dashboard</router-link></li>
        <li><router-link to="/dashboard/home">home</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style src="./TheHeader.scss" lang="scss" scoped></style>
