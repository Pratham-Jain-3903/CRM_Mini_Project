
db.createCollection( 'quotes', {validator: {$jsonSchema: {bsonType: 'object',title:'quotes',required: [         'removed',          'converted',          'number',          'year',          'date',          'expiredDate',          'client',          'items',          'taxRate',          'subTotal',          'taxTotal',          'total',          'credit',          'discount',          'status',          'pdfPath',          'updated',          'created',          '__v'],properties: {removed: {bsonType: 'bool'},converted: {bsonType: 'bool'},number: {bsonType: 'double'},year: {bsonType: 'double'},date: {bsonType: 'date'},expiredDate: {bsonType: 'date'},client: {bsonType: 'objectId'},items: {bsonType: 'array',items: {
title:'object',required: [         'itemName',          'description',          'quantity',          'price',          'total'],properties: {itemName: {bsonType: 'string'},description: {bsonType: 'string'},quantity: {bsonType: 'double'},price: {bsonType: 'double'},total: {bsonType: 'double'}}}},taxRate: {bsonType: 'double'},subTotal: {bsonType: 'double'},taxTotal: {bsonType: 'double'},total: {bsonType: 'double'},credit: {bsonType: 'double'},discount: {bsonType: 'double'},status: {bsonType: 'string'},pdfPath: {bsonType: 'string'},updated: {bsonType: 'date'},created: {bsonType: 'date'},__v: {bsonType: 'double'}}         }      }});  
 db.quotes.createIndex(
{
  "_id": 1
})

