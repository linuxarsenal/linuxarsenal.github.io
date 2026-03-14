import { CodeTabs } from "D:/Workspace/GithubFiles/Github/MyBlogMarkdown/MyBlogMarkdown/BlogSite/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/dist/client/components/CodeTabs.js";
import { Tabs } from "D:/Workspace/GithubFiles/Github/MyBlogMarkdown/MyBlogMarkdown/BlogSite/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/dist/client/components/Tabs.js";
import "D:/Workspace/GithubFiles/Github/MyBlogMarkdown/MyBlogMarkdown/BlogSite/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/dist/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
