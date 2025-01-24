# cypress-pp-loan

# Projeto de Testes Automatizados com Cypress 

Repositório contendo testes automatizados, que foram implementados com uso do Cypress e seguindo as boas práticas recomendadas.

## Estrutura do Projeto

A estrutura do projeto está organizada de acordo com as melhores práticas do Cypress:

![Screenshot 2025-01-23 at 21 42 23](https://github.com/user-attachments/assets/8ccfc0f4-c19d-4159-9719-3ce9ab874439)


- e2e - Pasta com os cenários de testes.
- reports - Pasta contendo os reports gerados após execução dos testes.
- support - Contém o arquivo "commands.js", onde estão os "Cypress Custom Commands" e o arquivo "e2e.js" contendo a função de uso global "Before Each".
- videos - Contém as evidências de execução dos testes em vídeo.


## Pré-requisitos

- [Node.js](https://nodejs.org/) versão 14 ou superior
- [Cypress](https://www.cypress.io/) versão [versão desejada]



## Execução dos testes - Localmente

- OBS: Antes de executar qualquer um dos comandos abaixo é necessário executar o comando:
    * `npm install`
    
    Como também criar um novo arquivo na raiz do projeto, chamado  "cypress.env.json", contendo o seguinte valor:
  
     `{
        "cpf": "448.029.390-60"
     }`

1. Para executar em Modo Interativo
   * `npx cypress open`

2. Para executar em Modo Headless (linha de comando)
  * `npx cypress run`

3. Para executar com Docker.
   - Possuir Docker instalado na máquina.
     
   * `docker build -t cypressproject:1.0 .`
   * `docker run -i -t cypressproject:1.0 cypress run --spec cypress/e2e/*.cy.js`

## Execução dos testes e Reports - Github Actions

- Acessar a aba actions

- Escolher a opção Cypress-tests e clicar em Run workflow - Run workflow

<img width="1419" alt="Screenshot 2024-11-04 at 12 39 20" src="https://github.com/user-attachments/assets/4482f3bf-7dc3-4b39-809a-6b44afeaf298">

### Relatórios

- Clicar na última execução

- Rolar a página até a seção Artifacts e baixar os relatórios.

  <img width="1420" alt="Screenshot 2024-11-04 at 12 47 19" src="https://github.com/user-attachments/assets/0b3caf94-5eee-428e-be94-25044634c307">

- Abrir o arquivo index.html em um navegador.

