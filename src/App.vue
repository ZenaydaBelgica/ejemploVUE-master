<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">datos</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
           
            
            <li class="nav-item">
              <RouterLink class="nav-link" to="/ficha_listar">ficha de inscripcion</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <RouterView />
  </div>
</template>

