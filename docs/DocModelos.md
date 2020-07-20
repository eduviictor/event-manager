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
   --      | -           | -                              | -
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

## Referências
Endereço para o documento de visão [Documento de visão](https://github.com/eduviictor/event-manager/edit/master/docs/DocVisao.md)
 
