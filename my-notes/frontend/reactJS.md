## ReactJS

Criando um contador:

### Arquivo `index.js`

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
```

O que estamos importando:

- `React` - framework JS.
- `ReactDOM` - Integração do `React` com o navegador(estrutura do DOM).
- E o arquivo onde a aplicação será escrita. Aqui ele está sendo chamado de `App.js`. Podemos passar o componentes como se fossem tags `HTML` com tag de fechamento explícita ou não.

```
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

- `ReactDOM` chama a função `render()`, que é responsável por renderizar, dentro do DOM de `index.html`, os componentes criados no `App.js`. 
- Aqui, o `React` está utilizando o `Id` do Elemento a ser renderizado na página `.html`, no caso, `root`.

#### Argumentos passados em `render()`:

- Chama a aplicação que está sendo criada, no modo `Strict`:
  
```
<React.StrictMode>
    <App />
</React.StrictMode>,
```
- Determina qual elemento `HTML` será utilizado para renderizar determinado componente:

```
document.getElementById('root')
```

### Entendendo os componentes

#### Componentes

>> **Componente no React** nada mais é do que uma função que retorna `HTML`.

Quando o `HTML` está "escrito", ou seja, integrado dentro do `JavaScript`, chamamos de `JSX` (`JavaScript XML`).

Nome de arquivos de componentes devem começar com letra maiúscula.(Exemplo: `Header.js`).

#### Propriedades

Similar ao `HTML` com o conceito de atributo (`id` e `classes`, por exemplo), porém são repassdo usando componentes ao invés de fazer diretamente pelo `HTML`.

Posso escrever as propridades assim:

`<Header title="Semana OmniStack"/>`

ou, assim:

```
    <Header>
        Semana OmniStack
    </Header>
```

Formas de acessar essa propriedades:

Se eu estiver usando o atributo dentro da tag, posso:

```
function Header(props){
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}
```

`props`(propriedades) irá repassar, como argumento, o que tiver dentro da tag da função, nesse caso em `App.js`, quando selecionarmos o atributo `title`.

Se eu estiver usando declaração explícita, ou seja, o conteúdo dentro da tag, posso usar a propriedade `children`:

```
function Header(props){
    return (
        <header>
            <h1>{props.children}</h1>
        </header>
    );
}
```

De forma mais desestrutura e, talvez, mais fácil de ser lida, posso usar a propriedade direto, entre `{}` como argumento:

```
function Header({ children }){
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}
```

#### Estado

Conceito de estado se refere a uma informação que será mantida pelo componente. Isso é diferente da variável que estamos acostumados.s

**Obs.:** mais de um elemento `HTML` deve estar envolvido em um novo elemento, tipo um `container`.

Para usar o conceito de estado na minha aplicação e atualização o componente, eu preciso importar um módulo do `React` chamado `useState`:

`import React, { useState } from 'react';`


#### Imutabilidade

Por uma questão de performance, segundo o instrutor, nunca podemos manipular a variável do estado de uma forma direita:

```
let counter = useState(0);
function increment(){
    counter++; 
}
```

É necessário sobre a variável do estado com o valor que a gente quiser. Quando usamos `useState()`, essa função retorna 01 `array` com duas posição:

`array[valor, funcaoDeAtualização`]

Na prática, no exemplo do contador, "substituímos" isso:

`let counter = useState(0);`

por isso: 

`const [counter, setCounter] = useState(0);`

Utilizamos um array "desestruturado" para melhor visualização.

- posição 0 = `counter` - guarda o valor do contador, inicializado com `0`
- posição 1 = `setCounter` - função responsável por alterar o valor de `counter`

Ficando assim o códido:

```
const [counter, setCounter] = useState(0);

function increment(){
    setCounter(counter + 1);
}
```

##### Final Code

```
import React, { useState } from 'react';
import Header from './Header';

function App() {
    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter + 1);
    }
    
    return (
        <div>
            <Header>Contador: {counter}</Header>
            <button onClick={increment}>Incrementar</button>
        </div>
    );
}

export default App;
```