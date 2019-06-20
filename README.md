# myblog


## technic
### vue全家桶,bootstrap,nodejs,express,mongodb

## npm module
### front end
#### axios,sweetalert

### back end
#### mongodb,winston,marked,express-session,moment,bcrypt


## the feature i want to achieve
- 注册 ----------✌
- 登入 ----------✌
- 登出
- 发表文章
- 删除文章
- 发表评论
- 删除评论
- 日志



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
