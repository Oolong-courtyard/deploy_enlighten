(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-545200d2"],{"63e0":function(e,t,o){},"9dca":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tabBarDiv"},[n("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",router:""}},[n("div",{staticStyle:{display:"flex",border:"none",outline:"none"}},[n("div",{staticStyle:{display:"flex"}},[n("img",{staticStyle:{height:"60px",width:"60px","border-radius":"15px"},attrs:{src:o("f4c1"),alt:""}}),n("el-menu-item",{staticStyle:{"font-size":"20px",transform:"rotate(-10deg)","border-radius":"15px"},attrs:{index:""}},[e._v("enlighten\n        ")]),n("el-menu-item",{staticStyle:{"font-size":"15px"},attrs:{index:"index"}},[e._v("首页")]),n("el-menu-item",{attrs:{index:"myPublish"}},[e._v("历程")])],1),n("div",{staticStyle:{"margin-left":"500px"}},[n("el-menu-item",{staticStyle:{"background-color":"black","border-radius":"30px","font-size":"18px"},on:{click:function(t){e.articlePublish(e.htmlContent)}}},[e._v("发布\n        ")])],1),n("div",{staticClass:"loginSuccessUser",style:{display:"flex"}},[n("el-dropdown",{attrs:{trigger:"click"},on:{command:e.handleCommand}},[n("el-menu-item",[n("img",{staticStyle:{height:"36px",width:"36px","border-radius":"50px"},attrs:{src:e.userProfilePhoto}})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"a"}},[e._v("个人中心")]),n("el-dropdown-item",{attrs:{command:"b"}},[e._v("首页")]),n("el-dropdown-item",{attrs:{command:"c"}},[e._v("我点赞的文章")]),n("el-dropdown-item",{attrs:{command:"c"}},[e._v("我喜欢的作者")])],1)],1)],1)])])],1)},a=[],i={name:"ArticlePublishNavBar",props:["htmlContent"],data:function(){return{selectSearch:!1,searchInput:"",searchInputValueChange:!1,canLogin:!0,canRegister:!0,username:null,userProfilePhoto:null,usernameExist:!1,otherLoginVisible:!1,registerVerifyFormVisible:!1,loginDialogFormVisible:!1,registerDialogFormVisible:!1,formLabelWidth:"80px"}},mounted:function(){var e=localStorage.getItem("username");null!=e?(this.loginSuccess=!0,this.username=e,this.userProfilePhoto=localStorage.getItem("userProfilePhoto")):this.loginSuccess=!1},methods:{handleCommand:function(){console.log("handleCommand")},articlePublish:function(e){var t=this;console.log("content是",e),this.$http.post(this.$articlePublish,{user_id:localStorage.getItem("userId"),author:localStorage.getItem("username"),content:e},{headers:{"x-token":localStorage.getItem("userToken")}}).then(function(e){t.$router.push({path:"/publishSuccess",params:{articleId:e.data.data.article_id}}),console.log("发布文章的res的code是，路由即将跳转")}).catch(function(e){403===e.response.status?t.$message({message:"token过期,请重新登陆",type:"warning"}):t.$message({message:"发布文章失败,请稍后重试",type:"warning"})})}}},s=i,r=(o("e22a"),o("2877")),l=Object(r["a"])(s,n,a,!1,null,null,null);l.options.__file="ArticlePublishNavBar.vue";t["default"]=l.exports},e22a:function(e,t,o){"use strict";var n=o("63e0"),a=o.n(n);a.a},f4c1:function(e,t,o){e.exports=o.p+"static/img/login_head.1f452ba3.jpg"}}]);