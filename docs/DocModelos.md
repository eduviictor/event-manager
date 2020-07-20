# Modelo Conceitual e Modelo de Dados 
Modelo para o Doc 002 - Documento com o modelo conceitual das entidades do software.

Este documento descreve o modelo conceitual do software e é composto por um conjunto de Entidades e seus relacionamentos. Pode ser feito com Diagramas de Classes da UML ou com outras metodologias de modelagem como Modelagem Entidade - Relacionamento. Deve conter o modelo de Dados e caso necessário um dicionário de dados.  


## Histórico de revisões
Data       | Versão      | Descrição                      | Autor 
---------- | ----------- | ----------------               | ---------
23/06/2020 | 1.0         |Documento inicial               | Ewerton silva
23/06/2020 | 1.1         | Adição de Imagens dos modelos  | Ewerton silva
23/06/2020 | 1.2         | Adição do dicionário de dados  | werton silva
14/07/2020 | 1.3         | Atualizando links das imagens  | Ewerton silva
20/07/2020 | 1.4         | Atualização de modelos e tabelas|Kael Silva
   --      | -           | -                              | -
           
## Modelo conceitual
Segue abaixo o modelo conceitual:

![Modelo Conceitual](https://raw.githubusercontent.com/kaelsilva/event-manager/master/imagens/modelo_ER.png)

## Modelo de dados
 Segue abaixo o modelo relacional:
 
 ![Modelo relacional](https://github.com/eduviictor/event-manager/blob/master/imagens/Modelo%20relacional.png)
 
## Dicionário de dados
 ### Usuário
 * Armazenará as informações dos usuários;
 
| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**Login**|Login do usuário|Varchar|256|Not Null|
|**Senha**|Senha do usuário|Varchar|256|Not Null|

 ### Cliente
 * Armazenará as informações dos usuários;
 
| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**cpf**|Código de identificação da tabela|Int| |PK/Identify|
|**nome**|Nome do cliente|Varchar|31|Not Null|
|**email**|E-mail do cliente|Varchar|31|Not null|
|**telefone**|Telefone de contato do cliente|Varchar|31| |
|**estado**|Estado em que reside|Varchar|3| |
|**cidade**|Cidade em reside|Varchar|31| |
|**login (FK)**|Chave estrangeira referenciando o atributo _login_ de uma conta de usuário. |Int| |FK|

### Organizador
* Armazenará as informações dos organizadores de evento;
* Essa tabela possui uma chave estrangeira da tabela evento.

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**cnpj**|Código de identificação da tabela organizador|Int| |PK/Identify|
|**nome**|Nome do organizador|Varchar|31|Not Null|
|**email**|E-mail de contato do organizador|Varchar|31|Not Null|
|**telefone**|Telefone de contato do organizador|Varchar|15| |
|**login**|Chave estrangeira referenciando o atributo _login_ de uma conta de usuário. |Int| |FK|

### Evento
* Armazenará as informações dos eventos;

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**codigo**|Código de identificação da tabela|Int| |PK/Identify|
|**nome**|Nome do evento|Varchar|31|Not Null|
|**descricao**|Descrição do evento|Date| |Not Null|
|**email**|E-mail de contato da assessoria do evento|Varchar|31|Not Null|
|**telefone**|Telefone de contato da assessoria do evento|Varchar|15| |
|**horario_inicio**|Data e hora de início do evento|Varchar|6|Not Null|
|**horario_fim**|Data e hora de fim do evento|Varchar|6|Not Null|

## Evento_Organizador
* Armazenará as informações que ligam um evento a um organizador.

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**cod_evento(FK)**|Chave estrangeira para um evento.|Varchar||FK|
|**cod_organizador(FK)**|Chave estrangeira para um organizador.|Varchar||FK|

### Localização
* Armazenará as informações da locaização do evento

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**codigo**|Código de identificação da tabela|Varchar|10|PK/Identify|
|**local**|Descrição a respeito do local em que irá ocorrer o evento|Varchar|50||
|**rua**|Rua onde está localizado o evento|Varchar|50||
|**bairro**|Bairro onde está localizado o evento|Varchar|50||
|**cidade**|Cidade onde está localizado o evento|Varchar|50||
|**estado**|Estado onde está localizado o evento|Varchar|3||
|**cod_evento(FK)**|Chave estrangeira para o evento a qual a localização cadastrada pertence|Varchar|50|FK|

### Atração
* Armazenará as informações das atrações de um evento;
* Não possui nenhuma chave estrangeira.

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**codigo**|Código de identificação da tabela|Int| |PK/Identify|
|**nome**|Nome da atração|Varchar|31|Not Null|
|**descricao**|Descrição do evento|Date| |Not Null|
|**horario_inicio**|Data e hora de início da atração|Varchar|6|Not Null|
|**horario_fim**|Data e hora de fim da atração|Varchar|6|Not Null|
|**email**|E-mail de contato da assessoria da atração|Varchar|31|Not Null|
|**telefone**|Telefone de contato da assessoria da atração|Varchar|15| |

### Evento_Atracao
* Armazenará as informações que ligam uma atração a um evento.

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**cod_evento(FK)**|Chave estrangeira referenciando o código da tabela evento|Int||FK |
|**cod_atracao(FK)**|Chave estrangeira referenciando o código da tabela atração|Int||FK |

### Ingresso
* Armazenará as informações dos ingressos do evento
* Essa tabela possui uma chave estrangeira da tabela evento

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**codigo**|Código de identificação da tabela|Int| |PK/Identify|
|**valor**|Valor correspondente ao tipo mencionado |Double|||
|**quantidade**|Quantidade disponível para venda|Int|| |
|**cod_evento(FK)**|Chave estrangeira para o evento do qual o ingresso pertence|Int|4|FK|

### Tipo_Ingresso
* Armazenará as informações que ligam um tipo de ingresso a um ingresso.

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**cod_ingresso**|Chave estrangeira referenciando o código da tabela ingresso|Int||FK |
|**cod_tipo**|Chave estrangeira referenciando o código da tabela tipo|Int||FK |

### Ingresso_Cliente
* Armazenará as informações que ligam um ingresso a um cliente.

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**cod_ingresso**|Chave estrangeira referenciando o código da tabela ingresso|Int||FK |
|**cod_cliente**|Chave estrangeira referenciando a chave primária da tabela cliente|Int||FK |

### Tipo
* Armazenará um código e o nome do tipo de um ingresso (normal, estudante, etc.).

| Nome | Descrição | Tipo de dado | Tamanho | Restrições |
|------|-----------|--------------|---------|------------|
|**codigo**|Código de identificação da tabela|Int||PK/Identify |
|**nome**|Nome do tipo do ingresso (normal, estudante...)|Varchar|| |

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

## Referências
Endereço para o documento de visão [Documento de visão](https://github.com/eduviictor/event-manager/edit/master/docs/DocVisao.md)
 
