"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[5945],{14375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=n(74848),a=n(28453),s=n(11470),i=n(19365);n(97577);const l={title:"2024-06-13-beta.1",slug:"2024-06-13-beta.0"},o=void 0,d={permalink:"/release/2024-06-13-beta.0",source:"@site/release-blog/2024-beta/2024-06-13-beta.0.mdx",title:"2024-06-13-beta.1",description:"24 June 2024",date:"2024-06-13T00:00:00.000Z",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{title:"2024-06-13-beta.1",slug:"2024-06-13-beta.0"},unlisted:!1,prevItem:{title:"2024-07-22.0",permalink:"/release/latest"},nextItem:{title:"2024-05-16-beta.0",permalink:"/release/2024-05-16-beta.0"}},c={authorsImageUrls:[]},u=[{value:"New data: GERS changelog",id:"new-data-gers-changelog",level:3},{value:"Breaking changes",id:"breaking-changes",level:3},{value:"Deprecations",id:"deprecations",level:3},{value:"Schema changelog",id:"schema-changelog",level:3},{value:"Theme-specific updates",id:"theme-specific-updates",level:3},{value:"Attribution",id:"attribution",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"24 June 2024"})}),(0,r.jsx)(t.p,{children:"Today Overture released a patch to fix data issues in the June release. This hotfix addressed the following regressions:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["in the transportation theme, a bug in one of our automated processes inadvertently caused the conversion of unicode characters to ASCII. This affected roughly 10% of ",(0,r.jsx)(t.code,{children:"segment"})," features that contained characters outside of the ASCII range, primarily names but possibly things like speed limit/weight restrictions if those properties contained values with characters outside that range."]}),"\n",(0,r.jsxs)(t.li,{children:["in the buildings theme, the ",(0,r.jsx)(t.code,{children:"roof_height"})," property was not fully populated; the hotfix adds 143k ",(0,r.jsx)(t.code,{children:"roof_height"})," values to the release."]}),"\n"]}),(0,r.jsx)(t.p,{children:"The new release paths are:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Azure path: wasbs://release@overturemapswestus2.blob.core.windows.net/2024-06-13-beta.1\n\nAWS path: s3://overturemaps-us-west-2/release/2024-06-13-beta.1\n"})})]}),"\n",(0,r.jsxs)(t.p,{children:["Overture's ",(0,r.jsx)(t.code,{children:"2024-06-13-beta.0"})," release is available in GeoParquet and stored on AWS and Azure. You can access the datasets by following the process outlined ",(0,r.jsx)(t.a,{href:"https://docs.overturemaps.org/getting-data/",children:"here"}),". We encourage users to report bugs and provide feedback on the data, schema, and GERS via any publicly-available Overture Maps repository on GitHub:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/OvertureMaps/schema",children:"Schema"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/OvertureMaps/data",children:"Data"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/OvertureMaps/docs",children:"Docs"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/OvertureMaps/overturemaps-py",children:"Python command-line tool"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/OvertureMaps/io-site",children:"Explore site"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Depending on feedback, we anticipate moving to a general availability (GA) release soon."}),"\n",(0,r.jsx)(t.h3,{id:"new-data-gers-changelog",children:"New data: GERS changelog"}),"\n",(0,r.jsxs)(t.p,{children:["You'll find in this release a new GERS changelog that captures feature changes from the previous release to the current release. The changelog is available as Parquet files \u2014 partitioned by theme, type, and ",(0,r.jsx)(t.code,{children:"change_type"})," \u2014 at the following locations:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"wasbs://changelog@overturemapswestus2.blob.core.windows.net/2024-06-13-beta.0\n\ns3://overturemaps-us-west-2/changelog/2024-06-13-beta.0\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Valid values for the ",(0,r.jsx)(t.code,{children:"change_type"})," include:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"added: Overture ID is new and was not in the previous release"}),"\n",(0,r.jsx)(t.li,{children:"removed: Overture ID is not in the current release and was in the previous release"}),"\n",(0,r.jsx)(t.li,{children:"data_changed: Overture ID is in the current release and was in the previous release and the feature's attributes or geometry have changed"}),"\n",(0,r.jsx)(t.li,{children:"unchanged: Overture ID is in the current release and was in the previous release, and the feature's attributes and geometry have not changed"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,r.jsx)(t.p,{children:'In response to feedback from developers and data analysts in the Overture ecosystem, we simplified ("flattened") the structure of our road data to make it easier to query road attributes. To make this transition easier for users, we included the now deprecated road JSON column in this release. We will remove the road JSON column in the next release.'}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Breaking change in structure of road data"}),(0,r.jsx)("div",{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"old JSON path"}),(0,r.jsx)(t.th,{children:"new Parquet column"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"road.restrictions.speed_limits"}),(0,r.jsx)(t.td,{children:"speed_limits"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"road.restrictions.access"}),(0,r.jsx)(t.td,{children:"access_restrictions"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"road.restrictions.prohibited_transitions"}),(0,r.jsx)(t.td,{children:"prohibited_transitions"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"road.surface"}),(0,r.jsx)(t.td,{children:"road_surface"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"road.flags"}),(0,r.jsx)(t.td,{children:"road_flags"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"road.width"}),(0,r.jsx)(t.td,{children:"width_rules"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"road.lanes"}),(0,r.jsx)(t.td,{children:"lanes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"road.level"}),(0,r.jsx)(t.td,{children:"level_rules"})]})]})]})})]}),"\n",(0,r.jsx)(t.p,{children:"Also in this release, we simplified the non-geometry vehicle scoping block."}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Breaking change in structure of vehicle scoping block"}),(0,r.jsx)("div",{children:(0,r.jsxs)(s.default,{children:[(0,r.jsx)(i.default,{value:"old speed_limits structure",label:"old speed_limits structure",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"speed_limits:\n  when:\n    ...\n    vehicle:\n      axle_count:\n        is_more_than:\n          value:\n          unit:\n        is_less_than:\n          ...\n        ...\n        ...\n      height:\n        ...\n      length:\n        ...\n      weight:\n        ...\n      width:\n        ...\n"})})}),(0,r.jsx)(i.default,{value:"new speed_limits structure",label:"new speed_limits structure",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"speed_limits:\n  when:\n    ...\n    vehicle:\n      - dimension: <axle_count, height, length, weight, width>\n        comparison: <greater_than, greater_than_equal, equal, less_than, less_than_equal>\n        value: str\n        unit: str\n"})})})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"deprecations",children:"Deprecations"}),"\n",(0,r.jsx)(t.p,{children:"In the transportation theme, we deprecated the road JSON column and will remove it in the next release. We replaced the road JSON column with structured Parquet columns for road attributes."}),"\n",(0,r.jsx)(t.p,{children:"We deprecated the admins theme and replaced it with the divisions theme. This will be the last supported release for the admins schema and data. In the next release, admins will be available in an archive but not supported."}),"\n",(0,r.jsx)(t.h3,{id:"schema-changelog",children:"Schema changelog"}),"\n",(0,r.jsxs)(t.p,{children:["See our schema ",(0,r.jsx)(t.a,{href:"https://github.com/OvertureMaps/schema/releases",children:"changelog"})," here."]}),"\n",(0,r.jsx)(t.h3,{id:"theme-specific-updates",children:"Theme-specific updates"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Divisions/Admins"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"added support for MultiLineString geometries to improve the stability of Overture IDs for boundary features"}),"\n",(0,r.jsx)(t.li,{children:"extended the schema to support multiple capitals of a division"}),"\n",(0,r.jsx)(t.li,{children:"added the option to include or exclude boundaries based on perspectives"}),"\n",(0,r.jsx)(t.li,{children:"updated OpenStreetMap data to 2024.06.05"}),"\n",(0,r.jsx)(t.li,{children:"changed modeling of municipalities/cities in Brazil from counties to localities, which we believe better reflects ground truth"}),"\n",(0,r.jsx)(t.li,{children:"made improvements to the names data and fixed several bugs"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Base"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["added the ",(0,r.jsx)(t.code,{children:"surface"})," attribute to infrastructure and land feature types"]}),"\n",(0,r.jsx)(t.li,{children:"made incremental updates from OSM, based on Daylight v1.48"}),"\n",(0,r.jsxs)(t.li,{children:["added to the land_cover feature type a new cartographic property ",(0,r.jsx)(t.code,{children:"cartography.sort_key"}),": an ascending number signifying the importance of a feature in relation to other features."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Buildings"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"made regular updates to buildings, including adding the latest open data from OSM, Esri Community Maps, and Microsoft"}),"\n",(0,r.jsx)(t.li,{children:"expanded the previous definition of class for buildings to include specific amenity tags that are either already an official Overture place category or can be matched to one"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Places"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"began a comprehensive audit of data quality"}),"\n",(0,r.jsx)(t.li,{children:"worked on calibrating confidence values"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Transportation"})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Breaking change: transformed road properties from JSON to structured Parquet columns"}),"\n",(0,r.jsx)(t.li,{children:"Breaking change: restructured vehicle constraint property"}),"\n"]})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"updated speed limit min/max values"}),"\n",(0,r.jsx)(t.li,{children:"added 19K previously filtered segments which contained self-intersecting lines that are still OGC-valid"}),"\n",(0,r.jsx)(t.li,{children:"fixed OSM source ids for connectors"}),"\n",(0,r.jsxs)(t.li,{children:["known issue: in ",(0,r.jsx)(t.code,{children:"road_flags"})," a value of 0 or 1 on the linear referencing between property can be null in some cases"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"attribution",children:"Attribution"}),"\n",(0,r.jsxs)(t.p,{children:["You'll find information about attribution and licensing ",(0,r.jsx)(t.a,{href:"https://docs.overturemaps.org/attribution/",children:"here"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(96540),a=n(18215),s=n(23104),i=n(56347),l=n(205),o=n(57485),d=n(31682),c=n(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[d,u]=m({queryString:n,groupId:a}),[x,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),f=(()=>{const e=d??x;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(d(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:u,onClick:c,...s,className:(0,a.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,b.jsx)(j,{...t,...e}),(0,b.jsx)(v,{...t,...e})]})}function y(e){const t=(0,g.A)();return(0,b.jsx)(w,{...e,children:u(e.children)},String(t))}},97577:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(21432),a=n(44586),s=n(74848);function i(e){const{siteConfig:{customFields:t}}=(0,a.A)();var n=e.query.replace("__OVERTURE_RELEASE",t.overtureRelease);n=n.replace("__ATHENA_OVERTURE_RELEASE","v"+t.overtureRelease.replaceAll(".","_").replaceAll("-","_"));var i=e.language||"sql";return(0,s.jsx)(r.default,{language:i,title:e.title,children:n})}}}]);