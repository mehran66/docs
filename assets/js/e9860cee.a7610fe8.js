"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[4790],{1242:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=i(5893),t=i(1151);const r={description:"Overture Maps Monthly Release Notes",title:"Latest"},a=void 0,o={id:"release-notes/index",title:"Latest",description:"Overture Maps Monthly Release Notes",source:"@site/docs/release-notes/index.mdx",sourceDirName:"release-notes",slug:"/release-notes/",permalink:"/release-notes/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"Overture Maps Monthly Release Notes",title:"Latest"},sidebar:"docs",previous:{title:"Shape and connectivity",permalink:"/guides/transportation/shape-connectivity"},next:{title:"Archived",permalink:"/release-notes/archived"}},l={},d=[{value:"<strong><code>2024-04-16-beta.0</code> release</strong>",id:"2024-04-16-beta0-release",level:2},{value:"Highlights",id:"highlights",level:3},{value:"Breaking changes",id:"breaking-changes",level:3},{value:"Deprecations",id:"deprecations",level:3},{value:"Changelog",id:"changelog",level:3},{value:"Theme-specific updates",id:"theme-specific-updates",level:3},{value:"Attribution",id:"attribution",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"2024-04-16-beta0-release",children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"2024-04-16-beta.0"})," release"]})}),"\n",(0,s.jsx)(n.h3,{id:"highlights",children:"Highlights"}),"\n",(0,s.jsxs)(n.p,{children:["Here are the highlights for what's new and updated in the Overture Maps ",(0,s.jsx)(n.code,{children:"2024-04-16-beta.0"}),' release. The "beta" designation indicates the data and schema are largely stable.']}),"\n",(0,s.jsxs)(n.p,{children:["Overture Maps ",(0,s.jsx)(n.code,{children:"2024-04-16-beta.0"})," is available in GeoParquet and stored on AWS and Azure. Users can select the data of interest and download it by following the process outlined ",(0,s.jsx)(n.a,{href:"https://docs.overturemaps.org/getting-data/",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["We encourage developers wishing to adopt Overture Maps base layers to begin evaluating and providing ",(0,s.jsx)(n.a,{href:"https://github.com/OvertureMaps/data/discussions",children:"feedback on the data, schema, and GERS IDs"}),". Depending on the feedback from this release and subsequent releases, we anticipate moving to a production release in the next few months."]}),"\n",(0,s.jsx)(n.h3,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,s.jsxs)(n.p,{children:["We renamed the ",(0,s.jsx)(n.code,{children:"bbox"})," column fields to align with the upcoming ",(0,s.jsx)(n.a,{href:"https://geoparquet.org/",children:"GeoParquet"})," 1.1 spec."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"minx \u2192 xmin\nminy \u2192 ymin\nmaxx \u2192 xmax\nmaxy \u2192 ymax\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The fields are all now ",(0,s.jsx)(n.a,{href:"https://parquet.apache.org/docs/file-format/types/",children:"Parquet Float (32-bit)"})," where as they had previously been distributed as Double (64-bit)."]}),"\n",(0,s.jsx)(n.h3,{id:"deprecations",children:"Deprecations"}),"\n",(0,s.jsxs)(n.p,{children:["In this release, we implemented a refactor of the ",(0,s.jsx)(n.code,{children:"admins"})," theme called ",(0,s.jsx)(n.code,{children:"divisions"}),". The ",(0,s.jsx)(n.code,{children:"divisions"})," schema and data are ",(0,s.jsx)(n.a,{href:"/guides/divisions",children:"now available"}),". The two themes will coexist for two subsequent releases (May 2024 and June 2024), at which point ",(0,s.jsx)(n.code,{children:"divisions"})," will fully replace ",(0,s.jsx)(n.code,{children:"admins"}),". More information on why we made this change ",(0,s.jsx)(n.a,{href:"https://github.com/OvertureMaps/schema/discussions/117",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"changelog",children:"Changelog"}),"\n",(0,s.jsxs)(n.p,{children:["See our ",(0,s.jsx)(n.a,{href:"https://github.com/OvertureMaps/schema/releases",children:"changelog"})," here."]}),"\n",(0,s.jsx)(n.h3,{id:"theme-specific-updates",children:"Theme-specific updates"}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"attribution",children:"here"})," for information about licensing and data attribution for each theme."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Administrative Boundaries Admins/Divisions"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Included OSM data up to 4/8."}),"\n",(0,s.jsxs)(n.li,{children:["Implemented the schema for the ",(0,s.jsx)(n.code,{children:"divisions"})," theme, which has a better defined schema supporting perspectives, different types of polygons, and other new features."]}),"\n",(0,s.jsxs)(n.li,{children:["Note: see information above about the deprecation of ",(0,s.jsx)(n.code,{children:"admins"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Base"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Included OSM data up to 3/16 (sourced via Daylight Map Distribution v1.44)."}),"\n",(0,s.jsx)(n.li,{children:"Included 46M water features, 55M land features, 40M land use features, and 48M infrastructure features."}),"\n",(0,s.jsx)(n.li,{children:"Maintained the original OSM tags remain on all features."}),"\n",(0,s.jsxs)(n.li,{children:["Normalized and added ",(0,s.jsx)(n.code,{children:"elevation"}),", ",(0,s.jsx)(n.code,{children:"surface"}),", and ",(0,s.jsx)(n.code,{children:"wikidata"})," as top-level properties."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Buildings"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Included OSM data up to 3/16 (sourced via Daylight Map Distribution v1.44)."}),"\n",(0,s.jsx)(n.li,{children:"Included 2.35B conflated building footprints from OSM, Esri Community Maps, Microsoft ML Building Footprints, and Google Open Buildings."}),"\n",(0,s.jsx)(n.li,{children:"Made incremental improvements to further ensure the data conforms to the buildings layer schema."}),"\n",(0,s.jsx)(n.li,{children:"Added 3d attributes from OSM, such as roof shape."}),"\n",(0,s.jsx)(n.li,{children:"Note: The order of conflation is OpenStreetMap \u2192 Esri Community Maps \u2192 high precision Google Open Buildings \u2192 Microsoft ML Building Footprints \u2192 lower precision Google Open Buildings. For example, if Esri has a building that does not exist in OSM, we take that building, then we \u201cfill-in\u201d the rest of the map with any ML buildings that do not intersect with either OSM or Esri. We use the 90% precision confidence threshold to delineate between high and lower precision for Google Open Buildings, this threshold varies per s2 cell."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Places"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Included ~53 million place records."}),"\n",(0,s.jsx)(n.li,{children:"Included stable GERS IDs propagated from the previous release; roughly 51 million of the IDs are propagated and 2 million are new."}),"\n",(0,s.jsx)(n.li,{children:"Made incremental changes to improve the accuracy and quality of the dataset."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Transportation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Included OSM data up to 4/7."}),"\n",(0,s.jsx)(n.li,{children:"Classified 12.2M segments as path."}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.code,{children:"is_covered"})," flag to denote partially enclosed segments."]}),"\n",(0,s.jsx)(n.li,{children:"Improved scope merging; fewer access restrictions entries are now required."}),"\n",(0,s.jsx)(n.li,{children:"Fixed a projection issue affecting segment length calculation and linear referencing"}),"\n",(0,s.jsxs)(n.li,{children:["Promoted ",(0,s.jsx)(n.code,{children:"class"})," to a top-level property."]}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.code,{children:"level"})," property into ",(0,s.jsx)(n.code,{children:"road"})," property to allow linear referencing. 84% of all segments which had previously dropped ",(0,s.jsx)(n.code,{children:"level"})," will now have that information."]}),"\n",(0,s.jsxs)(n.li,{children:["Renamed ",(0,s.jsx)(n.code,{children:"at"})," to ",(0,s.jsx)(n.code,{children:"between"})," for ranged linear referencing."]}),"\n",(0,s.jsxs)(n.li,{children:["Removed ",(0,s.jsx)(n.code,{children:"mode_not"})," scoping."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"attribution",children:"Attribution"}),"\n",(0,s.jsxs)(n.p,{children:["The data sources for each theme are cited ",(0,s.jsx)(n.a,{href:"/release-notes/attribution",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var s=i(7294);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);