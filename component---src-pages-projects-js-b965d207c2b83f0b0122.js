"use strict";(self.webpackChunkkayla_patel=self.webpackChunkkayla_patel||[]).push([[853],{3723:function(e,t,a){a.d(t,{G:function(){return R},L:function(){return h},M:function(){return L},P:function(){return k},_:function(){return o},a:function(){return l},b:function(){return d},c:function(){return u},g:function(){return m},h:function(){return s}});var r=a(7294),n=(a(2369),a(5697)),i=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(){return"undefined"!=typeof GATSBY___IMAGE&&GATSBY___IMAGE}var u=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a,r,n){return void 0===n&&(n={}),c()||(n=l({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},n)),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function m(e,t,a,r,n,i,o,s){var u={};i&&(u.backgroundColor=i,"fixed"===a?(u.width=r,u.height=n,u.backgroundColor=i,u.position="relative"):("constrained"===a||"fullWidth"===a)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),o&&(u.objectFit=o),s&&(u.objectPosition=s);var d=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},u)});return c()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d}var p,g=["children"],f=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){var t=e.children,a=o(e,g);return r.createElement(r.Fragment,null,r.createElement(f,l({},a)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],v=["fallback","sources","shouldLoad"],E=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,s=void 0===i?"":i,c=e.shouldLoad,u=o(e,y);return r.createElement("img",l({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:s}))},b=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,s=void 0===i||i,c=o(e,v),u=c.sizes||(null==t?void 0:t.sizes),d=r.createElement(E,l({},c,t,{sizes:u,shouldLoad:s}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:u})})),d):d};E.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var w=["fallback"],k=function(e){var t=e.fallback,a=o(e,w);return t?r.createElement(b,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};k.displayName="Placeholder",k.propTypes={fallback:n.string,sources:null==(p=b.propTypes)?void 0:p.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var L=function(e){return r.createElement(r.Fragment,null,r.createElement(b,l({},e)),r.createElement("noscript",null,r.createElement(b,l({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=b.propTypes;var C,x,S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},T={image:i().object.isRequired,alt:S},I=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],_=new Set,A=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,u=e.style,d=e.backgroundColor,m=e.className,p=e.class,g=e.onStartLoad,f=e.onLoad,h=e.onError,y=o(e,I),v=i.width,E=i.height,b=i.layout,w=function(e,t,a){var r={},n="gatsby-image-wrapper";return c()||(r.position="relative",r.overflow="hidden"),"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(c()||(r.display="inline-block",r.verticalAlign="top"),n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(v,E,b),k=w.style,L=w.className,S=o(w,N),T=(0,r.useRef)(),A=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(m=p);var R=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,v,E);return(0,r.useEffect)((function(){C||(C=Promise.all([a.e(774),a.e(217)]).then(a.bind(a,9217)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return x=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=T.current.querySelector("[data-gatsby-image-ssr]");return r&&s()?(r.complete?(null==g||g({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),r.addEventListener("load",(function e(){r.removeEventListener("load",e),null==f||f({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(A)):x&&_.has(A)?void 0:(C.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;T.current&&(T.current.innerHTML=r(l({isLoading:!0,isLoaded:_.has(A),image:i},y)),_.has(A)||(e=requestAnimationFrame((function(){T.current&&(t=n(T.current,A,_,u,g,f,h))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){_.has(A)&&x&&(T.current.innerHTML=x(l({isLoading:_.has(A),isLoaded:_.has(A),image:i},y)),null==g||g({wasCached:!0}),null==f||f({wasCached:!0}))}),[i]),(0,r.createElement)(n,l({},S,{style:l({},k,u,{backgroundColor:d}),className:L+(m?" "+m:""),ref:T,dangerouslySetInnerHTML:{__html:R},suppressHydrationWarning:!0}))},R=(0,r.memo)((function(e){return e.image?(c(),(0,r.createElement)(A,e)):null}));R.propTypes=T,R.displayName="GatsbyImage";var O,j=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],q=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),G={src:i().string.isRequired,alt:S,width:q,height:q,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},M=(O=R,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=o(e,j);return n&&console.warn(n),a?r.createElement(O,l({image:a},i)):(console.warn("Image not loaded",t),null)});M.displayName="StaticImage",M.propTypes=G},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},9856:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),n=a(7701),i=a(1082),l=function(){return r.createElement(i.StaticQuery,{query:"777831193",render:function(e){return r.createElement("nav",null,r.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.createElement("h3",{className:"site-title"},r.createElement(i.Link,{to:"/"},"Kayla A. Patel")),r.createElement("ul",{className:"navBar"},r.createElement("li",null,r.createElement(i.Link,{to:"/"},"About"))," ",r.createElement("li",null,r.createElement(i.Link,{to:"/projects"},"Projects"))," ",r.createElement("li",null,r.createElement("a",{href:e.resume.publicURL},"Resume")))))}})},o=a(7143),s=function(){return r.createElement("footer",{className:"footer"},r.createElement("div",{className:"navBar",style:{float:"left"}},r.createElement("li",null,r.createElement("a",{className:"icon",href:"mailto:paylakatel@gmail.com"},r.createElement(o.Mh9,null)))," ",r.createElement("li",null,r.createElement("a",{className:"icon",href:"https://twitter.com/paylakatel"},r.createElement(o.tLe,null))),r.createElement("li",null,r.createElement("a",{className:"icon",href:"https://github.com/paylakatel"},r.createElement(o.Tfb,null)))))},c=function(e){var t=e.children;return r.createElement(i.StaticQuery,{query:"3159585216",render:function(e){return r.createElement(r.Fragment,null,r.createElement(n.ZP,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.createElement("html",{lang:"en"})),r.createElement(l,null),r.createElement("div",{style:{margin:"0 auto",padding:"1em",minHeight:"calc(100vh - 120px)",maxWidth:850}},t),r.createElement(s,null))}})}},7219:function(e,t,a){a.r(t);var r=a(7294),n=a(3723),i=a(1082),l=a(9856);t.default=function(e){return r.createElement(l.Z,null,r.createElement("h1",null,"For work",r.createElement("span",{className:"punctuation"},".")),r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gridGap:"1em"}},e.data.work.edges.map((function(e){var t=e.node,a=(0,n.c)(t.frontmatter.thumbnail.childImageSharp);return r.createElement("div",{key:t.id},r.createElement(i.Link,{to:t.frontmatter.path,className:"projectLink"},r.createElement(n.G,{image:a,style:{border:"1px solid #cccccc",borderRadius:"3px"}}),r.createElement("h2",null,t.frontmatter.title),r.createElement("h3",null,t.frontmatter.myRole)))}))),r.createElement("h1",null,"For fun",r.createElement("span",{className:"punctuation"},".")),r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gridGap:"1em"}},e.data.fun.edges.map((function(e){var t=e.node,a=/^\/(?!\/)/.test(t.frontmatter.path),l=(0,n.c)(t.frontmatter.thumbnail.childImageSharp);return a?r.createElement("div",{key:t.id},r.createElement(i.Link,{to:t.frontmatter.path,className:"projectLink"},r.createElement(n.G,{image:l,style:{border:"1px solid #cccccc",borderRadius:"3px"}}),r.createElement("h2",null,t.frontmatter.title),r.createElement("h3",null,t.frontmatter.myRole))):r.createElement("div",{key:t.id},r.createElement("a",{href:t.frontmatter.path,className:"projectLink"},r.createElement(n.G,{image:l,style:{border:"1px solid #cccccc",borderRadius:"3px"}}),r.createElement("h2",null,t.frontmatter.title),r.createElement("h3",null,t.frontmatter.myRole)))}))))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-b965d207c2b83f0b0122.js.map