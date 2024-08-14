
db.createCollection( 'paymentinvoices', {validator: {$jsonSchema: {bsonType: 'object',title:'paymentinvoices',         }      }});  
 db.paymentinvoices.createIndex(
{
  "_id": 1
})

