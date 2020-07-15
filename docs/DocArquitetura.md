# Projeto Arquitetural
## Descrição
O modelo arquitetural do software tem como objetivo fornecer uma visão geral da arquitetura do sistema, servindo como meio de comunicação entre desenvolvedores e outros que tenham interesse no sistema (stakeholders). Neste documento serão expostos atributos sobre a arquitetura do sistema, como a visão geral do software, para auxiliar na abordagem de desenvolvimento do projeto.

## Histórico de revisões
Data        | Versão | Descrição                                                      | Autor
------------|--------|----------------------------------------------------------------|--------------------
29/06/2020  | 1.0    | Documento inicial                                              | Kael
04/07/2020  | 1.1    | Adicionando novos itens                                        | Arthur Medeiros
14/07/2020  | 1.2    | Adicionando novos itens                                        | Arthur Medeiros

# Visão Geral
<p align="center">
  <img src="https://github.com/eduviictor/event-manager/blob/master/imagens/modeloArquitetural.png" />
</p>
<p align="center">
Figura 1. Imagem da arquitetura do sistema.
</p>

A arquitetura do projeto seguirá o padrão Model-View-Controller. Essa arquitetura funciona da seguinte forma: 

   + ## Model
   Quando há processos de leitura e escrita de dados essa camada irá ser responsável por realizar as operações lógicas de manipulação.
   
   + ## View
   É a camada responsável pela apresentação dos dados para o usuário.
   
   + ## Controller
   Responsável por receber todas as requisições do usuário. A camada controller possui métodos chamados actions que orientam o fluxo de dados
   na aplicaçã, como por exemplo, qual model será usado, qual view será exibida para o usuário.

# Requisitos Não Funcionais

+ ### Desempenho

1. A pagina principal tem que ser carregada em no máximo 3 segundos com uma conexão mínima de 256kbps.
2. As páginas que recuperam informações de sistemas legados, devem responder em dois segundos a cada 10.000 (contextual) em uma conexão de 256kbps
3. As páginas que recuperam informações de transações no banco de dados da própria aplicação, deve responder em um segundo a cada 10.000 registros (contextual), 
   retornados em uma conexão de 256kbps.    
4. O servidor deve suportar 100.000 conexões simultâneas sem perda de desempenho.                      

- ### Interoperabilidade

1. Deve ser desenvolvido com banco de dados PostgreSQL ou algum outro que use do serviço de nuvem (Ex: Amazon Web Services). 

+ ### Portabilidade

1. Deve ser desenvolvido para plataforma web.

- ### Usabilidade

1. Deve ser usado por usuários treinados para as funcionalidades apresentadas pelo sistema.
2. Os usuários serão divididos entre organizadores de eventos e clientes.

+ ### Implementação

1. Deve ser desenvolvido utilizando-se da linguagem JavaScript.
2. Deve ser usado o framework React para o front-end do sistema.
3. Deve ser usado o framework Node para o back-end do sistema.

# Mecanismos arquiteturais

   Mecanismo de Análise |                   Mecanismo de Design                                  |   Mecanismo de Implementação
------------------------|------------------------------------------------------------------------|-------------------------------
Persistência            |                  Banco de dados relacional                             |      PostgreSQL
Camada de distribuição  |          Classe de comunicação com o banco, classe de persistência     |      Node Js
Front-End               |                  Interface de comunicação com o usuário do portal      |      React
Build                   |                  Programação da IDE para validação do código fonte     |      Visual Studio Code
Deploy                  |                  Configuração da IDE de deploy                         |     Visual Studio Code
