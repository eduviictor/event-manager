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
* RF04 - Eventos podem ser cadastrados por organizadores e consultados por clientes, e têm como atributos: codigo, nome, data, horario_inicio, Horario_fim, cod_atracao, cod_local, cod_empresa, cod_orcamento, cod_ingresso.
* RF05 - Eventos possuem localização
* RF06 - Localizações podem ser consultadas por clientes.
* RF07 - localização de um evento pode ser alterada.
* RF08 - O sistema contará com empresas associadas que se cadastraram na aplicação para fornecerem serviços a um evento.
* RF10 - Eventos possuem atrações.
* RF12 - Eventos geram orçamentos.
* RF21 - Eventos possuem relatórios.
* RF22 - Relatório de um evento é consultado por um organizador.

### US01 - Manter usuário
* RF01 - Usuários podem ser cadastrados como clientes e organizadores de eventos, e têm como atributos: Login, Senha.
* RF19 - Usuários recebem notificação sobre os eventos.

### US02 - Manter organizador
* RF03 - Usuários (organizador) organizadores de eventos, e têm como atributos:  cnpj, nome, e-mail, telefone, login.
* RF05 - Eventos podem ser cadastrados por organizadores e consultados por clientes.
* RF09 - Organizadores podem consultar empresas.
* RF21 - Organizadores podem consultar relatórios.

### US03 - Manter atração
* RF10 - Eventos possuem atrações.
* RF11 - Atrações têm como atributos: codigo, nome, telefone, e-mail, horario_inicio, horario_fim, descrição.

### US04 - Manter ingresso
* RF13 - Ingressos podem ser adquiridos pelos clientes.
* RF14 - Ingressos possuem tipos: Estudante, VIP, normal, entre outros. Por isso, é necessário a criação de uma entidade ingresso que pertence a evento.
* RF15 - Ingressos têm como atributos: codigo, tipo, valor, quantidade.
* RF17 - Tipo_ingresso tem como atributos: cod_ingresso, cod_evento.

### US05 - Manter empresa
* RF08 - O sistema contará com empresas associadas que se cadastraram na aplicação para fornecerem serviços a um evento.
* RF09 - Empresas têm como atributos: cnpj, nome, serviço, telefone, e-mail.

### US06 -Manter orçamento
* RF12 - Orçamentos têm como atributos: codigo, descriçao, ingressos_vendidos, valor_arrecadado, valor_investido, cod_evento, receita.

### US07 - Manter cliente
* RF02 - Usuários podem ser cadastrados como clientes e organizadores de eventos, e têm como atributos: cpf, nome, e-mail, telefone, estado, cidade, login.
* RF06 - clientes podem consultar a localização de um evento.
* RF13 - Ingressos podem ser adquiridos pelos clientes.

### US08 - Manter relatório
* RF21 - Relatórios de eventos/atração podem ser consultados pelos organizadores, e têm como atributos: codigo, valor_investido, valor_arrecadado, cod_evento, receita.

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
| ALI Relatório     |        Relatório       |   35 |


| Contagem   | Total de Pontos Função |
| ---------- | :--------------------: |
| Indicativa |          385           |

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
| ALI Usuário     | ALI  | 2   | 1 (Usuário)  		     | Baixa 	    | 7 	   |
| ALI Cliente     | ALI  | 7   | 1 (Cliente)  		     | Baixa 	    | 7 	   |
| ALI Empresa     | ALI  | 5   | 1 (Empresa)  		     | Baixa 	    | 7 	   |
| ALI Relatório   | ALI  | 5   | 1 (Relatório) 		     | Baixa 	    | 7 	   |
| Total		  |      |     |                             |              | 66           |


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
| Inserir usuário  	| EE   | 2   | 2 (Usuário, Cliente ou Organizador)				   | Baixa        | 3            |
| Alterar usuário   	| EE   | 2   | 2 (Usuário, Cliente ou Organizador)				   | Baixa 	  | 3            |
| Deletar usuário   	| EE   | 2   | 2 (Usuário, Cliente ou Organizador)				   | Baixa        | 3            |
| Consultar usuário 	| CE   | 1   | 1 (Usuário)							   | Baixa        | 3            |
| Inserir cliente  	| EE   | 7   | 1 (Cliente)							   | Baixa        | 3            |
| Alterar cliente   	| EE   | 7   | 1 (Cliente)							   | Baixa 	  | 3            |
| Deletar cliente   	| EE   | 7   | 1 (Cliente)							   | Baixa        | 3            |
| Consultar cliente 	| CE   | 7   | 1 (Cliente)							   | Baixa        | 3            |
| Inserir empresa  	| EE   | 5   | 1 (Empresa)							   | Baixa        | 3            |
| Alterar empresa   	| EE   | 5   | 1 (Empresa)							   | Baixa 	  | 3            |
| Deletar empresa   	| EE   | 5   | 1 (Empresa)							   | Baixa        | 3            |
| Consultar empresa 	| CE   | 5   | 1 (Empresa)							   | Baixa        | 3            |
| Deletar relatório   	| EE   | 5   | 2 (Relatório, evento)						   | Baixa        | 3            |
| Consultar relatório 	| CE   | 5   | 2 (Relatório, evento)						   | Baixa        | 3            |
| Total			|      |     |	 						   		   |              | 123		 |
