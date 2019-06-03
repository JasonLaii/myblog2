import db from '../lib/mongodb'
import assert from 'assert'

export default {
  create: user=>{
    const collection = db.collection('user');

    collection.insertOne(user,function(err,result){
      assert.equal(null,err);

      console.log(result);
      
    });
  },
  
}