
db.createCollection( 'leads', {validator: {$jsonSchema: {bsonType: 'object',title:'leads',         }      }});  
 db.leads.createIndex(
{
  "_id": 1
})

db.leads.createIndex(
{
  "email": 1
},
 {
  "background": true,
  "unique": true
}
)

