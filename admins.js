
db.createCollection( 'admins', {validator: {$jsonSchema: {bsonType: 'object',title:'admins',required: [         'removed',          'enabled',          'password',          'email',          'name',          'surname',          'role',          'loggedSessions',          'createdAt',          '__v',          'isLoggedIn'],properties: {removed: {bsonType: 'bool'},enabled: {bsonType: 'bool'},password: {bsonType: 'string'},email: {bsonType: 'string'},name: {bsonType: 'string'},surname: {bsonType: 'string'},role: {bsonType: 'string'},loggedSessions: {bsonType: 'array',items: {bsonType: 'string'}},createdAt: {bsonType: 'date'},__v: {bsonType: 'double'},isLoggedIn: {bsonType: 'double'}}         }      }});  
 db.admins.createIndex(
{
  "_id": 1
})

db.admins.createIndex(
{
  "email": 1
},
 {
  "background": true,
  "unique": true
}
)

