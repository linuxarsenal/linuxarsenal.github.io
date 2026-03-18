<template><div><h1 id="页面置换算法" tabindex="-1"><a class="header-anchor" href="#页面置换算法"><span>页面置换算法</span></a></h1>
<p>当物理内存不足，需要将某个页换出到磁盘时，使用页面置换算法决定置换哪个页。</p>
<h2 id="常见算法" tabindex="-1"><a class="header-anchor" href="#常见算法"><span>常见算法</span></a></h2>
<h3 id="opt-最优置换" tabindex="-1"><a class="header-anchor" href="#opt-最优置换"><span>OPT（最优置换）</span></a></h3>
<p>置换<strong>未来最长时间不会被访问</strong>的页。理论最优，但无法实现（无法预知未来）。</p>
<h3 id="fifo-先进先出" tabindex="-1"><a class="header-anchor" href="#fifo-先进先出"><span>FIFO（先进先出）</span></a></h3>
<p>置换<strong>最早进入内存</strong>的页。简单但性能差，可能出现 Belady 异常。</p>
<h3 id="lru-最近最少使用" tabindex="-1"><a class="header-anchor" href="#lru-最近最少使用"><span>LRU（最近最少使用）</span></a></h3>
<p>置换<strong>最近最长时间未被访问</strong>的页。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>访问序列：4 7 0 7 1 0 1 2 1 2 6</span></span>
<span class="line"><span>物理帧数：3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LRU 命中/缺页记录：</span></span>
<span class="line"><span>4: 缺页 [4]</span></span>
<span class="line"><span>7: 缺页 [4,7]</span></span>
<span class="line"><span>0: 缺页 [4,7,0]</span></span>
<span class="line"><span>7: 命中 [4,0,7]</span></span>
<span class="line"><span>1: 缺页 [0,7,1] (置换4)</span></span>
<span class="line"><span>...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="时钟算法-clock" tabindex="-1"><a class="header-anchor" href="#时钟算法-clock"><span>时钟算法（Clock）</span></a></h3>
<p>LRU 的近似实现，使用环形队列和访问位，性能较好，实际 OS 常用。</p>
<h2 id="算法对比" tabindex="-1"><a class="header-anchor" href="#算法对比"><span>算法对比</span></a></h2>
<table>
<thead>
<tr>
<th>算法</th>
<th>缺页率</th>
<th>实现复杂度</th>
<th>实际应用</th>
</tr>
</thead>
<tbody>
<tr>
<td>OPT</td>
<td>最低</td>
<td>无法实现</td>
<td>理论基准</td>
</tr>
<tr>
<td>FIFO</td>
<td>较高</td>
<td>简单</td>
<td>少用</td>
</tr>
<tr>
<td>LRU</td>
<td>低</td>
<td>复杂</td>
<td>常用</td>
</tr>
<tr>
<td>Clock</td>
<td>近似 LRU</td>
<td>中等</td>
<td>Linux 使用</td>
</tr>
</tbody>
</table>
</div></template>


