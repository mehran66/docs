"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[2245],{66910:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>y,frontMatter:()=>d,metadata:()=>g,toc:()=>p});var t=n(74848),s=n(28453),r=n(97577);const i="SELECT *\nFROM overture.release.__ATHENA_OVERTURE_RELEASE\nLIMIT 10\n",o="CREATE EXTERNAL TABLE `__ATHENA_OVERTURE_RELEASE` (\n  `id` string,\n  `geometry` binary,\n  `bbox` struct<xmin:float,xmax:float,ymin:float,ymax:float>,\n  `admin_level` int,\n  `is_maritime` boolean,\n  `geopol_display` string,\n  `version` int,\n  `update_time` string,\n  `sources` array<struct<property:string,dataset:string,record_id:string,confidence:double>>,\n  `subtype` string,\n  `locality_type` string,\n  `wikidata` string,\n  `context_id` string,\n  `population` int,\n  `iso_country_code_alpha_2` string,\n  `iso_sub_country_code` string,\n  `default_language` string,\n  `driving_side` string,\n  `names` struct<primary:string,common:map<string,string>,rules:array<struct<variant:string,language:string,value:string,at:array<double>,side:string>>>,\n  `locality_id` string,\n  `class` string,\n  `elevation` int,\n  `source_tags` map<string,string>,\n  `surface` string,\n  `is_salt` boolean,\n  `is_intermittent` boolean,\n  `level` int,\n  `has_parts` boolean,\n  `height` double,\n  `num_floors` int,\n  `facade_color` string,\n  `facade_material` string,\n  `roof_material` string,\n  `roof_shape` string,\n  `roof_direction` double,\n  `roof_orientation` string,\n  `roof_color` string,\n  `eave_height` double,\n  `min_height` double,\n  `building_id` string,\n  `categories` struct<main:string,alternate:array<string>>,\n  `confidence` double,\n  `websites` array<string>,\n  `socials` array<string>,\n  `emails` array<string>,\n  `phones` array<string>,\n  `brand` struct<wikidata:string,names:struct<primary:string,common:map<string,string>,rules:array<struct<variant:string,language:string,value:string,at:array<double>,side:string>>>>,\n  `addresses` array<struct<freeform:string,locality:string,postcode:string,region:string,country:string>>,\n  `connector_ids` array<string>,\n  `road` string)\nPARTITIONED BY (\n  `theme` string,\n  `type` string)\nSTORED AS PARQUET\nLOCATION\n  's3://overturemaps-us-west-2/release/__OVERTURE_RELEASE'\n",l="SELECT TOP 10 *\nFROM\n    OPENROWSET(\n        BULK 'https://overturemapswestus2.blob.core.windows.net/release/__OVERTURE_RELEASE/theme=places/type=place/',\n        FORMAT = 'PARQUET'\n    )\nWITH\n    (\n        names VARCHAR(MAX),\n        categories VARCHAR(MAX),\n        websites VARCHAR(MAX),\n        phones VARCHAR(MAX),\n        bbox VARCHAR(200),\n        geometry VARBINARY(MAX)\n    )\n    AS\n        [result]\nWHERE\n        TRY_CONVERT(FLOAT, JSON_VALUE(bbox, '$.xmin')) > -122.4447744\n    AND TRY_CONVERT(FLOAT, JSON_VALUE(bbox, '$.xmax')) < -122.2477071\n    AND TRY_CONVERT(FLOAT, JSON_VALUE(bbox, '$.ymin')) > 47.5621587\n    AND TRY_CONVERT(FLOAT, JSON_VALUE(bbox, '$.ymax')) < 47.7120663\n",c="SELECT id,\n       class,\n       sources[1].dataset AS primary_source,\n       names.primary AS primary_names,\n       ST_GeomFromBinary(geometry) AS geometry\nFROM\n    overture.release.__ATHENA_OVERTURE_RELEASE\nWHERE theme='places'\n    AND type='place'\n    AND bbox.xmin > -122.44\n        AND bbox.xmax < -122.25\n        AND bbox.ymin > 47.56\n        AND bbox.ymax < 47.71\n",d={title:"Cloud Services"},u=void 0,g={id:"getting-data/cloud-services",title:"Cloud Services",description:"You can access and query Overture Maps parquet files directly in the cloud using one of the SQL query options documented below. You'll need an AWS account or a Microsoft Azure account.",source:"@site/docs/getting-data/cloud-services.mdx",sourceDirName:"getting-data",slug:"/getting-data/cloud-services",permalink:"/getting-data/cloud-services",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1717106509e3,frontMatter:{title:"Cloud Services"},sidebar:"docs",previous:{title:"Getting Data",permalink:"/getting-data/"},next:{title:"Extracting Data Locally",permalink:"/getting-data/locally"}},h={},p=[{value:"Amazon Athena (AWS)",id:"amazon-athena-aws",level:2},{value:"1. Add Overture as a data source",id:"1-add-overture-as-a-data-source",level:3},{value:"2. Inspect release tables",id:"2-inspect-release-tables",level:3},{value:"3. Access data from a release table",id:"3-access-data-from-a-release-table",level:3},{value:"Optional",id:"optional",level:3},{value:"Add the table directly using the DDL",id:"add-the-table-directly-using-the-ddl",level:4},{value:"Add a policy in your data catalog settings",id:"add-a-policy-in-your-data-catalog-settings",level:4},{value:"Microsoft Synapse (Azure)",id:"microsoft-synapse-azure",level:2}];function m(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Details:d}=a;return d||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"You can access and query Overture Maps parquet files directly in the cloud using one of the SQL query options documented below. You'll need an AWS account or a Microsoft Azure account."}),"\n",(0,t.jsx)(a.admonition,{type:"tip",children:(0,t.jsxs)(a.p,{children:["Overture's S3 bucket is located in the us-west-2 AWS region, so use ",(0,t.jsx)(a.code,{children:"us-west-2"})," for best performance."]})}),"\n",(0,t.jsx)(a.h2,{id:"amazon-athena-aws",children:"Amazon Athena (AWS)"}),"\n",(0,t.jsx)(a.h3,{id:"1-add-overture-as-a-data-source",children:"1. Add Overture as a data source"}),"\n",(0,t.jsxs)(a.p,{children:["Add Overture as a cross-account data source using ",(0,t.jsx)(a.a,{href:"https://docs.aws.amazon.com/athena/latest/ug/data-sources-glue-cross-account.html",children:"these instructions"}),". The Catalog ID is ",(0,t.jsx)(a.code,{children:"913550007193"}),"."]}),"\n",(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:"AWS Glue Data Catalog"}),(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"AWS Glue Catalog",src:n(67144).A+"",width:"1936",height:"1454"})})})]}),"\n",(0,t.jsxs)(a.p,{children:["Depending on the permissions attached to your AWS user account/role, you may need to explicitly enable access to the Overture catalog. You can do that by ",(0,t.jsx)(a.a,{href:"https://console.aws.amazon.com/iam/home?#/policies?type=customer",children:"adding a new IAM policy"}),"-- we suggest calling it ",(0,t.jsx)(a.code,{children:"OvertureGlueCatalogAccess"})," -- with the following permissions:"]}),"\n",(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:"IAM policy for Overture Glue Data Catalog access"}),(0,t.jsx)("div",{children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "glue:GetTable*",\n        "glue:GetDatabase*",\n        "glue:GetPartition*"\n      ],\n      "Resource": [\n        "arn:aws:glue:us-west-2:913550007193:catalog",\n        "arn:aws:glue:us-west-2:913550007193:database/release",\n        "arn:aws:glue:us-west-2:913550007193:table/*"\n      ]\n    }\n  ]\n}\n'})})})]}),"\n",(0,t.jsx)(a.h3,{id:"2-inspect-release-tables",children:"2. Inspect release tables"}),"\n",(0,t.jsxs)(a.p,{children:["Now each release is available as a table under the ",(0,t.jsx)(a.code,{children:"release"})," database in the ",(0,t.jsx)(a.code,{children:"overture"})," data source (note the ",(0,t.jsx)(a.code,{children:"v"})," at the beginning of the table name). The ",(0,t.jsx)(a.code,{children:"overture"})," data catalog will be updated with a new table for each new release."]}),"\n",(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:"Overture Maps release tables"}),(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Release Tables",src:n(2519).A+"",width:"421",height:"864"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"3-access-data-from-a-release-table",children:"3. Access data from a release table"}),"\n",(0,t.jsx)(a.p,{children:"You can access Overture Maps data in a particular release like this:"}),"\n",(0,t.jsx)(r.A,{query:i}),"\n",(0,t.jsx)(a.p,{children:"Here's how you might write an Athena SQL query to get Overture Maps places in Seattle:"}),"\n",(0,t.jsx)(r.A,{query:c}),"\n",(0,t.jsxs)(a.p,{children:["More information on using Athena is available in the ",(0,t.jsx)(a.a,{href:"https://docs.aws.amazon.com/athena/latest/ug/what-is.html",children:"Amazon Athena User Guide"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"optional",children:"Optional"}),"\n",(0,t.jsx)(a.h4,{id:"add-the-table-directly-using-the-ddl",children:"Add the table directly using the DDL"}),"\n",(0,t.jsx)(a.p,{children:"If you prefer to create the table in your own data catalog, you can run the complete DDL query in the Athena Query Console. This will create tables in your AWS account's data catalog pointing directly to data hosted on Overture's S3 bucket."}),"\n",(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:"DDL query statement"}),(0,t.jsx)("div",{children:(0,t.jsx)(r.A,{query:o})})]}),"\n",(0,t.jsxs)(a.p,{children:["After you run the set-up query, you can load the partitions by running ",(0,t.jsx)(a.code,{children:"MSCK REPAIR TABLE overture"}),' or choosing "Load Partitions" from the table options menu.']}),"\n",(0,t.jsx)(a.h4,{id:"add-a-policy-in-your-data-catalog-settings",children:"Add a policy in your data catalog settings"}),"\n",(0,t.jsxs)(a.p,{children:["If you want to share this catalog with other users and accounts, you'll need to add a policy enabling cross-account Glue catalog access. To do so, navigate to the ",(0,t.jsx)(a.a,{href:"https://console.aws.amazon.com/glue/home#/v2/security/settings",children:"data catalog settings"})," and add a catalog policy that looks this:"]}),"\n",(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:"Policy for sharing Overture Maps catalog"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Principal": "*",\n      "Action": [\n        "glue:GetTable*",\n        "glue:GetDatabase*",\n        "glue:GetPartition*"\n      ],\n      "Resource": [\n        "arn:aws:glue:<region>:<account id>:catalog",\n        "arn:aws:glue:<region>:<account id>:database/release",\n        "arn:aws:glue:<region>:<account id>:table/*"\n      ]\n    }\n  ]\n}\n'})}),(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"release"})," is the name of the database containing Overture tables."]})]})]}),"\n",(0,t.jsx)(a.h2,{id:"microsoft-synapse-azure",children:"Microsoft Synapse (Azure)"}),"\n",(0,t.jsxs)(a.p,{children:["In your Azure account, create a ",(0,t.jsx)(a.a,{href:"https://learn.microsoft.com/en-us/azure/synapse-analytics/get-started-create-workspace",children:"Synapse workspace"}),". You can then run this SQL query to read places in Seattle:"]}),"\n",(0,t.jsx)(r.A,{query:l}),"\n",(0,t.jsxs)(a.p,{children:["More information is available at ",(0,t.jsx)(a.a,{href:"https://learn.microsoft.com/en-us/training/modules/query-data-lake-using-azure-synapse-serverless-sql-pools/3-query-files",children:'"Query files using a serverless SQL pool"'})," on Microsoft Learn."]})]})}function y(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},97577:(e,a,n)=>{n.d(a,{A:()=>i});var t=n(21432),s=n(44586),r=n(74848);function i(e){const{siteConfig:{customFields:a}}=(0,s.A)();var n=e.query.replace("__OVERTURE_RELEASE",a.overtureRelease);n=n.replace("__ATHENA_OVERTURE_RELEASE","v"+a.overtureRelease.replaceAll(".","_").replaceAll("-","_"));var i=e.language||"sql";return(0,r.jsx)(t.default,{language:i,title:e.title,children:n})}},67144:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/aws-glue-data-catalog-values-56499d44a76f8a08a4ccd2037b1bab47.png"},2519:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/overture-release-tables-2aa5d8e182c732df17c42ab77c1b2050.png"}}]);