import type { CSSProperties, ReactNode } from 'react';
import { auroraTokens } from '../tokens';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
}

const sizeStyles: Record<ButtonSize, CSSProperties> = {
  sm: { minHeight: '32px', padding: '6px 12px', fontSize: auroraTokens.font.sizeSm },
  md: { minHeight: '40px', padding: '8px 16px', fontSize: auroraTokens.font.sizeMd },
  lg: { minHeight: '48px', padding: '12px 20px', fontSize: auroraTokens.font.sizeLg }
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  onClick,
  className,
  style
}: ButtonProps) {
  const variants: Record<ButtonVariant, CSSProperties> = {
    primary: { background: auroraTokens.color.primary, color: '#fff', border: `1px solid ${auroraTokens.color.primary}` },
    secondary: { background: auroraTokens.color.surface, color: auroraTokens.color.text, border: `1px solid ${auroraTokens.color.border}` },
    danger: { background: auroraTokens.color.danger, color: '#fff', border: `1px solid ${auroraTokens.color.danger}` }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: auroraTokens.spacing[2],
        borderRadius: auroraTokens.radius.sm, fontFamily: auroraTokens.font.family, fontWeight: 600,
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.55 : 1,
        transition: 'opacity 150ms ease, background 150ms ease',
        ...variants[variant], ...sizeStyles[size], ...style
      }}
    >
      {children}
    </button>
  );
}
