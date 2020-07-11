# Documento de Visão

Documento construído a partir do do **Modelo BSI - Doc 001 - Documento de Visão** que pode ser encontrado no 
link: https://docs.google.com/document/d/1DPBcyGHgflmz5RDsZQ2X8KVBPoEF5PdAz9BBNFyLa6A/edit?usp=sharing

## Histórico de revisões

| Data       | Versão | Descrição          | Autor |
| ---------- | ------ | ------------------ | ----- |
| 23/06/2020 | 1.0    | Documento revisado | Kael  |
| 03/06/2020 | 1.1    | Documento revisado | Kael  |

## Equipe e definição de papéis

| Equipe          | Papel                                      | E-mail                       |
| --------------- | ------------------------------------------ | ---------------------------- |
| Ewerton Silva   | Gerente, Desenvolvedor, Analista, Testador | ewertoncom297@gmail.com      |
| Eduardo Victor  | Gerente, Desenvolvedor, Analista, Testador | eduvictornobrega@gmail.com   |
| Arthur Medeiros | Gerente, Analista, Desenvolvedor, Testador | arthurmedeiros2005@gmail.com |
| Kael Silva      | Gerente, Desenvolvedor, Analista, Testador | kaelsilvaaraujo@gmail.com    |
| Clodoaldo Brito | Gerente, Desenvolvedor, Analista, Testador | clodoaldo.brtp4@gmail.com    |

## Matriz de competências


| Equipe          | Competências                                                                     |
| --------------- | -------------------------------------------------------------------------------- |
| Ewerton Silva   | Python, C, JavaScript, SQL
| Eduardo Victor  | Javascript, NodeJS, React, React-Native, Typescript, SQL, Mongo, PHP, CI, Docker |
| Arthur Medeiros | JavaScript, Node.js, React, React-Native
| Kael Silva      | JavaScript, Node.js, React, React-Native, TypeScript, SQL                        |
| Clodoaldo Brito | JavaScript, React, SQL, Ejs                                                      |


## Descrição geral do sistema

O sistema Event Manager é uma ferramenta para o processo de gerenciamento de
eventos. Fornece uma maneira intuitiva e eficiente para definir eventos adequados ao
público-alvo. Um evento é um acontecimento (festa, espetáculo, comemoração, solenidade
etc.) organizado por especialistas, com objetivos institucionais, comunitários ou
promocionais.

A ferramenta estará disponível para ser utilizada tanto por organizadores de evento
quanto para clientes que desejam participar do evento.
Utilizando a ferramenta, o usuário cliente poderá buscar eventos, adquirir ingressos e receber notificações sobre possíveis eventos que estão de acordo com o seu interesse ou proximidade da sua cidade.
Utilizando a ferramenta, o usuário organizador de eventos poderá cadastrar novos
eventos ou criar eventos a partir de outros já existentes. Além disso, poderá alterar, remover
e consultar eventos já criados. Tais eventos geraram relatórios para o seu organizador que
serão enviados via e-mail ou gerar um arquivo PDF que poderam ser visualizados sem utilizar
a ferramenta.

A ferramenta conterá também afiliação com outras empresas, como o PayPal, que
possibilitem a venda de ingressos pela ferramenta e garanta a confiabilidade e segurança
dos usuários com o sistema. O Event Manager contribui de modo decisivo para melhorar a
qualidade do processo de gerenciamento de eventos como plataforma virtual de uma
empresa.

## Lista de requisitos funcionais

