(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[414],{1400:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/job/components/Outline/Outline",function(){return n(8945)}])},8945:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var i,l,s=n(5893),c=n(7294),r=n(613),u=n.n(r),a=n(512),o=n(325),d={src:"/rexpand-official-website-frontend-v2/_next/static/media/icon_play.3672db33.png",height:20,width:14,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAQAAABwz0azAAAAU0lEQVR42iWJvQ1AYBgGL35WUdvIAGawgNoIShoRndIORkFxvPnk8iR3ebC3FTEX3H0dLMUCF9/gtBZcQ6/YbffHnd45RfDYCG6hh5WY4eQoYikf6ctJI5P5bkAAAAAASUVORK5CYII=",blurWidth:6,blurHeight:8},_=n(5675),m=n.n(_),f=n(4699),h=n.n(f),b=e=>{let{text:t,theme:n=0}=e,i="inline-block py-1 px-2 rounded-md";return 0===n?i=(0,a.Z)(i,"bg-primary-green text-white",h().tag):1===n&&(i=(0,a.Z)(i,"bg-white text-primary-green",h().tag)),(0,s.jsx)("div",{className:i,children:t})};(i=l||(l={}))[i.GREEN=0]="GREEN",i[i.WHITE=1]="WHITE";var x=n(8802),g=n.n(x),j=e=>{let{data:t}=e;return(0,s.jsx)("ul",{className:g().timeline,children:null==t?void 0:t.map(e=>{var t;return(0,s.jsx)("li",{children:(0,s.jsxs)("div",{className:(0,a.Z)("",g().timeline_content),children:[(0,s.jsx)("h3",{className:(0,a.Z)("font-m",g().title),children:e.title}),(0,s.jsx)("ul",{className:(0,a.Z)("leading-6 pl-6",g().content),children:null==e?void 0:null===(t=e.content)||void 0===t?void 0:t.map((e,t)=>(0,s.jsx)("li",{children:e},t))})]})},e.title)})})},v=e=>{var t,n,i;let{data:r,className:_}=e,[f,h]=(0,c.useState)(0),x=(0,c.useMemo)(()=>{var e;return null==r?void 0:null===(e=r.subjects)||void 0===e?void 0:e[f]},[r,f]),g=(e,t)=>{h(t)};return(0,s.jsxs)("div",{className:(0,a.Z)("flex flex-col md:flex-row w-full",u().outline),children:[(0,s.jsx)("ul",{className:(0,a.Z)("md:w-72 flex flex-col gap-2",u().subject_buttons),children:null==r?void 0:null===(t=r.subjects)||void 0===t?void 0:t.map((e,t)=>{let n=(0,a.Z)("rounded-md flex flex-row items-center",u().subject_button);return t===f&&(n=(0,a.Z)(n,u().active)),(0,s.jsxs)("li",{className:n,onClick:e=>g(e,t),children:[t===f?(0,s.jsx)(m(),{src:d,alt:"第".concat((0,o.c6)(t+1),"部分"),style:{width:8,height:14,marginRight:16}}):null,"第".concat((0,o.c6)(t+1),"部分")]},null==e?void 0:e.subjectName)})}),(0,s.jsxs)("div",{className:(0,a.Z)("flex-1 flex flex-col",u().subject_detail),children:[(0,s.jsxs)("div",{className:(0,a.Z)("rounded-md py-8 px-10",u().detail_header),children:[(0,s.jsx)("div",{className:(0,a.Z)("text-lg mb-2",u().subject_name),children:null==x?void 0:x.subjectName}),(0,s.jsx)("div",{className:(0,a.Z)("text-base mb-6 flex flex-row gap-2",u().subject_tags),children:null==x?void 0:null===(n=x.subjectTags)||void 0===n?void 0:n.map((e,t)=>(0,s.jsx)(b,{text:e,theme:0===t?l.GREEN:l.WHITE},e))}),(0,s.jsx)("div",{className:u().description,children:null==x?void 0:x.subjectDescription})]}),(0,s.jsx)("div",{className:(0,a.Z)("rounded-md px-6 pt-12 pb-8",u().detail_footer),children:(0,s.jsx)(j,{data:null==x?void 0:null===(i=x.courseList)||void 0===i?void 0:i.map(e=>({title:e.name,content:e.sections}))})})]})]})}},325:function(e,t,n){"use strict";n.d(t,{aq:function(){return c},c6:function(){return s},p6:function(){return r}});let i=["零","一","二","三","四","五","六","七","八","九"],l=["","十","百","千","万","亿"];function s(e){let t="",n=String(e),s=n.length;for(let e=0;e<s;e++){let c=parseInt(n[e]),r=i[c];0!==c?t+=r+l[s-e-1]:"零"!==t[t.length-1]&&(t+=r)}return"零"===t[t.length-1]&&(t=t.slice(0,t.length-1)),t.startsWith("一十")&&(t=t.slice(1)),t}function c(e){let t=new Date,n=Math.ceil((e.getTime()-t.getTime())/864e5);return n>0?n:0}function r(e){let t=e.getFullYear(),n=e.getMonth()+1,i=e.getDate();return"".concat(t,"年").concat(n,"月").concat(i,"日")}},4699:function(e){e.exports={tag:"Tag_tag__mgtst"}},8802:function(e){e.exports={timeline:"VerticalTimeline_timeline__CsT0O",timeline_content:"VerticalTimeline_timeline_content__H_dLq",title:"VerticalTimeline_title__shIyY",content:"VerticalTimeline_content__ku5rT"}},613:function(e){e.exports={outline:"Outline_outline__n5MBL",subject_buttons:"Outline_subject_buttons__sr8hs",subject_button:"Outline_subject_button__VFV1L",active:"Outline_active__bCh1H",subject_detail:"Outline_subject_detail__Fd3Ah",detail_header:"Outline_detail_header__nRjYT",detail_footer:"Outline_detail_footer__1lrbG",subject_name:"Outline_subject_name__pQtIT",description:"Outline_description__U_wir",subject_tags:"Outline_subject_tags__PW3jM"}},512:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,i="",l=arguments.length;n<l;n++)(e=arguments[n])&&(t=function e(t){var n,i,l="";if("string"==typeof t||"number"==typeof t)l+=t;else if("object"==typeof t){if(Array.isArray(t)){var s=t.length;for(n=0;n<s;n++)t[n]&&(i=e(t[n]))&&(l&&(l+=" "),l+=i)}else for(i in t)t[i]&&(l&&(l+=" "),l+=i)}return l}(e))&&(i&&(i+=" "),i+=t);return i}}},function(e){e.O(0,[675,888,774,179],function(){return e(e.s=1400)}),_N_E=e.O()}]);