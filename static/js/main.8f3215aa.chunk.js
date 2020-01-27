(this["webpackJsonpnps-score"]=this["webpackJsonpnps-score"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(14),s=a.n(c),o=a(5),l=(a(47),a(6)),u=a(8),i=a(1),m=(a(48),a(32));function d(e){var t=e.handleClose,a=e.show,c=e.login,s=e.currentUser,o=e.loggedIn,d=e.loading,p=Object(r.useState)({username:"",password:""}),E=Object(l.a)(p,2),f=E[0],v=E[1];Object(r.useEffect)((function(){o&&t()}),[s]);var S=function(e){e.preventDefault(),c({username:f.username,password:f.password})},N=a?"modal display-block":"modal display-none";return n.a.createElement("div",{className:N},n.a.createElement("section",{className:"modal-main fade-in"},d?n.a.createElement(m.RotateCircleLoading,null):n.a.createElement("form",{className:"form",onSubmit:S},n.a.createElement("div",{className:"form-login"},n.a.createElement("input",{name:"username",type:"email",value:f.username,placeholder:"Your email address",onChange:g,className:"form modal-items"}),n.a.createElement("input",{name:"password",type:"password",value:f.password,placeholder:"Choose a password",onChange:g,className:"form modal-items"}),n.a.createElement("button",{type:"submit",onClick:S,className:"submit form modal-items"},"Login")),n.a.createElement("button",{className:"form modal-items close submit",onClick:t},"Close"))));function g(e){var t=e.target,a=t.name,r=t.value;v(Object(i.a)({},f,Object(u.a)({},a,r)))}}var p=a(7),E=a.n(p),f=a(15),v=a.n(f),S="https://nmylynh-nps.herokuapp.com",N="https://nmylynh-nps.herokuapp.com",g={headers:{authorization:localStorage.getItem("jwt")}},h=function(e){return function(t){t({type:"FETCH_USER_NPS_START"}),E.a.get("".concat(N,"/users/").concat(e,"/nps"),g).then((function(e){t({type:"FETCH_USER_NPS_SUCCESS",payload:e.data})})).catch((function(e){t({type:"FETCH_USER_NPS_FAILURE",payload:e})}))}};var b=Object(o.b)((function(e){var t=e.auth;return{currentUser:t.currentUser,loggedIn:t.loggedIn,loading:t.loading}}),{login:function(e){return function(t){t({type:"LOGIN_START"}),E.a.post("".concat(S,"/auth/login"),e).then((function(e){localStorage.setItem("jwt",e.data.token),t({type:"LOGIN_SUCCESS",payload:v()(e.data.token)})})).catch((function(e){t({type:"LOGIN_FAILURE",payload:e})}))}},logout:function(){return{type:"LOGOUT_USER"}}})((function(e){var t=Object(r.useState)(!1),a=Object(l.a)(t,2),c=a[0],s=a[1],o=function(e,t){return n.a.createElement("li",null,n.a.createElement("a",{href:t},e))},u=n.a.createElement("li",null,n.a.createElement("a",{href:"#!",onClick:function(){return s(!0)}},"Sign in")),i=n.a.createElement("li",null,n.a.createElement("a",{href:"#!",onClick:e.logout},"Logout"));return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"navigation"},n.a.createElement("div",{className:"nav-container"},n.a.createElement("nav",null,n.a.createElement("div",{className:"nav-mobile"},n.a.createElement("a",{id:"nav-toggle",href:"#!"},n.a.createElement("span",null))),n.a.createElement("ul",{className:"nav-list"},n.a.createElement("div",{className:"nav-left"},n.a.createElement("li",null,n.a.createElement("a",{href:"#!"},"Product ",n.a.createElement("i",{className:"fas fa-chevron-down"})),n.a.createElement("ul",{className:"nav-dropdown"},o("Product 1","#!"),o("Product 2","#!"),o("Product 3","#!"))),o("Customers","#!"),o("Enterprise","#!"),o("Pricing","#!")),n.a.createElement("div",{className:"nav-right"},n.a.createElement("li",null,n.a.createElement("a",{href:"#!"},"Help ",n.a.createElement("i",{className:"fas fa-chevron-down"})),n.a.createElement("ul",{className:"nav-dropdown"},o("Help 1","#!"),o("Help 2","#!"),o("Help 3","#!"))),o("Get started for free","#!"),e.currentUser?i:u))))),n.a.createElement(d,{show:c,handleClose:function(){return s(!c)},login:e.login,currentUser:e.currentUser,loggedIn:e.loggedIn,loading:e.loading}))}));function y(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"section section-hero hero-container"},n.a.createElement("div",{className:"hero"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"cols"},n.a.createElement("div",{className:"heading-wrapper"},n.a.createElement("h1",{className:"hero-heading"},"Calculate your NPS\xae (Net Promoter Score)"),n.a.createElement("p",null,"Calculating your NPS score is as simple as tallying up your responses and subtracting the percentage of detractors from the percentage of promoters. The score is a whole number that ranges from -100 to 100, and indicates customer happiness with your brand experience."),n.a.createElement("p",null,"Use the calculator below to calculate your NPS from your survey responses.")))))))}function P(e){var t=e.start,a=e.end,c=e.type,s=e.calculate,o=e.action,m=e.totalPromoters,d=e.totalPassives,p=e.totalDetractors,E=e.clear,f=Object(r.useState)({0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,promoters:m,passives:d,detractors:p}),v=Object(l.a)(f,2),S=v[0],N=v[1];Object(r.useEffect)((function(){"inputs"===s?o(function(e){if("promoters"===e)return S[10]+S[9];if("passives"===e)return S[8]+S[7];if("detractors"===e)return S[6]+S[5]+S[4]+S[3]+S[2]+S[1]+S[0]}(c)):"totals"===s&&o(j(c))}),[S]),Object(r.useEffect)((function(){N(Object(i.a)({},S,Object(u.a)({},c,C(c))))}),[m,d,p]),Object(r.useEffect)((function(){N({0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,promoters:0,passives:0,detractors:0})}),[E]);var g=function(e,t){for(var a=[],r=e;r<t;r++)a.unshift(r);return a}(a,t+1).map((function(e){return n.a.createElement("div",{key:e,className:"total"},n.a.createElement("div",null,e),n.a.createElement("div",null,n.a.createElement("input",{type:"text",pattern:"[0-9]*",name:e,value:S[e],className:"total-input",onChange:U})))})),h=n.a.createElement("div",{className:"total"},n.a.createElement("div",null,"Total"),n.a.createElement("div",null,n.a.createElement("input",{type:"text",pattern:"[0-9]*",name:c,value:j(c),className:"total-input",onChange:U}))),b=m+d+p,y=function(e){return Math.round(C(e)/b*100)},P=n.a.createElement("div",{className:"total"},n.a.createElement("div",{className:"total-percent"},"".concat(y(c)?y(c):0,"%")),n.a.createElement("div",{className:"total-label"},"of total responses")),_=function(){return y("promoters")-y("detractors")},O=n.a.createElement("div",{className:"total"},n.a.createElement("div",{className:"total-percent"},_()?_():0),n.a.createElement("div",{className:"total-label"},"This is your NPS."));return n.a.createElement("div",{className:"column column-".concat(function(e){if("promoters"===e)return"2";if("passives"===e)return"3";if("detractors"===e)return"4";if("nps"===e)return"6"}(c))},n.a.createElement("div",{className:"group group-".concat(c)},n.a.createElement("div",{className:"emote image-".concat(c)}),n.a.createElement("div",{className:"totals"},function(e){if("inputs"===e)return g;if("totals"===e)return h;if("percentages"===e)return P;if("nps"===e)return O}(s)),function(e,t){if("inputs"===t)return n.a.createElement("div",{className:"connect inputs inputs-".concat(e," inputs-image-").concat(e)});if("totals"===t&&"promoters"===e)return n.a.createElement("div",{className:"connect totals-promoters totals-image-promoters"});if("totals"===t&&"detractors"===e)return n.a.createElement("div",{className:"connect totals-detractors totals-image-detractors"})}(c,s)));function U(e){var t=e.target,a=t.name,r=t.value;N(Object(i.a)({},S,Object(u.a)({},a,Number(r)?Number(r):0)))}function j(e){return"promoters"===e?S.promoters:"passives"===e?S.passives:"detractors"===e?S.detractors:void 0}function C(e){return"promoters"===e?m:"passives"===e?d:"detractors"===e?p:void 0}}var _=Object(o.b)((function(e){var t=e.totals,a=e.auth;return{totalPromoters:t.totalPromoters,totalPassives:t.totalPassives,totalDetractors:t.totalDetractors,clear:t.clear,currentUser:a.currentUser}}),{updatePromoters:function(e){return{type:"UPDATE_PROMOTERS",payload:e}},updatePassives:function(e){return{type:"UPDATE_PASSIVES",payload:e}},updateDetractors:function(e){return{type:"UPDATE_DETRACTORS",payload:e}},toggleClear:function(e){return{type:"CLEAR_FORM",payload:!e}}})((function(e){var t=Object(r.useState)(!1),a=Object(l.a)(t,2),c=a[0],s=a[1],o=e.row,u=e.header,i=e.body,m=e.totalPromoters,d=e.totalPassives,p=e.totalDetractors,E=e.calculate,f=e.clear;Object(r.useEffect)((function(){e.toggleClear(c)}),[c]);var v=n.a.createElement(n.a.Fragment,null,n.a.createElement(P,{start:10,end:9,type:"promoters",calculate:E,action:e.updatePromoters,totalPromoters:m,clear:f}),n.a.createElement(P,{start:8,end:7,type:"passives",calculate:E,action:e.updatePassives,totalPassives:d,clear:f}),n.a.createElement(P,{start:6,end:0,type:"detractors",calculate:E,action:e.updateDetractors,totalDetractors:p,clear:f})),S=n.a.createElement(n.a.Fragment,null,n.a.createElement(P,{type:"promoters",calculate:E,action:e.updatePromoters,totalPromoters:m,totalPassives:d,totalDetractors:p}),n.a.createElement("div",{className:"column column-3"},n.a.createElement("div",{className:"operator operator-minus"},"\u2212")),n.a.createElement(P,{type:"detractors",calculate:E,action:e.updateDetractors,totalPromoters:m,totalPassives:d,totalDetractors:p}),n.a.createElement("div",{className:"column column-5"},n.a.createElement("div",{className:"operator operator-equal"},"=")),n.a.createElement(P,{type:"nps",calculate:"nps",totalPromoters:m,totalPassives:d,totalDetractors:p}));return n.a.createElement("div",{className:"row row-".concat(o)},n.a.createElement("div",{className:"column column-1"},n.a.createElement("div",{className:"instructions"},n.a.createElement("h3",null,u),n.a.createElement("p",null,i,function(e){if("percentages"===e)return n.a.createElement("strong",{className:"clear"},n.a.createElement("a",{className:"clear-link",href:"#",onClick:N},"Start over"))}(E)))),function(e){if("totals"===e||"inputs"===e)return v;if("percentages"===e)return S}(E));function N(e){e.preventDefault(),s(!c)}}));var O=Object(o.b)((function(e){var t=e.totals,a=e.auth;return{totals:t,registerSuccess:a.registerSuccess,currentUser:a.currentUser}}),{register:function(e){return function(t){t({type:"REGISTER_START"}),E.a.post("".concat(S,"/auth/register"),e).then((function(e){t({type:"REGISTER_SUCCESS",payload:e.data})})).catch((function(e){t({type:"REGISTER_FAILURE",payload:e})}))}},addNPS:function(e){return function(t){return t({type:"ADD_NPS_START"}),E.a.post("".concat(N,"/nps"),e,g).then((function(e){t({type:"ADD_NPS_SUCCESS",payload:e.data})})).catch((function(e){t({type:"ADD_NPS_FAILURE",payload:e})}))}},fetchUserNPS:h})((function(e){var t=Object(r.useState)({username:"",password:"",name:"",description:"",user_id:e.currentUser.subject}),a=Object(l.a)(t,2),c=a[0],s=a[1],o=e.totals,m=o.totalPromoters,d=o.totalPassives,p=o.totalDetractors;Object(r.useEffect)((function(){e.registerSuccess&&window.confirm("Thanks! You've successfully registered.")}),[e.registerSuccess]);var E=m+d+p,f=function(){return Math.round(m/E*100-m/E*100)},v=function(t){t.preventDefault(),e.register({username:c.username,password:c.password})},S=function(t){t.preventDefault();var a={name:c.name,description:c.description,user_id:c.user_id,total_promoters:m,total_passives:d,total_detractors:p,nps_score:f()?f():0};e.addNPS(a),s({name:"",description:""}),e.fetchUserNPS(e.currentUser.subject)},N=n.a.createElement("form",{className:"form",onSubmit:S},n.a.createElement("input",{name:"name",type:"text",value:c.name,placeholder:"The name of this project",onChange:h,className:"send-nps"}),n.a.createElement("input",{name:"description",type:"textarea",value:c.description,placeholder:"Describe this project",onChange:h,className:"send-nps"}),n.a.createElement("div",{className:"button"},n.a.createElement("button",{className:"submit send-nps",type:"submit",onClick:S},"Submit"))),g=n.a.createElement("form",{className:"form",onSubmit:v},n.a.createElement("input",{id:"email",name:"username",type:"email",value:c.username,placeholder:"Your email address",onChange:h}),n.a.createElement("input",{id:"password",name:"password",type:"password",value:c.password,placeholder:"Choose a password",onChange:h}),n.a.createElement("div",{className:"button"},n.a.createElement("button",{type:"submit",id:"get-started",onClick:v},"Get Started"),"or",n.a.createElement("button",{type:"submit",id:"google"},"Sign up with Google")));return n.a.createElement("div",{className:"section section-ruled"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"cols"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"heading"},n.a.createElement("h2",null,e.currentUser?"Would you like to save your current NPS information?":"Interested in improving your customer experience with NPS?"))))),e.currentUser?N:g,n.a.createElement("div",{className:"container container-social"},n.a.createElement("div",{className:"social"},n.a.createElement("a",{className:"fab fa-twitter",href:"#"}),n.a.createElement("a",{className:"fab fa-facebook-f",href:"#"}))));function h(e){var t=e.target,a=t.name,r=t.value;s(Object(i.a)({},c,Object(u.a)({},a,r)))}})),U=a(13);a(102);var j=function(e){var t=e.userNPS.map((function(e){return n.a.createElement(U.b,{key:e.id},n.a.createElement(U.d,null,n.a.createElement(U.c,null,e.name," created on ",e.created_at.split("T")[0])),n.a.createElement(U.e,null,n.a.createElement("p",null,"Description: ",e.description),n.a.createElement("p",null,"Total participants:"," ",e.total_promoters+e.total_passives+e.total_detractors),n.a.createElement("p",null,"NPS score: ",e.nps_score)))}));return n.a.createElement("div",{className:"section section-ruled projects-section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"cols"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"heading"},n.a.createElement("h2",null,"Your past projects:"))))),n.a.createElement(U.a,null,t))};var C,T=Object(o.b)((function(e){var t=e.nps;return{currentUser:e.auth.currentUser,userNPS:t.userNPS}}),{fetchUserNPS:h})((function(e){return Object(r.useEffect)((function(){e.currentUser&&e.fetchUserNPS(e.currentUser.subject)}),[e.currentUser]),n.a.createElement(n.a.Fragment,null,n.a.createElement(b,null),n.a.createElement(y,null),n.a.createElement("div",{className:"section section-bg section-ruled section-labeled label-container-outer"},n.a.createElement("div",{className:"label-container-inner"},n.a.createElement("div",{className:"label"},"NPS Calculator")),n.a.createElement("div",{className:"container container-nps"},n.a.createElement("div",{className:"cols"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"nps"},n.a.createElement(_,{row:1,calculate:"inputs",header:"Count the responses",body:"Add up the number of responses provided for each score."}),n.a.createElement(_,{row:2,calculate:"totals",header:"Group the responses",body:"Add up the total number of responses provided for each group."}),n.a.createElement(_,{row:3,calculate:"percentages",header:"Calculate your NPS",body:"Subtract the percentage of Detractors from the percentage of Promoters."})))))),n.a.createElement(O,null),e.currentUser&&e.userNPS.length>0?n.a.createElement(j,{currentUser:e.currentUser,userNPS:e.userNPS}):null)})),R=a(12),w={totalPromoters:0,totalPassives:0,totalDetractors:0,clear:!1},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PROMOTERS":return Object(i.a)({},e,{totalPromoters:t.payload});case"UPDATE_PASSIVES":return Object(i.a)({},e,{totalPassives:t.payload});case"UPDATE_DETRACTORS":return Object(i.a)({},e,{totalDetractors:t.payload});case"CLEAR_FORM":return Object(i.a)({},e,{clear:t.payload});default:return e}},A={loggedIn:!1,currentUser:(C=localStorage.getItem("jwt"))?v()(C):0,registerSuccess:!1,loading:!1,errors:[]};var I=a(20),F={userNPS:[],NPS:[],errors:{}};var L=Object(R.b)({nps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER_NPS_START":return Object(i.a)({},e);case"FETCH_USER_NPS_SUCCESS":return Object(i.a)({},e,{userNPS:t.payload});case"FETCH_USER_NPS_FAILURE":return Object(i.a)({},e,{errors:t.payload});case"FETCH_NPS_START":return Object(i.a)({},e,{fetching:!0});case"FETCH_NPS_SUCCESS":return Object(i.a)({},e,{fetching:!1,NPS:t.payload});case"FETCH_NPS_FAILURE":return Object(i.a)({},e,{fetching:!1,errors:t.payload});case"ADD_NPS_START":case"ADD_NPS_SUCCESS":return Object(i.a)({},e);case"ADD_NPS_FAILURE":return Object(i.a)({},e,{errors:t.payload});case"UPDATE_NPS_START":return Object(i.a)({},e);case"UPDATE_NPS_SUCCESS":var a=e.nps.filter((function(e){return e.id!==t.payload.id}));return Object(i.a)({},e,{nps:[t.payload].concat(Object(I.a)(a))});case"UPDATE_NPS_FAILURE":return Object(i.a)({},e,{errors:t.payload});case"DELETE_NPS_START":return Object(i.a)({},e);case"DELETE_NPS_SUCCESS":var r=e.nps,n=r.filter((function(e){return e.id!==t.payload}));return Object(i.a)({},e,{nps:Object(I.a)(n)});case"DELETE_NPS_FAILURE":return Object(i.a)({},e,{errors:t.payload});default:return e}},totals:D,auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGOUT_USER":return localStorage.removeItem("jwt"),Object(i.a)({},e,{loggedIn:!1,currentUser:0});case"LOGIN_START":return Object(i.a)({},e,{loggedIn:!1,loading:!0});case"LOGIN_SUCCESS":return Object(i.a)({},e,{loggedIn:!0,currentUser:t.payload,loading:!1});case"LOGIN_FAILURE":return Object(i.a)({},e,{loggedIn:!1,errors:t.payload,loading:!1});case"REGISTER_START":return Object(i.a)({},e,{loading:!0});case"REGISTER_SUCCESS":return Object(i.a)({},e,{errors:null,registerSuccess:!0,loading:!1});case"REGISTER_FAILURE":return Object(i.a)({},e,{errors:t.payload,loading:!1});default:return e}}}),k=Object(R.c)(L);s.a.render(n.a.createElement(o.a,{store:k},n.a.createElement(T,null)),document.getElementById("root"))},37:function(e,t,a){e.exports=a(103)},47:function(e,t,a){},48:function(e,t,a){}},[[37,1,2]]]);
//# sourceMappingURL=main.8f3215aa.chunk.js.map