|     Requisito                              |  Descrição                                                                                                                                                 |  Ator
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------
|  **RF01 - Cadastrar usuário**              | Usuários podem ser cadastrados como clientes e organizadores de eventos.                                                                                   | Usuário
|  **RF02 - Manter usuário (genérico)**      | Usuários têm como atributos: Login, Senha.                                                                                                                 | Usuário
|  **RF03 - Manter usuário cliente**         | Usuários do tipo cliente têm como atributos: cpf, nome, e-mail, telefone, estado, cidade, cod_ingresso.                                                    | Cliente
|  **RF04 - Manter usuário organizador**     | Usuários do tipo organizador de evento têm como atributos: cnpj, nome, e-mail, telefone, cod_evento.                                                       | Organizador
|  **RF05 - Cadastrar evento**               | Eventos podem ser cadastrados por organizadores e consultados por clientes.                                                                                | Organizador
|  **RF06 - Manter evento**                  | Eventos têm como atributos: codigo, nome, data, horario, cod_atracao, cod_local, cod_empresa, cod_orcamento, cod_ingresso.                                 | Organizador
|  **RF07 - Localização do evento**          | Eventos possuem localizações.                                                                                                                              | Organizador
|  **RF08 - Manter localização**             | Localização têm como atributos: codigo, local, rua, bairro, cidade, estado.                                                                                | Organizador
|  **RF09 - Associar empresa**               | O sistema contará com empresas associadas que se cadastraram na aplicação para fornecerem serviços a um evento.                                            | Organizador
|  **RF10 - Consultar empresa**              | Organizadores podem consultar empresas.                                                                                                                    | Organizador
|  **RF11 - Manter empresa**                 | Empresas têm como atributos: cnpj, nome, serviço, telefone, e-mail.                                                                                        | Organizador
|  **RF12 - Atribuir atrações a evento**     | Eventos possuem atrações.                                                                                                                                  | Organizador
|  **RF13 - Manter atração**                 | Atrações têm como atributos: codigo, nome, telefone, e-mail.                                                                                               | Organizador
|  **RF14 - Manter orçamento**               | Orçamentos têm como atributos: codigo, descriçao, ingressos vendidos, valor arrecadado, valor investido, receita.                                          | Organizador
|  **RF15 - Adquirir ingresso**              | Ingressos podem ser adquiridos pelos clientes.                                                                                                             | Cliente
|  **RF16 - Especificar tipo de ingresso**   | Ingressos possuem tipos: Estudante, VIP, normal, entre outros. Por isso, é necessário a criação de uma entidade ingresso que pertence a evento.            | Organizador
|  **RF17 - Manter ingresso**                | Ingressos têm como atributos: codigo, tipo, valor, quantidade.                                                                                             | Organizador
|  **RF18 - Manter ouvidoria**               | Mensagem de ouvidoria tem como atributos: cod_mensagem, cod_usuario, mensagem.                                                                             | Administrador
|  **RF19 - Manter tipo de ingresso**        | Tipo_ingresso tem como atributos: cod_ingresso, cod_evento.                                                                                                | Organizador
|  **RF20 - Cadastrar mensagem na ouvidoria**| A aplicação possuirá uma interface de ouvidoria na qual os clientes e organizadores podem realizar sugestões e/ou reclamações sobre o sistema.             | Administrador
|  **RF21 - Notificar usuários**             | A aplicação poderá enviar notificações sobre eventos por meio da localização do usuário caso o mesmo tenha permitido ser notificado, essa informação sobre a permissão constará no registro de status.| Administrador
|  **RF22 - Manter notícias**                |A aplicação contará com uma central de notícias que exibirá informações referentes aos principais eventos do país.                                          | Administrador
|  **RF23 - Manter relatório**               | Relatórios têm como atributos: codigo, valor_investido, valor_arrecadado, cod_evento, receita.                                                             | Administrador

## Perfis dos usuários
O sistema poderá ser utilizado por diversos usuários . Temos os seguintes perfis:
|  Perfil                   |                                                    Descrição                                                                                                                            |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  **Perfil Administrador** |  Este usuário possui todas as permissões disponíveis no sistema, buscando realizar operações que necessitem das mesmas, como por exemplo manutenção de registros de eventos no sistema. |
|  **Perfil Cliente**       |  Este usuário visita o sistema a fim de obter ingressos para eventos, consultar eventos, insere informações sobre ele mesmo, consulta dados de atrações entre outras necessidades.      |
|  **Perfil Organizador**   |  Este usuário poderá cadastrar novos eventos ou criar eventos a partir de outros já existentes. Além disso, poderá alterar, remover e consultar eventos já criados.                     |

## Riscos
| Data       | Risco                                          | Prioridade | Responsável | Status  | Providência/Solução                                                                                |
| ---------- | ---------------------------------------------- | ---------- | ----------- | ------- | -------------------------------------------------------------------------------------------------- |
| 23/06/2020 | Fragilidade no acesso de usuário               | Baixa      | Todos       | Vigente | Criação da entidade usuário que possui os atributos login e senha                                  |
| 23/06/2020 | Venda de ingressos                             | Alta       | Todos       | Vigente | Realizar testes até que o sistema esteja funcionando corretamente                                  |
| 23/06/2020 | Quantidade de vagas                            | Alta       | Todos       | Vigente | Realizar testes e certificar que a contagem de vagas esteja implementada corretamente              |
| 23/06/2020 | Curto prazo para desenvolver o sistema         | Alta       | Todos       | Vigente | Antecipar desenvolvimento                                                                          |
| 23/06/2020 | Falta de técnica de membros da equipe          | Média      | Todos       | Vigente | Estudar, praticar e buscar ajuda com membros da equipe mais experientes nas ferramentas utilizadas |
| 23/06/2020 | Acúmulo de tarefas não relacionadas ao projeto | Alta       | Todos       | Vigente | Buscar diminuir número de tarefas antecipadamente                                                  |
