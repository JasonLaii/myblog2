# myblog


## technic
### vue全家桶,nodejs,express,mongodb,mongoose

## npm module
#### vue,vue-router,vuex,axios,sweetalert,font-awesome,marked,mongodb,mongoose,bcrypt,jsonwebtoken,moment



## the feature i want to achieve
- 注册 ----------✌
- 登入 ----------✌
- token令牌认证 --✌
- 登出 ----------✌
- 发表文章 ------✌
- 删除文章 ------✌
- 发表评论 ------✌
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

