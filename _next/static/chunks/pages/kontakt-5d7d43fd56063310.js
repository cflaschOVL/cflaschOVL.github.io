(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[510],{5099:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kontakt",function(){return n(8168)}])},8168:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return F},default:function(){return f}});var r=n(2322),a=n(8774),o=n(7473),c=n(6812),s=n(2524),_=n.n(s),l=n(2784),i=n(3955),m=n(8601),u=n(2196),d=n.n(u);function h(){let[e,t]=(0,l.useState)(!1),[n,s]=(0,l.useState)(!1),[u,h]=(0,l.useState)(!1),[p,x]=(0,l.useState)(!1),F=(0,l.useRef)(null),{executeRecaptcha:f}=(0,o.xX)(),b=m.Ry().shape({firstname:m.Z_(),lastname:m.Z_(),email:m.Z_().email("Ung\xfcltiges E-Mail Format").required("Bitte geben Sie Ihre E-mail ein!"),phone:m.Z_().when({is:e=>!!e,then:()=>m.Z_().matches(/^\+[1-9][0-9]{0,24}$/,"Geben Sie eine Telefonnummer ein, einschlie\xdflich + und der Landesvorwahl, zum Beispiel +436501234567")}),message:m.Z_().required("Bitte geben Sie eine Nachricht ein!"),dataProtectionPolicyAccepted:m.O7().oneOf([!0],"Du musst der Datenschutzerkl\xe4rung zustimmen.").required("Du musst der Datenschutzerkl\xe4rung zustimmen.")}),j=(0,l.useMemo)(()=>({firstname:"",lastname:"",email:"",phone:"",message:"",dataProtectionPolicyAccepted:!1}),[]),g=(0,i.cI)({resolver:(0,c.X)(b),defaultValues:j}),{handleSubmit:N}=g,w=async e=>{t(!0);try{let t=await (null==f?void 0:f());k(e,t)}catch(e){t(!1),s(!0)}},k=async(e,n)=>{try{v(),t(!1),s(!1),h(!0)}catch(e){t(!1),s(!0)}},v=()=>{F.current&&window.scrollTo({top:F.current.offsetTop-80,behavior:"smooth"})};return(0,r.jsxs)("div",{className:"o-content-xlg",style:{paddingTop:"48px",paddingBottom:"48px"},children:[(0,r.jsx)("h1",{style:{marginBottom:"24px"},children:"Sie wollen uns etwas sagen?"}),(0,r.jsx)("p",{style:{marginBottom:"24px"},children:"Wie wollen Sie mit Ihrer Kontaktaufnahme dazu beitragen die Zukunft gemeinsam zu gestalten? Mit Anregungen, Kritik, Fragen, Vorschl\xe4gen? Was es auch sein mag: Wir freuen uns \xfcber Ihr Engagement."}),(0,r.jsxs)("div",{className:d().contactForm,ref:F,children:[(0,r.jsxs)(a.RV,{methods:g,onSubmit:N(w),className:_()(d().contactForm__form,{[d()["-successful"]]:u}),children:[(0,r.jsxs)("div",{className:d().contactForm__upper,children:[(0,r.jsxs)("div",{className:d().contactForm__upper__inner,children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"o-label-wrapper",children:[(0,r.jsx)("label",{className:"u-form-input-label",children:"Vorname"}),(0,r.jsx)(a.au,{name:"firstname",label:"Max"})]}),(0,r.jsxs)("div",{className:"o-label-wrapper",children:[(0,r.jsx)("label",{className:"u-form-input-label",children:"Nachname"}),(0,r.jsx)(a.au,{name:"lastname",label:"Mustermann"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"o-label-wrapper",children:[(0,r.jsx)("label",{className:"u-form-input-label",children:"E-Mail Adresse*"}),(0,r.jsx)(a.au,{name:"email",label:"max@mustermann.at"})]}),(0,r.jsxs)("div",{className:"o-label-wrapper",children:[(0,r.jsx)("label",{className:"u-form-input-label",children:"Telefonnummer"}),(0,r.jsx)(a.au,{name:"phone",label:"+436641234567"})]})]})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"o-label-wrapper",children:[(0,r.jsx)("label",{className:"u-form-input-label",children:"Ihre Nachricht*"}),(0,r.jsx)(a.r,{name:"message",label:"Ihre Nachricht"})]})})]}),(0,r.jsx)("div",{className:d().contactForm__down,children:(0,r.jsx)("label",{className:"u-form-input-label",children:(0,r.jsx)(a.jb,{name:"dataProtectionPolicyAccepted",label:(0,r.jsxs)(r.Fragment,{children:["Ich bin mit der"," ",(0,r.jsx)(a.Vc,{href:"/impressum-datenschutz",variant:"link",className:"u-color-primary",type:"secondary",target:"_blank",children:"Datenschutzerkl\xe4rung"})," ","einverstanden.*"]})})})}),n&&(0,r.jsxs)("div",{className:d().contactForm__error,children:[(0,r.jsx)("div",{children:"Leider konnte Ihre Anfrage nicht \xfcbermittelt werden, versuchen Sie es bitte zu einem sp\xe4teren Zeitpunkt erneut"}),(0,r.jsxs)("button",{type:"button",className:d().contactForm__error__close,onClick:()=>s(!1),children:[(0,r.jsx)("span",{className:d().contactForm__error__close__top}),(0,r.jsx)("span",{className:d().contactForm__error__close__bottom})]})]}),(0,r.jsxs)("div",{className:d().contactForm__submit__wrapper,children:[(0,r.jsx)(a.Vc,{buttonType:"submit",variant:"button",onClick:()=>{x(!p)},children:"Anfrage senden"}),e&&(0,r.jsx)(a.$j,{className:d().contactForm__submit__spinner})]})]}),(0,r.jsxs)("div",{className:_()(d().contactForm__thankyou,{[d()["-thankyou"]]:u}),children:[(0,r.jsx)("h3",{children:"Vielen Dank f\xfcr Ihre Anfrage, wir k\xfcmmern uns umgehend um die Beantwortung!"}),u&&(0,r.jsxs)("svg",{className:"o-animated-checkmark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",children:[(0,r.jsx)("circle",{className:"o-animated-checkmark__circle",cx:"26",cy:"26",r:"25",fill:"none"}),(0,r.jsx)("path",{className:"o-animated-checkmark__check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})]})]})]})]})}function p(){return(0,r.jsx)("section",{className:_()(d().contactForm__wrapper,"o-content"),children:(0,r.jsx)(o.pm,{reCaptchaKey:"6LdCT4giAAAAANvtBCu4DmEfbvaUMqhqwZqMCBI2",language:"de",children:(0,r.jsx)(h,{})})})}let x=e=>{let{...t}=e;return(0,r.jsx)(a.HQ,{platform:t.staticPropsPlatformData,header:t.staticPropsHeaderData,footer:t.staticPropsFooterData,pageTheme:"purple",children:(0,r.jsx)("main",{id:"main",children:(0,r.jsx)(p,{})})})};var F=!0,f=x},2196:function(e){e.exports={contactForm:"ContactForm_contactForm__3yUxQ",contactForm__wrapper:"ContactForm_contactForm__wrapper__Rp6OW",contactForm__error:"ContactForm_contactForm__error__x8GMK",contactForm__error__close:"ContactForm_contactForm__error__close__lq8m9",contactForm__error__close__bottom:"ContactForm_contactForm__error__close__bottom__TGNeh",contactForm__error__close__top:"ContactForm_contactForm__error__close__top__lgrzj",contactForm__upper:"ContactForm_contactForm__upper__5Qn36",contactForm__upper__inner:"ContactForm_contactForm__upper__inner__L9xXm",contactForm__down:"ContactForm_contactForm__down__UuP9A",contactForm__submit__wrapper:"ContactForm_contactForm__submit__wrapper__zOd85",contactForm__submit__spinner:"ContactForm_contactForm__submit__spinner__DZSSa",contactForm__form:"ContactForm_contactForm__form__KDKfG","-successful":"ContactForm_-successful__zTh9O","display-none-transition":"ContactForm_display-none-transition__l8i2P",contactForm__thankyou:"ContactForm_contactForm__thankyou__EePbn","-thankyou":"ContactForm_-thankyou__5MPfk","opacity-zero-to-hundred":"ContactForm_opacity-zero-to-hundred__HagQR"}}},function(e){e.O(0,[605,339,886,774,888,179],function(){return e(e.s=5099)}),_N_E=e.O()}]);