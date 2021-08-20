# Projeto exemplo de teste unitário com node.js + Restify + Jest

Este projeto foi desenvolvido para um exemplo prático de como usar a ferramenta Jest como teste unitário, teste de integração e TDD.

Este projeto tem a configuração para rodar tanto no console quando no VSCode.

## O que foi configurado

### package.json

Foi adicionado as rotinas para execução do teste unitário e integração junto com code Coverage.


```json
...
  "scripts": {
    "test": "jest --coverage ./tests",
    "tdd": "jest --watch ./tests"
  },
...
```

Para rodar os testes:
```shell
npm test
```
Para rodar em modo TDD:
```shell
npm run tdd
```
As configurações do code coverage esta na seção:

```json
...
  "jest": {
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 50,
        "statements": -10
      }
    }
  }, 
...
```

### VSCode

Para rodar o debug nos testes com TDD, basta iniciar o debug no "Launch DEBUG Jest TDD".


