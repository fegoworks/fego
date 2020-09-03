(this.webpackJsonpfego=this.webpackJsonpfego||[]).push([[0],{15:function(n,e,t){n.exports=t(22)},22:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(7),o=t.n(i),l=t(1),c=t(3),m=t(4),d=t(6),u=t(5),s=t(2);function p(){var n=Object(l.a)(["\n  ","\n"]);return p=function(){return n},n}var g=function n(e){var t=e.email,a=e.title,i=e.color,o=e.margin;return r.a.createElement(n.Container,{target:"_blank",rel:"noopener noreferrer",href:t,color:i,margin:o},a)};g.Container=s.a.a(p(),(function(n){var e=n.color,t=n.margin;return"\n    width: 6rem;\n    margin: ".concat(t,";\n    text-align: center;\n    text-decoration: none;\n    cursor: pointer;\n    color: black;\n    font-size: 0.75rem;\n    padding: 0.4rem 0;\n    font-weight: bold;\n    background: ").concat(e,";\n    border: 0.1rem solid orange;\n    position: relative;\n    -webkit-box-shadow: 6px 6px 0 #666;\n    -moz-box-shadow: 6px 6px 0 #666;\n    -webkit-transition: all 0.3s ease;\n    -moz-transition: all 0.3s ease;\n  \n    @media(max-width: 999px){display:none}\n  ")})),g.defaultProps={color:"#5C6784",margin:"0"};var f=g;function h(){var n=Object(l.a)(["\n  @media (max-width: 999px) {\n    position: absolute;\n    cursor: pointer;\n    right: 12.5%;\n    top: 50%;\n    transform: translate(-12.5%, -60%);\n    z-index: 2;\n\n    .line {\n      width: 30px;\n      height: 3px;\n      background: black;\n      margin: 5px;\n    }\n  }\n\n  @media (max-width: 768px) {\n    right: 13%;\n    top: 50%;\n    transform: translate(-13%, -60%);\n  }\n\n  @media (max-width: 600px) {\n    right: 4%;\n    top: 50%;\n    transform: translate(-4%, -60%);\n  }\n\n  @media (max-width: 320px) {\n    right: 5%;\n    top: 50%;\n    transform: translate(-5%, -60%);\n  }\n"]);return h=function(){return n},n}function b(){var n=Object(l.a)(["\n  display: flex;\n  margin: 0;\n  list-style: none;\n  margin-left: auto;\n  justify-content: space-around;\n  align-items: center;\n\n  li a {\n    text-decoration: none;\n    display: inline-block;\n    margin: 0.5rem 1.5rem;\n    color: black;\n    font-size: 1.2rem;\n    font-weight: 600;\n  }\n\n  .email {\n    display: none;\n  }\n\n  @media (max-width: 999px) {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    background: orange;\n    height: 100vh;\n    width: 100%;\n    justify-content: center;\n    flex-direction: column;\n    clip-path: ",";\n    -webkit-clip-path: ",";\n    transition: all 1s ease-out;\n    opacity: 0.9;\n\n    .email {\n      display: inline-block;\n    }\n\n    li a {\n      font-size: 2.35rem;\n      margin: 1.2rem 0;\n    }\n\n    li:nth-child(1) {\n      transition: all 0.5s ease 0.2s;\n    }\n\n    li:nth-child(2) {\n      transition: all 0.5s ease 0.4s;\n    }\n\n    li:nth-child(3) {\n      transition: all 0.5s ease 0.6s;\n    }\n    li:nth-child(4) {\n      transition: all 0.5s ease 0.8s;\n    }\n\n    li {\n      opacity: ",";\n    }\n  }\n"]);return b=function(){return n},n}function x(){var n=Object(l.a)(["\n  margin: 0.5rem;\n"]);return x=function(){return n},n}function w(){var n=Object(l.a)(["\n  position: sticky;\n  top: 0;\n  display: flex;\n  padding: 0 7rem;\n  background-color: white;\n  border-bottom: 0.05rem solid black;\n  padding-bottom: 0.75rem !important;\n  z-index: 2;\n\n  @media (max-width: 1240px) {\n    padding: 0 4rem;\n  }\n\n  @media (max-width: 1024px) {\n    padding: 0 2.5rem;\n  }\n\n  @media (max-width: 999px) {\n    padding: 0 7rem;\n  }\n\n  @media (max-width: 768px) {\n    padding: 0 6rem;\n  }\n\n  @media (max-width: 600px) {\n    padding: 0 1.75rem;\n  }\n\n  @media (max-width: 576px) {\n    padding: 0 1rem;\n  }\n"]);return w=function(){return n},n}var v=function n(e){var t=e.open,a=e.handleClick;return r.a.createElement(n.Container,null,r.a.createElement(n.Title,null,"Fego"),r.a.createElement(n.Burger,{onClick:a},r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"})),r.a.createElement(n.List,{open:t},r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/fegoworks/"},"github")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/oghenefego-edafe/"},"linkedin")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/realfego"},"twitter")),r.a.createElement("li",{className:"email"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:fegoworks@hotmail.com"},"email")),r.a.createElement(f,{email:"mailto:fegoworks@hotmail.com",title:"hire me",color:"white",margin:"0.2rem 0.5rem"})))};v.Container=s.a.nav(w()),v.Title=s.a.h3(x()),v.List=s.a.ul(b(),(function(n){return n.open?"circle(1000px at 90% -10%)":"circle(100px at 90% -20%)"}),(function(n){return n.open?"circle(1000px at 90% -10%)":"circle(100px at 90% -20%)"}),(function(n){return n.open?1:0})),v.Burger=s.a.div(h());var k=v;function y(){var n=Object(l.a)(["\n  width: 50%;\n  height: auto;\n\n  @media (max-width: 1024px) {\n    width: 70%;\n    margin-bottom: 4rem !important;\n    margin: 0 auto;\n  }\n"]);return y=function(){return n},n}function E(){var n=Object(l.a)(["\n  text-decoration: none;\n  display: inline-block;\n  color: black;\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-weight: 400;\n  line-height: 1.5rem;\n  border-bottom: 0.01rem solid black;\n\n  :hover {\n    color: white;\n    background: black;\n  }\n"]);return E=function(){return n},n}function O(){var n=Object(l.a)(["\n  font-size: 1.3rem;\n  line-height: 1.75rem;\n  s span {\n    text-decoration-style: wavy;\n  }\n\n  @media (max-width: 411px) {\n    font-size: 1.15rem;\n  }\n"]);return O=function(){return n},n}function j(){var n=Object(l.a)(["\n  font-size: 2.2rem;\n  font-weight: 700;\n  margin: 0;\n  padding: 0;\n\n  @media (max-width: 411px) {\n    font-size: 1.75rem;\n    font-weight: 650;\n  }\n"]);return j=function(){return n},n}function C(){var n=Object(l.a)([""]);return C=function(){return n},n}function z(){var n=Object(l.a)(["\n  display: flex;\n  flex-basis: 50% 50%;\n  justify-content: space-between;\n  padding: 3rem 0;\n\n  @media (max-width: 1024px) {\n    flex-direction: column-reverse;\n  }\n"]);return z=function(){return n},n}var _=function n(){return r.a.createElement(n.Container,null,r.a.createElement(n.Left,null,r.a.createElement(n.Header,null,"Hey, I am Edafe Oghenefego Evi - A Software Engineer from Lagos."),r.a.createElement(n.Bio,null,"I am a JavaScript nomad, originally from the earth kingdom of"," ",r.a.createElement("span",{style:{color:"#bc658d"}},"Bah Sing Seh"),". One time I stood between the sun and the moon, my shadow fell on the earth and caused a solar eclipse. I am currently building cool stuff at AntStack Technologies Limited. Limited"),r.a.createElement(n.Link,{target:"_blank",rel:"noopener noreferrer",href:"mailto:fegoworks@hotmail.com"},"fegoworks@hotmail.com")),r.a.createElement(n.Right,{src:"https://res.cloudinary.com/fego/image/upload/v1589903373/fego/undraw_web_developer_p3e5_jbcxhp.svg",alt:""}))};_.Container=s.a.section(z()),_.Left=s.a.div(C()),_.Header=s.a.h1(j()),_.Bio=s.a.p(O()),_.Link=s.a.a(E()),_.Right=s.a.img(y());var T=_;function B(){var n=Object(l.a)(["\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 70%;\n  background: white;\n  overflow-y: auto;\n  max-height: calc(100vh - 80px);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);\n  z-index: 101;\n\n  @media (max-width: 1240px) {\n    width: 80%;\n  }\n  @media (max-width: 999px) {\n    width: 90%;\n  }\n"]);return B=function(){return n},n}function L(){var n=Object(l.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.6);\n  cursor: pointer;\n"]);return L=function(){return n},n}function S(){var n=Object(l.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  visibility: ",";\n  opacity: ",";\n  z-index: 102;\n"]);return S=function(){return n},n}var A=function(n){Object(d.a)(t,n);var e=Object(u.a)(t);function t(){return Object(c.a)(this,t),e.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var n=this.props,e=n.open,a=n.children,i=n.handleClose;return o.a.createPortal(r.a.createElement(t.Container,{open:e},r.a.createElement(t.Backdrop,{onClick:i}),r.a.createElement(t.Box,null,a)),document.getElementById("modal-root"))}}]),t}(r.a.Component);A.Container=s.a.div(S(),(function(n){return n.open?"visible":"hidden"}),(function(n){return n.open?1:0})),A.Backdrop=s.a.div(L()),A.Box=s.a.div(B());var I=A;function N(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n\n  .top {\n    background: #ececeb;\n    padding: 5rem 0;\n  }\n\n  .btn-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    border: none;\n    margin: 1rem;\n    font-size: 1.3rem;\n    outline: none;\n    cursor: pointer;\n    background: none;\n  }\n\n  .bottom {\n    padding: 0 2rem;\n  }\n\n  .bottom p {\n    line-height: 2rem;\n    font-weight: 500;\n    font-size: 1.25rem;\n  }\n  img {\n    display: block;\n    width: 60%;\n    margin: 0 auto;\n    border: 1px solid #9dab86;\n    box-shadow: 5px 5px #9dab86;\n\n    @media (max-width: 768px) {\n      width: 80%;\n    }\n  }\n"]);return N=function(){return n},n}var F=function n(e){var t=e.isOpen,a=e.image,i=e.work,o=e.detail,l=e.onToggle;return r.a.createElement(I,{open:t,handleClose:l},r.a.createElement(n.Container,null,r.a.createElement("section",{className:"top"},r.a.createElement("button",{className:"btn-close",onClick:l},"X"),r.a.createElement("img",{src:a,alt:i})),r.a.createElement("section",{className:"bottom"},r.a.createElement("h2",null,i),r.a.createElement("p",null,o))))};F.Container=s.a.aside(N()),F.defaultProps={isOpen:!1};var q=F;function J(){var n=Object(l.a)(["\n  color: whitesmoke;\n  font-size: 1.75rem;\n  font-weight: 800;\n\n  @media (max-width: 411px) {\n    font-weight: 500;\n    font-size: 1.35rem;\n  }\n"]);return J=function(){return n},n}function Y(){var n=Object(l.a)(["\n  margin: 6.75rem 0;\n  border: 1px solid #9dab86;\n  width: 100%;\n  box-shadow: 5px 5px #9dab86;\n  object-fit: contain;\n\n  @media (max-width: 411px) {\n    margin: 5rem 0;\n  }\n\n  @media (max-width: 320px) {\n    margin: 4rem 0;\n  }\n"]);return Y=function(){return n},n}function H(){var n=Object(l.a)(["\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(103, 155, 155, 0.5);\n  z-index: 1;\n  transition: 0.5s ease;\n  -webkit-transition: 0.5s ease;\n\n  :hover {\n    opacity: 1;\n  }\n  @media (max-width: 411px) {\n    div {\n      margin: 0.75rem !important;\n    }\n  }\n"]);return H=function(){return n},n}function M(){var n=Object(l.a)(["\n  position: relative;\n  background: #ececeb;\n  padding: 0 4.75rem;\n  cursor: pointer;\n\n  &:hover #img {\n    animation: updown 2s ease infinite;\n  }\n\n  @keyframes updown {\n    0% {\n      transform: translateY(-3%);\n    }\n\n    50% {\n      transform: translateY(3%);\n    }\n\n    100% {\n      transform: translateY(-3%);\n    }\n  }\n\n  @media (max-width: 576px) {\n    padding: 0 3.15rem;\n  }\n\n  @media (max-width: 411px) {\n    padding: 0 2.35rem;\n  }\n\n  @media (max-width: 320px) {\n    padding: 0 1.5rem;\n  }\n"]);return M=function(){return n},n}var P=function(n){Object(d.a)(t,n);var e=Object(u.a)(t);function t(){var n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))).state={isOpen:!1},n.handleClick=function(){n.setState({isOpen:!0})},n.closeModal=function(){n.setState({isOpen:!1})},n}return Object(m.a)(t,[{key:"render",value:function(){var n=this.props,e=n.image,i=n.work,o=n.detail;return r.a.createElement(a.Fragment,null,r.a.createElement(q,{isOpen:this.state.isOpen,image:e,detail:o,work:i,onToggle:this.closeModal}),r.a.createElement(t.Container,{onClick:this.handleClick},r.a.createElement(t.Image,{src:e,id:"img"}),r.a.createElement(t.Overlay,null,r.a.createElement("div",{style:{display:"block",margin:"3rem"}},r.a.createElement(t.Text,null,i)))))}}]),t}(a.Component);P.Container=s.a.div(M()),P.Overlay=s.a.div(H()),P.Image=s.a.img(Y()),P.Text=s.a.h2(J());var R=P,W=function(n){var e=n.result;return r.a.createElement(r.a.Fragment,null,e.map((function(n,e){return r.a.createElement(R,{key:e,image:n.url,work:n.work,detail:n.detail})})))},X=[{work:"portfolio",url:"https://res.cloudinary.com/fego/image/upload/v1591311087/fego/fego_qbn42g.jpg",detail:"My portfolio page. Built with reactJs"},{work:"trim",url:"https://res.cloudinary.com/fego/image/upload/v1593293963/fego/trimly_u4m5vv.jpg",detail:"A platform to get your long urls trimmed"},{work:"teamwork",url:"https://res.cloudinary.com/fego/image/upload/v1590153226/fego/teamwork_ukmidc.png",detail:"Teamwork is an \u200binternal social network for employees of an organization. The goal\n     of this application is to facilitate more interaction between colleagues and promote team bonding"},{work:"chef-folio",url:"https://res.cloudinary.com/fego/image/upload/v1590155104/fego/chef-folio_nmzw13.jpg",detail:"An application for chefs to show off their work and recipes. They could share with potential clients,\n     the amazing pics from the recipes they\u2019ve created."},{work:"youtbsrch",url:"https://res.cloudinary.com/fego/image/upload/v1590156976/fego/youtbsrchjpg_atimgj.jpg",detail:"A Youtube search app"},{work:"quiz",url:"https://res.cloudinary.com/fego/image/upload/v1590243165/fego/quiz_gk1ekd.jpg",detail:"A simple quiz app built with vanilla javascript"}];function D(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-row-gap: 1rem;\n  grid-column-gap: 1.75rem;\n\n  @media (max-width: 999px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]);return D=function(){return n},n}function G(){var n=Object(l.a)([""]);return G=function(){return n},n}var K=function n(){return r.a.createElement(a.Fragment,null,r.a.createElement(n.Text,null,"Featured Work"),r.a.createElement(n.Container,null,r.a.createElement(W,{result:X})))};K.Text=s.a.h1(G()),K.Container=s.a.section(D());var Q=K;function U(){var n=Object(l.a)(["\n  margin: 0 7rem;\n\n  @media (max-width: 1240px) {\n    margin: 0 4rem;\n  }\n\n  @media (max-width: 1024px) {\n    margin: 0 2.5rem;\n  }\n\n  @media (max-width: 999px) {\n    margin: 0 7rem;\n  }\n\n  @media (max-width: 768px) {\n    margin: 0 6rem;\n  }\n\n  @media (max-width: 600px) {\n    margin: 0 1.75rem;\n  }\n\n  @media (max-width: 576px) {\n    margin: 0 1rem;\n  }\n"]);return U=function(){return n},n}var V=function(n){Object(d.a)(t,n);var e=Object(u.a)(t);function t(){var n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))).state={isOpen:!1},n.onToggle=function(){n.setState({isOpen:!n.state.isOpen})},n}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(k,{open:this.state.isOpen,handleClick:this.onToggle}),r.a.createElement(t.Container,null,r.a.createElement(T,null),r.a.createElement(Q,null)))}}]),t}(r.a.Component);V.Container=s.a.div(U());var Z=V,$=function(){return r.a.createElement(Z,null)};Object(i.render)(r.a.createElement($,null),document.querySelector("#root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.79165cd4.chunk.js.map