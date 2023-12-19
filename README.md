# vuejs-challenge

## Objetivo:

Queremos conhecer, através deste teste, como você organiza os arquivos, o código e sua lógica na resolução do problema proposto.

- 1º Faça um fork deste repositório
- 2º Desenvolva sua solução
- 3º Abra uma pull-request com a solução final

## ESCOPO
### TELA INICIAL


Ao carregar a página inicial o projeto deverá recuperar as informações de regionalização e da oferta enviadas na URL e requisitar a API abaixo:
PARÂMETROS URL: sku e ddd.

![tela inicial](https://raw.githubusercontent.com/automatuslab/vuejs-challenge/master/001.png)

#### API
```
curl --location --request POST 'https://catalogo.automatuslab.com/api/Catalogo/DisponibilidadeMovel' \
--header 'Content-Type: application/json' \
--data-raw '{
	"uf": null,
	"cidade": null,
	"ddd": 21,
	"view": ""
}'
```

Do retorno da API catálogo, deverá ser filtrado pelo parâmetro sku recebido na URL e exibido as seguintes informações do plano em tela:

  - **Nome do Plano**: portfolio.controle.nome
  - **Valor do Plano**: portfolio.controle.valores_plano.valor_com_desconto 
      (no formato dinheiro BRL).


Na tela inicial também deverá constar um formulário com três campos e estes devem possuir as seguintes validações:

  - **Nome**: o campo nome deve validar se o usuário digitou o nome completo, entende-se por nome completo um nome com pelo menos 2 caracteres e um sobrenome com pelo menos 2 caracteres.
  - **CPF:**: o campo CPF deve conter um CPF válido.
  - **Telefone**: o campo telefone deve conter um número de telefone válido e este poderá ser um celular ou telefone fixo. Para celular a máscara deverá ser **(99) 9 9999-9999** e para telefone fixo **(99) 9999-9999**.

As informações capturadas no formulário da página inicial devem ser mantidas afim de exibição na próxima tela.

#### TELA FINAL

Nesta segunda tela deve contemplar a seguinte mensagem:
SE A LINHA INFORMADA NO FORMULÁRIO ANTERIOR FOR UM CELULAR:

![OVERVIEW DA SEGUNDA TELA](https://raw.githubusercontent.com/automatuslab/vuejs-challenge/master/002.png)

[NOME DO CLIENTE], ótima escolha!
O plano [NOME DO PLANO] no valor mensal de [VALOR DO PLANO] será ativado na sua linha [CELULAR CLIENTE]


SE A LINHA INFORMADA NO FORMULÁRIO ANTERIOR FOR UM TELEFONE FIXO:

[NOME DO CLIENTE], ótima escolha!
O plano [NOME DO PLANO] no valor mensal de [VALOR DO PLANO] será ativado em um novo chip.


Nesta tela também deve existir um **select** com algumas opções de planos para simulação de mudança de "carrinho".

##### OPÇÕES


![SELECT](https://raw.githubusercontent.com/automatuslab/vuejs-challenge/master/003.png)


**SKU** 	| **Plano**

CTRL005DN  	| VIVO CONTROLE DIGITAL 2GB

CTRL009DN  	| VIVO CONTROLE DIGITAL 3,5GB

CTRL004CN  	| VIVO CONTROLE CARTÃO 3,5GB

CTRL007DE   	| VIVO CONTROLE DIGITAL 4GB

Quando selecionado um sku diferente do que o cliente escolheu, deve-se consultar o catálogo recuperado na tela anterior e atualizar a mensagem inicial com o nome do plano e valor mensal.
