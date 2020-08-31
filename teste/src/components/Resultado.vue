<template>
  <div v-if="planoAtual != null">
    <h1>{{usuario.nome}}, ótima escolha!</h1>

    <b-card style="max-width: 50rem;" class="card bg-light mb-3">
      <h4>
        O plano {{planoAtual[0].nome}} no valor mensal de {{planoAtual[0].valores_plano.valor_oferta | currency('R$', 2 , {decimalSeparator: ','})}}
        será ativado em {{usuario.telefone.length == 14? 'um novo chip.': ` sua linha `+ usuario.telefone}}
      </h4>

      <label for="select-plan">Ou analise as outras opções de plano</label>

      <b-form-select
        id="select-plan"
        v-model="selected"
        class="mb-3"
        @change="setPlanoAtual(selected)"
      >
        <b-form-select-option
          v-for="item in listaPlanos"
          :key="item.sku"
          :value="item.sku"
        >{{item.nome}}</b-form-select-option>
      </b-form-select>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Resultado",
  props: {
    listaPlanos: { type: Array, required: true },
    usuario: { type: Object, required: true },
  },

  data() {
    return {
      selected: null,
      planoAtual: null,
    };
  },

  methods: {
    setPlanoAtual(plano) {
      this.planoAtual = this.listaPlanos.filter((item) => item.sku === plano);
    },
  },
  mounted() {
    this.planoAtual = this.listaPlanos;
    this.selected = this.listaPlanos[0].sku;
  },
};
</script>

<style>
h4 {
  color: #563d7c;
}
</style>