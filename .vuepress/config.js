module.exports = {
  title: "Reactif",
  base: "/",
  description: "Reactive an easy way.",
  head: [
    ["meta", { name: "twitter:card", content: "summary" }],
    ["meta", { name: "twitter:site", content: "@frencojobs" }],
    ["meta", { name: "twitter:title", content: "Reactif" }],
    [
      "meta",
      {
        name: "twitter:description",
        content: "Javascript that is reactive an easy way"
      }
    ],
    ["meta", { name: "twitter:creator", content: "@frencojobs" }],
    [
      "meta",
      {
        name: "twitter:image",
        content: "http://reactif.js.org/reactif-logo.png"
      }
    ],
    ["meta", { propterty: "og:title", content: "Reactif" }],
    ["meta", { propterty: "og:site_name", content: "Reactif" }],
    ["meta", { propterty: "og:type", content: "documentation" }],
    ["meta", { propterty: "og:url", content: "http://reactif.js.org/" }],
    [
      "meta",
      {
        propterty: "og:image",
        content: "http://reactif.js.org/reactif-logo.png"
      }
    ],
    ["meta", { propterty: "og:description", content: "Reactive an easy way." }],
    ["link", { rel: "icon", href: "/favicon.png" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Source+Code+Pro"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "/fonts/main.css"
      }
    ]
  ],
  themeConfig: {
    logo: "/reactif-logo.png",
    search: true,
    sidebar: {
      "/guide/": [
        ["", "What is Reactif?"],
        ["installation", "Installation"],
        ["concepts", "Core Concepts"],
        ["basicidea", "Basic Ideas"],
        ["whyproxy", "Why Proxy?"],
        ["example", "An Interactive Example"],
        ["interpolater", "Using Interpolaters"]
      ],
      "/api/": [
        ["", "Terms"],
        ["dep", "Dependency Methods"],
        ["interpolaters", "Original Interpolaters"]
      ]
    },
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "Reference", link: "/api/" },
      { text: "GitHub", link: "https://github.com/FrencoJobs/Reactif" }
    ]
  }
};
