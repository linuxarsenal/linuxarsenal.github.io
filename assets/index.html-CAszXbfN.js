import { d as createElementBlock, f as createStaticVNode, g as resolveComponent, h as openBlock, m as createVNode, p as createTextVNode, t as _plugin_vue_export_helper_default, u as createBaseVNode, v as withCtx } from "./app-D-X8FEm0.js";
//#region docs/.vuepress/.temp/pages/os/index.html.vue
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createStaticVNode("<h1 id=\"操作系统\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#操作系统\"><span>操作系统</span></a></h1><blockquote><p>操作系统是管理计算机硬件与软件资源的系统软件，是计算机系统的内核与基石。</p></blockquote><p>本章节涵盖操作系统的核心知识点，包括进程管理、内存管理、文件系统、网络IO等。</p><h2 id=\"目录\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#目录\"><span>目录</span></a></h2><h3 id=\"进程管理\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#进程管理\"><span>进程管理</span></a></h3>", 5)),
		createBaseVNode("ul", null, [
			createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/os/process/intro.html" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("进程与线程", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/os/process/schedule.html" }, {
				default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("进程调度", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/os/process/ipc.html" }, {
				default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("进程通信（IPC）", -1)])]),
				_: 1
			})])
		]),
		_cache[8] || (_cache[8] = createBaseVNode("h3", {
			id: "内存管理",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#内存管理"
		}, [createBaseVNode("span", null, "内存管理")])], -1)),
		createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/os/memory/virtual.html" }, {
			default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("虚拟内存", -1)])]),
			_: 1
		})]), createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/os/memory/page-replace.html" }, {
			default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("页面置换算法", -1)])]),
			_: 1
		})])]),
		_cache[9] || (_cache[9] = createBaseVNode("h3", {
			id: "文件系统",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#文件系统"
		}, [createBaseVNode("span", null, "文件系统")])], -1)),
		createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/os/filesystem/intro.html" }, {
			default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("文件系统基础", -1)])]),
			_: 1
		})])]),
		_cache[10] || (_cache[10] = createBaseVNode("h3", {
			id: "网络系统",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#网络系统"
		}, [createBaseVNode("span", null, "网络系统")])], -1)),
		createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/os/network/io-multiplex.html" }, {
			default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode("IO 多路复用（select/poll/epoll）", -1)])]),
			_: 1
		})])])
	]);
}
var index_html_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
//#endregion
//#region docs/.vuepress/.temp/pages/os/index.html.js
var data = JSON.parse("{\"path\":\"/os/\",\"title\":\"操作系统\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"操作系统\",\"index\":false,\"icon\":\"computer\",\"category\":[\"操作系统\"]},\"git\":{\"createdTime\":1773841978000,\"updatedTime\":1773891337000,\"contributors\":[{\"name\":\"linuxarsenal\",\"username\":\"linuxarsenal\",\"email\":\"tgdzsjh@163.com\",\"commits\":2,\"url\":\"https://github.com/linuxarsenal\"}]},\"readingTime\":{\"minutes\":0.49,\"words\":148},\"filePathRelative\":\"os/README.md\"}");
//#endregion
export { index_html_default as comp, data };
