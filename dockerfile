
FROM cypress/browsers:node-22.13.0-chrome-132.0.6834.83-1-ff-134.0.1-edge-131.0.2903.147-1

RUN mkdir /cypressproject

WORKDIR /cypressproject

COPY ./package.json .
COPY ./cypress.env.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress

RUN npm install

ENTRYPOINT ["npx","cypress","run"]

CMD [""]  

#To build this image just use the following command line(just as an example):
#docker build -t cypressproject:1.0 .

#To run an example:
#BASIC INSTANCE: docker run -i -t cypressproject:1.0 cypress run --spec cypress/e2e/*.cy.js
#CHROME INSTANCE: docker run -i -t cypressproject:1.0 cypress run --spec cypress/e2e/*.cy.js --browser chrome
#FIREFOX INSTANCE: docker run -i -t cypressproject:1.0 cypress run --spec cypress/e2e/*.cy.js --browser firefox
# Volume config sample for Windows: -v "%cd%":/cypressproject