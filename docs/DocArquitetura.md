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


## Tecnologias

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" />
</p>

O framework Node foi projetado para facilitar a criação de aplicação de rede escaláveis, ou seja, muitas comunicação podem ser executadas simultaneamente. Isso se opõe ao modelo utilizado atualmente em que os threads do SO são empregados. A rede torna-se ineficiente e muito difícil de se usar, já utilizando-se do Node os seus usuários não precisam preocupar-se com bloqueios de processos, porque não há bloqueios. O Node não possui, em sua grande parte, funções que executam diretamente, o processo nunca bloqueia. Sendo assim, o Node torna-se uma ótima opção para aplicações que precisam de uma comunicação em tempo real ou de ambientes distribuídos.

<p align="center">
  <img src="https://i2.wp.com/blog.hariken.co/wp-content/uploads/2019/03/react-logo.png?ssl=1" />
</p>

O framework React é baseado em componentes encapsulados e não em templates, possibilitando na manipulação da árvore de elementos do HTML através da Virtual-DOM. Isso acaba por evitar alguns conflitos que ocorreriam por estar utilizando de JavaScript puro com HTML. Além disso, com a lógica de componentização facilita também a manipulação de dados ao longo da aplicação por meio de estados que são salvos fora do DOM. O framework ainda faz com que a criação de interfaces interativas seja eficientes, pois cada view da aplicação possuirá componentes que serão atualizados e renderizados apenas quando necessário, utilizando-se dos estados da aplicação, ou seja, somente quando há alterações nos dados é que um componente será renderizado.


# Referências

+ [Node](https://nodejs.org/pt-br/about/)
- [React](https://pt-br.reactjs.org/)
+ [MVC link 1](https://tableless.com.br/mvc-afinal-e-o-que/#:~:text=MVC%20%C3%A9%20nada%20mais%20que,camada%20de%20controle(controller).)
- [MVC link 2](https://www.devmedia.com.br/introducao-ao-padrao-mvc/29308)
+ [RF link 1](https://www.devmedia.com.br/artigo-engenharia-de-software-3-requisitos-nao-funcionais/9525)
- [RF link 2](http://www.dsc.ufcg.edu.br/~jacques/cursos/proj/gerenciadesenv/naofuncionais.htm)
+ [RF link 3](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional#:~:text=Requisitos%20n%C3%A3o%20funcionais%20s%C3%A3o%20os,disponibilidade%2C%20manuten%C3%A7%C3%A3o%20e%20tecnologias%20envolvidas.)
- Peter Eeles; Peter Cripps. The Process of Software Architecting, Addison-Wesley Professional, 2009.
+ Paul Clements; Felix Bachmann; Len Bass; David Garlan; James Ivers; Reed Little; Paulo Merson; Robert Nord; Judith Stafford. Documenting Software Architectures: Views and Beyond, Second Edition, Addison-Wesley Professional, 2010.
