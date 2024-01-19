
db.createCollection( 'clients', {validator: {$jsonSchema: {bsonType: 'object',title:'clients',required: [         'removed',          'enabled',          'company',          'managerName',          'managerSurname',          'phone',          'email',          'customField',          'created',          '__v'],properties: {removed: {bsonType: 'bool'},enabled: {bsonType: 'bool'},company: {bsonType: 'string'},managerName: {bsonType: 'string'},managerSurname: {bsonType: 'string'},phone: {bsonType: 'string'},email: {bsonType: 'string'},customField: {bsonType: 'object'},created: {bsonType: 'date'},__v: {bsonType: 'double'}}         }      }});  
 db.clients.createIndex(
{
  "_id": 1
})

db.clients.createIndex(
{
  "company": 1
},
 {
  "background": true,
  "unique": true
}
)

db.clients.createIndex(
{
  "email": 1
},
 {
  "background": true,
  "unique": true
}
)

