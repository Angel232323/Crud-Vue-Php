<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Empleado</div>
      <div class="card-body">
        <form v-on:submit.prevent="actualizarRegistro">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input
              type="text"
              class="form-control"
              name="nombre"
              required
              v-model="empleado.nombre"
              id="nombre"
              aria-describedby="helpId"
              placeholder="Nombre"
            />
            <small id="helpId" class="form-text text-muted"
              >Escribe el nombre del empleado</small
            >
          </div>
          <div class="form-group">
            <label for="email">Correo</label>
            <input
              type="email"
              class="form-control"
              name="email"
              v-model="empleado.email"
              required
              id="email"
              aria-describedby="helpId"
              placeholder="Correo"
            />
            <small id="helpId" class="form-text text-muted"
              >Escribe el email</small
            >
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">Modificar</button>

            <router-link :to="{ name: 'Listar' }" class="btn btn-danger"
              >Cancelar</router-link
            >
            <!-- <router-link to="/listar" class="btn btn-warning">Cancelar</router-link> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      empleado: {},
    };
  },
  created: function () {
    this.obtenerInformacionID();
  },
  methods: {
    obtenerInformacionID() {
      fetch("http://localhost/empleados/?consultar=" + this.$route.params.id)
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          this.empleado = datosRespuesta[0];
        })
        .catch(console.log);
    },

    actualizarRegistro() {
      var datosEnviar = {
        id: this.$route.params.id,
        nombre: this.empleado.nombre,
        email: this.empleado.email,
      };

      fetch("http://localhost/empleados/?actualizar="+this.$route.params.id, {
        method: "POST",
        body: JSON.stringify(datosEnviar),
      })
      .then(respuesta=>respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
      window.location.href = "../listar";
        
      });

    },
  },
};
</script>
