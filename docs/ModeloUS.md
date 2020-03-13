# Modelo DOC004 - User Stories 

## Histórico de Revisões do Modelo

|     Data    |   Versão  |     Descrição     |      Autor     |
| ------------|:----------------:|:----------:|:--------------:|
| 12/03/2020  |    1.0    | Documento inicial.| Arthur Medeiros|

## Prioridade do User Story

Prioridade do User Story ou dos Requisitos: A prioridade dos requisitos é utilizada no gerenciamento do escopo das etapas do projeto e na definição das prioridades durante o desenvolvimento do sistema.
Essencial: requisito sem o qual o sistema não entra em funcionamento. Requisitos essenciais são requisitos imprescindíveis para o funcionamento do sistema.
Importante: requisito sem o qual o sistema entra em funcionamento, mas de forma não satisfatória. Requisitos importantes devem ser implantados o mais rápido possível, mas, se não forem, parte do sistema poderá ser implantada mesmo assim.
Desejável: requisito que não compromete as funcionalidades básicas do sistema, isto é, o sistema pode funcionar de forma satisfatória sem ele. Requisitos desejáveis são requisitos que podem ser implantados por último, sem comprometer o funcionamento do sistema.

## Lista de User Stories

* User Story US00 - Manter evento

  * Descrição: O sistema deve manter um cadastro de evento que é criado por um organizador e consultado por clientes. Um evento tem os atributos código, nome, data, horario, código da atração, código da localização, código da empresa, código do orçamento, código de ingresso. O evento é cadastrado por um organizador diretamente no sistema e consultado pelo cliente que deseja participar.
  * Requisitos envolvidos: RF05, RF06, RF07, RF09, RF12, RF13
  * Prioridade: Essencial
  * Estimativa: 10h
  * Tempo gasto(real): 
  * Testes de aceitação:
      * TA01.01 - O organizador informa, na tela cadastrar evento, todos os dados para registrar corretamente um evento, ao clicar em cadastrar ou criar ele é notificado com uma mensagem de sucesso. Mensagem: Cadastro realizado com sucesso.      
      * TA01.02 - O organizador informa, na tela cadastrar evento, todos os dados para registrar incorretamente um evento, ao clicar em cadastrar ou criar ele é notificado com uma mensagem de erro. Mensagem: Cadastro não realizado, o campo "xxxx" não foi informado corretamente.
      * TA01.03 - O organizador informa, na tela alterar evento, os dados para alterar corretamente um evento, ao clicar em salvar alterações ele é notificado com uma mensagem de sucesso. Mensagem: Alterado com sucesso.
      * TA01.04 - O organizador informa, na tela alterar evento, os dados para alterar incorretamente um evento, ao clicar em salvar alterações ele é notificado com uma mensagem de erro. Mensagem: Campo não foi informado corretamente.
      * TA01.05 - O organizador informa, na tela deletar evento, o evento que deseja ser deletado do banco de dados, ao clicar em deletar ele é notificado com uma mensagem de sucesso. Mensagem: Evento deletado com sucesso.
      
      
* User Story US01 - Manter usuário

  * Descrição: 
  * Requisitos envolvidos:
  * Prioridade: 
  * Estimativa:
  * Tempo gasto(real): 
  * Testes de aceitação:
      * TA01.01
      
* User Story US02 - Manter empresa

  * Descrição: 
  * Requisitos envolvidos:
  * Prioridade: 
  * Estimativa:
  * Tempo gasto(real): 
  * Testes de aceitação:
      * TA01.01
