import{_ as s,u as r,r as l,o as c,f as _,b as m,w as d,d as o,t as u,F as h,e as t}from"./entry-8baf289e.mjs";const i={setup(){const e=r();return{theme:e,toggleTheme:()=>e.global.name.value=e.global.current.value.dark?"light":"dark"}}},p=t("toggle theme"),g=t("    "),f=t(`
  `);function v(e,k,b,n,x,C){const a=l("v-btn");return c(),_(h,null,[m(a,{onClick:n.toggleTheme},{default:d(()=>[p]),_:1},8,["onClick"]),o("pre",null,[g,o("code",null,`
      `+u(e.$vuetify.theme.themes)+`
    `,1),f])],64)}var $=s(i,[["render",v]]);export{$ as default};
