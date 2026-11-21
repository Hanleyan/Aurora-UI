export const auroraTokens = {
  color: {
    primary: '#635bff',
    primaryHover: '#5148e5',
    text: '#172033',
    textMuted: '#667085',
    surface: '#ffffff',
    surfaceMuted: '#f7f8fa',
    border: '#dfe3ea',
    danger: '#d92d20',
    success: '#039855'
  },
  font: {
    family: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    sizeSm: '0.875rem',
    sizeMd: '1rem',
    sizeLg: '1.125rem'
  },
  spacing: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    6: '24px',
    8: '32px'
  },
  radius: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    full: '9999px'
  }
} as const;

export type AuroraTokens = typeof auroraTokens;
