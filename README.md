# Event-manager

# Descrição:
  
O sistema EventManager terá o cadastro de eventos (festa, espetáculo, comemoração, solenidade etc.) organizado por especialistas, com objetivos institucionais, comunitários ou promocionais. Também contará com as funcionalidades de aquisição de ingressos para os eventos cadastrados, notificação de eventos por meio de localização ou histórico de eventos e exibirá os relatórios dos eventos para os seus organizadores.

Na página [Documentação](docs/docs.md) temos os detalhes do projeto e a lista de documentos.

# Tecnologias:

* Back-End: Node.js
* Front-End: React.js

# Tutoriais:
* [Rocketseat](https://rocketseat.com.br)
* [Sobre o Node.js](https://nodejs.org/en/about/#about-node-js)
* [Sobre o React.js](https://reactjs.org/)
* [Sobre o JavaScript](https://thenewstack.io/javascripts-history-and-how-it-led-to-reactjs/)
* [Dependências JavaScript](https://blog.da2k.com.br/2015/03/03/gerenciando-corretamente-dependencias-em-nodejs-save-ou-save-dev-1/)



# Instalação

## Backend

1. Na pasta backend rode: `yarn` ou `npm install`
2. Crie um arquivo .env e insira as seguintes configurações de acordo com o .env.example 
3. Caso tenha o docker e o docker-compose instalado (o que aconselho pois docker é sensacional!), verifique se as portas 3000, 5432, 16543 já estão sendo utilizadas, caso esteja, terá que alterar as portas no docker-compose.yml e substituir a porta antes do `:`, após isso rode `docker-compose up -d --build`. Caso não dê erro, significa que deu tudo certo! :smile:
4. Caso não tenha e nem queira instalar o docker e docker-compose, certifique-se de ter o postgres rodando na porta 5432 com as devidas configurações setadas no .env.
5. Após isso, caso esteja rodando local, sem o docker, rode: `yarn build && yarn migrate && yarn start`.
6. Se aparecer um opa, Perfeito!

## Frontend

1. Na pasta frontend rode: `yarn` ou `npm install`
2. Após isso rode: `yarn start`
3. Certifique-se de ter rodado o backend antes do frontend caso queira ver todas as funcionalidades sem bugs inesperados.0