
db.createCollection( 'expensecategories', {validator: {$jsonSchema: {bsonType: 'object',title:'expensecategories',         }      }});  
 db.expensecategories.createIndex(
{
  "_id": 1
})

