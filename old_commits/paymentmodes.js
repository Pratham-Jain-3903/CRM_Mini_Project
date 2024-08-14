
db.createCollection( 'paymentmodes', {validator: {$jsonSchema: {bsonType: 'object',title:'paymentmodes',required: [         'removed',          'enabled',          'isDefault',          'name',          'description',          'created',          '__v'],properties: {removed: {bsonType: 'bool'},enabled: {bsonType: 'bool'},isDefault: {bsonType: 'bool'},name: {bsonType: 'string'},description: {bsonType: 'string'},created: {bsonType: 'date'},__v: {bsonType: 'double'}}         }      }});  
 db.paymentmodes.createIndex(
{
  "_id": 1
})

