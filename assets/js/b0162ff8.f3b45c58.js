"use strict";(self.webpackChunkoverture_how_to=self.webpackChunkoverture_how_to||[]).push([[385],{9486:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=r(5893),n=r(1151),o=r(4866),s=r(5162);const l={title:"Exploring Overture Data in QGIS"},u=void 0,i={id:"exploring-data/QGIS",title:"Exploring Overture Data in QGIS",description:"First, Install a version of QGIS that can read parquet.",source:"@site/docs/exploring-data/QGIS.mdx",sourceDirName:"exploring-data",slug:"/exploring-data/QGIS",permalink:"/exploring-data/QGIS",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Exploring Overture Data in QGIS"}},c={},d=[{value:"First, Install a version of QGIS that can read <code>parquet</code>.",id:"first-install-a-version-of-qgis-that-can-read-parquet",level:4},{value:"Next, Download some Overture data in parquet format",id:"next-download-some-overture-data-in-parquet-format",level:4}];function p(e){const t={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.h4,{id:"first-install-a-version-of-qgis-that-can-read-parquet",children:["First, Install a version of QGIS that can read ",(0,a.jsx)(t.code,{children:"parquet"}),"."]}),"\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(s.Z,{value:"mac",label:"MacOS",default:!0,children:[(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://anaconda.org/conda-forge/qgis",children:"conda packages"})," of QGIS have support for Parquet."]}),(0,a.jsxs)(t.p,{children:["You can find the latest installers for Mac here: ",(0,a.jsx)(t.a,{href:"https://github.com/opengisch/qgis-conda-builder/releases",children:"github.com/opengisch/qgis-conda-builder/releases"})]})]}),(0,a.jsx)(s.Z,{value:"windows",label:"Windows",default:!0,children:(0,a.jsx)(t.p,{children:"Most distributions of QGIS for Windows have support for parquet."})}),(0,a.jsxs)(s.Z,{value:"linux",label:"Linux",default:!0,children:[(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://anaconda.org/conda-forge/qgis",children:"conda packages"})," of QGIS have support for Parquet."]}),(0,a.jsx)(t.p,{children:"Additionally, there is a Flatpak QGIS package that includes support for Parquet:"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"flatpak install --user https://dl.flathub.org/build-repo/94031/org.qgis.qgis.flatpakref\n"})})]})]}),"\n",(0,a.jsx)(t.h4,{id:"next-download-some-overture-data-in-parquet-format",children:"Next, Download some Overture data in parquet format"}),"\n",(0,a.jsx)(t.p,{children:"Overture data is distributed as a series of hundreds of geoparquet files. These files are partitioned as follows: theme/type/location. For example,"}),"\n",(0,a.jsx)(r,{children:(0,a.jsx)("summary",{children:(0,a.jsxs)(t.p,{children:["If I'm downloading data through DuckDB, why shouldn't I just use the ",(0,a.jsx)(t.code,{children:"spatial"})," extension to convert it to a shapefile, GeoJSON, etc.?"]})})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>s});r(7294);var a=r(6905);const n={tabItem:"tabItem_Ymn6"};var o=r(5893);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,s),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(7294),n=r(6905),o=r(2466),s=r(6550),l=r(469),u=r(1980),i=r(7392),c=r(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[s,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,d]=f({queryString:r,groupId:n}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),v=(()=>{const e=i??m;return h({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(5893);function x(e){let{className:t,block:r,selectedValue:a,selectValue:s,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),n=l[r].value;n!==a&&(i(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...o,className:(0,n.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function I(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function j(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,n.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(I,{...e,...t})]})}function w(e){const t=(0,b.Z)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>s});var a=r(7294);const n={},o=a.createContext(n);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);