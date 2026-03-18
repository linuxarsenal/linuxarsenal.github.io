---
title: 字符设备驱动
icon: code
order: 1
category:
  - 嵌入式Linux
tag:
  - 驱动
  - 字符设备
---

# 字符设备驱动

字符设备是 Linux 最基本的设备类型，以字节为单位进行数据传输，如串口、键盘等。

## 驱动框架

```c
#include <linux/module.h>
#include <linux/cdev.h>
#include <linux/fs.h>

static struct cdev my_cdev;
static dev_t dev_num;

static int my_open(struct inode *inode, struct file *file)
{
    return 0;
}

static ssize_t my_read(struct file *file, char __user *buf,
                        size_t count, loff_t *ppos)
{
    return 0;
}

static ssize_t my_write(struct file *file, const char __user *buf,
                         size_t count, loff_t *ppos)
{
    return count;
}

static int my_release(struct inode *inode, struct file *file)
{
    return 0;
}

static const struct file_operations my_fops = {
    .owner   = THIS_MODULE,
    .open    = my_open,
    .read    = my_read,
    .write   = my_write,
    .release = my_release,
};

static int __init my_driver_init(void)
{
    // 1. 申请设备号
    alloc_chrdev_region(&dev_num, 0, 1, "my_device");

    // 2. 初始化 cdev
    cdev_init(&my_cdev, &my_fops);

    // 3. 注册 cdev
    cdev_add(&my_cdev, dev_num, 1);

    return 0;
}

static void __exit my_driver_exit(void)
{
    cdev_del(&my_cdev);
    unregister_chrdev_region(dev_num, 1);
}

module_init(my_driver_init);
module_exit(my_driver_exit);
MODULE_LICENSE("GPL");
```

## 关键步骤

1. **申请设备号**：`alloc_chrdev_region()`
2. **初始化 cdev**：`cdev_init()` + 设置 `file_operations`
3. **注册 cdev**：`cdev_add()`
4. **创建设备节点**：`class_create()` + `device_create()`

## 编译与加载

```bash
# 编译
make -C /lib/modules/$(uname -r)/build M=$(pwd) modules

# 加载驱动
insmod my_driver.ko

# 查看设备
cat /proc/devices | grep my_device

# 卸载驱动
rmmod my_driver
```
