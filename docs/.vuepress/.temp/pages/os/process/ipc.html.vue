<template><div><h1 id="进程通信-ipc" tabindex="-1"><a class="header-anchor" href="#进程通信-ipc"><span>进程通信（IPC）</span></a></h1>
<p>进程间通信（IPC, Inter-Process Communication）是指不同进程之间交换数据的机制。</p>
<h2 id="常见-ipc-方式" tabindex="-1"><a class="header-anchor" href="#常见-ipc-方式"><span>常见 IPC 方式</span></a></h2>
<h3 id="管道-pipe" tabindex="-1"><a class="header-anchor" href="#管道-pipe"><span>管道（Pipe）</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 匿名管道：只能用于父子进程</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> .md</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 命名管道（FIFO）：可用于无亲缘关系的进程</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkfifo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /tmp/myfifo</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点</strong>：</p>
<ul>
<li>半双工（单向传输）</li>
<li>数据只能读一次</li>
</ul>
<h3 id="消息队列" tabindex="-1"><a class="header-anchor" href="#消息队列"><span>消息队列</span></a></h3>
<p>消息队列是消息的链接表，存放在内核中。</p>
<p><strong>特点</strong>：</p>
<ul>
<li>有消息边界</li>
<li>消息可以按类型接收</li>
</ul>
<h3 id="共享内存" tabindex="-1"><a class="header-anchor" href="#共享内存"><span>共享内存</span></a></h3>
<p>多个进程共享同一块物理内存，速度最快。</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 创建共享内存</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> shmid </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> shmget</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> IPC_CREAT </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">|</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">666</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 映射到当前进程地址空间</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">void</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">ptr </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> shmat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">shmid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> NULL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点</strong>：</p>
<ul>
<li>速度最快</li>
<li>需要同步机制（信号量）配合使用</li>
</ul>
<h3 id="信号量" tabindex="-1"><a class="header-anchor" href="#信号量"><span>信号量</span></a></h3>
<p>用于进程/线程同步，防止竞态条件。</p>
<h3 id="socket" tabindex="-1"><a class="header-anchor" href="#socket"><span>Socket</span></a></h3>
<p>可以用于不同主机间的进程通信。</p>
<h2 id="选择建议" tabindex="-1"><a class="header-anchor" href="#选择建议"><span>选择建议</span></a></h2>
<table>
<thead>
<tr>
<th>场景</th>
<th>推荐方式</th>
</tr>
</thead>
<tbody>
<tr>
<td>父子进程少量数据</td>
<td>匿名管道</td>
</tr>
<tr>
<td>无亲缘进程通信</td>
<td>命名管道/消息队列</td>
</tr>
<tr>
<td>大量数据高效通信</td>
<td>共享内存</td>
</tr>
<tr>
<td>跨主机通信</td>
<td>Socket</td>
</tr>
</tbody>
</table>
</div></template>


