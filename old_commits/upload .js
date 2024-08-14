
db.createCollection( 'upload ', {validator: {$jsonSchema: {bsonType: 'object',title:'upload ',         }      }});  
 db.upload .createIndex(
{
  "_id": 1
})

db.upload .createIndex(
{
  "path": 1
},
 {
  "background": true,
  "unique": true
}
)

