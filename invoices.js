
db.createCollection( 'invoices', {validator: {$jsonSchema: {bsonType: 'object',title:'invoices',required: [         'removed',          'number',          'year',          'recurring',          'date',          'expiredDate',          'client',          'items',          'taxRate',          'subTotal',          'taxTotal',          'total',          'credit',          'discount',          'paymentInvoice',          'paymentStatus',          'note',          'status',          'pdfPath',          'updated',          'created',          '__v'],properties: {removed: {bsonType: 'bool'},number: {bsonType: 'double'},year: {bsonType: 'double'},recurring: {bsonType: 'string'},date: {bsonType: 'date'},expiredDate: {bsonType: 'date'},client: {bsonType: 'objectId'},items: {bsonType: 'array',items: {
title:'object',required: [         'itemName',          'description',          'quantity',          'price',          'total'],properties: {itemName: {bsonType: 'string'},description: {bsonType: 'string'},quantity: {bsonType: 'double'},price: {bsonType: 'double'},total: {bsonType: 'double'}}}},taxRate: {bsonType: 'double'},subTotal: {bsonType: 'double'},taxTotal: {bsonType: 'double'},total: {bsonType: 'double'},credit: {bsonType: 'double'},discount: {bsonType: 'double'},paymentInvoice: {bsonType: 'object'},paymentStatus: {bsonType: 'string'},note: {bsonType: 'string'},status: {bsonType: 'string'},pdfPath: {bsonType: 'string'},updated: {bsonType: 'date'},created: {bsonType: 'date'},__v: {bsonType: 'double'}}         }      }});  
 db.invoices.createIndex(
{
  "_id": 1
})

