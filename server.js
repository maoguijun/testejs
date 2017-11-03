const 
  express = require('express'),
  app = express()

app.set("views", __dirname + "/views")
app.set("view engine", "ejs")

app.get('/', (req, res) => {
  const greeting = {
    company:{
      name:"上海克阳企业管理咨询中心",
      registeredAdd:"上海市崇明区新村乡耀洲路 741号 5幢 2326室",
      socialCreditNum:"123456789876543210",//统一社会信用代码号
      approvalNum:"123456789876543210",
      registeredCapital:10000,
      businessScope:"企业管理咨询，广告的设计、制作、代理、发布，翻译服务，网页设计制作，平面设计，图文设计制作，商务咨询，票务服务，会务服务，电子商务（不得从事增值电信、金融业务），从事（信息、网络、计算机软硬件）科技领域内的技术开发、技术转让、技术咨询、技术服务。（以登记机关核准为准）。",
      landlord:"上海新村经济小区管理委员会",
      region:"上海新村经济小区",
      rentStartDate:"二〇一七年八月十一日",
      rentEndDate:"二〇二七年八月十日",
      rentAmount:100000,
      rentYear:"拾年",
      nameBatchId:"陈亮",
      registerPhone:"021-8888888",
      registerPost:"200001"
    },
    representative:{
      name:"陈亮",
      gender:"男",
      birthday:"1980年10月1日",
      nation:"汉",
      culturalLevel:"大学本科",
      politicalLevel:"党员",
      mobile:"021-12345678",
      telephone:"18712345678",
      post:"200000",
      idType:"居名身份证",
      email:"123456@qq.com",
      idNum:"362204198704121234",
      idPlace:"上海黄浦",
    },
    agent:{
      name:"陈云杰",
      mobile:13412345678,
      email:"23456789@qq.com",
      idType:"居名身份证",
      idNum:"362204199008085678",
    },
    finance:{
      name:"刘德华",
      mobile:18201853863,
      email:"dehua.liu@qq.com",
      idType:"居名身份证",
      idNum:"362204196909065678",
    },
    handler:{
      name:"王松平",
      telephone:18201853863,
      email:"dehua.liu@qq.com",
      idType:"居名身份证",
      idNum:"362204196909065678",
    },
    merchant:{
      name:"张琼",
      telephone:"15221364715",
      mobile:"021-59650861",
      email:"dehua.liu@qq.com",
      idType:"居名身份证",
      idNum:"362204196909065678",
    }
  }
  
  res.render('test', greeting)
})

app.listen(8888, () => console.log('listening at port:8888'))
