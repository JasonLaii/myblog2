# myblog


## technic
### vue全家桶,nodejs,express,mongodb,mongoose

## npm module
#### vue,vue-router,vuex,axios,sweetalert,font-awesome,marked,mongodb,mongoose,bcrypt,jsonwebtoken



## the feature i want to achieve
- 注册 ----------✌
- 登入 ----------✌
- token令牌认证
- 登出
- 发表文章
- 删除文章
- 发表评论
- 删除评论
- 日志
- 测试


## model
UserModel
| ObjectId | account | password | nickname | avatar | bio | gender |

CommentModel
| ObjectId | author:account | comment | ipAddress |

ArticleModel
| ObjectId | author:account | title | summary | content | viewNum | commentNum |





















# myblog2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



If set `timestamps`, mongoose assigns `createdAt` and `updatedAt` fields to your schema, the type assigned is [Date](./api.html#schema-date-js). By default, the name of two fields are `createdAt` and `updatedAt`, customize the field name by setting `timestamps.createdAt` and `timestamps.updatedAt`. 
```javascript 
const thingSchema = new Schema(
  {..}, 
  { timestamps: { createdAt: 'created_at' } }); 
  const Thing = mongoose.model('Thing', thingSchema); 
  const thing = new Thing(); await thing.save(); 
// `created_at` & `updatedAt` will be included 
// With updates, Mongoose will add `updatedAt` to `$set` await Thing.updateOne({}, { $set: { name: 'Test' } }); 
// If you set upsert: true, Mongoose will add `created_at` to `$setOnInsert` as well await Thing.findOneAndUpdate({}, { $set: { name: 'Test2' } }); 
// Mongoose also adds timestamps to bulkWrite() operations 
// See https://mongoosejs.com/docs/api.html#model_Model.bulkWrite await Thing.bulkWrite([ insertOne: { document: { name: 'Jean-Luc Picard', ship: 'USS Stargazer' 
// Mongoose will add `created_at` and `updatedAt` } }, updateOne: { filter: { name: 'Jean-Luc Picard' }, update: { $set: { ship: 'USS Enterprise' // Mongoose will add `updatedAt` } } } ]); 
``` 