# Aurora-UI

一个基于 React 19、TypeScript、CSS-in-JS 和 Design Tokens 的跨项目设计系统基础设施。

## 特性

- 基于 React 19 和 TypeScript 的类型安全组件
- 使用 CSS-in-JS 构建可组合、可主题化的组件样式
- 通过 Design Tokens 管理颜色、字号、间距和圆角
- 支持作为独立 npm 包发布
- 包含独立 Vite 文档站与 Jest 组件测试

## 安装

```bash
npm install @aurora-ui/react react react-dom
```

## 使用

```tsx
import { Button, Card, auroraTokens } from '@aurora-ui/react';

export function Example() {
  return (
    <Card title="快速开始">
      <Button variant="primary">开始使用</Button>
      <span>{auroraTokens.color.primary}</span>
    </Card>
  );
}
```

## 开发

要求 Node.js 20 或更高版本。

```bash
npm install
npm run test
npm run build:package
npm run docs
```

包构建产物位于 `dist/`。

## 文档站

```bash
npm run docs
```

默认地址为 `http://localhost:5174`。

## 项目结构

```text
src/
  components/  可复用 React 组件
  tokens.ts    Design Tokens
  theme.tsx    CSS Variables 与主题工具
  index.ts     包入口
docs/          独立 Vite 文档站
test/          Jest 与 React Testing Library 测试
```

## 开发计划

- [x] 完善项目目录结构
- [x] 定义基础 Design Tokens
- [x] 建立主题与样式管理机制
- [x] 实现基础组件
- [x] 添加组件示例与文档
- [x] 配置测试和构建流程
- [ ] 发布并管理 npm 包版本

## 贡献

欢迎提交 Issue 或 Pull Request，共同完善 Aurora-UI。

提交贡献时建议：

1. Fork 本仓库
2. 创建功能分支
3. 提交清晰、聚焦的改动
4. 发起 Pull Request 并说明变更内容

## 许可证

MIT
