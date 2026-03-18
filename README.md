# TodoList-React

一个基于 React + Vite 的待办清单项目。  
项目使用 `Context + 自定义 Hook` 管理状态，并通过 `localStorage` 持久化数据。

## 功能

- 添加待办事项
- 勾选完成/未完成
- 删除待办（带确认弹层）
- 自动按完成状态排序（未完成在前）
- 刷新页面后保留待办数据（本地持久化）
- Header 头像翻转动画效果

## 技术栈

- React 19
- Vite 8
- Tailwind CSS 4
- daisyUI

## 快速开始

```bash
npm install
npm run dev
```

开发服务启动后，打开终端输出的本地地址即可访问。

## 常用脚本

- `npm run dev`：启动开发环境
- `npm run build`：打包生产构建
- `npm run preview`：预览生产构建

## 关于 lint

当前 `package.json` 里保留了 `npm run lint` 脚本，但你如果删除了 ESLint 相关依赖，执行它会报错。  
不影响 `npm run dev` 和 `npm run build` 的正常使用。

## 项目结构（核心）

```text
src/
  context/
    TodosContext.jsx      # 全局 Todo 上下文
  hooks/
    useTodos.js           # Todo 业务逻辑
    useLocalStorage.js    # localStorage 封装 Hook
  AddTodo.jsx             # 添加待办输入区
  TodoList.jsx            # 待办列表
  TodoListItem.jsx        # 单条待办项
  HeaderIcon.jsx          # 头部头像动画
```

## 状态管理说明

- `useTodos`：集中管理 `todo`、`todos` 和新增逻辑
- `TodosProvider`：在根节点注入共享状态
- `useTodosContext`：子组件直接获取同一份状态，避免 props 层层传递
- `useLocalStorage("todos", initialValue)`：`todos` 变更时自动写入本地存储

## 数据持久化

`todos` 使用浏览器 `localStorage` 保存，key 为 `todos`。  
首次没有本地数据时，使用 `useTodos` 中的默认初始列表。

## 后续可扩展方向

- 增加编辑 todo 内容
- 增加筛选（全部/进行中/已完成）
- 增加截止日期与优先级
- 增加拖拽排序
