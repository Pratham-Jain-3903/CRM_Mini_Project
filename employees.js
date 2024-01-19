
db.createCollection( 'employees', {validator: {$jsonSchema: {bsonType: 'object',title:'employees',required: [         'removed',          'enabled',          'name',          'surname',          'birthday',          'birthplace',          'gender',          'department',          'position',          'address',          'state',          'phone',          'email',          'status',          'created',          '__v'],properties: {removed: {bsonType: 'bool'},enabled: {bsonType: 'bool'},name: {bsonType: 'string'},surname: {bsonType: 'string'},birthday: {bsonType: 'date'},birthplace: {bsonType: 'string'},gender: {bsonType: 'string'},department: {bsonType: 'string'},position: {bsonType: 'string'},address: {bsonType: 'string'},state: {bsonType: 'string'},phone: {bsonType: 'string'},email: {bsonType: 'string'},status: {bsonType: 'string'},created: {bsonType: 'date'},__v: {bsonType: 'double'}}         }      }});  
 db.employees.createIndex(
{
  "_id": 1
})

db.employees.createIndex(
{
  "_fts": "text",
  "_ftsx": 1
},
 {
  "background": true,
  "weights": {
    "birthday": 1,
    "name": 1,
    "status": 1,
    "surname": 1
  },
  "default_language": "english",
  "language_override": "language",
  "textIndexVersion": 3
}
)

