# Análise de Pontos de Função

## Descrição do projeto
O sistema Event Manager é uma ferramenta para o processo de gerenciamento de eventos. Fornece uma maneira intuitiva e eficiente para definir eventos adequados ao público-alvo. Um evento é um acontecimento (festa, espetáculo, comemoração, solenidade etc.) organizado por especialistas, com objetivos institucionais, comunitários ou promocionais.

## Siglas
* 	 PF - Pontos de Função
*	 APF - Análise de Pontos de Função
*	 ALI - Arquivos Lógicos Internos
*	 ALE - Arquivos Lógicos Externos
*	 CE -  Consultas Externas
*	 SE -  Saídas Externas
*	 EE -  Entradas Externas

## Lista de User Stories - US
Lista de user stories e os requisitos que estão associados.

### US00 - Manter evento
* RF05 - Eventos podem ser cadastrados por organizadores e consultados por clientes.
* RF06 - Eventos têm atributos.
* RF07 - Eventos possuem localizações.
* RF09 - O sistema contará com empresas associadas que se cadastraram na aplicação para fornecerem serviços a um evento.
* RF12 - Eventos possuem atrações.
* RF13 - Eventos geram orçamentos.

### US01 - Manter usuário
* RF01 - Usuários podem ser cadastrados como clientes e organizadores de eventos.
* RF02 - Usuários têm como atributos: Login, Senha.
* RF03 - Eventos podem ser cadastrados por organizadores e consultados por clientes.

### US02 - Manter organizador
* RF01 - Usuários podem ser cadastrados como clientes e organizadores de eventos.
* RF04 - Usuários do tipo organizador de evento têm como atributos: cnpj, nome, e-mail, telefone, cod_evento.
* RF05 - Eventos podem ser cadastrados por organizadores e consultados por clientes.
* RF10 - Organizadores podem consultar empresas.

### US03 - Manter atração
* RF12 - Eventos possuem atrações.
* RF13 - Atrações têm como atributos: codigo, nome, telefone, e-mail.

### US04 - Manter ingresso
* RF15 - Ingressos podem ser adquiridos pelos clientes.
* RF16 - Ingressos possuem tipos: Estudante, VIP, normal, entre outros. Por isso, é necessário a criação de uma entidade ingresso que pertence a evento.
* RF17 - Ingressos têm como atributos: codigo, tipo, valor, quantidade.
* RF19 - Tipo_ingresso tem como atributos: cod_ingresso, cod_evento.

### US05 - Manter empresa
* RF09 - O sistema contará com empresas associadas que se cadastraram na aplicação para fornecerem serviços a um evento.
* RF11 - Empresas têm como atributos: cnpj, nome, serviço, telefone, e-mail.

### US06 -Manter orçamento
* RF14 - Orçamentos têm como atributos: codigo, descriçao, ingressos vendidos, valor arrecadado, valor investido, receita.



## Tipo de Contagem

### Contagem indicativa (Ci)
Na contagem indicativa só é necessário analisar os ALIs (Arquivos Lógicos Internos) com o valor de 35 PF cada e os AIE (Arquivos de Interface Externa) com o valor de 15 PF cada.

| ALI               | Entidades Relacionadas |   PF |
| ----------------- | :--------------------: | ---: |
| ALI Evento        |         Evento         |   35 |
| ALI Ingresso      |     Ingresso, Tipo     |   35 |
| ALI Cliente       |        Cliente         |   35 |
| ALI Organizador   |      Organizador       |   35 |
| ALI Atração       |        Atração         |   35 |
| ALI Orçamento     |       Orçamento        |   35 |
| ALI Ingresso      |        Ingresso        |   35 |
| ALI Empresa       |        Empresa         |   35 |
| ALI Localização   |      Localização       |   35 |
| ALI Usuário       |        Usuário         |   35 |

| Contagem   | Total de Pontos Função |
| ---------- | :--------------------: |
| Indicativa |          350           |

### Contagem estimativa (Ce)
Analisa todos às funções da dados (ALI’s e AIE’s) com complexidade baixa, 7 PF cada ALI e 5 PF para cada AIE).
	Analisa todos os processos elementares como médios EE (4 PF), CE (4 PF) e SE (5 PF). 


| Nome            | Tipo de Função |     Complexidade |  PF   |
| --------------- | :------------: | ---------------: | :---: |
| ALI/AIE Exemplo |    ALI/AIE     | Baixa/Média/Alta |  600  |


### Contagem detalhada (Cd)
A contagem Detalhada (Cd) analisa todos às funções da dados (ALI’s e AIE’s) classificando com complexidades baixa, média e alta. Também analisa todos as transações classificando sua complexidade em baixa, média e alta conforme tabela de contribuições. 

