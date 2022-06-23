"use strict";(self.webpackChunkpass4s=self.webpackChunkpass4s||[]).push([[155],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>d});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),l=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?t.createElement(f,s(s({ref:r},p),{},{components:n})):t.createElement(f,s({ref:r},p))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8669:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},s="Broker",c={unversionedId:"core-concepts/Broker",id:"core-concepts/Broker",title:"Broker",description:'Broker is a higher level abstraction than Consumer and Sender, it resides in "com.ocadotechnology" %% "pass4s-high" % "v0.1.0" module.',source:"@site/../mdoc/target/mdoc/core-concepts/Broker.md",sourceDirName:"core-concepts",slug:"/core-concepts/Broker",permalink:"/pass4s/docs/core-concepts/Broker",draft:!1,editUrl:"https://github.com/ocadotechnology/pass4s/edit/main/docs/core-concepts/Broker.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Consumer",permalink:"/pass4s/docs/core-concepts/Consumer"},next:{title:"Message processor",permalink:"/pass4s/docs/modules/message-processor"}},i={},l=[],p={toc:l};function m(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"broker"},"Broker"),(0,o.kt)("p",null,"Broker is a higher level abstraction than ",(0,o.kt)("inlineCode",{parentName:"p"},"Consumer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Sender"),", it resides in ",(0,o.kt)("inlineCode",{parentName:"p"},'"com.ocadotechnology" %% "pass4s-high" % "v0.1.0"')," module."),(0,o.kt)("p",null,"It aims to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provide an easy way to build sender and consumer out of a connector"),(0,o.kt)("li",{parentName:"ul"},"Allow the user to route the requests - select the right sender/consumer logic based on the source of the message")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"trait Broker[F[_], +P] {\n  def consumer[R >: P](source: Source[R]): Consumer[F, Payload]\n\n  def sender[R >: P]: Sender[F, Message[R]]\n}\n\nobject Broker {\n  def fromConnector[F[_]: Async, P](connector: Connector[F, P]): Broker[F, P]\n  def routed[F[_], P](chooseBroker: End[P] => Broker[F, P]): Broker[F, P]\n}\n")),(0,o.kt)("p",null,"Sample broker initialization might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val brokerResource = Akka\n  .system[IO]\n  .flatMap { implicit sys =>\n    implicit val connectorLogger: Logger[IO] = Slf4jLogger.getLoggerFromClass[IO](classOf[Connector[IO, Jms]])\n\n    JmsConnector\n      .singleBroker[IO](\n        "admin",\n        "admin",\n        "failover:(tcp://localhost:61616)"\n      )\n      .map(_.logged)\n  }\n  .map(Broker.fromConnector[IO, Jms])\n')),(0,o.kt)("p",null,"Plese see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ocadotechnology/pass4s/blob/main/demo/src/main/scala/com/ocadotechnology/pass4s/demo/DemoMain.scala"},(0,o.kt)("inlineCode",{parentName:"a"},"DemoMain.scala")," for full usage example"),"."))}m.isMDXComponent=!0}}]);