# Documento de Visão

Documento construído a partir do do **Modelo BSI - Doc 001 - Documento de Visão** que pode ser encontrado no 
link: https://docs.google.com/document/d/1DPBcyGHgflmz5RDsZQ2X8KVBPoEF5PdAz9BBNFyLa6A/edit?usp=sharing

## Histórico de revisões

Data        |   Versão     |  Descrição               | Autor
-----       |   --------   |  -----------             |-------
23/06/2020  |     1.0      |Documento revisado        |Kael
--          |      --      |      --                  |--

## Equipe e definição de papéis

Equipe            |  Papel                                        |  E-mail
------------------|-----------------------------------------------|--------------------------
Ewerton Silva     |  Gerente, Desenvolvedor, Analista, Testador   |  ewertoncom297@gmail.com
Eduardo Victor    |  Gerente, Desenvolvedor, Analista, Testador   |  eduvictornobrega@gmail.com
Arthur Medeiros   |  Gerente, Analista, Desenvolvedor, Testador   |  arthurmedeiros2005@gmail.com
Kael Silva        |  Gerente, Desenvolvedor, Analista, Testador   |  kaelsilvaaraujo@gmail.com
Clodoaldo Brito   |  Gerente, Desenvolvedor, Analista, Testador   |  clodoaldo.brtp4@gmail.com

## Matriz de competências

Equipe            |  Competências
------------------|---------------------------------------------------------------------------------
Ewerton Silva     |  
Eduardo Victor    |  
Arthur Medeiros   |  
Kael Silva        |  JavaScript, Node.js, React, React-Native, TypeScript, SQL
Clodoaldo Brito   |  JavaScript, React, SQL, Ejs


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

* RF01 - Usuários podem ser cadastrados como clientes e organizadores de eventos.

* RF02 - Usuários têm como atributos: Login, Senha.

* RF03 - Usuários do tipo cliente têm como atributos:
   
    * cpf, nome, e-mail, telefone, estado, cidade, cod_ingresso;  
    
* RF04 - Usuários do tipo organizador de evento têm como atributos:
   
    * cnpj, nome, e-mail, telefone, cod_evento;  
    
* RF05 - Eventos podem ser cadastrados por organizadores e consultados por clientes.

* RF06 - Eventos têm como atributos:
   
    * codigo, nome, data, horario, cod_atracao, cod_local, cod_empresa, cod_orcamento, cod_ingresso;
    
* RF07 - Eventos possuem localizações.

* RF08 - Localização têm como atributos:
   
    * codigo, local, rua, bairro, cidade, estado;
    
* RF09 - O sistema contará com empresas associadas que se cadastraram na aplicação para fornecerem serviços a um evento.

* RF10 - Organizadores podem consultar empresas.

* RF11 - Empresas têm como atributos:
   
    * cnpj, nome, serviço, telefone, e-mail;
    
* RF12 - Eventos possuem atrações.

* RF13 - Atrações têm como atributos:
   
    * codigo, nome, telefone, e-mail;

* RF13 - Eventos geram orçamentos.

* RF14 - Orçamentos têm como atributos:
   
    * codigo, descriçao, ingressos vendidos, valor arrecadado, valor investido, receita;   

* RF15 - Ingressos podem ser adquiridos pelos clientes.

* RF16 - Ingressos possuem tipos: Estudante, VIP, normal, entre outros. Por isso, é necessário a criação de uma entidade ingresso que pertence a evento. 

* RF17 - Ingressos têm como atributos:
   
    * codigo, tipo, valor, quantidade;

* RF19 - Tipo_ingresso têm como atributos:
   
     * cod_ingresso, cod_evento;
     
* RF20 - A aplicação possuirá uma interface de ouvidoria na qual os clientes e organizadores podem realizar sugestões e/ou
reclamações sobre o sistema.

* RF21 - A aplicação poderá enviar notificações sobre eventos por meio da localização do usuário caso o mesmo tenha permitido
ser notificado, essa informação sobre a permissão constará no registro de status.

* RF22 - A aplicação contará com uma central de notícias que exibirá informações referentes aos principais eventos do país.

 
 ## Modelo conceitual
 
