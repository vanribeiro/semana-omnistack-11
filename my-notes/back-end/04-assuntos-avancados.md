## Validação de Dados/Rotas - no Back-End

### Celabrate

É uma [biblioteca](https://github.com/arb/celebrate) que integra a biblioteca de validação [joi](https://github.com/hapijs/joi) ao `Express`.

Instalando o `celebrate`:

`npm install celebrate`

### Testes

Instalando o `Jest`:

`npm install jest`

Iniciando o `Jest`:

`npx jest --init`

O `Jest` faz algumas perguntas antes de iniciar:

- adicionar Jest ao `package.json`
- escolher o ambiente a ser testado
- adicionar `coverage reports`

Tipos de Testes:

- unitário: testa um pedaço da nossa aplicação de forma isolado.
- integração: testam por completo uma funcionalidade

#### Teste de Integração:

Configurando Banco de Teste:

`knexfile.js`, adicionar:

```js
  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  },
  ```

Instalar o `cross-env`:

`npm install cross-env`

Substituir 

`"test": "jest"`

por

`"test": "cross-env NODE_ENV=test && jest"` 

Com isso é possível adicionar uma variável ambiente no `NodeJS` na hora de realizar.

Em `connecting.js`, acrescentar:

```js
const config = process.env.NODE_ENV === 
    'test' ? configuration.test : configuration.development;
const connection = knex(config);
```

Iniciando os testes de Integração:

Como testaremos uma funcionalidade completa, usaremos a biblioteca [`supertest`](https://github.com/visionmedia/supertest)

`npm install supertest -D`