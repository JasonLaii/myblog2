import {mongdb,dbname} from '../config/default'
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

export default db = MongoClient.connect(mongdb,function(err,client){
  assert.equal(null,err);
  console.log("Connected successfully");
  const db =client.db(dbname);

  return db;
})