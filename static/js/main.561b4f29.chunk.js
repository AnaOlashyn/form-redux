(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{235:function(e,a,t){e.exports=t(396)},240:function(e,a,t){},396:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),i=t(43),r=t.n(i),u=t(52),o=t(199),s=t(200),d=t(225),y=t(201),k=t(224),v=(t(240),t(241),t(405)),c=t(406),m=t(407),p=[{title:"First name",type:"input",id:"firstName"},{title:"Last name",type:"input",id:"lastName"},{title:"Age",type:"input",id:"age",inputType:"number"},{title:"Country",type:"dropdown",id:"country"},{title:"City",type:"dropdown",id:"city",dependOn:"country"}],x={country:[{key:"Austria",text:"Austria",value:"Austria"},{key:"Belarus",text:"Belarus",value:"Belarus"},{key:"Denmark",text:"Denmark",value:"Denmark"},{key:"France",text:"France",value:"France"},{key:"Germany",text:"Germany",value:"Germany"},{key:"Italy",text:"Italy",value:"Italy"},{key:"Poland",text:"Poland",value:"Poland"},{key:"Russia",text:"Russia",value:"Russia"},{key:"Spain",text:"Spain",value:"Spain"},{key:"Sweden",text:"Sweden",value:"Sweden"},{key:"Ukraine",text:"Ukraine",value:"Ukraine"}],city:[{key:"Vienna",text:"Vienna",value:"Vienna",id:"Austria"},{key:"Graz",text:"Graz",value:"Graz",id:"Austria"},{key:"Linz",text:"Linz",value:"Linz",id:"Austria"},{key:"Salzburg",text:"Salzburg",value:"Salzburg",id:"Austria"},{key:"Minsk",text:"Minsk",value:"Minsk",id:"Austria"},{key:"Homyel",text:"Homyel",value:"Homyel",id:"Belarus"},{key:"Mogilev",text:"Mogilev",value:"Mogilev",id:"Belarus"},{key:"Brest",text:"Brest",value:"Brest",id:"Belarus"},{key:"Baranovichi",text:"Baranovichi",value:"Baranovichi",id:"Belarus"},{key:"Pinsk",text:"Pinsk",value:"Pinsk",id:"Belarus"},{key:"Copenhagen",text:"Copenhagen",value:"Copenhagen",id:"Denmark"},{key:"Odense",text:"Odense",value:"Odense",id:"Denmark"},{key:"Aalborg",text:"Aalborg",value:"Aalborg",id:"Denmark"},{key:"Horsens",text:"Horsens",value:"Horsens",id:"Denmark"},{key:"Vejle",text:"Vejle",value:"Vejle",id:"Denmark"},{key:"Paris",text:"Paris",value:"Paris",id:"France"},{key:"Marseille",text:"Marseille",value:"Marseille",id:"France"},{key:"Lyon",text:"Lyon",value:"Lyon",id:"France"},{key:"Toulouse",text:"Toulouse",value:"Toulouse",id:"France"},{key:"Strasbourg",text:"Strasbourg",value:"Strasbourg",id:"France"},{key:"Berlin",text:"Berlin",value:"Berlin",id:"Germany"},{key:"Hamburg",text:"Hamburg",value:"Hamburg",id:"Germany"},{key:"Frankfurt",text:"Frankfurt",value:"Frankfurt",id:"Germany"},{key:"Stuttgart",text:"Stuttgart",value:"Stuttgart",id:"Germany"},{key:"Bremen",text:"Bremen",value:"Bremen",id:"Germany"},{key:"Rome",text:"Rome",value:"Rome",id:"Italy"},{key:"Milan",text:"Milan",value:"Milan",id:"Italy"},{key:"Naples",text:"Naples",value:"Naples",id:"Italy"},{key:"Turin",text:"Turin",value:"Turin",id:"Italy"},{key:"Palermo",text:"Palermo",value:"Palermo",id:"Italy"},{key:"Warsaw",text:"Warsaw",value:"Warsaw",id:"Poland"},{key:"Krakow",text:"Krakow",value:"Krakow",id:"Poland"},{key:"Poznan",text:"Poznan",value:"Poznan",id:"Poland"},{key:"Lublin",text:"Lublin",value:"Lublin",id:"Poland"},{key:"Katowice",text:"Katowice",value:"Katowice",id:"Poland"},{key:"Moskow",text:"Moskow",value:"Moskow",id:"Russia"},{key:"St Petersburg",text:"St Petersburg",value:"St Petersburg",id:"Russia"},{key:"Novosibirsk",text:"Novosibirsk",value:"Novosibirsk",id:"Russia"},{key:"Samara",text:"Samara",value:"Samara",id:"Russia"},{key:"Omsk",text:"Omsk",value:"Omsk",id:"Russia"},{key:"Madrid",text:"Madrid",value:"Madrid",id:"Spain"},{key:"Barcelona",text:"Barcelona",value:"Barcelona",id:"Spain"},{key:"Valencia",text:"Valencia",value:"Valencia",id:"Spain"},{key:"Seville",text:"Seville",value:"Seville",id:"Spain"},{key:"Zaragoza",text:"Zaragoza",value:"Zaragoza",id:"Spain"},{key:"Stockholm",text:"Stockholm",value:"Stockholm",id:"Sweden"},{key:"Gothenburg",text:"Gothenburg",value:"Gothenburg",id:"Sweden"},{key:"Malmo",text:"Malmo",value:"Malmo",id:"Sweden"},{key:"Uppsala",text:"Uppsala",value:"Uppsala",id:"Sweden"},{key:"Sollentuna",text:"Sollentuna",value:"Sollentuna",id:"Sweden"},{key:"Kyiv",text:"Kyiv",value:"Kyiv",id:"Ukraine"},{key:"Kharkiv",text:"Kharkiv",value:"Kharkiv",id:"Ukraine"},{key:"Odesa",text:"Odesa",value:"Odesa",id:"Ukraine"},{key:"Lviv",text:"Lviv",value:"Lviv",id:"Ukraine"},{key:"Zaporizhia",text:"Zaporizhia",value:"Zaporizhia",id:"Ukraine"}]},S=t(95);var b=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(l)))).state={country:"",value:""},t.handleChange=function(e,a){var n=a.name,l=a.value;t.setState(Object(u.a)({value:l},n,l)),t.props.setValue({name:n,value:l})},t}return Object(k.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.formValues;return n.createElement("div",{className:"main"},n.createElement("div",{className:"profile"},n.createElement(v.a,{size:"small"},n.createElement(v.a.Group,{grouped:!0},p.map(function(a){return n.createElement("div",{key:a.id},"input"===a.type&&n.createElement(v.a.Input,{name:a.id,type:a.inputType?a.inputType:"text",fluid:!0,label:a.title,placeholder:a.title,onChange:e.handleChange}),"dropdown"===a.type&&n.createElement("div",null,n.createElement("span",{className:"profile__title"},a.title),n.createElement(v.a.Select,{name:a.id,options:a.dependOn?x[a.id].filter(function(t){return t.id===e.state[a.dependOn]}):x[a.id],placeholder:a.title,onChange:e.handleChange})))}),n.createElement(c.a,{trigger:n.createElement(m.a,null,"Submit")},n.createElement(c.a.Header,null,"Your Profile"),n.createElement(c.a.Content,{className:"profile__content"},n.createElement("div",{className:"profile__modal"},Object.keys(a).map(function(e){return n.createElement("div",{key:e,className:"profile__item"},"Your ",e," is ",a[e],".")}))))))))}}]),a}(n.Component),g=Object(S.b)(function(e){return{formValues:e.formValues}},function(e){return{setValue:function(a){return e(function(e){return{type:"SET_VALUE",payload:e}}(a))}}})(b),h=t(134),f={formValues:{}},w=t(222),O=t.n(w),P=t(66);t.d(a,"store",function(){return B});var B=Object(P.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_VALUE":return Object(h.a)({},e,{formValues:Object(h.a)({},e.formValues,Object(u.a)({},a.payload.name,a.payload.value))});default:return e}},f,Object(P.a)(O.a));r.a.render(l.a.createElement(S.a,{store:B},l.a.createElement(g,null)),document.querySelector("#root"))}},[[235,1,2]]]);
//# sourceMappingURL=main.561b4f29.chunk.js.map