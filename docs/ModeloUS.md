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
  * Requisitos envolvidos: RF05, RF06, RF09
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
  * Requisitos envolvidos: RF01, RF04, RF05, RF10
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
   * Requisitos envolvidos: RF13
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
     
* User Story US05 - Manter Empresa

   * Descrição:O sistema deve manter um cadastro de empresa que é criado por um usuário organizador que utiliza a aplicação. Uma empresa tem como atributos cnpj, nome, serviço, telefone, e-mail. Uma empresa é cadastrada diretamente no sistema por um usuário organizador e consultada pelos usuários clientes.

   * Requisitos envolvidos: RF11
   * Prioridade: Essencial
   * Estimativa: 10h
   * Tempo gasto(real):
   * Testes de aceitação:
     * TA01.01 - Um usuário, ao tentar cadastrar uma nova empresa, deverá informar os dados da empresa na tela de cadastrar empresa. Ao clicar em salvar cadastro, ele é notificado com uma mensagem de: Cadastro realizado com sucesso.
     * TA01.02 - O organizador informa, na tela de cadastrar empresa, todos os dados de sua empresa. Caso algum dado informado não seja válido, o mesmo recebe uma notificação de: Cadastro não realizado, o campo "xxxx" não foi informado corretamente.
     * TA01.03 - O organizador informa, na tela de alterar empresa, os dados válidos que deseja alterar. Em seguida, receberá uma notificação de: Alterado com sucesso.
     * TA01.04 - O organizador informa, na tela alterar empresa, os dados inválidos para alterar uma empresa, ao clicar em salvar alterações ele é notificado com uma mensagem de: Campo não foi informado corretamente.
     * TA01.05 - O organizador informa, na tela deletar empresa, a empresa que deseja ser deletada do banco de dados, ao clicar em deletar ele é notificado com uma mensagem de: Empresa deletada com sucesso.
     * TA01.06 - Uma empresa, quando cadastrada no sistema, pode ser referenciada em eventos posteriores, sem precisar fazer o cadastro novamente.  
     
* User Story US06 - Manter Orçamento

   * Descrição: O sistema deve manter o registro de Informações sobre finanças como ingressos vendidos, valores arrecadados, valores investidos enfim, informações que serão analisadas e avaliadas em determinado período. Um Orçamento têm como atributos: código, descrição, ingressos vendidos, valor arrecadado, valor investido, receita. Ele pode ser consultado pelo Organizador.

   * Requisitos envolvidos:RF14
   * Prioridade: Essencial
   * Estimativa: 12h
   * Tempo gasto(real):
   * Testes de aceitação:
     * TA01.01 - Um Organizador, ao tentar cadastrar dados sobre orçamento, deverá informar os dados sobre o ingreço e preço inicial de venda. Ao clicar em salvar cadastro, ele é notificado com uma mensagem de: cadastrado com sucesso e o nome do evento a que o ingresso pertence.
     * TA01.02 - O organizador informa, na tela de visualização de orçamento, insere o codigo do evento a que o ingresso esta relacionado. Caso os dados não existam, o mesmo recebe uma notificação o campo "xxxx" não foi informado corretamente .
     * TA01.03 - O organizador informa, na tela de alterar orçamento,e devera informar dado cnpj e se comprovado que ele é organizador do evento, mensagem: autorizado.
     * TA01.04 - Ja autorizado organizador informa, na tela de alterar orçamento, os dados válidos que deseja alterar. Em seguida, receberá uma notificação de: Alterado com sucesso.  
* User Story US07 - Manter Relatório  
  
  * Descrição: O sistema deve gerar um relatório com  registros de todos os eventos cadastrados no mesmo utilizando os valores investidos, valores arrecadados. Essas informações serão analisadas e avaliadas entre um período. Ele pode ser consultado pelo Organizador do evento ou administrador com fim de visualização para melhor planejamento ou gerenciamento, exemplo: quais eventos deram maior lucro em 2019, quais tem valor de investimento menor ou maior lucro, etc. Um Relatório têm como atributos: código, valor investido, valor arrecadado, cod_evento e receita.  
  * Requisitos envolvidos: RF23  
  * Prioridade: Essencial  
  * Estimativa:  
  * Tempo gasto(real):  
  * Testes de aceitação:  
    * TA01.01 - Um Organizador ou administrador, ao tentar visualizar relatório informa as datas do período e recebe a lista de eventos acontecidas naquele período.
    * TA01.02 - O organizador informa datas de forma errada. receber notificação o campo "xxxx" não foi informado corretamente.
    * TA01.03 - Um Organizador ou administrador, ao tentar visualizar relatório informa as datas do período que não ocorreram eventos. receber notificação não ocorreram eventos durante esse período.


* User Story US08 - Atribuir localização a evento

  * Descrição: O sistema deve ser capaz de atribuir uma localização a um evento.
  * Requisitos envolvidos: RF07
  * Prioridade: Essencial
  * Estimativa: 10h
  * Tempo gasto(real): 
  * Testes de aceitação:
      * TA01.01 - O usuário informa na tela de criar evento todos os dados do evento, incluindo a localização deste último. Quando o evento for consultado, as informações de localização cadastradas devem estar de acordo com os dados inseridos pelo usuário anteriormente.
      * TA01.02 - O usuário altera na tela de alterar evento os dados da localização do evento. Quando o evento for consultado, as informações de localização cadastradas devem estar de acordo com os dados inseridos pelo usuário anteriormente.


* User Story US09 - Atribuir atração a evento

  * Descrição: O sistema deve ser capaz de atribuir várias atrações a um evento ou removê-las.
  * Requisitos envolvidos: RF12
  * Prioridade: Essencial
  * Estimativa: 10h
  * Tempo gasto(real): 
  * Testes de aceitação:
      * TA01.01 - O usuário informa os dados de uma atração na tela de alterar evento os dados de uma atração previamente criada. Quando o evento for consultado, as informações de atrações cadastradas no evento devem estar de acordo com os dados inseridos pelo usuário anteriormente.
      * TA01.02 - O usuário remove na tela de alterar evento os dados de uma atração previamente atribuída ao evento. Quando o evento for consultado, as informações da atração removida não devem mais estar disponíveis no evento.

* User Story US10 - Atribuir empresa a evento

  * Descrição: O sistema deve ser capaz de atribuir várias empresas a um evento ou removê-las.
  * Requisitos envolvidos: RF09
  * Prioridade: Essencial
  * Estimativa: 10h
  * Tempo gasto(real): 
  * Testes de aceitação:
      * TA01.01 - O usuário informa na tela de alterar evento os dados de uma empresa previamente criada. Quando o evento for consultado, as informações de empresas cadastradas no evento devem estar de acordo com os dados inseridos pelo usuário anteriormente.
      * TA01.02 - O usuário remove na tela de alterar evento os dados de uma empresa previamente atribuída ao evento. Quando o evento for consultado, as informações da empresa removida não devem mais estar disponíveis no evento.
