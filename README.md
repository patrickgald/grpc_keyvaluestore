# gRPC - KeyValue Store

O gRPC é um serviço de alto desempenho para atender chamadas RPC (Remote Call Procedures). Open source e que pode ser executado em qualquer ambiente. Permite que o aplicativo client-server se comuniquem de forma transparente. Com suporte a load balance, tracing, health-check e autenticação. Facilitando a comunicação entre sistemas.

Nestre trabalho, tratamos o gRPC como uma mini base de dados, salvando cada valor à sua respectiva chave de identificação.

As primitivas são:

- [x] put(key, value)
- [x] get(key) : value
- [x] getAllKeys() : Key[]

## Alunos integrantes da equipe

* Bruno Henrique Armanelli _[github](https://github.com/brunoarmanelli)_
* Patrick Galdino _[github](https://github.com/patrickgald)_

## Professores responsáveis

* Hugo Bastos de Paula _[github](https://github.com/hugodepaula)_

## Instruções de utilização
- Para fazer o download do projeto e executar em sua máquina, faça o clone do repositório:
```sh
$ git clone git@github.com:PUC-ES-LDAMD/kv-store-grpc-bapg.git
```
- Na raíz do projeto, siga os comandos abaixo:
```sh
$ npm install
$ node server/server.js
```

- Para executar as funções propostas:
```sh
$ node client/client.js put ${KEY} ${VALUE}
$ node client/client.js put 1 ABC
```
```sh
$ node client/client.js get ${KEY}
$ node client/client.js get 1
```
```sh
$ node client/client.js getAllKeys
```
