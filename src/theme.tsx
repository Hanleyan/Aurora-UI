import type { CSSProperties } from 'react';
import { auroraTokens } from './tokens';

export const createCssVariableStyle = (): CSSProperties => ({
  '--aurora-color-primary': auroraTokens.color.primary,
  '--aurora-color-primary-hover': auroraTokens.color.primaryHover,
  '--aurora-color-text': auroraTokens.color.text,
  '--aurora-color-text-muted': auroraTokens.color.textMuted,
  '--aurora-color-surface': auroraTokens.color.surface,
  '--aurora-color-surface-muted': auroraTokens.color.surfaceMuted,
  '--aurora-color-border': auroraTokens.color.border,
  '--aurora-color-danger': auroraTokens.color.danger,
  '--aurora-color-success': auroraTokens.color.success,
  '--aurora-font-family': auroraTokens.font.family,
  '--aurora-radius-md': auroraTokens.radius.md
} as CSSProperties);
