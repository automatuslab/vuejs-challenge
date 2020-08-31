<template>
  <div class="fundo-bg">
    <div class="home container">
      <div v-if="planos.length > 0" align="center" class="pt-5">
        <Resultado v-if="formularioUsuario" :listaPlanos="planos" :usuario="formularioUsuario" />
        <CotacaoPlano v-if="formularioUsuario == null" @usuario="valueForm" :listaPlanos="planos" />
      </div>
    </div>
    <div v-if="loading" class="text-center">
      <b-spinner variant="light" label="Loading..."></b-spinner>
    </div>
  </div>
</template>

<script>
import CotacaoPlano from "@/components/CotacaoPlano.vue";
import Resultado from "@/components/Resultado.vue";

export default {
  name: "Home",
  data() {
    return {
      formularioUsuario: null,
    };
  },
  components: {
    CotacaoPlano,
    Resultado,
  },
  computed: {
    planos() {
      return this.$store.state.planos;
    },
    loading() {
      return this.$store.state.loading;
    },
  },

  methods: {
    chamaApi() {
      const obj = {
        uf: null,
        cidade: null,
        ddd: 21,
        view: "",
      };

      this.$store.dispatch("carregaPlanos", obj);
    },
    valueForm(todo) {
      if (todo) {
        this.formularioUsuario = todo;
      }
    },
  },

  mounted() {
    this.chamaApi();
  },
};
</script>

<style scoped>
.fundo-bg {
  background-color: #563d7c;
  height: 100vh;
}
</style>