Segue abaixo o modelo entidade relacionamento:
![Modelo Conceitual](https://github.com/eduviictor/event-manager/blob/master/docs/modelo_ER.png)
 
 ## Modelo de dados
 Segue abaixo o modelo relacional:
 ![Modelo relacional](https://github.com/eduviictor/event-manager/blob/master/docs/Modelo%20relacional.png)

 ### Usuário
 * Armazenará as informações dos usuários;
 
| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**Login**|Login do usuário|Varchar|31|Not Null|
|**Senha**|Senha do usuário|Varchar|9|Not Null|

 ### Cliente
 * Armazenará as informações dos usuários;
 * Essa tabela possui uma chave estrangeira da tabela ingresso.
 
| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**CPF**|Código de identificação da tabela|Int| |PK/Identify|
|**Nome**|Nome do cliente|Varchar|31|Not Null|
|**E-mail**|E-mail do cliente|Varchar|31|Not null|
|**Telefone**|Telefone de contato do cliente|Varchar|31| |
|**Estado**|Estado em que reside|Varchar|3| |
|**Cidade**|Cidade em reside|Varchar|31| |
|**Cod_Ing**|Chave estrangeira referenciando o código da tabela ingresso|Int| |FK|

### Organizador
* Armazenará as informações dos organizadores de evento;
* Essa tabela possui uma chave estrangeira da tabela evento.

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**CNPJ**|Código de identificação da tabela organizador|Int| |PK/Identify|
|**Nome**|Nome do organizador|Varchar|31|Not Null|
|**E-mail**|E-mail de contato do organizador|Varchar|31|Not Null|
|**Telefone**|Telefone de contato do organizador|Varchar|15| |
|**Cod_Evento**|Chave estrangeira referenciando o código da tabela evento|Int| |FK|

### Evento
* Armazenará as informações dos eventos;
* Essa tabela possui uma chave estrangeira da tabela atração.

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**Código**|Código de identificação da tabela|Int| |PK/Identify|
|**Nome**|Nome do evento|Varchar|31|Not Null|
|**Data**|Data de realização do evento|Date| |Not Null|
|**Horário**|Hora de início do evento|Varchar|6|Not Null|
|**Cod_Atracao**|Chave estrangeira referenciando o código da tabela atração|Int| |FK|
|**Cod_Empresa**|Chave estrangeira referenciando o código da tabela empresa|Varchar|15|FK|
|**Cod_Local**|Chave estrangeira referenciando o código da tabela localização|Varchar|10|FK|
|**Cod_Ingresso**|Chave estrangeira referenciando o código da tabela ingresso|Int||FK |
|**Cod_Orçamento**|Chave estrangeira referenciando o código da tabela orçamento|Int||FK |

### Localização
* Armazenará as informações da locaização do evento
* Não possui nenhuma chave estrangeira.

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**Código**|Código de identificação da tabela|Varchar|10|PK/Identify|
|**Local**|Descrição a respeito do local em que irá ocorrer o evento|Varchar|50||
|**Rua**|Rua onde está localizado o evento|Varchar|50||
|**Bairro**|Bairro onde está localizado o evento|Varchar|50||
|**Cidade**|Cidade onde está localizado o evento|Varchar|50||
|**Estado**|Estado onde está localizado o evento|Varchar|3||

### Atração
* Armazenará as informações das atrações de um evento;
* Não possui nenhuma chave estrangeira.

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**Código**|Código de identificação da tabela|Int| |PK/Identify|
|**Nome**|Nome da atração|Varchar|31|Not Null|
|**E-mail**|E-mail de contato da assessoria da atração|Varchar|31|Not Null|
|**Telefone**|Telefone de contato da assessoria da atração|Varchar|15| |

### Ingresso
* Armazenará as informações dos ingressos do evento
* Essa tabela possui uma chave estrangeira da tabela evento

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**Código**|Código de identificação da tabela|Int| |PK/Identify|
|**Tipo**|Tipo do ingresso|Varchar|10|Not Null|
|**Valor**|Valor correspondente ao tipo mencionado |Double|||
|**Quantidade**|Quantidade disponível para venda|Int|| |

### Tipo Ingresso
* Armazenará as informações referentes a um tipo de ingresso

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**Cod_Ingresso**|Chave estrangeira referenciando o código da tabela evento|Int||FK |
|**Cod_Evento**|Chave estrangeira referenciando o código da tabela evento|Int||FK |

### Orçamento
* Armazenará as informações dos orçamentos
* Não possui nenhuma chave estrangeira.

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**Código**|Código de identificação da tabela|Int| |PK/Identify|
|**Descrição**|Descrição a respeito do evento|Varchar|500||
|**Valor Arrecadado**|Valor bruto arrecadado |Double|||
|**Valor Investido**|Valor total investido |Double|||
|**Receita**|Valor líquido obtido |Double|||

### Empresa
* Armazenará as informações das empresas associadas à um evento
* Não possui nenhuma chave estrangeira.

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**Cnpj**|Código de identificação da tabela|Int| |PK/Identify|
|**Nome**|Nome da empresa |Varchar|31|Not Null|
|**Serviço**|Tipo de serviço fornecido|Varchar|31|Not Null|
|**Valor**|Valor correspondente ao contrato do serviço |Double|||
|**Telefone**|Telefone de contato |Varchar|15|Not Null|
|**E-mail**|E-mail de contato |Varchar|31|Not Null|

## Perfis dos usuários
O sistema poderá ser utilizado por diversos usuários . Temos os seguintes perfis:  
#### Perfil Cliente:  
   Este usuário visita o sistema a fim de obter ingressos para eventos, consultar eventos, insere informações sobre ele mesmo, consulta dados de atrações entre outras necessidades.


## Riscos
Data        |Risco                                                                     |Prioridade |Responsável|Status  |Providência/Solução
------------|--------------------------------------------------------------------------|-----------|-----------|--------|--------------------
23/06/2020  |Fragilidade no acesso de usuário                                          |Baixa      |Todos      |Vigente |Criação da entidade usuário que possui os atributos login e senha
23/06/2020  |Venda de ingressos                                                        |Alta       |Todos      |Vigente |Realizar testes até que o sistema esteja funcionando corretamente
23/06/2020  |Quantidade de vagas                                                       |Alta       |Todos      |Vigente |Realizar testes e certificar que a contagem de vagas esteja implementada corretamente
23/06/2020  |Curto prazo para desenvolver o sistema                                    |Alta       |Todos      |Vigente |Antecipar desenvolvimento
23/06/2020  |Falta de técnica de membros da equipe                                     |Média      |Todos      |Vigente |Estudar, praticar e buscar ajuda com membros da equipe mais experientes nas ferramentas utilizadas
23/06/2020  |Acúmulo de tarefas não relacionadas ao projeto                            |Alta       |Todos      |Vigente |Buscar diminuir número de tarefas antecipadamente
