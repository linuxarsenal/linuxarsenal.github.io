---
title: IO 多路复用
icon: network
order: 1
category:
  - 操作系统
tag:
  - IO
  - select
  - poll
  - epoll
---

# IO 多路复用

## 为什么需要 IO 多路复用？

传统的阻塞 IO 每个连接需要一个线程处理，高并发时开销极大。IO 多路复用允许单个线程同时监控多个文件描述符。

## select

```c
int select(int nfds, fd_set *readfds, fd_set *writefds,
           fd_set *exceptfds, struct timeval *timeout);
```

**工作原理**：将所有 fd 集合传给内核，内核轮询检查就绪状态。

**缺点**：
- fd 数量限制（默认 1024）
- 每次调用都要重新传入 fd 集合
- 内核返回后需要遍历所有 fd 找到就绪的

## poll

```c
int poll(struct pollfd *fds, nfds_t nfds, int timeout);
```

改进了 select 的 fd 数量限制，但仍需遍历所有 fd。

## epoll

```c
// 创建 epoll 实例
int epoll_create1(int flags);

// 注册/修改/删除 fd
int epoll_ctl(int epfd, int op, int fd, struct epoll_event *event);

// 等待事件
int epoll_wait(int epfd, struct epoll_event *events,
               int maxevents, int timeout);
```

**工作原理**：使用红黑树管理监听的 fd，就绪时通过回调加入就绪链表，只返回就绪的 fd。

**优点**：
- 无 fd 数量限制
- O(1) 的就绪 fd 获取（不需要遍历）
- 支持边缘触发（ET）和水平触发（LT）

## 对比

| 特性 | select | poll | epoll |
|------|--------|------|-------|
| fd 上限 | 1024 | 无限制 | 无限制 |
| 时间复杂度 | O(n) | O(n) | O(1) |
| 内核通知 | 遍历 | 遍历 | 回调 |
| 跨平台 | 是 | 是 | 仅 Linux |

## 推荐使用 epoll

Linux 高性能服务器（Nginx、Redis）都使用 epoll 作为 IO 模型。

```
连接数 < 1000  → select/poll 足够
连接数 > 1000  → 推荐 epoll
```
