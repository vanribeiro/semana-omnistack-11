## Dados e Entidades

Entidades:
* ONG - (cadastro das ongs - relação 1:N)
* Incidents (casos cadastrados)

## Ferramentas

- **[kext.js](http://knexjs.org)** = query builder javascript
  - **[migrations](http://knexjs.org/#Migrations)** = espécie de controle de versão/histórico do banco de dados.

Instalar knex.js - global:

`npm install knex -g`

Criar uma _migration_:

`npx knex migrate:make <verbo+nome-da-tabela>`

Lista todos os comandos:

`npx kex`

Método:

* Up: É o que eu quero que seja feito(exemplo: criar tabela)
* Down: É o que eu quero que seja _DESfeito_ (exemplo: apagar tabela)

Gerar as tabelas:

`npx knex migrate:latest`