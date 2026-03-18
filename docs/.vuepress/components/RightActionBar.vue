<template>
  <ClientOnly>
    <Teleport to="body">
      <div class="rab-wrap">
        <div class="rab-bar">

          <!-- 目录 -->
          <div class="rab-item" @click="toggleToc" :class="{ active: tocVisible }" title="文章目录">
            <div class="rab-icon" style="background:#e8f4fd;color:#3b82f6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="16" y2="12"/><line x1="3" y1="18" x2="19" y2="18"/>
              </svg>
            </div>
            <span>目录</span>
          </div>

          <!-- 侧边栏 -->
          <div class="rab-item" @click="toggleSidebar" :class="{ active: sidebarHidden }" title="切换侧边栏">
            <div class="rab-icon" style="background:#edf2ff;color:#6366f1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <template v-if="!sidebarHidden">
                  <polyline points="15 18 9 12 15 6"/>
                  <polyline points="11 18 5 12 11 6"/>
                </template>
                <template v-else>
                  <polyline points="9 18 15 12 9 6"/>
                  <polyline points="13 18 19 12 13 6"/>
                </template>
              </svg>
            </div>
            <span>侧边栏</span>
          </div>

          <div class="rab-divider"></div>

          <!-- 夜间模式 -->
          <div class="rab-item" @click="toggleDark" title="夜间模式">
            <div class="rab-icon" :style="isDark
              ? 'background:#1e1b4b;color:#a5b4fc'
              : 'background:#fef3c7;color:#f59e0b'">
              <svg v-if="!isDark" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            </div>
            <span>{{ isDark ? '日间' : '夜间' }}</span>
          </div>

          <div class="rab-divider"></div>

          <!-- 公众号 -->
          <div class="rab-item rab-qr-host" title="关注公众号">
            <div class="rab-icon" style="background:#e6f9f0;color:#07c160">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.5 4C5.36 4 2 6.69 2 10c0 1.89 1.08 3.56 2.78 4.66L4 17l2.47-1.32A8.7 8.7 0 0 0 9.5 16c.17 0 .34 0 .5-.01A5.52 5.52 0 0 1 9.5 14c0-3.04 2.69-5.5 6-5.5.18 0 .35.01.52.02C15.29 6.13 12.65 4 9.5 4zm8.5 6.5c-2.76 0-5 1.79-5 4s2.24 4 5 4c.62 0 1.22-.1 1.77-.28L22 19.5l-.63-2.11A3.67 3.67 0 0 0 23 14.5c0-2.21-2.24-4-5-4z"/>
              </svg>
            </div>
            <span>公众号</span>
            <div class="rab-qr-popup">
              <img src="/pics/logo1.png" alt="公众号" />
              <p>扫码关注</p>
              <strong>Linux兵工厂</strong>
            </div>
          </div>

          <!-- GitHub -->
          <a class="rab-item" href="https://github.com" target="_blank" rel="noopener" title="GitHub">
            <div class="rab-icon" style="background:#f0f0f0;color:#24292e">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.04c-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.28 5.69.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56C20.21 21.41 23.5 17.1 23.5 12 23.5 5.73 18.27.5 12 .5z"/>
              </svg>
            </div>
            <span>GitHub</span>
          </a>

          <!-- 返回顶部 -->
          <div class="rab-item" @click="scrollToTop" title="返回顶部">
            <div class="rab-icon" style="background:#fff0f0;color:#ef4444">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="18 15 12 9 6 15"/>
              </svg>
            </div>
            <span>顶部</span>
          </div>

        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark       = ref(false)
const tocVisible   = ref(false)
const sidebarHidden = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.getAttribute('data-theme') === 'dark'
})

function toggleDark() {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  localStorage.setItem('vuepress-theme-hope-scheme', isDark.value ? 'dark' : 'light')
}

function toggleToc() {
  tocVisible.value = !tocVisible.value
  document.body.classList.toggle('rab-hide-toc', !tocVisible.value)
}

function toggleSidebar() {
  sidebarHidden.value = !sidebarHidden.value
  document.body.classList.toggle('rab-hide-sidebar', sidebarHidden.value)
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style>
body.rab-hide-sidebar .vp-sidebar {
  transform: translateX(-100%);
  transition: transform 0.25s ease;
}
body.rab-hide-toc .vp-toc-placeholder {
  visibility: hidden;
}
</style>

<style scoped>
.rab-wrap {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999;
}

.rab-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border: 1px solid rgba(0,0,0,.08);
  border-right: none;
  border-radius: 12px 0 0 12px;
  box-shadow: -4px 0 20px rgba(0,0,0,.10);
  padding: 6px 0;
  gap: 2px;
}

:global([data-theme="dark"]) .rab-bar {
  background: #1e1e2e;
  border-color: rgba(255,255,255,.08);
  box-shadow: -4px 0 20px rgba(0,0,0,.4);
}

.rab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 58px;
  padding: 8px 4px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.18s;
  position: relative;
  user-select: none;
}

.rab-item:hover {
  background: rgba(0,0,0,.04);
}

:global([data-theme="dark"]) .rab-item:hover {
  background: rgba(255,255,255,.06);
}

.rab-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.18s;
}

.rab-item:hover .rab-icon {
  transform: scale(1.12);
}

.rab-icon svg {
  width: 18px;
  height: 18px;
}

.rab-item span {
  font-size: 10.5px;
  line-height: 1;
  color: #666;
  white-space: nowrap;
  font-weight: 500;
}

:global([data-theme="dark"]) .rab-item span {
  color: #999;
}

.rab-divider {
  width: 36px;
  height: 1px;
  background: rgba(0,0,0,.07);
  margin: 2px 0;
  flex-shrink: 0;
}

:global([data-theme="dark"]) .rab-divider {
  background: rgba(255,255,255,.08);
}

.rab-qr-host {
  position: relative;
}

.rab-qr-popup {
  display: none;
  position: absolute;
  right: 68px;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 10px;
  padding: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,.14);
  text-align: center;
  width: 130px;
  z-index: 10001;
}

:global([data-theme="dark"]) .rab-qr-popup {
  background: #1e1e2e;
  border-color: rgba(255,255,255,.1);
}

.rab-qr-host:hover .rab-qr-popup {
  display: block;
}

.rab-qr-popup img {
  width: 108px;
  height: 108px;
  display: block;
  margin: 0 auto 8px;
  border-radius: 6px;
  object-fit: contain;
}

.rab-qr-popup p {
  margin: 0 0 2px;
  font-size: 11px;
  color: #888;
}

.rab-qr-popup strong {
  font-size: 12px;
  color: #333;
}

:global([data-theme="dark"]) .rab-qr-popup strong {
  color: #ddd;
}

.rab-qr-popup::before {
  content: '';
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  border: 8px solid transparent;
  border-right: none;
  border-left-color: rgba(0,0,0,.1);
}
.rab-qr-popup::after {
  content: '';
  position: absolute;
  right: -7px;
  top: 50%;
  transform: translateY(-50%);
  border: 7px solid transparent;
  border-right: none;
  border-left-color: #fff;
}

:global([data-theme="dark"]) .rab-qr-popup::after {
  border-left-color: #1e1e2e;
}

@media (max-width: 959px) {
  .rab-wrap {
    display: none;
  }
}
</style>
