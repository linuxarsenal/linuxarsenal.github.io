<template><div><h1 id="进程与线程" tabindex="-1"><a class="header-anchor" href="#进程与线程"><span>进程与线程</span></a></h1>
<h2 id="进程是什么" tabindex="-1"><a class="header-anchor" href="#进程是什么"><span>进程是什么？</span></a></h2>
<p>进程是程序的一次执行过程，是系统进行资源分配和调度的基本单位。</p>
<h3 id="进程的组成" tabindex="-1"><a class="header-anchor" href="#进程的组成"><span>进程的组成</span></a></h3>
<p>每个进程都由以下部分组成：</p>
<ul>
<li><strong>程序段</strong>：存储程序的代码</li>
<li><strong>数据段</strong>：存储程序运行时需要的数据</li>
<li><strong>PCB（进程控制块）</strong>：保存进程的状态信息</li>
</ul>
<h3 id="进程的状态" tabindex="-1"><a class="header-anchor" href="#进程的状态"><span>进程的状态</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>          就绪 ──调度──► 运行</span></span>
<span class="line"><span>           ▲              │</span></span>
<span class="line"><span>           │    时间片用完  │</span></span>
<span class="line"><span>           └──────────────┘</span></span>
<span class="line"><span>                          │ 等待事件</span></span>
<span class="line"><span>                          ▼</span></span>
<span class="line"><span>                        阻塞</span></span>
<span class="line"><span>                          │ 事件完成</span></span>
<span class="line"><span>                          ▼</span></span>
<span class="line"><span>                         就绪</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="线程是什么" tabindex="-1"><a class="header-anchor" href="#线程是什么"><span>线程是什么？</span></a></h2>
<p>线程是进程中的一个执行单元，是 CPU 调度的基本单位。</p>
<table>
<thead>
<tr>
<th>比较项目</th>
<th>进程</th>
<th>线程</th>
</tr>
</thead>
<tbody>
<tr>
<td>资源分配</td>
<td>独立分配</td>
<td>共享进程资源</td>
</tr>
<tr>
<td>切换开销</td>
<td>大</td>
<td>小</td>
</tr>
<tr>
<td>通信方式</td>
<td>IPC</td>
<td>共享内存</td>
</tr>
<tr>
<td>崩溃影响</td>
<td>不影响其他进程</td>
<td>影响同进程其他线程</td>
</tr>
</tbody>
</table>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<ul>
<li>进程是<strong>资源分配</strong>的基本单位</li>
<li>线程是 <strong>CPU 调度</strong>的基本单位</li>
<li>一个进程可以包含多个线程，线程共享进程的地址空间</li>
</ul>
</div></template>


