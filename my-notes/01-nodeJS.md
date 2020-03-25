## NodeJS

```
const express = require('express');
const app = express();
app.use(express.json());
```

### Métodos HTTP:
 * Método `GET` - buscar/listar informações do back-end
 * Método `POST` - cria uma nova informação no back-end
 * Método `PUT` - altera uma informação no back-end
 * Método `DELETE` - apagar uma informação no back-end
 */

### Tipos de Parâmetros:
  * _Query Params_: Parâmetros nomeados e enviados na rota após `?` (Filtros e Paginação)
  * _Route Params_: Identificar recursos(o que estou buscando não tem nome)
  * _Resquest Body_:  corpo da requisição, utilizado para criar recursos


#### Tipos de requests
 * `request.query` = busca via GET usando query
 * `request.params` = busca usando parâmetros específicos
 * `request.body` = criar ou alterar recursos 


 ### Banco de Dados
 * _Driver_ = `SELECT * from users;`
 * _Query Builder_ = sql com javascript

Para essa semana OmniStack, usaremos `sqlite3`.

### Outras ferramentas JS

- **insomnia** = equivalente ao postman para testar requisiçõesHTTP.
- **nodemon** = auto realoader page
- **[kext.js](http://knexjs.org)** = query builder javascript
  - **[migrations](http://knexjs.org/#Migrations)** = espécie de controle de versão/histórico do banco de dados. 

Instalando o CORS:

`npm install cors`

### Código

```
//Lista Usuários
app.get('/users', (request, response) =>{
    const params = request.query;

    console.log(params);

    /**Resposta */
    return response.json({
        name: 'Van Ribeiro',
        email: 'vanribeiro.dev@gmail.com'
    });
});

//Busca por parâmetro
app.get('/users/:id', (request, response) =>{
    const params = request.params;

    console.log(params);

    /**Resposta */
    return response.json({
        name: 'Van Ribeiro',
        email: 'vanribeiro.dev@gmail.com'
    });
});

//Cria recursos
app.post('/user', (request, response) =>{
    const body = request.body;

    console.log(body);

    /**Resposta */
    return response.json({
        name: 'Van Ribeiro',
        email: 'vanribeiro.dev@gmail.com'
    });
});


app.listen(3333);

```