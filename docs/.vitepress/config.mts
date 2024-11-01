import Unocss from "unocss/vite";
import { defineConfig } from "vitepress";
import { version } from "../../package.json";

export default defineConfig({
  base: "/",
  description: "spinoweb.github.io",
  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  themeConfig: {
    footer: {
      message: "My home",
    },
    search: {
      provider: "local",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/spinoweb/spinoweb.github.io",
      },
    ],
    nav: nav(),
    sidebar: {
      "/guide/": sidebarGuide(),
      "/config/": sidebarConfig(),
    },
  },
  title: "My Home",
  vite: {
    plugins: [
      Unocss({
        configFile: "../../unocss.config.ts",
      }),
    ],
  },
});

function nav() {
  return [
    { text: "Guide", link: "/guide/", activeMatch: "/guide/" },
    { text: "Configs", link: "/config/", activeMatch: "/config/" },
    { text: "Blog", link: "/blog/", activeMatch: "/blog/" },
    {
      text: "External Docs",
      items: [
        {
          text: "Wordpress",
          link: "https://spinoweb.wordpress.com",
        },
      ],
    },
  ];
}

function sidebarGuide() {
  return [
    {
      text: "Introduction",
      collapsible: true,
      items: [{ text: "What is this?", link: "/guide/" }],
    },
    {
      text: "Features",
      collapsible: true,
      items: [{ text: "UnoCSS", link: "/guide/features/unocss" }],
    },
  ];
}

function sidebarConfig() {
  return [
    {
      text: "Config",
      items: [
        { text: "Introduction", link: "/config/" },
        { text: "UnoCSS", link: "/config/unocss" },
      ],
    },
  ];
}
