Implementation details
Stack/features:
MySQL, RESTAPIs, Graphql, typeORM, database relations, input validations, auto migrations

1. Create Teacher, Student with contact info
    - Assign subject to each teacher
2. Create classes and periods with time
    - assign classes to periods
3. Assign teacher to each period
4. Assign student to each class

Architecture

- Controller: http connections, url end point, http verbs(get, put), reponse
- Service: querying logic
- DTOs(data transfer Object): Validation of data from the user
- Entities: DB schema, return created User

Features

- Love CLI generated code!. Absolutely Amazing!!!
- Pipes are useful for type conversions and validations on data model
- Can use fastify or express under the hood
- derived from angular

Code
nest generate module <users>
nest g module <users>
nest g service <users>
nest g controller <users>
nest g resource <todos> - generate everything

Entity
nullable: true