| Funções | Baixa | Média | Alta  |
| ------- | :---: | ----: | :---: |
| ALI     |   7   |    10 |  15   |
| AIE     |   5   |     7 |  10   |
| EE      |   3   |     4 |   6   |
| CE      |   3   |     4 |   6   |
| SE      |   4   |     5 |   7   |

#### Complexidade para AIE e ALI
|     |  <20  | 20-50 |  >50  |
| --- | :---: | ----: | :---: |
| 1   | Baixa | Baixa | Média |
| 2-5 | Baixa | Média | Alta  |
| >5  | Média |  Alta | Alta  |

#### Complexidade para EE
|     |  <5   |  5-15 |  >15  |
| --- | :---: | ----: | :---: |
| <2  | Baixa | Baixa | Média |
| 2   | Baixa | Média | Alta  |
| >2  | Média |  Alta | Alta  |

#### Complexidade para SE e CE
|     |  <6   |  6-19 |  >19  |
| --- | :---: | ----: | :---: |
| <2  | Baixa | Baixa | Média |
| 2-3 | Baixa | Média | Alta  |
| >3  | Média |  Alta | Alta  |

#### Análise detalhada

| Descrição       | Tipo | DER | RLR (Nome das Tabelas)	     | Complexidade | Contribuição |
| --------------- | ---- | --- | --------------------------- | ------------ | ------------ |
| ALI Evento      | ALI  | 9   | 1 (Evento)   		     | Média 	    | 10	   |
| ALI Organizador | ALI  | 5   | 1 (Organizador)  	     | Baixa 	    | 7		   |
| ALI Ingresso    | ALI  | 4   | 2 (Ingresso, Tipo_ingresso) | Baixa 	    | 7 	   |
| ALI Orçamento   | ALI  | 6   | 1 (Orçamento) 		     | Baixa  	    | 7	      	   |
| ALI Atração     | ALI  | 4   | 1 (Atração)  		     | Baixa 	    | 7 	   |
| Total		  |      |     |                             |              | 38           |


| Descrição             | Tipo | DER | ALR (Nome das Tabelas)						   | Complexidade | Contribuição |
| --------------------- | ---- | --- | ------------------------------------------------------------------- | ------------ | ------------ |
| Inserir evento        | EE   | 9   | 3 (Localização, Organizador, Empresa)   				   | Média        | 4            |
| Alterar evento      	| EE   | 9   | 6 (Ingresso, Orçamento, Atração, Localização, Empresa, Organizador) | Alta	  | 6            |
| Deletar evento        | EE   | 9   | 6 (Ingresso, Orçamento, Atração, Localização, Empresa, Organizador) | Alta         | 6            |
| Consultar evento      | CE   | 9   | 6 (Ingresso, Orçamento, Atração, Localização, Empresa, Organizador) | Alta         | 6            |
| Inserir organizador   | EE   | 8   | 1 (Organizador)							   | Baixa        | 3            |
| Alterar organizador   | EE   | 8   | 1 (Organizador)							   | Média 	  | 4            |
| Deletar organizador   | EE   | 8   | 1 (Organizador)							   | Média        | 4            |
| Consultar organizador | CE   | 8   | 1 (Organizador)							   | Média        | 4            |
| Inserir ingresso      | EE   | 4   | 2 (Ingresso, Tipo_ingresso)				           | Baixa        | 3            |
| Alterar ingresso    	| EE   | 4   | 2 (Ingresso, Tipo_ingresso)					   | Baixa        | 3            |
| Deletar ingresso      | EE   | 4   | 2 (Ingresso, Tipo_ingresso)					   | Baixa        | 3            |
| Consultar ingresso    | CE   | 4   | 2 (Ingresso, Tipo_ingresso)					   | Baixa        | 3            |
| Detalhar ingresso     | SE   | 4   | 2 (Ingresso, Tipo_ingresso)				           | Baixa        | 4            |
| Inserir orçamento	| EE   | 6   | 2 (Orçamento, Evento)					           | Média        | 4		 |
| Alterar orçamento 	| EE   | 6   | 2 (Orçamento, Evento)						   | Média        | 4            |
| Deletar orçamento	| EE   | 6   | 2 (Orçamento, Evento)						   | Média        | 4            |
| Consultar orçamento	| CE   | 6   | 2 (Orçamento, Evento)						   | Média        | 4            |
| Inserir atração       | EE   | 4   | 2 (Atração, Evento)				  		   | Baixa        | 3            |
| Alterar atração       | EE   | 4   | 2 (Atração, Evento)						   | Baixa        | 3            |
| Deletar atração       | EE   | 4   | 2 (Atração, Evento)						   | Baixa        | 3            |
| Consultar atração     | CE   | 4   | 2 (Atração, Evento)						   | Baixa        | 3            |
| Total			|      |     |	 						   		   |              | 81		 |
