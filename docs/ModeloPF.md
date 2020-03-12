# Modelo para Análise de Pontos de Função

## Descrição do projeto
O sistema Event Manager é uma ferramenta para o processo de gerenciamento de eventos. Fornece uma maneira intuitiva e eficiente para definir eventos adequados ao público-alvo. Um evento é um acontecimento (festa, espetáculo, comemoração, solenidade etc.) organizado por especialistas, com objetivos institucionais, comunitários ou promocionais.

## Siglas
*  PF - Pontos de Função
*	 APF - Análise de Pontos de Função
*	 ALI - Arquivos Lógicos Internos

## Lista de User Stories - US
Lista de user stories e os requisitos que estão associados.

### US00 - Manter evento
* RF00 - Cadastrar evento

### US01 - Manter usuário
* RF01 - Cadastrar usuário

### US02 - Manter empresa
* RF02 - Cadastrar empresa

## Tipo de Contagem

### Contagem indicativa (Ci)
Na contagem indicativa só é necessário analisar os ALIs (Arquivos Lógicos Internos) com o valor de 35 PF cada e os AIE (Arquivos de Interface Externa) com o valor de 15 PF cada.

|       ALI        |       Entidades Relacionadas     |  PF |
| -----------------|:--------------------------------:| ---:|
|    ALI Evento    |             Evento               |  35 |
|    ALI Usuário   |    Usuário, Cliente, Organizador |  35 |
|    ALI Empresa   |             Empresa              |  35 |

|     Contagem     |  Total de Pontos Função |
| -----------------|:-----------------------:|
|    Indicativa    |          105            |

### Contagem estimativa (Ce)
Analisa todos às funções da dados (ALI’s e AIE’s) com complexidade baixa, 7 PF cada ALI e 5 PF para cada AIE).
	Analisa todos os processos elementares como médios EE (4 PF), CE (4 PF) e SE (5 PF). 

Nomes em inglês: External Inputs (EI), External Inquiry (EQ) e External Outputs (EO).

|       Nome        |   Tipo de Função   |      Complexidade    |  PF |
| ----------------- |:------------------:| --------------------:|:---:|
|  ALI/AIE Exemplo  |       ALI/AIE      |    Baixa/Média/Alta  | 600 | 


### Contagem detalhada (Cd)
A contagem Detalhada (Cd) analisa todos às funções da dados (ALI’s e AIE’s) classificando com complexidades baixa, média e alta. Também analisa todos as transações classificando sua complexidade em baixa, média e alta conforme tabela de contribuições. 
