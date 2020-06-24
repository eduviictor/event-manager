# Modelo DOC004 - User Stories 

## Histórico de Revisões do Modelo

| Data       | Versão |     Descrição      |      Autor      |
| ---------- | :----: | :----------------: | :-------------: |
| 12/03/2020 |  1.0   | Documento inicial. | Arthur Medeiros |

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
      
* User Story US01 - Manter Usuário


   * Descrição: O sistema deve manter um cadastro de usuário que tem acesso ao sistema via login e senha. Um usuário tem os atributos nome, endereço, email e senha. O email será o login e ele pode registrar-se diretamente no sistema e aguardar ativação da conta pelo administrador. Ao efetuar login o sistema deverá ser capaz de distinguir entre os tipos de usuário seja ele cliente ou Organizador dando acesso a suas respectivas funcionalidades.
   * Requisitos envolvidos: RF01, RF02, RF03
   * Prioridade: Essencial
   * Estimativa: 10h
   * Tempo gasto(real):12h
   * Testes de aceitação:
     * TA01.01 - O usuário informa, na tela Registrar, todos os dados para registrar-se corretamente, ao clicar em salvar ele é notificado com uma mensagem de sucesso. Mensagem: Cadastro realizado com sucesso, aguardando ativação do administrador.
     * TA01.02 - O usuário informa, na tela Registrar, os dados para registrar-se incorretamente, ao clicar em salvar ele é notificado com uma mensagem de erro. Mensagem: Cadastro não realizado, o campo “xxxx” não foi informado corretamente.
     * TA01.03 - O usuário informa, na tela Login, os dados para logar corretamente, ao clicar em entrar ele é notificado com uma mensagem de erro. Mensagem: Usuário não ativado, aguardando ativação do administrador.
     * TA01.04 - Esqueci minha senha, O usuário informa, na tela Login, os dados para logar e ao ser notificado repetitivamente de dados incorretos procura redefinir senha, ele informa o email cadastrado e um token é enviado para o mesmo.Mensagem: Senha redefinida com Sucesso.
      
* User Story US02 - Manter organizador

  * Descrição: O sistema deve manter um cadastro de organizador que é criado por uma pessoa que utiliza a aplicação. Um organizador tem os atributos cpf/cnpj, nome, email, telefone, status, cod_evento. Os organizadores cadastram eventos nos quais os usuários podem acessar informações.
  * Requisitos envolvidos: RF10
  * Prioridade: Essencial
  * Estimativa: 10h
  * Tempo gasto(real): 
  * Testes de aceitação:
      * TA01.01 - O usuário sem cadastro informa, na tela de cadastrar organizador, seus dados para cadastrar um novo organizador. Ao clicar em salvar cadastro, ele é notificado com uma mensagem de sucesso no cadastro.
      * TA01.02 - O organizador clica na aba de alterar dados, resultando no redirecionamento para a página de alteração de dados do referido organizador, que em seguida insere corretamente todos os dados nos campos que deseja alterar. Após isso, o organizador clica em salvar dados e uma mensagem de sucesso na alteração de dados é exibida.
      * TA01.03 - O organizador clica na aba de alterar dados, sendo redirecionado para a página de alteração de dados, que por sua vez possui um botão de deletar organizador. Ao ser clicado, surge uma mensagem perguntando ao usuário se ele realmente deseja deletar, com botões de resposta para o organizador clicar (sim ou não). Ao clicar no botão não, nada acontece. Ao clicar no botão sim, o organizador é deletado e a página redireciona para a página principal do sistema.
      * TA01.04 - O organizador clica na aba criar evento e é redirecionado para a página de criação de evento.
      * TA01.05 - O organizador clica na aba de consultar eventos cadastrados e é redirecionado para uma página com a lista de eventos que cadastrou. Após clicar no símbolo de lupa no fim da linha de algum evento cadastrado, o organizador é redirecionado para uma página na qual há detalhes sobre o evento.
      
* User Story US03 - Manter Atração

   * Descrição: O sistema deve manter um cadastro de uma ou mais atrações pertencentes a um único evento(no qual deverá ser criado por um organizador, que terá acesso posteriormente a parte de criar atrações para esse evento). Uma atração tem os atributos código, nome, e-mail e telefone. Uma atração é criada pelo mesmo usúario que criou o respectivo evento, podendo ser acessado pelos clientes.
   * Requisitos envolvidos: RF12, RF13
   * Prioridade: Essencial
   * Estimativa: 10h
   * Tempo gasto(real):
   * Testes de aceitação:
     * TA01.01 - O organizador que criou o evento irá informar, na tela de cadastrar atração, todos os dados da respectiva atração. Ao confirmar a atração o mesmo receberá uma notificação de: Atração cadastrada com sucesso.
     * TA01.02 -   O organizador informa, na tela de cadastrar atração, todos os dados de sua atração. Caso algum dado informado não seja valido, o mesmo recebe uma notificação de: Cadastro não realizado, o campo "xxxx" não foi informado corretamente. 
     * TA01.03 - O organizador informa, na tela de alterar atração, os dados validos que deseja alterar. Em seguida, receberá uma notificação de: Alterado com sucesso. 
     * TA01.04 - O organizador informa, na tela alterar atração, os dados invalidos para alterar uma atração, ao clicar em salvar alterações ele é notificado com uma mensagem de: Campo não foi informado corretamente.
     * TA01.05 - O organizador informa, na tela deletar atração, a atração que deseja ser deletada do banco de dados, ao clicar em deletar ele é notificado com uma mensagem de: Atração deletada com sucesso.

* User Story US04 - Manter Ingresso

   * Descrição: O sistema deverá permitir a compra/aquisição de ingressos por parte do cliente e a disponibilização dos mesmos com suas respectivas informações por parte dos organizadores.
   * Requisitos envolvidos: RF15, RF16, RF17, RF19
   * Prioridade: Essencial
   * Estimativa: 12h
   * Tempo gasto(real):
   * Testes de aceitação:
     * TA01.01 - O cliente que deseja participar do evento, irá adquirir o ingresso do mesmo. Em seguida, caso tudo ocorra bem, receberá uma notificação de: Ingresso adquirido com sucesso.
     * TA01.02 -   O organizador informa, na tela de cadastrar ingresso, todos os dados do seu ingresso. Caso algum dado informado não seja valido, o mesmo recebe uma notificação de: Cadastro não realizado, o campo "xxxx" não foi informado corretamente. 
     * TA01.03 - O organizador que que criou o evento, irá passar as informações pra geração dos ingressos e caso tudo ocorra bem, receberá uma notificação de: Ingresso cadastrado com sucesso.
     * TA01.04 - O organizador informa, na tela de alterar ingresso, os dados validos que deseja alterar. Em seguida, receberá uma notificação de: Alterado com sucesso.
     * TA01.05 - O organizador informa, na tela alterar ingresso, os dados invalidos para alterar um ingresso, ao clicar em salvar alterações ele é notificado com uma mensagem de: Campo não foi informado corretamente.
     * TA01.06 - O organizador informa, na tela invalidar ingresso, o ingresso que deseja ser inválidado no banco de dados, ao clicar em invalidar ele é notificado com uma mensagem de: Ingresso invalidado com sucesso.