一个高效实用的 VS Code 扩展，提供两大核心功能：快速复制代码行和智能生成(cosnole.log('调试内容'))调试语句，让你的编码效率倍增！

## 效果展示

![PixPin\_2025-09-28\_09-28-47.gif](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/6e1d31054e6544d1a0c51f61d867a76d~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgdGhvdXNhbmRf:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjc1MjgzMjg0OTA2NTYyMyJ9\&rk3s=e9ecf3d6\&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018\&x-orig-expires=1759109383\&x-orig-sign=GasA31BEJJDvRk5%2FQyYI7yuzaKk%3D)

## 插件查找
![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/99cd831bedb04a6ba9c059b622b14c65~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgdGhvdXNhbmRf:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjc1MjgzMjg0OTA2NTYyMyJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1759109774&x-orig-sign=kY1mGmhdmeQ5YEtn3AYXdZuyudo%3D)

## 🚀 功能介绍

### 📋 功能一：快速复制 (Duplicate Line)

*   **复制当前行**：无选区时，一键将当前行内容复制到下一行
*   **复制选中文本**：有选区时，一键将选中的文本复制到下一行
*   **智能识别**：自动判断是复制整行还是选中内容

### 🐛 功能二：快速调试 (Console Line)

*   **快速 console.log**：选中变量或表达式，一键生成 `console.log()` 语句
*   **提升调试效率**：无需手动输入冗长的调试代码
*   **支持任意表达式**：选中任何代码片段都能快速生成调试输出

## 📦 安装方法

1.  在 VS Code 扩展市场搜索 `vs-quick-operation` 并安装
2.  或者下载 `.vsix` 文件后，在 VS Code 中通过命令面板（`Ctrl+Shift+P`）运行 `Extensions: Install from VSIX...` 进行本地安装

## 🎯 使用方法

### 快速复制功能

1.  打开任意文本文件
2.  将光标放在需要复制的行，或选中需要复制的文本
3.  按下 `Ctrl+Shift+D` 或通过命令面板输入 `Duplicate Line`

**示例：**

    // 原代码
    const userName = "张三";

    // 光标在上行，按 Ctrl+Shift+D 后：
    const userName = "张三";
    const userName = "张三";  // 新复制的行

### 快速调试功能

1.  选中要调试的变量或表达式
2.  按下 `Ctrl+Shift+Q` 或通过命令面板输入 `Console Line`
3.  自动在下一行生成 `console.log()` 语句

**示例：**

    // 选中 userName 变量
    const userName = "张三";

    // 按 Ctrl+Shift+Q 后：
    const userName = "张三";
    console.log(userName);  // 自动生成的调试语句

## ⌨️ 快捷键说明

| 快捷键            | 功能描述                | 命令名称           | 适用场景    |
| -------------- | ------------------- | -------------- | ------- |
| `Ctrl+Shift+D` | 复制当前行或选中文本到下一行      | Duplicate Line | 任意文本编辑器 |
| `Ctrl+Shift+Q` | 为选中内容生成 console.log | Console Line   | 任意文本编辑器 |

> 💡 如有快捷键冲突，可在 VS Code 设置中自定义快捷键

## 📄 支持的文件类型

*   ✅ 支持所有 VS Code 文本编辑器窗口
*   ✅ 包括但不限于：`.js`、`.ts`、`.jsx`、`.tsx`、`.vue`、`.py`、`.java`、`.c`、`.cpp`、`.md`、`.json` 等
*   ⚠️ 请确保文件以"文本编辑器"模式打开，而非"预览"模式

## 🎬 使用场景

### 适合快速复制的场景：

*   重复声明相似变量
*   复制配置项或参数
*   快速创建模板代码
*   复制注释或文档

### 适合快速调试的场景：

*   调试函数参数
*   检查变量值
*   追踪数据流
*   临时输出验证

## ⚠️ 已知问题

*   某些特殊文件类型或只读窗口中可能无法使用
*   快捷键可能与其他扩展冲突，建议自定义
*   Console Line 功能目前仅生成 `console.log()`，后续版本将支持更多调试方式

## 📝 快捷键冲突问题解决

如果快捷键冲突可以根据你的使用习惯重新定义该插件的快捷键，设置方式如下：
![vscode快捷键设置](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/93d165a94f1143f8951d48a0d4b37cd5~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgdGhvdXNhbmRf:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjc1MjgzMjg0OTA2NTYyMyJ9\&rk3s=e9ecf3d6\&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018\&x-orig-expires=1759109579\&x-orig-sign=OV8gFC98R%2BghYBX61UOEodo7pN0%3D)

## 插件源码地址，欢迎提pr和探讨
(vscode插件vs-quick-operation源码地址):https://github.com/372798735/vs-quick-operation.git
