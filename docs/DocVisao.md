# Documento de Visão

Documento construído a partido do **Modelo BSI - Doc 001 - Documento de Visão** que pode ser encontrado no 
link: https://docs.google.com/document/d/1DPBcyGHgflmz5RDsZQ2X8KVBPoEF5PdAz9BBNFyLa6A/edit?usp=sharing


## Descrição geral do sistema

O sistema Event Manager é uma ferramenta para o processo de gerenciamento de
eventos. Fornece uma maneira intuitiva e eficiente para definir eventos adequados ao
público-alvo. Um evento é um acontecimento (festa, espetáculo, comemoração, solenidade
etc.) organizado por especialistas, com objetivos institucionais, comunitários ou
promocionais.

A ferramenta estará disponível para ser utilizada tanto por organizadores de evento
quanto para clientes que desejam participar do evento.
Utilizando a ferramenta, o usuário cliente poderá buscar eventos, adquirir ingressos
do evento e receber notificações sobre possíveis eventos que estão de acordo com o seu
interesse ou proximidade da sua cidade.
Utilizando a ferramenta, o usuário organizador de eventos poderá cadastrar novos
eventos ou criar eventos a partir de outros já existentes. Além disso, poderá alterar, remover
e consultar eventos já criados. Tais eventos geraram relatórios para o seu organizador que
serão enviados via e-mail ou gerar um arquivo PDF que podem ser visualizados sem utilizar
a ferramenta.

A ferramenta conterá também afiliação com outras empresas, como o PayPal, que
possibilitem a venda de ingressos pela ferramenta e garanta a confiabilidade e segurança
dos usuários com o sistema. O Event Manager contribui de modo decisivo para melhorar a
qualidade do processo de gerenciamento de eventos como plataforma virtual de uma
empresa.

## Lista de requisitos funcionais

* Cadastrar usuário;
  * um usuário pode ser do tipo cliente;
  * um usuário pode ser do tipo organizador de evento;
  * um usuário cliente possui:
    * cpf, nome, e-mail, telefone, status, estado, cidade, cod_ingresso;
    * permissão para adquirir ingressos de eventos;     
  * um usuário organizador de evento possui:
    * cnpj, nome, e-mail, telefone, status, cod_evento;
    * permissão para cadastrar eventos;
    
* Cadastrar eventos;
  * um evento só pode ser cadastrados por organizadores de evento;
  * um evento pode ser pesquisados por clientes;
  * um evento gera relatórios;
  * um evento possui:
    * codigo, nome, local, cidade, estado, data, status, horario, atracao
    
* Cadastrar empresas;
  * uma empresa pode ser cadastrada para ser associada a um evento;
  * as empresas cadastradas serão associadas a um evento por meio do organizador do evento;
  * uma empresa possui:
    * cnpj, nome, servico, telefone, e-mail

* Gerar relatórios;
  * um evento poderá gerar relatório para os organizadores caso o mesmo tenha dado permissão necessária que constará no registro status;
  * um relatório possui:
    * codigo, ingressos vendidos, valor arrecadado, valor investido, receita
    
* Aquisição de ingressos;    
  * um ingresso pode ser adquirido por cliente;
  * um ingresso possui:
     * codigo, tipo de ingresso, valor
     
* Cadastrar atrações;
  * uma atração pode ser cadastrada para ser associada a um evento;
  * as atrações cadastradas serão associadas a um evento por meio do organizador do evento;
  * uma atração possui:
    * codigo, nome, telefone, e-mail
     
* O sistema possuirá uma interface de ouvidoria na qual os clientes e organizadores podem realizar sugestões e/ou
reclamações sobre o sistema;

* O sistema poderá enviar notificações sobre eventos por meio da localização do usuário caso o mesmo tenha permitido
ser notificado, essa informação sobre a permissão constará no registro de status;

* O sistema contará com uma central de notícias que exibirá informações referentes aos principais eventos do país;

 
 ## Modelo conceitual
 
Segue abaixo o modelo entidade relacionamento:
![alt text](https://github.com/eduviictor/event-manager/blob/master/Modelo%20ER%20-%20EventManager.png "Modelo Entidade Relacionamento")
 
 ## Modelo de dados
 ### Cliente
 * Armazenará as informações dos usuários;
 * Essa tabela possui uma chave estrangeira da tabela ingresso.
 
| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**CPF**|Código de identificação da tabela|Int| |PK/Identify|
|**Nome**|Nome do cliente|Varchar|31|Not Null|
|**E-mail**|E-mail do cliente|Varchar|31|Not null|
|**Telefone**|Telefone de contato do cliente|Varchar|31| |
|**Checagem**|Validação de envio de notificações do sistema|Boolean| | |
|**Estado**|Estado em que reside|Varchar|3| |
|**Cidade**|Cidade em reside|Varchar|31| |
|**Cod_Ing**|Chave estrangeira referenciando o código da tabela ingresso|Int| |FK|

### Organizador
* Armazenará as informações dos organizadores de evento;
* Essa tabela possui uma chave estrangeira da tabela evento.

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**CPF/CNPJ**|Código de identificação da tabela organizador|Int| |PK/Identify|
|**Nome**|Nome do organizador|Varchar|31|Not Null|
|**E-mail**|E-mail de contato do organizador|Varchar|31|Not Null|
|**Telefone**|Telefone de contato do organizador|Varchar|15| |
|**Checagem**|Validação de envio de relatórios do sistema|Boolean| | |
|**Cod_Evento**|Chave estrangeira referenciando o código da tabela evento|Int| |FK|

### Evento
* Armazenará as informações dos eventos;
* Essa tabela possui uma chave estrangeira da tabela atração.

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**Código**|Código de identificação da tabela|Int| |PK/Identify|
|**Nome**|Nome do evento|Varchar|31|Not Null|
|**Local**|Local de realização do evento|Varchar|31|Not Null|
|**Data**|Data de realização do evento|Date| |Not Null|
|**Cidade**|Cidade que o evento irá ser realizado|Varchar|31|Not Null|
|**Estado**|Estado em que o evento será realizado|Varchar|3|Not Null|
|**Horário**|Hora de início do evento|Varchar|6|Not Null|
|**Cod_Atracao**|Chave estrangeira referenciando o código da tabela atração|Int| |FK|
|**Cod_Empresa**|Chave estrangeira referenciando o código da tabela terceirizados|Varchar|15|FK|

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
|**Cod_Evento**|Chave estrangeira referenciando o código da tabela evento|Int||FK |
