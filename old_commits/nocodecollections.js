
db.createCollection( 'nocodecollections', {validator: {$jsonSchema: {bsonType: 'object',title:'nocodecollections',         }      }});  
 db.nocodecollections.createIndex(
{
  "_id": 1
})

db.nocodecollections.createIndex(
{
  "collectionId": 1
},
 {
  "background": true,
  "unique": true
}
)

db.nocodecollections.createIndex(
{
  "appId": 1
},
 {
  "background": true,
  "unique": true
}
)

db.nocodecollections.createIndex(
{
  "collectionSchema.fieldId": 1
},
 {
  "background": true,
  "unique": true
}
)

