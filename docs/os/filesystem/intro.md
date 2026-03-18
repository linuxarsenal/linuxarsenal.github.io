---
title: 文件系统基础
icon: folder
order: 1
category:
  - 操作系统
tag:
  - 文件系统
  - inode
---

# 文件系统基础

## 文件系统的作用

文件系统负责管理磁盘上数据的组织、存储和访问，向用户提供统一的文件接口。

## inode

每个文件都有一个 inode，存储文件的元数据：
- 文件大小
- 文件权限
- 时间戳（创建、修改、访问时间）
- 数据块的指针

```bash
# 查看 inode 信息
stat filename

# 查看 inode 号
ls -i filename
```

## 目录

目录本质上是一个特殊文件，存储文件名到 inode 号的映射表。

```
目录项：文件名 → inode 号
/home/user/
├── README.md  → inode 12345
├── config.txt → inode 12346
└── src/       → inode 12347
```

## 硬链接与软链接

```bash
# 硬链接：直接指向同一个 inode
ln source hardlink

# 软链接（符号链接）：指向文件路径
ln -s source softlink
```

| 比较 | 硬链接 | 软链接 |
|------|--------|--------|
| inode | 相同 | 不同 |
| 跨文件系统 | 不支持 | 支持 |
| 原文件删除 | 文件仍可访问 | 链接失效 |

## 常见文件系统

| 文件系统 | 特点 | 适用场景 |
|---------|------|---------|
| ext4 | Linux 默认，稳定成熟 | 通用 |
| xfs | 高性能，适合大文件 | 服务器 |
| tmpfs | 内存文件系统，掉电丢失 | /tmp |
| procfs | 虚拟文件系统，内核信息 | /proc |
