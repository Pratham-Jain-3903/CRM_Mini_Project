
db.createCollection( 'suppliers', {validator: {$jsonSchema: {bsonType: 'object',title:'suppliers',         }      }});  
 db.suppliers.createIndex(
{
  "_id": 1
})

