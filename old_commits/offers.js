
db.createCollection( 'offers', {validator: {$jsonSchema: {bsonType: 'object',title:'offers',         }      }});  
 db.offers.createIndex(
{
  "_id": 1
})

