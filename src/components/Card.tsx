import type { HTMLAttributes, ReactNode } from 'react';
import { auroraTokens } from '../tokens';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: ReactNode;
  children: ReactNode;
}

export function Card({ title, children, style, ...props }: CardProps) {
  return (
    <section
      {...props}
      style={{
        background: auroraTokens.color.surface,
        border: `1px solid ${auroraTokens.color.border}`,
        borderRadius: auroraTokens.radius.lg,
        padding: auroraTokens.spacing[6],
        boxShadow: '0 10px 30px rgba(23, 32, 51, 0.06)',
        ...style
      }}
    >
      {title && <h2 style={{ margin: `0 0 ${auroraTokens.spacing[4]}`, color: auroraTokens.color.text }}>{title}</h2>}
      {children}
    </section>
  );
}
