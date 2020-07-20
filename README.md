# vuejs-challenge

## Objetivo:

## ESCOPO
### TELA INICIAL
Ao carregar a página inicial o projeto deverá recuperar as informações de regionalização e da oferta enviadas na URL e requisitar a API abaixo:
PARÂMETROS URL: sku e ddd.
#### API
`
curl --location --request POST 'https://catalogo-vivo.automatuslab.com/api/Catalogo/DisponibilidadeMovel' \
--header 'Content-Type: application/json' \
--data-raw '{
	"uf": null,
	"cidade": null,
	"ddd": 21,
	"view": ""
}'
`

Do retorno da API catálogo, deverá ser filtrado pelo parâmetro sku recebido na URL e exibido as seguintes informações do plano em tela:

  - **Nome do Plano**: portfolio.controle.nome
  - **Valor do Plano**: portfolio.controle.valores_plano.valor_com_desconto 
      (no formato dinheiro BRL).


Na tela inicial também deverá constar um formulário com três campos e estes devem possuir as seguintes validações:

  - **Nome**: o campo nome deve validar se o usuário digitou o nome completo, entende-se por nome completo um nome com pelo menos 2 caracteres e um sobrenome com pelo menos 2 caracteres.
  - **CPF:**: o campo CPF deve conter um CPF válido.
  - **Telefone**: o campo telefone deve conter um número de telefone válido e este poderá ser um celular ou telefone fixo. Para celular a máscara deverá ser **(99) 9 9999-9999** e para telefone fixo **(99) 9999-9999**.

As informações capturadas no formulário da página inicial devem ser mantidas afim de exibição na próxima tela.

#### TELA SECUNDÁRIA

Nesta segunda tela deve contemplar a seguinte mensagem:
SE A LINHA INFORMADA NO FORMULÁRIO ANTERIOR FOR UM CELULAR:

[NOME DO CLIENTE], ótima escolha!
O plano [NOME DO PLANO] no valor mensal de [VALOR DO PLANO] será ativado na sua linha [CELULAR CLIENTE]


SE A LINHA INFORMADA NO FORMULÁRIO ANTERIOR FOR UM TELEFONE FIXO:

[NOME DO CLIENTE], ótima escolha!
O plano [NOME DO PLANO] no valor mensal de [VALOR DO PLANO] será ativado em um novo chip.


Nesta tela também deve existir um **select** com algumas opções de planos para simulação de mudança de "carrinho".

**OPÇÕES**
**SKU**         | **Plano**
CTRL005DN  | VIVO CONTROLE DIGITAL 2GB
CTRL009DN  | VIVO CONTROLE DIGITAL 3,5GB
CTRL004CN  | VIVO CONTROLE CARTÃO 3,5GB
CTRL007DE   | VIVO CONTROLE DIGITAL 4GB

Quando selecionado um sku diferente do que o cliente escolheu, deve-se consultar o catálogo recuperado na tela anterior e atualizar a mensagem inicial com o nome do plano e valor mensal.
