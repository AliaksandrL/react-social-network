(this["webpackJsonpreact-social-network"]=this["webpackJsonpreact-social-network"]||[]).push([[0],{127:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__2kkhr"}},128:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__2GOg5"}},129:function(e,t,n){e.exports={content:"ProfileInfo_content__261EN",first:"ProfileInfo_first__bXVXf",descriptionBlock:"ProfileInfo_descriptionBlock__2OC3T"}},130:function(e,t,n){e.exports={item:"Post_item__1-Dp7"}},16:function(e,t,n){e.exports={nav:"Navbar_nav__2WLdg",item:"Navbar_item__1mmzB",activeLink:"Navbar_activeLink__mv09T"}},241:function(e,t,n){},242:function(e,t,n){},248:function(e,t,n){},288:function(e,t,n){"use strict";n.r(t);var s=n(9),r=n(10),a=n.n(r),c=n(18),i=n(34),o=n(3),u=n(124).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"ae3793e8-7c42-49d3-82ac-f60f84efebfe"}}),l={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return u.get("users?page=".concat(e,"&count=").concat(t),{withCredentials:!0}).then((function(e){return e.data}))},follow:function(e){u.post("follow/".concat(e))},unfollow:function(e){return u.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),j.getProfile(e)}},j={getProfile:function(e){return u.get("profile/"+e)},getStatus:function(e){return u.get("profile/status/"+e)},updateStatus:function(e){return u.put("profile/status/",{status:e})}},d=function(){return u.get("auth/me")},m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return u.post("auth/login",{email:e,password:t,remeberMe:n})},b=function(){return u.delete("auth/login")},p="ADD-POST",f="SET_USER_PROFILE",O="SET_STATUS",g="DELETE_POST",h={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11}],profile:null,status:""},x=function(e){return{type:O,status:e}},w="SEND_MESSAGE",v={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Sasha"},{id:3,name:"Nastya"},{id:4,name:"Zhenya"},{id:5,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it?"},{id:3,message:"Yes!"},{id:4,message:"No"},{id:5,message:"Yoo"}]},M={},A=function(e,t,n,s){return e.map((function(e){return e[n]===t?Object(o.a)(Object(o.a)({},e),s):e}))},Z="FOLLOW",T="UNFOLLOW",C="SET_USERS",P="SET_CURRENT_PAGE",z="SET_TOTAL_USERS_COUNT",k="TOGGLE_IS_FETCHING",y="TOGGLE_IS_FOLLOWING_PROGRESS",Y={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},N=function(e){return{type:Z,userId:e}},B=function(e){return{type:T,userId:e}},E=function(e){return{type:P,currentPage:e}},J=function(e){return{type:k,isFetching:e}},S=function(e,t){return{type:y,isFetching:e,userId:t}},L=function(){var e=Object(c.a)(a.a.mark((function e(t,n,s,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(S(!0,n)),e.next=3,s(n);case 3:0==e.sent.data.resultCode&&t(r(n)),t(S(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,s,r){return e.apply(this,arguments)}}(),D=n(29),U="SET_USER_DATA",G={userId:null,email:null,login:null,isAuth:!1},F=function(e,t,n,s){return{type:U,payload:{userId:e,email:t,login:n,isAuth:s}}},I=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,s,r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:0===(n=e.sent).data.resultCode&&(s=n.data.data,r=s.id,c=s.email,i=s.login,t(F(r,c,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;return t.type===U?Object(o.a)(Object(o.a)({},e),t.payload):e},H=n(125),W=n(123),R="INITIALIZED_SUCCESS",Q={initialized:!1},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;return t.type===R?Object(o.a)(Object(o.a)({},e),{},{initialized:!0}):e},V=Object(s.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:var n={id:5,message:t.newPostText,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n]),newPostText:""});case f:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case O:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case g:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}},messagesPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;if(t.type===w){var n=t.newMessageBody;return Object(o.a)(Object(o.a)({},e),{},{messages:[].concat(Object(i.a)(e.messages),[{id:6,message:n}])})}return e},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(o.a)(Object(o.a)({},e),{},{users:A(e.users,t.userId,"id",{followed:!0})});case T:return Object(o.a)(Object(o.a)({},e),{},{users:A(e.users,t.userId,"id",{followed:!1})});case C:return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case P:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case z:return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.count});case k:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case y:return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},auth:K,form:W.a,app:X}),q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,_=Object(s.e)(V,q(Object(s.a)(H.a)));window.__store__=_;var $=_,ee=n(1),te=n.n(ee),ne=n(63),se=n.n(ne),re=(n(241),n(21)),ae=n(22),ce=n(24),ie=n(23),oe=n(12),ue=(n(242),n(13)),le=n(16),je=n.n(le),de=n(0),me=function(){return Object(de.jsxs)("nav",{className:je.a.nav,children:[Object(de.jsx)("div",{className:je.a.item,children:Object(de.jsx)(ue.b,{to:"/profile",activeClassName:je.a.activeLink,children:"Profile"})}),Object(de.jsx)("div",{className:je.a.item,children:Object(de.jsx)(ue.b,{to:"/dialogs",activeClassName:je.a.activeLink,children:"Messages"})}),Object(de.jsx)("div",{className:je.a.item,children:Object(de.jsx)(ue.b,{to:"/users",activeClassName:je.a.activeLink,children:"Users"})}),Object(de.jsx)("div",{className:je.a.item,children:Object(de.jsx)(ue.b,{to:"/news",activeClassName:je.a.activeLink,children:"News"})}),Object(de.jsx)("div",{className:je.a.item,children:Object(de.jsx)(ue.b,{to:"/music",activeClassName:je.a.activeLink,children:"Music"})}),Object(de.jsx)("div",{className:je.a.item,children:Object(de.jsx)(ue.b,{to:"/settings",activeClassName:je.a.activeLink,children:"Settings"})})]})},be=(n(248),function(e){return Object(de.jsx)("div",{children:"News"})}),pe=n(30),fe=n.n(pe),Oe=function(e){var t="/dialogs/"+e.id;return Object(de.jsx)("div",{className:fe.a.dialog+" "+fe.a.active,children:Object(de.jsx)(ue.b,{to:t,children:e.name})})},ge=function(e){return Object(de.jsx)("div",{className:fe.a.dialog,children:e.message})},he=n(122),xe=n(54),we=n(52),ve=n.n(we),Me=n(121),Ae=["input","meta","child"],Ze=["input","meta","child"],Te=function(e){e.input;var t=e.meta,n=t.touched,s=t.error,r=e.children,a=n&&s;return Object(de.jsxs)("div",{className:ve.a.formControl+" "+(a?ve.a.error:""),children:[Object(de.jsx)("div",{children:r}),a&&Object(de.jsx)("span",{children:s})]})},Ce=function(e){var t=e.input,n=(e.meta,e.child,Object(xe.a)(e,Ae));return Object(de.jsx)(Te,Object(o.a)(Object(o.a)({},e),{},{children:Object(de.jsx)("textarea",Object(o.a)(Object(o.a)({},t),n))}))},Pe=function(e){var t=e.input,n=(e.meta,e.child,Object(xe.a)(e,Ze));return Object(de.jsx)(Te,Object(o.a)(Object(o.a)({},e),{},{children:Object(de.jsx)("input",Object(o.a)(Object(o.a)({},t),n))}))},ze=function(e){if(!e)return"Field is required"},ke=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},ye=ke(50),Ye=function(e){return Object(de.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(de.jsx)("div",{children:Object(de.jsx)(Me.a,{component:Ce,validate:[ze,ye],name:"newMessageBody",placeholder:"Enter your message"})}),Object(de.jsx)("div",{children:Object(de.jsx)("button",{children:"Add post"})})]})},Ne=(Object(he.a)({form:"dialogAddMessageForm"})(Ye),Object(he.a)({form:"dialogAddMessageForm"})(Ye)),Be=function(e){var t=e.messagesPage,n=t.dialogs.map((function(e){return Object(de.jsx)(Oe,{name:e.name,id:e.id},e.id)})),s=t.messages.map((function(e){return Object(de.jsx)(ge,{message:e.message},e.id)}));return!1===e.isAuth?Object(de.jsx)(oe.a,{to:"/login"}):Object(de.jsxs)("div",{className:fe.a.dialogs,children:[Object(de.jsx)("div",{className:fe.a.dialogsItems,children:n}),Object(de.jsx)("div",{className:fe.a.messages,children:Object(de.jsx)("div",{children:s})}),Object(de.jsx)(Ne,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})]})},Ee=n(11),Je=function(e){return{isAuth:e.auth.isAuth}},Se=Object(s.d)(Object(Ee.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:w,newMessageBody:e}}(t))}}})),(function(e){var t=function(t){Object(ce.a)(s,t);var n=Object(ie.a)(s);function s(){return Object(re.a)(this,s),n.apply(this,arguments)}return Object(ae.a)(s,[{key:"render",value:function(){return this.props.isAuth?Object(de.jsx)(e,Object(o.a)({},this.props)):Object(de.jsx)(oe.a,{to:"/login"})}}]),s}(te.a.Component);return Object(Ee.b)(Je)(t)}))(Be),Le=Se,De=n(127),Ue=n.n(De),Ge=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],s=1;s<=t;s++)n.push(s);return Object(de.jsx)("div",{children:n.map((function(t){return Object(de.jsx)("span",{className:e.currentPage===t&&Ue.a.selectedPage,onClick:function(n){e.onPageChanged(t)},children:t})}))})},Fe=n(128),Ie=n.n(Fe),Ke=function(e){var t=e.user,n=e.followingInProgress,s=e.unfollow,r=e.follow;return Object(de.jsxs)("div",{children:[Object(de.jsxs)("span",{children:[Object(de.jsx)("div",{children:Object(de.jsx)(ue.b,{to:"/profile/"+t.id,children:Object(de.jsx)("img",{src:null!=t.photos.small?t.photos.small:"data:image/png;base64,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",className:Ie.a.userPhoto})})}),Object(de.jsx)("div",{children:t.followed?Object(de.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:"Unfollow"}):Object(de.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Follow"})})]}),Object(de.jsxs)("span",{children:[Object(de.jsxs)("span",{children:[Object(de.jsx)("div",{children:t.name}),Object(de.jsx)("div",{children:t.status})]}),Object(de.jsxs)("span",{children:[Object(de.jsx)("div",{children:"u.location.country"}),Object(de.jsx)("div",{children:"u.location.city"})]})]})]})},He=["currentPage","totalUsersCount","pageSize","onPageChanged","users"],We=function(e){var t=e.currentPage,n=e.totalUsersCount,s=e.pageSize,r=e.onPageChanged,a=e.users,c=Object(xe.a)(e,He);return Object(de.jsxs)("div",{children:[Object(de.jsx)(Ge,{currentPage:t,onPageChanged:r,totalUsersCount:n,pageSize:s}),Object(de.jsx)("div",{children:a.map((function(e){return Object(de.jsx)(Ke,{user:e,followingInProgress:c.followingInProgress,follow:c.follow,unfollow:c.unfollow},e.id)}))})]})},Re=n.p+"static/media/Circle-Loading.385f97b7.svg",Qe=function(e){return Object(de.jsx)("div",{children:Object(de.jsx)("img",{src:Re})})},Xe=n(131),Ve=Object(Xe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),qe=function(e){return e.usersPage.pageSize},_e=function(e){return e.usersPage.totalUsersCount},$e=function(e){return e.usersPage.currentPage},et=function(e){return e.usersPage.isFetching},tt=function(e){return e.usersPage.followingInProgress},nt=function(e){Object(ce.a)(n,e);var t=Object(ie.a)(n);function n(){var e;Object(re.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(ae.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(de.jsxs)(de.Fragment,{children:[this.props.isFetching?Object(de.jsx)(Qe,{}):null,Object(de.jsx)(We,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress})]})}}]),n}(te.a.Component),st=Object(s.d)(Object(Ee.b)((function(e){return{users:Ve(e),pageSize:qe(e),totalUsersCount:_e(e),currentPage:$e(e),isFetching:et(e),followingInProgress:tt(e)}}),{follow:function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:L(n,e,l.follow.bind(l),N());case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:L(n,e,l.unfollow().bind(l),B());case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:E,toggleIsFollowingProgress:S,getUsers:function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(s){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(J(!0)),s(E(e)),n.next=4,l.getUsers(e,t);case 4:r=n.sent,s(J(!1)),s((c=r.items,{type:C,users:c})),s((a=r.totalCount,{type:z,count:a}));case 8:case"end":return n.stop()}var a,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(nt),rt=n(129),at=n.n(rt),ct=(te.a.Component,n(91)),it=function(e){var t=Object(ee.useState)(!1),n=Object(ct.a)(t,2),s=n[0],r=n[1],a=Object(ee.useState)(e.status),c=Object(ct.a)(a,2),i=c[0],o=c[1];Object(ee.useEffect)((function(){o(e.status)}),[e.status]);return Object(de.jsxs)("div",{children:[!s&&Object(de.jsx)("div",{children:Object(de.jsx)("span",{onClick:function(){r(!0)},children:e.status||"NO STATUS"})}),s&&Object(de.jsx)("div",{children:Object(de.jsx)("input",{onChange:function(e){o(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(i)},value:i})})]})},ot=function(e){var t=e.profile,n=e.status,s=e.updateStatus;return t?Object(de.jsx)("div",{children:Object(de.jsxs)("div",{className:at.a.descriptionBlock,children:[Object(de.jsx)("img",{src:t.photos.large}),Object(de.jsx)(it,{status:n,updateStatus:s})]})}):Object(de.jsx)(Qe,{})},ut=n(89),lt=n.n(ut),jt=n(130),dt=n.n(jt),mt=function(e){return Object(de.jsxs)("div",{className:dt.a.item,children:[Object(de.jsx)("img",{src:"https://pbs.twimg.com/profile_images/1173161429266030592/lJCNA_JC.jpg"}),e.message,Object(de.jsxs)("div",{children:[Object(de.jsx)("span",{children:"Like"}),e.likesCount]})]})},bt=ke(10),pt=te.a.memo((function(e){var t=Object(i.a)(e.posts).reverse().map((function(e){return Object(de.jsx)(mt,{message:e.message,likesCount:e.likesCount})}));return Object(de.jsxs)("div",{className:lt.a.postsBlock,children:[Object(de.jsx)("h3",{children:"My posts"}),Object(de.jsx)(ft,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(de.jsx)("div",{className:lt.a.posts,children:t})]})})),ft=Object(he.a)({form:"ProfileAddNewPostForm"})((function(e){return Object(de.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(de.jsx)("div",{children:Object(de.jsx)(Me.a,{name:"newPostText",component:Ce,validate:[ze,bt]})}),Object(de.jsx)("div",{children:Object(de.jsx)("button",{children:"Add post"})})]})})),Ot=pt,gt=Object(Ee.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:p,newPostText:e}}(t))}}}))(Ot),ht=function(e){var t=e.profile,n=e.status,s=e.updateStatus;return Object(de.jsxs)("div",{children:[Object(de.jsx)(ot,{profile:t,status:n,updateStatus:s}),Object(de.jsx)(gt,{})]})},xt=function(e){Object(ce.a)(n,e);var t=Object(ie.a)(n);function n(){return Object(re.a)(this,n),t.apply(this,arguments)}return Object(ae.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUsersProfile(e),this.props.getStatus(e)}},{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&(this.setState({status:this.props.status}),console.log("componentDidUpdate"))}},{key:"render",value:function(){return console.log("render"),Object(de.jsx)("div",{children:Object(de.jsx)(ht,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))})}}]),n}(te.a.Component),wt=Object(s.d)(Object(Ee.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUsersProfile:function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.getProfile(e);case 2:s=t.sent,n((r=s.data,{type:f,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.getStatus(e);case 2:s=t.sent,n(x(s.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(x(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),oe.f)(xt),vt=n(90),Mt=n.n(vt),At=function(e){return Object(de.jsxs)("header",{className:Mt.a.header,children:[Object(de.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/480px-Instagram_logo_2016.svg.png"}),Object(de.jsx)("div",{className:Mt.a.loginBlock,children:e.isAuth?Object(de.jsxs)("div",{children:[e.login," - ",Object(de.jsx)("button",{onClick:e.logout,children:"Log out"})," "]}):Object(de.jsx)(ue.b,{to:"/login",children:"Login"})})]})},Zt=function(e){Object(ce.a)(n,e);var t=Object(ie.a)(n);function n(){return Object(re.a)(this,n),t.apply(this,arguments)}return Object(ae.a)(n,[{key:"render",value:function(){return Object(de.jsx)(At,Object(o.a)({},this.props))}}]),n}(te.a.Component),Tt=Object(Ee.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:0===e.sent.data.resultCode&&t(F(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Zt),Ct=Object(he.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(de.jsxs)("form",{onSubmit:t,children:[Object(de.jsx)("div",{children:Object(de.jsx)(Me.a,{component:Pe,validate:[ze],name:"email",placeholder:"Email"})}),Object(de.jsx)("div",{children:Object(de.jsx)(Me.a,{component:Pe,validate:[ze],name:"password",placeholder:"Password"})}),Object(de.jsxs)("div",{children:[Object(de.jsx)(Me.a,{component:Pe,validate:[ze],name:"rememberMe",type:"checkbox"})," remember me"]}),Object(de.jsx)("div",{className:ve.a.formSummaryError,children:n}),Object(de.jsx)("div",{children:Object(de.jsx)("button",{children:"Login"})})]})})),Pt=Object(Ee.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var s=Object(c.a)(a.a.mark((function s(r){var c;return a.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,m(e,t,n);case 2:0===s.sent.data.resultCode?r(I()):(c=Object(D.a)("login",{email:"Email is wrong"}),r(c));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(de.jsx)(oe.a,{to:"/profile"}):Object(de.jsxs)("div",{children:[Object(de.jsx)("h1",{children:"Login"}),Object(de.jsx)(Ct,{onSubmit:function(t){e.login(t.email,t.password,t.remeberMe)}})]})})),zt=function(e){Object(ce.a)(n,e);var t=Object(ie.a)(n);function n(){return Object(re.a)(this,n),t.apply(this,arguments)}return Object(ae.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(de.jsxs)("div",{className:"app-wrapper",children:[Object(de.jsx)(Tt,{}),Object(de.jsx)(me,{}),Object(de.jsxs)("div",{className:"app-wrapper-content",children:[Object(de.jsx)(oe.b,{path:"/profile/:userId?",render:function(){return Object(de.jsx)(wt,{})}}),Object(de.jsx)(oe.b,{path:"/dialogs",render:function(){return Object(de.jsx)(Le,{})}}),Object(de.jsx)(oe.b,{path:"/news",render:function(){return Object(de.jsx)(be,{})}}),Object(de.jsx)(oe.b,{path:"/users",render:function(){return Object(de.jsx)(st,{})}}),Object(de.jsx)(oe.b,{path:"/login",render:function(){return Object(de.jsx)(Pt,{})}})]})]}):Object(de.jsx)(Qe,{})}}]),n}(ee.Component),kt=Object(s.d)(Object(Ee.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(I());Promise.all([t]).then((function(){e({type:R})}))}}}))(zt);se.a.render(Object(de.jsx)(ue.a,{children:Object(de.jsx)(Ee.a,{store:$,children:Object(de.jsx)(kt,{})})}),document.getElementById("root"))},30:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2JXDj",dialogsItems:"Dialogs_dialogsItems__2MP5c",active:"Dialogs_active__2JXaG",dialog:"Dialogs_dialog__2rAwh",messages:"Dialogs_messages__3FRL3",message:"Dialogs_message__3Tgg5"}},52:function(e,t,n){e.exports={formControl:"FormsControls_formControl__33JNg",error:"FormsControls_error__kOtDx",formSummaryError:"FormsControls_formSummaryError__1E4m3"}},89:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__2XfIq",posts:"MyPosts_posts__3Pigc"}},90:function(e,t,n){e.exports={header:"Header_header__3OL1s",loginBlock:"Header_loginBlock__SBKw-"}}},[[288,1,2]]]);
//# sourceMappingURL=main.0f1786b7.chunk.js.map