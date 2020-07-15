# Projeto Arquitetural
## Descrição
O modelo arquitetural do software tem como objetivo fornecer uma visão geral da arquitetura do sistema, servindo como meio de comunicação entre desenvolvedores e outros que tenham interesse no sistema (stakeholders). Neste documento serão expostos atributos sobre a arquitetura do sistema, como a visão geral do software, para auxiliar na abordagem de desenvolvimento do projeto.

## Histórico de revisões
Data        | Versão | Descrição                                                      | Autor
------------|--------|----------------------------------------------------------------|--------------------
29/06/2020  | 1.0    | Documento inicial                                              | Kael
04/07/2020  | 1.1    | Adicionando novos itens                                        | Arthur Medeiros

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
