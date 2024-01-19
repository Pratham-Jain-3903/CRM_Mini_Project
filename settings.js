
db.createCollection( 'settings', {validator: {$jsonSchema: {bsonType: 'object',title:'settings',required: [         'removed',          'enabled',          'settingKey',          'settingValue',          'valueType',          'isCoreSetting',          '__v'],properties: {removed: {bsonType: 'bool'},enabled: {bsonType: 'bool'},settingKey: {bsonType: 'string'},settingValue: {bsonType: 'object'},valueType: {bsonType: 'string'},isCoreSetting: {bsonType: 'bool'},__v: {bsonType: 'double'}}         }      }});  
 db.settings.createIndex(
{
  "_id": 1
})

db.settings.createIndex(
{
  "settingKey": 1
},
 {
  "background": true,
  "unique": true
}
)

