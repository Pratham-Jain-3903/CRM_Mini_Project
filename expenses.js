
db.createCollection( 'expenses', {validator: {$jsonSchema: {bsonType: 'object',title:'expenses',         }      }});  
 db.expenses.createIndex(
{
  "_id": 1
})

