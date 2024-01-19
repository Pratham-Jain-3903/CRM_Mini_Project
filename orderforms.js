
db.createCollection( 'orderforms', {validator: {$jsonSchema: {bsonType: 'object',title:'orderforms',         }      }});  
 db.orderforms.createIndex(
{
  "_id": 1
})

