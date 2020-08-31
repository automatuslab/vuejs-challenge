<template>
  <div id="conteudo">
    <h1>{{listaPlanos[0].nome}}</h1>
    <h2
      class="price"
    >{{listaPlanos[0].valores_plano.valor_oferta | currency('R$', 2 , {decimalSeparator: ','}) }}</h2>

    <b-card style="max-width: 50rem;" class="card bg-light mb-3">
      <form>
        <p>
          <label for="nome">Nome Completo</label>
          <input type="text" id="nome" v-model="form.nome" required autocomplete="off" />
        </p>

        <p>
          <label for="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            v-model="form.cpf"
            v-mask="'###.###.###-##'"
            required
            autocomplete="off"
          />
        </p>
        <p>
          <label for="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            v-model="form.telefone"
            v-mask="'(##) ####-####?#'"
            required
            autocomplete="off"
          />
        </p>
        <br />

        <div v-if="errors.length" class="errors">
          <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </div>

        <button type="button" class="btn btn-success" @click="Validate">Continuar</button>
      </form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CotacaoPlano",

  props: {
    listaPlanos: { type: Array, required: true },
  },

  data() {
    return {
      form: { nome: null, cpf: null, telefone: null },
      errors: [],
    };
  },

  methods: {
    Validate() {
      this.errors = [];

      const validarCpf = require("validar-cpf");

      if (!this.verificaNome(this.form.nome)) {
        this.errors.push("O nome é inválido.");
      }

      if (!validarCpf(this.form.cpf)) {
        this.errors.push("CPF inválido");
      }
      if (this.form.telefone.length < 14) {
        this.errors.push("O telefone é inválido.");
      }

      if (this.errors.length == 0) {
        this.$emit("usuario", this.form);
      }
    },

    verificaNome(nome) {
      let regex = /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/;
      let condition = nome.trim().split(" ").length == 2;

      if (regex.test(nome) && condition) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
h1,
h2,
h3 {
  color: #fff;
}
p {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
p input {
  width: 100%;
}
.errors {
  color: red;
}
</style>