import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Button, Card, createCssVariableStyle } from '../../src';

function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        margin: 0,
        padding: '64px 24px',
        boxSizing: 'border-box',
        background: '#f7f8fa',
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        color: '#172033',
        ...createCssVariableStyle()
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <p style={{ color: '#635bff', fontWeight: 700, marginBottom: 8 }}>AURORA-UI</p>
        <h1 style={{ fontSize: 44, margin: '0 0 12px' }}>跨项目设计系统基础设施</h1>
        <p style={{ color: '#667085', fontSize: 18, marginBottom: 32 }}>
          基于 React 19、TypeScript、CSS-in-JS 与 Design Tokens 构建。
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          <Card title="按钮">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <Button>主要按钮</Button>
              <Button variant="secondary">次要按钮</Button>
              <Button variant="danger">危险操作</Button>
              <Button disabled>禁用状态</Button>
            </div>
          </Card>
          <Card title="设计令牌">
            <p style={{ color: '#667085', marginTop: 0 }}>颜色、字体、间距和圆角可通过统一 Token 管理。</p>
            <code>auroraTokens.color.primary</code>
          </Card>
        </div>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode><App /></StrictMode>
);
