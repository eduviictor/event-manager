# Documento de Visão

Documento construído a partir do do **Modelo BSI - Doc 001 - Documento de Visão** que pode ser encontrado no 
link: https://docs.google.com/document/d/1DPBcyGHgflmz5RDsZQ2X8KVBPoEF5PdAz9BBNFyLa6A/edit?usp=sharing


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

### Relatório
* Armazenará as informações dos relatórios
* Essa tabela possui uma chave estrangeira da tabela evento

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**Código**|Código de identificação da tabela|Int| |PK/Identify|
|**Ingressos**|Quantidade de ingressos vendidos |Int|||
|**Valor Arrecadado**|Valor bruto arrecadado |Double|||
|**Valor Investido**|Valor total investido |Double|||
|**Receita**|Valor líquido obtido |Double|||
|**Cod_Evento**|Chave estrangeira referenciando o código da tabela evento |Int||FK|

### Empresa
* Armazenará as informações das empresas associadas à um evento

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**Cnpj**|Código de identificação da tabela|Int| |PK/Identify|
|**Nome**|Nome da empresa |Varchar|31|Not Null|
|**Serviço**|Tipo de serviço fornecido|Varchar|31|Not Null|
|**Valor**|Valor correspondente ao contrato do serviço |Double|||
|**Telefone**|Telefone de contato |Varchar|15|Not Null|
|**E-mail**|E-mail de contato |Varchar|31|Not Null|
