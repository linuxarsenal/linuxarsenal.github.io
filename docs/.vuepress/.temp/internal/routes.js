export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Workspace/GithubFiles/Github/MyBlogMarkdown/MyBlogMarkdown/BlogSite/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Linux兵工厂"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Workspace/GithubFiles/Github/MyBlogMarkdown/MyBlogMarkdown/BlogSite/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
