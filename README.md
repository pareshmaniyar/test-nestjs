Testing NestJS

- derived from angular

Architecture

- Controller: http connections, url end point, http verbs(get, put), reponse
- Service: querying logic
- DTOs(data transfer Object): Validation of data from the user
- Entities: DB schema, return created User

Features

- Love CLI generated code!. Absolutely Amazing!!!
- Pipes are useful for type conversions and validations on data model
- Can use fastify or express under the hood

Code
nest generate module <users>
nest g module <users>
nest g service <users>
nest g controller <users>
nest g resource <todos> - generate everything

Entity
nullable: true

TODO:

1. Integrate with GraphQL and a graph DB
