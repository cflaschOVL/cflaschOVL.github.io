(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[160],{4824:function(e,t,n){"use strict";n.d(t,{bU:function(){return c},L3:function(){return u},sH:function(){return O},_7:function(){return f},Lt:function(){return I},w5:function(){return b},je:function(){return E}}),n(9982),n(6777),n(1758);var _=n(2322),i=n(9383),o=n(8278),a=n(2784);function c(e){let{headline:t,text:n}=e,c=(0,a.useRef)(null),s=(0,o.Z)({ref:c,triggerOnce:!0}),r={from:{opacity:0,y:30},to:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{opacity:1,y:0,transition:{delay:e,duration:.7}}}};return(0,_.jsx)("section",{style:{marginTop:"2vh",marginBottom:"18vh"},ref:c,children:(0,_.jsxs)("div",{className:"o-content--small o-content-padding content",children:[(0,_.jsx)(i.E.h3,{variants:r,initial:"from",animate:s?"to":"from",custom:0,style:{marginBottom:"3vh",textTransform:"none"},children:t}),(0,_.jsx)(i.E.p,{variants:r,initial:"from",animate:s?"to":"from",custom:.3,children:(0,_.jsx)(_.Fragment,{children:n})})]})})}var s=n(6577),r=n.n(s),l=n(8982),d=n.n(l),g=n(2524),m=n.n(g),u=()=>{let e=(0,a.useRef)(null),t=(0,o.Z)({ref:e,triggerOnce:!0}),n={from:{opacity:0,y:30},to:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{opacity:1,y:0,transition:{delay:e+.4,duration:.7}}}};return(0,_.jsx)("section",{className:m()(d().section__contact,"section break"),ref:e,children:(0,_.jsxs)("div",{className:m()(d().section__contact__screen,"section__screen o-content-padding"),children:[(0,_.jsx)("div",{className:d().section__contact__image__wrapper,children:(0,_.jsx)(r(),{objectFit:"cover",src:"/images/bg_contact.jpg",layout:"fill",alt:"Metropolitan"})}),(0,_.jsxs)("div",{className:d().section__contact__content,children:[(0,_.jsxs)(i.E.h2,{className:d().section__contact__content__headline,variants:n,initial:"from",animate:t?"to":"from",custom:0,children:["Need more space",(0,_.jsx)("br",{}),"for your ideas?"]}),(0,_.jsx)(i.E.p,{className:d().section__contact__content__text,variants:n,initial:"from",animate:t?"to":"from",custom:.3,children:"Let’s talk about it."}),(0,_.jsx)(i.E.a,{className:m()(d().section__contact__content__button,"o-button"),href:"/contact",variants:n,initial:"from",animate:t?"to":"from",custom:.5,children:"Contact"})]})]})})},x=n(512),h=n.n(x),f=e=>{let{media:t,textLines:n}=e,c=(0,a.useRef)(null),s=(0,o.Z)({ref:c,triggerOnce:!0}),l=(0,a.useRef)(null),d=(0,o.Z)({ref:l});return(0,a.useEffect)(()=>{var e,t;d?null===(e=l.current)||void 0===e||e.play():null===(t=l.current)||void 0===t||t.pause()},[d]),(0,_.jsx)("section",{className:m()(h().section__hero,"section break"),ref:c,children:(0,_.jsxs)("div",{className:m()(h().section__hero__screen,"section__screen"),children:[(0,_.jsx)(i.E.h1,{initial:"from",animate:s?"to":"from",variants:{from:{x:"-70vw",opacity:0},to:{x:"0vw",opacity:1,transition:{ease:"easeOut"}}},className:m()(h().section__hero__textline,{[h()["--1"]]:!0}),children:n.line1}),t.videoSrc&&(0,_.jsx)("div",{className:h().section__hero__video__wrapper,children:(0,_.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:t.videoSrc,ref:l})}),t.imageSrc&&(0,_.jsx)("div",{className:h().section__hero__image__wrapper,children:(0,_.jsx)(r(),{src:t.imageSrc,objectFit:"contain",layout:"fill",alt:""})}),(0,_.jsx)(i.E.h1,{initial:"from",animate:s?"to":"from",variants:{from:{x:"70vw",opacity:0},to:{x:"-2vw",opacity:1,transition:{delay:.25,ease:"easeOut"}}},className:m()(h().section__hero__textline,{[h()["--2"]]:!0}),children:n.line2})]})})},p=n(226),y=n(976),v=n(3105),S=n(8020),j=n.n(S),b=e=>{let{data:t}=e,n=function(e){let t=(0,v.h)(()=>(0,p.BX)(e)),{isStatic:n}=(0,a.useContext)(y._);if(n){let[,n]=(0,a.useState)(e);(0,a.useEffect)(()=>t.on("change",n),[])}return t}(0),c=(0,a.useRef)(null),s=(0,o.Z)({ref:c,triggerOnce:!0}),r=(0,a.useRef)([]),[l,d]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=()=>{if(c.current){let e=c.current.getBoundingClientRect(),_=1-e.bottom/(e.height+window.innerHeight);n.set(_),d(Math.floor(_*t.length))}};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[t.length,l]),(0,a.useEffect)(()=>{r.current.forEach((e,t)=>{e&&(t===l&&s?e.play():(e.pause(),e.currentTime=0))})},[l,s]),(0,_.jsx)("section",{className:m()(j().section__slider,"section break"),ref:c,style:{height:"".concat(100*t.length,"vh")},children:(0,_.jsx)("div",{className:m()(j().section__slider__texts__screen,"section__screen"),children:(0,_.jsxs)("div",{className:"content o-content-padding",children:[(0,_.jsx)("h3",{className:j().section__slider__texts__headline,children:"Metropolitan structures stands for"}),(0,_.jsx)("div",{className:j().section__slider__texts__content__items,children:t.map((e,t)=>(0,_.jsxs)(i.E.div,{className:j().section__slider__texts__content__item,initial:{opacity:0},animate:{opacity:t===l?1:0},transition:{duration:.5},children:[(0,_.jsxs)("div",{className:j().section__slider__texts__content__column,children:[(0,_.jsx)(i.E.h6,{className:j().section__slider__texts__content__headline,initial:{opacity:0},animate:{opacity:t===l?1:0},transition:{duration:.5},children:e.headline1}),(0,_.jsx)(i.E.p,{className:j().section__slider__texts__content__text,initial:{opacity:0},animate:{opacity:t===l?1:0},transition:{duration:.5},children:e.text1})]}),(0,_.jsxs)("div",{className:j().section__slider__texts__content__column,children:[(0,_.jsx)(i.E.h6,{className:j().section__slider__texts__content__headline,initial:{opacity:0},animate:{opacity:t===l?1:0},transition:{duration:.5},children:e.headline2}),(0,_.jsx)(i.E.p,{className:j().section__slider__texts__content__text,initial:{opacity:0},animate:{opacity:t===l?1:0},transition:{duration:.5},children:e.text2})]})]},t))}),(0,_.jsx)("div",{className:j().section__slider__texts__content__items__dots,children:t.map((e,t)=>(0,_.jsx)("div",{className:m()(j().section__slider__texts__content__items__dot,{[j()["--active"]]:t===l})},t))})]})})})},N=n(344),w=n.n(N),E=e=>{var t,n;let{bgVariant:c,globalDelay:s=0,data:r,showContactButton:l}=e,d=(0,a.useRef)(null),g=(0,o.Z)({ref:d,triggerOnce:!0}),u=[{text:r[0].text,animation:{from:{opacity:0,x:"-70vw"},to:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{opacity:1,x:"0vw",transition:{delay:s+e+.2,duration:.5}}}}},{text:null===(t=r[1])||void 0===t?void 0:t.text,animation:{from:{opacity:0,x:"100vw"},to:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{opacity:1,x:"0vw",transition:{delay:s+e+.4,duration:.5}}}}},{text:null===(n=r[2])||void 0===n?void 0:n.text,animation:{from:{opacity:0,x:"-100vw"},to:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{opacity:1,x:"0vw",transition:{delay:s+e+.6,duration:.5}}}}}],x={text:"Contact",animation:{from:{opacity:0,y:30},to:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{opacity:1,y:0,transition:{delay:s+e+1.2,duration:.7}}}}};return(0,_.jsx)("section",{className:m()(w().section__slogan,"section break",{[w()["--".concat(c)]]:!0}),ref:d,children:(0,_.jsx)("div",{className:m()(w().section__slogan__screen,"section__screen"),children:(0,_.jsxs)("div",{className:w().section__slogan__textline__wrapper,children:[u.map((e,t)=>{var n,o;return(0,_.jsx)(i.E.p,{className:m()(w().section__slogan__textline,"".concat(null===(n=r[t])||void 0===n?void 0:n.heading," ").concat(null===(o=r[t])||void 0===o?void 0:o.fontStyle),{[w()["--".concat(t+1)]]:!0}),variants:e.animation,initial:"from",animate:g?"to":"from",custom:0,children:e.text},t)}),l&&(0,_.jsx)(i.E.a,{className:m()(w().section__slogan__content__button,"o-button",{[w()["--contact"]]:!0}),href:"/contact",variants:x.animation,initial:"from",animate:g?"to":"from",custom:0,children:x.text})]})})})},C=n(2438),k=n.n(C),I=e=>{let{data:t,globalDelay:n=0}=e,c=(0,a.useRef)(null),s=(0,o.Z)({ref:c,triggerOnce:!0}),l={from:{opacity:0,scale:.5},to:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{opacity:1,scale:[0,1.1,.9,1],transition:{scale:{duration:1,ease:"easeOut",delay:n+e},opacity:{duration:1,delay:n+e}}}}},d={from:{opacity:0,y:30},to:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{opacity:1,y:0,transition:{y:{duration:.5,delay:n+e},opacity:{duration:.5,delay:n+e}}}}};return(0,_.jsx)("section",{className:m()(k().section__icon__grid,"section break"),ref:c,children:(0,_.jsx)("div",{className:m()(k().section__icon__grid__screen,"section__screen"),children:(0,_.jsx)("div",{className:k().section__icon__grid__items,children:t.map((e,t)=>(0,_.jsxs)("div",{className:k().section__icon__grid__item,children:[(0,_.jsx)(i.E.div,{className:k().section__icon__grid__item__icon__wrapper,variants:l,initial:"from",animate:s?"to":"from",custom:.3*t,children:(0,_.jsx)(r(),{className:"image",objectFit:"contain",src:e.iconSrc,layout:"fill",alt:""})}),(0,_.jsx)(i.E.div,{className:k().section__icon__grid__item__text,variants:d,initial:"from",animate:s?"to":"from",custom:.3*t+.2,children:(0,_.jsx)("p",{dangerouslySetInnerHTML:{__html:e.text.replace(/\n/g,"<br />")}})})]},t))})})})},T=n(8523),H=n.n(T),O=()=>{let e=(0,a.useRef)(null),t=(0,o.Z)({ref:e,triggerOnce:!0}),n={from:{opacity:0,y:"100%"},to:{opacity:.8,y:0,transition:{delay:1,duration:.5}}},c=[{sectionRef:e,backgroundImageSrc:"/images/gallery-headings/gallery-heading-1.png",useCurtainAnimation:!0,content:(0,_.jsx)(E,{globalDelay:1.4,data:[{text:"There Are",heading:"h5",fontStyle:"bold"},{text:"No Limits",heading:"h2",fontStyle:"outlined"},{text:"In Applications",heading:"h5",fontStyle:"bold"}]})},{backgroundImageSrc:"/images/gallery-headings/gallery-heading-1.png",useCurtain:!0,content:(0,_.jsx)(E,{data:[{text:"Congress",heading:"h3",fontStyle:"bold"}]})},{backgroundImageSrc:"/images/gallery-headings/gallery-heading-1.png",useCurtain:!0,content:(0,_.jsx)(E,{data:[{text:"Film",heading:"h3",fontStyle:"bold"},{text:"Production",heading:"h3",fontStyle:"bold"}]})},{backgroundImageSrc:"/images/gallery-headings/gallery-heading-1.png",useCurtain:!0,content:(0,_.jsx)(E,{data:[{text:"Theatre",heading:"h3",fontStyle:"bold"}]})},{backgroundImageSrc:"/images/gallery-headings/gallery-heading-1.png",useCurtain:!0,content:(0,_.jsx)(E,{data:[{text:"Festival",heading:"h3",fontStyle:"bold"}]})},{backgroundImageSrc:"/images/gallery-headings/gallery-heading-1.png",useCurtain:!0,content:(0,_.jsx)(E,{data:[{text:"Product",heading:"h3",fontStyle:"bold"},{text:"Presentation",heading:"h3",fontStyle:"bold"}]})},{backgroundImageSrc:"/images/gallery-headings/gallery-heading-1.png",useCurtain:!0,content:(0,_.jsx)(E,{data:[{text:"Convention",heading:"h3",fontStyle:"bold"}]})},{backgroundImageSrc:"/images/gallery-headings/gallery-heading-1.png",useCurtain:!0,content:(0,_.jsx)(E,{data:[{text:"Wedding",heading:"h3",fontStyle:"bold"}]})}];return(0,_.jsx)(_.Fragment,{children:c.map((e,o)=>(0,_.jsx)("section",{className:m()(H().section__gallery__headings,"section break"),ref:e.sectionRef,children:(0,_.jsxs)("div",{className:m()(H().section__gallery__headings__screen,"section__screen"),children:[e.backgroundImageSrc&&(0,_.jsx)("div",{className:H().section__gallery__headings__background,children:(0,_.jsx)(r(),{objectFit:"cover",src:e.backgroundImageSrc,layout:"fill",alt:"Metropolitan"})}),(e.useCurtain||e.useCurtainAnimation)&&(0,_.jsx)(i.E.div,{className:H().section__gallery__headings__curtain,initial:e.useCurtainAnimation?"to":void 0,animate:e.useCurtainAnimation?t?"to":"from":void 0,variants:e.useCurtainAnimation?n:void 0,transition:e.useCurtainAnimation?{ease:"easeIn"}:void 0}),(0,_.jsx)("div",{children:e.content})]})},o))})};n(1560),n(7430),n(291)},8982:function(e){e.exports={section__contact__screen:"SectionContact_section__contact__screen__Ec49U",section__contact__image__wrapper:"SectionContact_section__contact__image__wrapper__ElacP",section__contact__content:"SectionContact_section__contact__content__TH1r4",section__contact__content__text:"SectionContact_section__contact__content__text__zFOxc",section__contact__content__button:"SectionContact_section__contact__content__button__2gkSp"}},8523:function(e){e.exports={section__gallery__headings__screen:"SectionGalleryHeadings_section__gallery__headings__screen__GwlC_",section__gallery__headings__curtain:"SectionGalleryHeadings_section__gallery__headings__curtain__Zdky7"}},512:function(e){e.exports={section__hero__screen:"SectionHero_section__hero__screen__j2kdx",section__hero__video__wrapper:"SectionHero_section__hero__video__wrapper__obUZa",section__hero__image__wrapper:"SectionHero_section__hero__image__wrapper__I1kOP",section__hero__textline:"SectionHero_section__hero__textline__MyI0i","--1":"SectionHero_--1__p9JtS","--2":"SectionHero_--2__rhg5q"}},2438:function(e){e.exports={section__icon__grid__screen:"SectionIconGrid_section__icon__grid__screen__9qo7V",section__icon__grid__items:"SectionIconGrid_section__icon__grid__items__UK4v2",section__icon__grid__item:"SectionIconGrid_section__icon__grid__item__bMYu1",section__icon__grid__item__icon__wrapper:"SectionIconGrid_section__icon__grid__item__icon__wrapper__60tWL",section__icon__grid__item__text:"SectionIconGrid_section__icon__grid__item__text__hg5AW"}},8020:function(e){e.exports={section__slider__texts__screen:"SectionSliderTexts_section__slider__texts__screen__EYj0h",section__slider__texts__content:"SectionSliderTexts_section__slider__texts__content__NnBU5",section__slider__texts__content__items:"SectionSliderTexts_section__slider__texts__content__items__mfSJV",section__slider__texts__headline:"SectionSliderTexts_section__slider__texts__headline__ELzhD",section__slider__texts__content__item:"SectionSliderTexts_section__slider__texts__content__item__mSZnC",section__slider__texts__content__column:"SectionSliderTexts_section__slider__texts__content__column___77pE",section__slider__texts__content__items__dots:"SectionSliderTexts_section__slider__texts__content__items__dots__Mr9KE",section__slider__texts__content__items__dot:"SectionSliderTexts_section__slider__texts__content__items__dot__u1SQU","--active":"SectionSliderTexts_--active__eM1O0"}},344:function(e){e.exports={section__slogan__screen:"SectionSlogan_section__slogan__screen__SZtz4",section__slogan:"SectionSlogan_section__slogan__FpO9N","--1":"SectionSlogan_--1__obzzp","--2":"SectionSlogan_--2__k2yjo","--3":"SectionSlogan_--3__0mmHH",section__slogan__textline__wrapper:"SectionSlogan_section__slogan__textline__wrapper__BsTSj",section__slogan__textline:"SectionSlogan_section__slogan__textline__y064c",section__slogan__content__button:"SectionSlogan_section__slogan__content__button__nMyMf","--contact":"SectionSlogan_--contact__9jc3_"}}}]);