var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var aa=function(){throw Error("unimplemented abstract method");},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},da=function(a,b,c){da=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
ba:ca;return da.apply(null,arguments)};var n=window,p=document,r=n.location,ea=function(){},fa=/\[native code\]/,v=function(a,b,c){return a[b]=a[b]||c},ga=function(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1},ha=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b},ia=/&/g,ja=/</g,ka=/>/g,la=/"/g,ma=/'/g,na=function(a){return String(a).replace(ia,"&amp;").replace(ja,"&lt;").replace(ka,"&gt;").replace(la,"&quot;").replace(ma,"&#39;")},w=function(){var a;if((a=Object.create)&&
fa.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a},y=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},z=function(a){if(fa.test(Object.keys))return Object.keys(a);var b=[],c;for(c in a)y(a,c)&&b.push(c);return b},A=function(a,b){a=a||{};for(var c in a)y(a,c)&&(b[c]=a[c])},oa=function(a){return function(){n.setTimeout(a,0)}},B=function(a,b){if(!a)throw Error(b||"");},C=v(n,"gapi",{});var D=function(a,b,c){var d=new RegExp("([#].*&|[#])"+b+"=([^&#]*)","g");b=new RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(d.exec(a)||b.exec(a)))try{c=decodeURIComponent(a[2])}catch(e){}return c},pa=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,qa=function(a){a=a.match(pa);var b=w();b.J=a[1];b.query=a[3]?[a[3]]:[];b.o=a[5]?[a[5]]:[];return b},sa=function(a){return a.J+(0<a.query.length?"?"+a.query.join("&"):"")+(0<a.o.length?"#"+a.o.join("&"):"")},ta=function(a,b){var c=[];if(a)for(var d in a)if(y(a,
d)&&null!=a[d]){var e=b?b(a[d]):a[d];c.push(encodeURIComponent(d)+"="+encodeURIComponent(e))}return c},ua=function(a,b,c,d){a=qa(a);a.query.push.apply(a.query,ta(b,d));a.o.push.apply(a.o,ta(c,d));return sa(a)},va=function(a,b){var c="";2E3<b.length&&(c=b.substring(2E3),b=b.substring(0,2E3));var d=a.createElement("div"),e=a.createElement("a");e.href=b;d.appendChild(e);d.innerHTML=d.innerHTML;b=String(d.firstChild.href);d.parentNode&&d.parentNode.removeChild(d);return b+c},wa=/^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;var E=function(a,b,c,d){if(n[c+"EventListener"])n[c+"EventListener"](a,b,!1);else if(n[d+"tachEvent"])n[d+"tachEvent"]("on"+a,b)},xa=function(){var a=p.readyState;return"complete"===a||"interactive"===a&&-1==navigator.userAgent.indexOf("MSIE")},Aa=function(a){var b=ya;if(!xa())try{b()}catch(c){}za(a)},za=function(a){if(xa())a();else{var b=!1,c=function(){if(!b)return b=!0,a.apply(this,arguments)};n.addEventListener?(n.addEventListener("load",c,!1),n.addEventListener("DOMContentLoaded",c,!1)):n.attachEvent&&
(n.attachEvent("onreadystatechange",function(){xa()&&c.apply(this,arguments)}),n.attachEvent("onload",c))}},Ba=function(a){for(;a.firstChild;)a.removeChild(a.firstChild)},Ca={button:!0,div:!0,span:!0};var H;H=v(n,"___jsl",w());v(H,"I",0);v(H,"hel",10);var I=function(a){return H.dpo?H.h:D(a,"jsh",H.h)},Da=function(a){var b=v(H,"sws",[]);b.push.apply(b,a)},Ea=function(a){return v(H,"watt",w())[a]},Fa=function(a){var b=v(H,"PQ",[]);H.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)},Ga=function(a){return v(v(H,"H",w()),a,w())};var J=v(H,"perf",w()),Ha=v(J,"g",w()),Ia=v(J,"i",w());v(J,"r",[]);w();w();var Ja=function(a,b,c){var d=J.r;"function"===typeof d?d(a,b,c):d.push([a,b,c])},K=function(a,b,c){Ha[a]=!b&&Ha[a]||c||(new Date).getTime();Ja(a)},L=function(a,b,c){b&&0<b.length&&(b=Ka(b),c&&0<c.length&&(b+="___"+Ka(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=v(Ia,"_p",w()),v(b,c,w())[a]=(new Date).getTime(),Ja(a,"_p",c))},Ka=function(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")};var La=w(),M=[],N=function(a){throw Error("Bad hint"+(a?": "+a:""));};M.push(["jsl",function(a){for(var b in a)if(y(a,b)){var c=a[b];"object"==typeof c?H[b]=v(H,b,[]).concat(c):v(H,b,c)}if(b=a.u)a=v(H,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);var Ma=/^(\/[a-zA-Z0-9_\-]+)+$/,Na=/^[a-zA-Z0-9\-_\.,!]+$/,Oa=/^gapi\.loaded_[0-9]+$/,Pa=/^[a-zA-Z0-9,._-]+$/,Ta=function(a,b,c,d){var e=a.split(";"),f=e.shift(),g=La[f],k=null;g?k=g(e,b,c,d):N("no hint processor for: "+f);k||N("failed to generate load url");b=k;c=b.match(Qa);(d=b.match(Ra))&&1===d.length&&Sa.test(b)&&c&&1===c.length||N("failed sanity: "+a);return k},Wa=function(a,b,c,d){a=Ua(a);Oa.test(c)||N("invalid_callback");b=Va(b);d=d&&d.length?Va(d):null;var e=function(a){return encodeURIComponent(a).replace(/%2C/g,
",")};return[encodeURIComponent(a.Z).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.H?"/am="+e(a.H):"",a.S?"/rs="+e(a.S):"",a.U?"/t="+e(a.U):"","/cb=",e(c)].join("")},Ua=function(a){"/"!==a.charAt(0)&&N("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))N("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=
b[d].split("="),g=decodeURIComponent(f[0]),k=decodeURIComponent(f[1]);2==f.length&&g&&k&&(a[g]=a[g]||k)}b="/"+c.join("/");Ma.test(b)||N("invalid_prefix");c=Xa(a,"k",!0);d=Xa(a,"am");e=Xa(a,"rs");a=Xa(a,"t");return{Z:b,version:c,H:d,S:e,U:a}},Va=function(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Pa.test(e)&&b.push(e)}return b.join(",")},Xa=function(a,b,c){a=a[b];!a&&c&&N("missing: "+b);if(a){if(Na.test(a))return a;N("invalid: "+b)}return null},Sa=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
Ra=/\/cb=/g,Qa=/\/\//g,Ya=function(){var a=I(r.href);if(!a)throw Error("Bad hint");return a};La.m=function(a,b,c,d){(a=a[0])||N("missing_hint");return"https://apis.google.com"+Wa(a,b,c,d)};var Za=decodeURI("%73cript"),$a=function(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>ga.call(b,e)&&c.push(e)}return c},bb=function(a){"loading"!=p.readyState?ab(a):p.write("<"+Za+' src="'+encodeURI(a)+'"></'+Za+">")},ab=function(a){var b=p.createElement(Za);b.setAttribute("src",a);b.async="true";(a=p.getElementsByTagName(Za)[0])?a.parentNode.insertBefore(b,a):(p.head||p.body||p.documentElement).appendChild(b)},cb=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<M.length;d++){var e=M[d][0],
f=M[d][1];f&&y(c,e)&&f(c[e],a,b)}},eb=function(a,b,c){db(function(){var c;c=b===I(r.href)?v(C,"_",w()):w();c=v(Ga(b),"_",c);a(c)},c)},O=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);cb(a,c);var d=a?a.split(":"):[],e=c.h||Ya(),f=v(H,"ah",w());if(f["::"]&&d.length){for(var g=[],k=null;k=d.shift();){var h=k.split("."),h=f[k]||f[h[1]&&"ns:"+h[0]||""]||e,l=g.length&&g[g.length-1]||null,m=l;l&&l.hint==h||(m={hint:h,M:[]},g.push(m));m.M.push(k)}var q=g.length;if(1<q){var u=c.callback;
u&&(c.callback=function(){0==--q&&u()})}for(;d=g.shift();)fb(d.M,c,d.hint)}else fb(d||[],c,e)},fb=function(a,b,c){a=ha(a)||[];var d=b.callback,e=b.config,f=b.timeout,g=b.ontimeout,k=b.onerror,h=void 0;"function"==typeof k&&(h=k);var l=null,m=!1;if(f&&!g||!f&&g)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var k=v(Ga(c),"r",[]).sort(),q=v(Ga(c),"L",[]).sort(),u=[].concat(k),t=function(a,b){if(m)return 0;n.clearTimeout(l);q.push.apply(q,x);var d=((C||{}).config||
{}).update;d?d(e):e&&v(H,"cu",[]).push(e);if(b){L("me0",a,u);try{eb(b,c,h)}finally{L("me1",a,u)}}return 1};0<f&&(l=n.setTimeout(function(){m=!0;g()},f));var x=$a(a,q);if(x.length){var x=$a(a,k),F=v(H,"CP",[]),G=F.length;F[G]=function(a){if(!a)return 0;L("ml1",x,u);var b=function(b){F[G]=null;t(x,a)&&Fa(function(){d&&d();b()})},c=function(){var a=F[G+1];a&&a()};0<G&&F[G-1]?F[G]=function(){b(c)}:b(c)};if(x.length){var ra="loaded_"+H.I++;C[ra]=function(a){F[G](a);C[ra]=null};a=Ta(c,x,"gapi."+ra,k);k.push.apply(k,
x);L("ml0",x,u);b.sync||n.___gapisync?bb(a):ab(a)}else F[G](ea)}else t(x)&&d&&d()};var db=function(a,b){if(H.hee&&0<H.hel)try{return a()}catch(c){b&&b(c),H.hel--,O("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;}};C.load=function(a,b){return db(function(){return O(a,b)})};var P=function(a){var b=window.___jsl=window.___jsl||{};b[a]=b[a]||[];return b[a]},Q=function(a){var b=window.___jsl=window.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg},gb=function(a){return"object"===typeof a&&/\[native code\]/.test(a.push)},R=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!gb(a[c])&&!gb(b[c])?R(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=gb(b[c])?[]:{},R(a[c],b[c])):a[c]=b[c])},hb=function(a){if(a&&!/^\s+$/.test(a)){for(;0==
a.charCodeAt(a.length-1);)a=a.substring(0,a.length-1);var b;try{b=window.JSON.parse(a)}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ("+a+"\n)"))()}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(c){}return"object"===typeof b?b:{}}},ib=function(a){Q(!0);var b=window.___gcfg,c=P("cu");if(b&&b!==window.___gu){var d={};R(d,b);c.push(d);window.___gu=b}var b=P("cu"),e=document.scripts||document.getElementsByTagName("script")||[],d=[],
f=[];f.push.apply(f,P("us"));for(var g=0;g<e.length;++g)for(var k=e[g],h=0;h<f.length;++h)k.src&&0==k.src.indexOf(f[h])&&d.push(k);0==d.length&&0<e.length&&e[e.length-1].src&&d.push(e[e.length-1]);for(e=0;e<d.length;++e)d[e].getAttribute("gapi_processed")||(d[e].setAttribute("gapi_processed",!0),(f=d[e])?(g=f.nodeType,f=3==g||4==g?f.nodeValue:f.textContent||f.innerText||f.innerHTML||""):f=void 0,(f=hb(f))&&b.push(f));a&&(d={},R(d,a),c.push(d));d=P("cd");a=0;for(b=d.length;a<b;++a)R(Q(),d[a]);d=P("ci");
a=0;for(b=d.length;a<b;++a)R(Q(),d[a]);a=0;for(b=c.length;a<b;++a)R(Q(),c[a])},S=function(a){if(!a)return Q();a=a.split("/");for(var b=Q(),c=0,d=a.length;b&&"object"===typeof b&&c<d;++c)b=b[a[c]];return c===a.length&&void 0!==b?b:void 0},jb=function(a,b){var c=a;if("string"===typeof a){for(var d=c={},e=a.split("/"),f=0,g=e.length;f<g-1;++f)var k={},d=d[e[f]]=k;d[e[f]]=b}ib(c)};var kb=function(){var a=window.__GOOGLEAPIS;a&&(a.googleapis&&!a["googleapis.config"]&&(a["googleapis.config"]=a.googleapis),v(H,"ci",[]).push(a),window.__GOOGLEAPIS=void 0)};var lb={apppackagename:1,callback:1,clientid:1,cookiepolicy:1,openidrealm:-1,includegrantedscopes:-1,requestvisibleactions:1,scope:1},mb=!1,nb=w(),ob=function(){if(!mb){for(var a=document.getElementsByTagName("meta"),b=0;b<a.length;++b){var c=a[b].name.toLowerCase();if(0==c.lastIndexOf("google-signin-",0)){var c=c.substring(14),d=a[b].content;lb[c]&&d&&(nb[c]=d)}}if(window.self!==window.top){var a=document.location.toString(),e;for(e in lb)0<lb[e]&&(b=D(a,e,""))&&(nb[e]=b)}mb=!0}e=w();A(nb,e);return e},
pb=function(a){return!!(a.clientid&&a.scope&&a.callback)};var qb=window.console,rb=function(a){qb&&qb.log&&qb.log(a)};var sb=function(){return!!H.oa},tb=function(){};var T=v(H,"rw",w()),ub=function(a){for(var b in T)a(T[b])},vb=function(a,b){var c=T[a];c&&c.state<b&&(c.state=b)};var wb;var xb=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//,yb=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,})\//,zb=function(a){var b=S("googleapis.config/sessionIndex");null==b&&(b=window.__X_GOOG_AUTHUSER);if(null==b){var c=window.google;c&&(b=c.authuser)}null==b&&(a=a||window.location.href,b=D(a,"authuser")||null,null==b&&(b=(b=a.match(xb))?b[1]:null));return null==b?null:String(b)},Ab=function(a){var b=S("googleapis.config/sessionDelegate");
null==b&&(b=(a=(a||window.location.href).match(yb))?a[1]:null);return null==b?null:String(b)};var U=function(){this.g=-1};U.prototype.reset=aa;U.prototype.update=aa;U.prototype.digest=aa;var V=function(){this.g=64;this.b=[];this.B=[];this.V=[];this.v=[];this.v[0]=128;for(var a=1;a<this.g;++a)this.v[a]=0;this.w=this.j=0;this.reset()};(function(){function a(){}a.prototype=U.prototype;V.fa=U.prototype;V.prototype=new a;V.J=function(a,c,d){for(var b=Array(arguments.length-2),f=2;f<arguments.length;f++)b[f-2]=arguments[f];return U.prototype[c].apply(a,b)}})();
V.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.w=this.j=0};
var Bb=function(a,b,c){c||(c=0);var d=a.V;if("string"==typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];for(var g=a.b[2],k=a.b[3],h=a.b[4],l,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),l=1518500249):(f=c^g^k,l=1859775393):60>e?(f=c&g|k&(c|g),l=2400959708):(f=c^g^k,
l=3395469782),f=(b<<5|b>>>27)+f+h+l+d[e]&4294967295,h=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+k&4294967295;a.b[4]=a.b[4]+h&4294967295};
V.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.B,f=this.j;d<b;){if(0==f)for(;d<=c;)Bb(this,a,d),d+=this.g;if("string"==typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Bb(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Bb(this,e);f=0;break}}this.j=f;this.w+=b}};
V.prototype.digest=function(){var a=[],b=8*this.w;56>this.j?this.update(this.v,56-this.j):this.update(this.v,this.g-(this.j-56));for(var c=this.g-1;56<=c;c--)this.B[c]=b&255,b/=256;Bb(this,this.B);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};var Cb=function(){this.F=new V};Cb.prototype.reset=function(){this.F.reset()};var Db=n.crypto,Eb=!1,Fb=0,Gb=0,Hb=1,Ib=0,Jb="",Kb=function(a){a=a||n.event;var b=a.screenX+a.clientX<<16,b=b+(a.screenY+a.clientY),b=(new Date).getTime()%1E6*b;Hb=Hb*b%Ib;0<Fb&&++Gb==Fb&&E("mousemove",Kb,"remove","de")},Lb=function(a){var b=new Cb;a=unescape(encodeURIComponent(a));for(var c=[],d=0,e=a.length;d<e;++d)c.push(a.charCodeAt(d));b.F.update(c);b=b.F.digest();a="";for(c=0;c<b.length;c++)a+="0123456789ABCDEF".charAt(Math.floor(b[c]/16))+"0123456789ABCDEF".charAt(b[c]%16);return a},Eb=!!Db&&
"function"==typeof Db.getRandomValues;Eb||(Ib=1E6*(screen.width*screen.width+screen.height),Jb=Lb(p.cookie+"|"+p.location+"|"+(new Date).getTime()+"|"+Math.random()),Fb=S("random/maxObserveMousemove")||0,0!=Fb&&E("mousemove",Kb,"add","at"));var Mb=function(){var a=Hb,a=a+parseInt(Jb.substr(0,20),16);Jb=Lb(Jb);return a/(Ib+Math.pow(16,20))},Nb=function(){var a=new n.Uint32Array(1);Db.getRandomValues(a);return Number("0."+a[0])};var Ob=function(){var a=H.onl;if(!a){a=w();H.onl=a;var b=w();a.e=function(a){var c=b[a];c&&(delete b[a],c())};a.a=function(a,d){b[a]=d};a.r=function(a){delete b[a]}}return a},Pb=function(a,b){var c=b.onload;return"function"===typeof c?(Ob().a(a,c),c):null},Qb=function(a){B(/^\w+$/.test(a),"Unsupported id - "+a);Ob();return'onload="window.___jsl.onl.e(&#34;'+a+'&#34;)"'},Rb=function(a){Ob().r(a)};var Sb={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},Tb={allowtransparency:!0,onload:!0},Ub=0,Vb=function(a){B(!a||wa.test(a),"Illegal url for new iframe - "+a)},Wb=function(a,b,c,d,e){Vb(c.src);var f,g=Pb(d,c),k=g?Qb(d):"";try{document.all&&(f=a.createElement('<iframe frameborder="'+na(String(c.frameborder))+'" scrolling="'+na(String(c.scrolling))+'" '+k+' name="'+na(String(c.name))+'"/>'))}catch(l){}finally{f||
(f=a.createElement("iframe"),g&&(f.onload=function(){f.onload=null;g.call(this)},Rb(d)))}for(var h in c)a=c[h],"style"===h&&"object"===typeof a?A(a,f.style):Tb[h]||f.setAttribute(h,String(a));(h=e&&e.beforeNode||null)||e&&e.dontclear||Ba(b);b.insertBefore(f,h);f=h?h.previousSibling:b.lastChild;c.allowtransparency&&(f.allowTransparency=!0);return f};var Xb=/^:[\w]+$/,Yb=/:([a-zA-Z_]+):/g,Zb=function(){var a=zb()||"0",b=Ab(),c;c=zb(void 0)||a;var d=Ab(void 0),e="";c&&(e+="u/"+c+"/");d&&(e+="b/"+d+"/");c=e||null;(e=(d=!1===S("isLoggedIn"))?"_/im/":"")&&(c="");var f=S("iframes/:socialhost:"),g=S("iframes/:im_socialhost:");return wb={socialhost:f,ctx_socialhost:d?g:f,session_index:a,session_delegate:b,session_prefix:c,im_prefix:e}},$b=function(a,b){return Zb()[b]||""},ac=function(a){return function(b,c){return a?Zb()[c]||a[c]||"":Zb()[c]||""}};var bc={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},cc=function(a){var b,c,d;b=/[\"\\\x00-\x1f\x7f-\x9f]/g;if(void 0!==a){switch(typeof a){case "string":return b.test(a)?'"'+a.replace(b,function(a){var b=bc[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)})+'"':'"'+a+'"';case "number":return isFinite(a)?String(a):"null";case "boolean":case "null":return String(a);case "object":if(!a)return"null";b=[];if("number"===
typeof a.length&&!a.propertyIsEnumerable("length")){d=a.length;for(c=0;c<d;c+=1)b.push(cc(a[c])||"null");return"["+b.join(",")+"]"}for(c in a)!/___$/.test(c)&&y(a,c)&&"string"===typeof c&&(d=cc(a[c]))&&b.push(cc(c)+":"+d);return"{"+b.join(",")+"}"}return""}},dc=function(a){if(!a)return!1;if(/^[\],:{}\s]*$/.test(a.replace(/\\["\\\/b-u]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}return!1},
ec=!1;try{ec=!!window.JSON&&'["a"]'===window.JSON.stringify(["a"])&&"a"===window.JSON.parse('["a"]')[0]}catch(a){}var fc=function(a){try{return window.JSON.parse(a)}catch(b){return!1}},gc=ec?window.JSON.stringify:cc,hc=ec?fc:dc;var ic=function(a){var b;a.match(/^https?%3A/i)&&(b=decodeURIComponent(a));return va(document,b?b:a)},jc=function(a){a=a||"canonical";for(var b=document.getElementsByTagName("link"),c=0,d=b.length;c<d;c++){var e=b[c],f=e.getAttribute("rel");if(f&&f.toLowerCase()==a&&(e=e.getAttribute("href"))&&(e=ic(e))&&null!=e.match(/^https?:\/\/[\w\-\_\.]+/i))return e}return window.location.href};var kc={se:"0"},lc={post:!0},mc={style:"position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"},nc="onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),oc=v(H,"WI",w()),pc=function(a,b,c){var d,e;d={};var f=e=a;"plus"==a&&b.action&&(e=a+"_"+b.action,f=a+"/"+b.action);(e=S("iframes/"+e+"/url"))||(e=":im_socialhost:/:session_prefix::im_prefix:_/widget/render/"+f+"?usegapi=1");for(var g in kc)d[g]=g+"/"+(b[g]||kc[g])+"/";d=va(p,e.replace(Yb,
ac(d)));g="iframes/"+a+"/params/";f={};A(b,f);(e=S("lang")||S("gwidget/lang"))&&(f.hl=e);lc[a]||(f.origin=window.location.origin||window.location.protocol+"//"+window.location.host);f.exp=S(g+"exp");if(g=S(g+"location"))for(e=0;e<g.length;e++){var k=g[e];f[k]=n.location[k]}switch(a){case "plus":case "follow":g=f.href;e=b.action?void 0:"publisher";g=(g="string"==typeof g?g:void 0)?ic(g):jc(e);f.url=g;delete f.href;break;case "plusone":g=(g=b.href)?ic(g):jc();f.url=g;g=b.db;e=S();null==g&&e&&(g=e.db,
null==g&&(g=e.gwidget&&e.gwidget.db));f.db=g||void 0;g=b.ecp;e=S();null==g&&e&&(g=e.ecp,null==g&&(g=e.gwidget&&e.gwidget.ecp));f.ecp=g||void 0;delete f.href;break;case "signin":f.url=jc()}H.ILI&&(f.iloader="1");delete f["data-onload"];delete f.rd;for(var h in kc)f[h]&&delete f[h];f.gsrc=S("iframes/:source:");h=S("inline/css");"undefined"!==typeof h&&0<c&&h>=c&&(f.ic="1");h=/^#|^fr-/;c={};for(var l in f)y(f,l)&&h.test(l)&&(c[l.replace(h,"")]=f[l],delete f[l]);l="q"==S("iframes/"+a+"/params/si")?f:
c;h=ob();for(var m in h)!y(h,m)||y(f,m)||y(c,m)||(l[m]=h[m]);m=[].concat(nc);(l=S("iframes/"+a+"/methods"))&&"object"===typeof l&&fa.test(l.push)&&(m=m.concat(l));for(var q in b)y(b,q)&&/^on/.test(q)&&("plus"!=a||"onconnect"!=q)&&(m.push(q),delete f[q]);delete f.callback;c._methods=m.join(",");return ua(d,f,c)},qc=["style","data-gapiscan"],sc=function(a){for(var b=w(),c=0!=a.nodeName.toLowerCase().indexOf("g:"),d=0,e=a.attributes.length;d<e;d++){var f=a.attributes[d],g=f.name,k=f.value;0<=ga.call(qc,
g)||c&&0!=g.indexOf("data-")||"null"===k||"specified"in f&&!f.specified||(c&&(g=g.substr(5)),b[g.toLowerCase()]=k)}a=a.style;(c=rc(a&&a.height))&&(b.height=String(c));(a=rc(a&&a.width))&&(b.width=String(a));return b},rc=function(a){var b=void 0;"number"===typeof a?b=a:"string"===typeof a&&(b=parseInt(a,10));return b},uc=function(){var a=H.drw;ub(function(b){if(a!==b.id&&4!=b.state&&"share"!=b.type){var c=b.id,d=b.type,e=b.url;b=b.userParams;var f=p.getElementById(c);if(f){var g=pc(d,b,0);g?(f=f.parentNode,
e.replace(/\#.*/,"").replace(/(\?|&)ic=1/,"")!==g.replace(/\#.*/,"").replace(/(\?|&)ic=1/,"")&&(b.dontclear=!0,b.rd=!0,b.ri=!0,b.type=d,tc(f,b),(d=T[f.lastChild.id])&&(d.oid=c),vb(c,4))):delete T[c]}else delete T[c]}})};var W,X,Y,vc,wc,xc=/(?:^|\s)g-((\S)*)(?:$|\s)/,yc={plusone:!0,autocomplete:!0,profile:!0,signin:!0,signin2:!0};W=v(H,"SW",w());X=v(H,"SA",w());Y=v(H,"SM",w());vc=v(H,"FW",[]);wc=null;
var Ac=function(a,b){zc(void 0,!1,a,b)},zc=function(a,b,c,d){K("ps0",!0);c=("string"===typeof c?document.getElementById(c):c)||p;var e;e=p.documentMode;if(c.querySelectorAll&&(!e||8<e)){e=d?[d]:z(W).concat(z(X)).concat(z(Y));for(var f=[],g=0;g<e.length;g++){var k=e[g];f.push(".g-"+k,"g\\:"+k)}e=c.querySelectorAll(f.join(","))}else e=c.getElementsByTagName("*");c=w();for(f=0;f<e.length;f++){g=e[f];var h=g,k=d,l=h.nodeName.toLowerCase(),m=void 0;h.getAttribute("data-gapiscan")?k=null:(0==l.indexOf("g:")?
m=l.substr(2):(h=(h=String(h.className||h.getAttribute("class")))&&xc.exec(h))&&(m=h[1]),k=!m||!(W[m]||X[m]||Y[m])||k&&m!==k?null:m);k&&(yc[k]||0==g.nodeName.toLowerCase().indexOf("g:")||0!=z(sc(g)).length)&&(g.setAttribute("data-gapiscan",!0),v(c,k,[]).push(g))}if(b)for(var q in c)for(b=c[q],d=0;d<b.length;d++)b[d].setAttribute("data-onload",!0);for(var u in c)vc.push(u);K("ps1",!0);if((q=vc.join(":"))||a)try{C.load(q,a)}catch(x){rb(x);return}if(Bc(wc||{}))for(var t in c){a=c[t];u=0;for(b=a.length;u<
b;u++)a[u].removeAttribute("data-gapiscan");Cc(t)}else{d=[];for(t in c)for(a=c[t],u=0,b=a.length;u<b;u++)e=a[u],Dc(t,e,sc(e),d,b);Ec(q,d)}},Fc=function(a){var b=v(C,a,{});b.go||(b.go=function(b){return Ac(b,a)},b.render=function(b,d){var c=d||{};c.type=a;return tc(b,c)})},Gc=function(a){W[a]=!0},Hc=function(a){X[a]=!0},Ic=function(a){Y[a]=!0};var Cc=function(a,b){var c=Ea(a);b&&c?(c(b),(c=b.iframeNode)&&c.setAttribute("data-gapiattached",!0)):C.load(a,function(){var c=Ea(a),e=b&&b.iframeNode,f=b&&b.userParams;e&&c?(c(b),e.setAttribute("data-gapiattached",!0)):(c=C[a].go,"signin2"==a?c(e,f):c(e&&e.parentNode,f))})},Bc=function(){return!1},Ec=function(){},Dc=function(a,b,c,d,e,f,g){switch(Jc(b,a,f)){case 0:a=Y[a]?a+"_annotation":a;d={};d.iframeNode=b;d.userParams=c;Cc(a,d);break;case 1:var k;if(b.parentNode){for(var h in c){if(f=y(c,h))f=
c[h],f=!!f&&"object"===typeof f&&(!f.toString||f.toString===Object.prototype.toString||f.toString===Array.prototype.toString);if(f)try{c[h]=gc(c[h])}catch(F){delete c[h]}}f=!0;c.dontclear&&(f=!1);delete c.dontclear;tb();h=pc(a,c,e);e=g||{};e.allowPost=1;e.attributes=mc;e.dontclear=!f;g={};g.userParams=c;g.url=h;g.type=a;var l;c.rd?l=b:(l=document.createElement("div"),b.setAttribute("data-gapistub",!0),l.style.cssText="position:absolute;width:450px;left:-10000px;",b.parentNode.insertBefore(l,b));g.siteElement=
l;l.id||(b=l,v(oc,a,0),f="___"+a+"_"+oc[a]++,b.id=f);b=w();b[">type"]=a;A(c,b);f=h;c=l;h=e||{};b=h.attributes||{};B(!h.allowPost||!b.onload,"onload is not supported by post iframe");e=b=f;Xb.test(b)&&(e=S("iframes/"+e.substring(1)+"/url"),B(!!e,"Unknown iframe url config for - "+b));f=va(p,e.replace(Yb,$b));b=c.ownerDocument||p;l=0;do e=h.id||["I",Ub++,"_",(new Date).getTime()].join("");while(b.getElementById(e)&&5>++l);B(5>l,"Error creating iframe id");l={};var m={};b.documentMode&&9>b.documentMode&&
(l.hostiemode=b.documentMode);A(h.queryParams||{},l);A(h.fragmentParams||{},m);var q=h.connectWithQueryParams?l:m,u=h.pfname,t=w();t.id=e;t.parent=b.location.protocol+"//"+b.location.host;var x=D(b.location.href,"parent"),u=u||"";!u&&x&&(x=D(b.location.href,"id",""),u=D(b.location.href,"pfname",""),u=x?u+"/"+x:"");t.pfname=u;A(t,q);(t=D(f,"rpctoken")||l.rpctoken||m.rpctoken)||(t=q.rpctoken=h.rpctoken||String(Math.round(1E8*(Eb?Nb():Mb()))));h.rpctoken=t;t=b.location.href;q=w();(x=D(t,"_bsh",H.bsh))&&
(q._bsh=x);(t=I(t))&&(q.jsh=t);h.hintInFragment?A(q,m):A(q,l);f=ua(f,l,m,h.paramsSerializer);m=w();A(Sb,m);A(h.attributes,m);m.name=m.id=e;m.src=f;h.eurl=f;if((h||{}).allowPost&&2E3<f.length){l=qa(f);m.src="";m["data-postorigin"]=f;f=Wb(b,c,m,e);-1!=navigator.userAgent.indexOf("WebKit")&&(k=f.contentWindow.document,k.open(),m=k.createElement("div"),q={},t=e+"_inner",q.name=t,q.src="",q.style="display:none",Wb(b,m,q,t,h));m=(h=l.query[0])?h.split("&"):[];h=[];for(q=0;q<m.length;q++)t=m[q].split("=",
2),h.push([decodeURIComponent(t[0]),decodeURIComponent(t[1])]);l.query=[];m=sa(l);B(wa.test(m),"Invalid URL: "+m);l=b.createElement("form");l.action=m;l.method="POST";l.target=e;l.style.display="none";for(e=0;e<h.length;e++)m=b.createElement("input"),m.type="hidden",m.name=h[e][0],m.value=h[e][1],l.appendChild(m);c.appendChild(l);l.submit();l.parentNode.removeChild(l);k&&k.close();k=f}else k=Wb(b,c,m,e,h);g.iframeNode=k;g.id=k.getAttribute("id");k=g.id;c=w();c.id=k;c.userParams=g.userParams;c.url=
g.url;c.type=g.type;c.state=1;T[k]=c;k=g}else k=null;k&&((g=k.id)&&d.push(g),Cc(a,k))}},Jc=function(a,b,c){if(a&&1===a.nodeType&&b){if(c)return 1;if(Y[b]){if(Ca[a.nodeName.toLowerCase()])return(a=a.innerHTML)&&a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")?0:1}else{if(X[b])return 0;if(W[b])return 1}}return null},tc=function(a,b){var c=b.type;delete b.type;var d=("string"===typeof a?document.getElementById(a):a)||void 0;if(d){var e={},f;for(f in b)y(b,f)&&(e[f.toLowerCase()]=b[f]);e.rd=1;(f=!!e.ri)&&delete e.ri;
var g=[];Dc(c,d,e,g,0,f,void 0);Ec(c,g)}else rb("string"==="gapi."+c+".render: missing element "+typeof a?a:"")};v(C,"platform",{}).go=Ac;var Bc=function(a){for(var b=["_c","jsl","h"],c=0;c<b.length&&a;c++)a=a[b[c]];b=I(r.href);return!a||0!=a.indexOf("n;")&&0!=b.indexOf("n;")&&a!==b},Ec=function(a,b){Kc(a,b)},ya=function(a){zc(a,!0)},Lc=function(a,b){for(var c=b||[],d=0;d<c.length;++d)a(c[d]);for(d=0;d<c.length;d++)Fc(c[d])};
M.push(["platform",function(a,b,c){wc=c;b&&vc.push(b);Lc(Gc,a);Lc(Hc,c._c.annotation);Lc(Ic,c._c.bimodal);kb();ib();if("explicit"!=S("parsetags")){Da(a);pb(ob())&&!S("disableRealtimeCallback")&&tb();var d;c&&(a=c.callback)&&(d=oa(a),delete c.callback);Aa(function(){ya(d)})}}]);C._pl=!0;var Mc=function(a){a=(a=T[a])?a.oid:void 0;if(a){var b=p.getElementById(a);b&&b.parentNode.removeChild(b);delete T[a];Mc(a)}};var Nc=/^\{h\:'/,Oc=/^!_/,Pc="",Kc=function(a,b){function c(){E("message",d,"remove","de")}function d(d){var f=d.data,k=d.origin;if(Qc(f,b)){var h=e;e=!1;h&&K("rqe");Rc(a,function(){h&&K("rqd");c();for(var a=v(H,"RPMQ",[]),b=0;b<a.length;b++)a[b]({data:f,origin:k})})}}if(0!==b.length){Pc=D(r.href,"pfname","");var e=!0;E("message",d,"add","at");O(a,c)}},Qc=function(a,b){a=String(a);if(Nc.test(a))return!0;var c=!1;Oc.test(a)&&(c=!0,a=a.substr(2));if(!/^\{/.test(a))return!1;var d=hc(a);if(!d)return!1;
var e=d.f;if(d.s&&e&&-1!=ga.call(b,e)){if("_renderstart"===d.s||d.s===Pc+"/"+e+"::_renderstart"){var f=d.a&&d.a[c?0:1],c=p.getElementById(e);vb(e,2);if(f&&c&&f.width&&f.height){a:{d=c.parentNode;e=f||{};if(sb()){var g=c.id;if(g){f=(f=T[g])?f.state:void 0;if(1===f||4===f)break a;Mc(g)}}(f=d.nextSibling)&&f.getAttribute&&f.getAttribute("data-gapistub")&&(d.parentNode.removeChild(f),d.style.cssText="");var f=e.width,k=e.height,h=d.style;h.textIndent="0";h.margin="0";h.padding="0";h.background="transparent";
h.borderStyle="none";h.cssFloat="none";h.styleFloat="none";h.lineHeight="normal";h.fontSize="1px";h.verticalAlign="baseline";d=d.style;d.display="inline-block";h=c.style;h.position="static";h.left="0";h.top="0";h.visibility="visible";f&&(d.width=h.width=f+"px");k&&(d.height=h.height=k+"px");e.verticalAlign&&(d.verticalAlign=e.verticalAlign);g&&vb(g,3)}c["data-csi-wdt"]=(new Date).getTime()}}return!0}return!1},Rc=function(a,b){O(a,b)};var Sc=function(a,b){this.O=a;var c=b||{};this.Y=Number(c.maxAge)||0;this.L=c.domain;this.P=c.path;this.$=!!c.secure},Tc=/^[-+/_=.:|%&a-zA-Z0-9@]*$/,Uc=/^[A-Z_][A-Z0-9_]{0,63}$/;
Sc.prototype.write=function(a,b){if(!Uc.test(this.O))throw"Invalid cookie name";if(!Tc.test(a))throw"Invalid cookie value";var c=this.O+"="+a;this.L&&(c+=";domain="+this.L);this.P&&(c+=";path="+this.P);var d="number"===typeof b?b:this.Y;if(0<=d){var e=new Date;e.setSeconds(e.getSeconds()+d);c+=";expires="+e.toUTCString()}this.$&&(c+=";secure");document.cookie=c;return!0};Sc.iterate=function(a){for(var b=document.cookie.split(/;\s*/),c=0;c<b.length;++c){var d=b[c].split("="),e=d.shift();a(e,d.join("="))}};var Vc=function(a){this.X=a},Wc={};Vc.prototype.write=function(a){Wc[this.X]=a;return!0};Vc.iterate=function(a){for(var b in Wc)Wc.hasOwnProperty(b)&&a(b,Wc[b])};var Xc="https:"===window.location.protocol,Yc=Xc||"http:"===window.location.protocol?Sc:Vc,Zc=function(a){var b=a.substr(1),c="",d=window.location.hostname;if(""!==b){c=parseInt(b,10);if(isNaN(c))return null;b=d.split(".");if(b.length<c-1)return null;b.length==c-1&&(d="."+d)}else d="";return{c:"S"==a.charAt(0),domain:d,i:c}},$c=function(){var a,b=null;Yc.iterate(function(c,d){if(0===c.indexOf("G_AUTHUSER_")){var e=Zc(c.substring(11));if(!a||e.c&&!a.c||e.c==a.c&&e.i>a.i)a=e,b=d}});return{W:a,A:b}};var ad=function(a){if(0!==a.indexOf("GCSC"))return null;var b={N:!1};a=a.substr(4);if(!a)return b;var c=a.charAt(0);a=a.substr(1);var d=a.lastIndexOf("_");if(-1==d)return b;var e=Zc(a.substr(d+1));if(null==e)return b;a=a.substring(0,d);if("_"!==a.charAt(0))return b;d="E"===c&&e.c;return!d&&("U"!==c||e.c)||d&&!Xc?b:{N:!0,c:d,ca:a.substr(1),domain:e.domain,i:e.i}},bd=function(a){if(!a)return[];a=a.split("=");return a[1]?a[1].split("|"):[]},cd=function(a){a=a.split(":");return{C:a[0].split("=")[1],ba:bd(a[1]),
ea:bd(a[2]),da:bd(a[3])}},dd=function(){var a=$c(),b=a.W,a=a.A;if(null!==a){var c;Yc.iterate(function(a,d){var e=ad(a);e&&e.N&&e.c==b.c&&e.i==b.i&&(c=d)});if(c){var d=cd(c),e=d&&d.ba[Number(a)],d=d&&d.C;if(e)return{A:a,aa:e,C:d}}}return null};var Z=function(a){this.K=a};Z.prototype.l=0;Z.prototype.G=2;Z.prototype.K=null;Z.prototype.D=!1;Z.prototype.T=function(){this.D||(this.l=0,this.D=!0,this.R())};Z.prototype.R=function(){this.D&&(this.K()?this.l=this.G:this.l=Math.min(2*(this.l||this.G),120),window.setTimeout(da(this.R,this),1E3*this.l))};for(var ed=0;64>ed;++ed);var fd=null,sb=function(){return H.oa=!0},tb=function(){H.oa=!0;var a=dd();(a=a&&a.A)&&jb("googleapis.config/sessionIndex",a);fd||(fd=v(H,"ss",new Z(gd)));a=fd;a.T&&a.T()},gd=function(){var a=dd(),b=a&&a.aa||null,c=a&&a.C;O("auth",{callback:function(){var a=n.gapi.auth,e={client_id:c,session_state:b};a.checkSessionState(e,function(b){var c=e.session_state,d=S("isLoggedIn");b=S("debug/forceIm")?!1:c&&b||!c&&!b;if(d=d!=b)jb("isLoggedIn",b),tb(),uc(),b||((b=a.signOut)?b():(b=a.setToken)&&b(null));b=
ob();var f=S("savedUserState"),c=a._guss(b.cookiepolicy),f=f!=c&&"undefined"!=typeof f;jb("savedUserState",c);(d||f)&&pb(b)&&!S("disableRealtimeCallback")&&a._pimf(b,!0)})}});return!0};K("bs0",!0,window.gapi._bs);K("bs1",!0);delete window.gapi._bs;})();
gapi.load("",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"deviceType":"desktop","oauth-flow":{"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay","disableOpt":true,"idpIframeUrl":"https://accounts.google.com/o/oauth2/iframe","usegapi":false},"debug":{"reportExceptionRate":0.05,"forceIm":false,"rethrowException":false,"host":"https://apis.google.com"},"lexps":[81,97,99,122,123,30,79,127],"enableMultilogin":true,"googleapis.config":{"auth":{"useFirstPartyAuthV2":true}},"isPlusUser":true,"inline":{"css":1},"disableRealtimeCallback":false,"drive_share":{"skipInitCommand":true},"csi":{"rate":0.01},"report":{"apiRate":{"gapi\\.signin\\..*":0.05,"gapi\\.signin2\\..*":0.05},"apis":["iframes\\..*","gadgets\\..*","gapi\\.appcirclepicker\\..*","gapi\\.auth\\..*","gapi\\.client\\..*"],"rate":0.001,"host":"https://apis.google.com"},"client":{"headers":{"request":["Accept","Accept-Language","Authorization","Cache-Control","Content-Disposition","Content-Encoding","Content-Language","Content-Length","Content-MD5","Content-Range","Content-Type","Date","GData-Version","Host","If-Match","If-Modified-Since","If-None-Match","If-Unmodified-Since","Origin","OriginToken","Pragma","Range","Slug","Transfer-Encoding","Want-Digest","X-ClientDetails","X-GData-Client","X-GData-Key","X-Goog-AuthUser","X-Goog-PageId","X-Goog-Encode-Response-If-Executable","X-Goog-Correlation-Id","X-Goog-Request-Info","X-Goog-Experiments","x-goog-iam-authority-selector","x-goog-iam-authorization-token","X-Goog-Spatula","X-Goog-Upload-Command","X-Goog-Upload-Content-Disposition","X-Goog-Upload-Content-Length","X-Goog-Upload-Content-Type","X-Goog-Upload-File-Name","X-Goog-Upload-Offset","X-Goog-Upload-Protocol","X-Goog-Visitor-Id","X-HTTP-Method-Override","X-JavaScript-User-Agent","X-Pan-Versionid","X-Origin","X-Referer","X-Upload-Content-Length","X-Upload-Content-Type","X-Use-HTTP-Status-Code-Override","X-Ios-Bundle-Identifier","X-Android-Package","X-YouTube-VVT","X-YouTube-Page-CL","X-YouTube-Page-Timestamp"],"response":["Digest","Cache-Control","Content-Disposition","Content-Encoding","Content-Language","Content-Length","Content-MD5","Content-Range","Content-Type","Date","ETag","Expires","Last-Modified","Location","Pragma","Range","Server","Transfer-Encoding","WWW-Authenticate","Vary","Unzipped-Content-MD5","X-Goog-Generation","X-Goog-Metageneration","X-Goog-Safety-Content-Type","X-Goog-Safety-Encoding","X-Google-Trace","X-Goog-Upload-Chunk-Granularity","X-Goog-Upload-Control-URL","X-Goog-Upload-Size-Received","X-Goog-Upload-Status","X-Goog-Upload-URL","X-Goog-Diff-Download-Range","X-Goog-Hash","X-Goog-Updated-Authorization","X-Server-Object-Version","X-Guploader-Customer","X-Guploader-Upload-Result","X-Guploader-Uploadid","X-Google-Gfe-Backend-Request-Cost"]},"rms":"migrated","cors":false},"isLoggedIn":true,"signInDeprecation":{"rate":0.0},"include_granted_scopes":true,"llang":"pt","iframes":{"youtube":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1","methods":["scroll","openwindow"]},"ytsubscribe":{"url":"https://www.youtube.com/subscribe_embed?usegapi\u003d1"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1"},"rbr_s":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"},"udc_webconsentflow":{"params":{"url":""},"url":"https://www.google.com/settings/webconsent?usegapi\u003d1"},":source:":"3p","playemm":{"url":"https://play.google.com/work?usegapi\u003d1\u0026usegapi\u003d1"},"blogger":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1","methods":["scroll","openwindow"]},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1"},"partnersbadge":{"url":"https://www.gstatic.com/partners/badge/templates/badge.html?usegapi\u003d1"},":socialhost:":"https://apis.google.com","shortlists":{"url":""},"hangout":{"url":"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"},"plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1"},"post":{"params":{"url":""},"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1"},":gplus_url:":"https://plus.google.com","signin":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1","methods":["onauth"]},"rbr_i":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"},"donation":{"url":"https://onetoday.google.com/home/donationWidget?usegapi\u003d1"},"share":{"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1"},"plusone":{"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1"},"comments":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1","methods":["scroll","openwindow"]},":im_socialhost:":"https://plus.googleapis.com","backdrop":{"url":"https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi\u003d1"},"visibility":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete"},"additnow":{"url":"https://apis.google.com/additnow/additnow.html?usegapi\u003d1","methods":["launchurl"]},":signuphost:":"https://plus.google.com","appcirclepicker":{"url":":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},"follow":{"url":":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1"},"community":{"url":":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1"},"sharetoclassroom":{"url":"https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi\u003d1"},"ytshare":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1"},"plus":{"url":":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1"},"family_creation":{"params":{"url":""},"url":"https://families.google.com/webcreation?usegapi\u003d1\u0026usegapi\u003d1"},"commentcount":{"url":":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1"},"configurator":{"url":":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1"},"zoomableimage":{"url":"https://ssl.gstatic.com/microscope/embed/"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet"},"person":{"url":":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1"},"savetodrive":{"url":"https://drive.google.com/savetodrivebutton?usegapi\u003d1","methods":["save"]},"page":{"url":":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card"}}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.pt_BR.ab6WFKuMf04.O/m\u003d__features__/am\u003dAQ/rt\u003dj/d\u003d1/rs\u003dAGLTcCNiyWj6hAl_v5sOcbCHP_YimiiBfQ","u":"https://apis.google.com/js/platform.js","hee":true,"fp":"8e93d657eacdccd49a48df518caca05fc0f47051","dpo":false},"platform":["additnow","backdrop","blogger","comments","commentcount","community","family_creation","follow","hangout","page","partnersbadge","person","playemm","playreview","plus","plusone","post","savetodrive","savetowallet","shortlists","signin2","udc_webconsentflow","visibility","youtube","ytsubscribe","zoomableimage","sharetoclassroom","donation"],"fp":"8e93d657eacdccd49a48df518caca05fc0f47051","annotation":["interactivepost","recobar","signin2","autocomplete","profile"],"bimodal":["signin","share"]}});