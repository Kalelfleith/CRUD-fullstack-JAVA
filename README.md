# CRUD-fullstack-JAVA

CRUD de Cadastro de Colaborar

---

## Tecnologias
- Java 17
- Spring Boot
- Maven
- Banco de dados relacional - PostgreSQL
- React
- SCSS

## APIs

> Utilizado API https://viacep.com.br/ para consultar o CEP e preenchar os campos de endereço no formulário automaticamente.

## Script do Banco de Dados:

* Este script criará as tabelas necessárias.
* A estrutura criada não deve ser alterada!

`-- -----------------------------------------------------`<br/>
`-- Table Colaborador`<br/>
`-- -----------------------------------------------------`<br/>
`CREATE TABLE tb_colaborador`<br/>
`( id SERIAL PRIMARY KEY NOT NULLL,`<br/>
`nome VARCHAR(50) NOT NULL,`<br/>
`telefone VARCHAR(50) NOT NULL,`<br/>
`cep VARCHAR(50) NOT NULL,`<br/>
`rua VARCHAR(50) NOT NULL,`<br/>
`bairro VARCHAR(50) NOT NULL,`<br/>
`cidade VARCHAR(50) NOT NULL,`<br/>
`uf VARCHAR(50) NOT NULL`<br/>
`);`<br/>
