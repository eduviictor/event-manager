# Modelo para Análise de Pontos de Função

## Descrição do projeto
O sistema Event Manager é uma ferramenta para o processo de gerenciamento de eventos. Fornece uma maneira intuitiva e eficiente para definir eventos adequados ao público-alvo. Um evento é um acontecimento (festa, espetáculo, comemoração, solenidade etc.) organizado por especialistas, com objetivos institucionais, comunitários ou promocionais.

## Siglas
*  PF - Pontos de Função
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
* RF01 - Cadastrar usuário

### US02 - Manter empresa
* RF02 - Cadastrar empresa

## Tipo de Contagem

### Contagem indicativa (Ci)
Na contagem indicativa só é necessário analisar os ALIs (Arquivos Lógicos Internos) com o valor de 35 PF cada e os AIE (Arquivos de Interface Externa) com o valor de 15 PF cada.

|         ALI          |       Entidades Relacionadas     |  PF |
| ---------------------|:--------------------------------:| ---:|
|     ALI Evento       |              Evento              |  35 |
|     ALI Usuário      |              Usuário             |  35 |
|     ALI Cliente      |              Cliente             |  35 |
|    ALI Organizador   |             Organizador          |  35 |
|     ALI Atração      |              Atração             |  35 |
|     ALI Orçamento    |             Orçamento            |  35 |
|     ALI Ingresso     |              Ingresso            |  35 |
|    ALI Tipo Ingresso |            Tipo Ingresso         |  35 |
|     ALI Empresa      |              Empresa             |  35 |
|    ALI Localização   |             Localização          |  35 |

|     Contagem     |  Total de Pontos Função |
| -----------------|:-----------------------:|
|    Indicativa    |          350            |

### Contagem estimativa (Ce)
Analisa todos às funções da dados (ALI’s e AIE’s) com complexidade baixa, 7 PF cada ALI e 5 PF para cada AIE).
	Analisa todos os processos elementares como médios EE (4 PF), CE (4 PF) e SE (5 PF). 


|       Nome        |   Tipo de Função   |      Complexidade    |  PF |
| ----------------- |:------------------:| --------------------:|:---:|
|  ALI/AIE Exemplo  |       ALI/AIE      |    Baixa/Média/Alta  | 600 | 


### Contagem detalhada (Cd)
A contagem Detalhada (Cd) analisa todos às funções da dados (ALI’s e AIE’s) classificando com complexidades baixa, média e alta. Também analisa todos as transações classificando sua complexidade em baixa, média e alta conforme tabela de contribuições. 

|     Funções      |     Baixa     |      Média    |     Alta    |
| ---------------- |:-------------:| -------------:|:-----------:|
|       ALI        |       7       |       10      |      15     | 
|       AIE        |       5       |       7       |      10     | 
|       EE         |       3       |       4       |      6      | 
|       CE         |       3       |       4       |      6      | 
|       SE         |       4       |       5       |      7      | 

#### Complexidade para AIE e ALI
|                  |        <20        |      20-50       |      >50      |
| ---------------- |:-----------------:| ----------------:|:-------------:|
|        1         |       Baixa       |       Baixa      |      Média    | 
|       2-5        |       Baixa       |       Média      |      Alta     | 
|       >5         |       Média       |       Alta       |      Alta     | 

#### Complexidade para EE
|                  |        <5         |       5-15       |      >15      |
| ---------------- |:-----------------:| ----------------:|:-------------:|
|        <2        |       Baixa       |       Baixa      |      Média    | 
|         2        |       Baixa       |       Média      |      Alta     | 
|        >2        |       Média       |       Alta       |      Alta     | 

#### Complexidade para SE e CE
|                  |        <6         |       6-19       |      >19      |
| ---------------- |:-----------------:| ----------------:|:-------------:|
|        <2        |       Baixa       |       Baixa      |      Média    | 
|        2-3       |       Baixa       |       Média      |      Alta     | 
|        >3        |       Média       |       Alta       |      Alta     | 

#### Análise detalhada

|      Descrição      |       Tipo      |       TD       |      TR      |      Complexidade      |      Contribuição      |
| ------------------- |:---------------:| --------------:|:------------:|:----------------------:|:----------------------:|
|	Inserir evento	|	EE	|		|		|	Baixa		|	3		|
|	Atualizar evento |	EE	|		|		|	Baixa		|	3		|
|	Deletar evento	|	EE	|		|		|	Baixa		|	3		|
|	Consultar evento|	CE	|		|		|	Baixa		|	3		|
|Inserir usuário|EE|||Baixa|3|
|Alterar usuário|EE|||Baixa|3|
|Deletar usuário|EE|||Baixa|3|
|Consultar usuário|CE|||Baixa|3|
