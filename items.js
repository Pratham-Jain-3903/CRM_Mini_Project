
db.createCollection( 'items', {validator: {$jsonSchema: {bsonType: 'object',title:'items',         }      }});  
 db.items.createIndex(
{
  "_id": 1
})

