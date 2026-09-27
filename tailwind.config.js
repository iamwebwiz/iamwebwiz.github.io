/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--color-canvas)',
        panel: 'var(--color-panel)',
        card: 'var(--color-card)',
        fg: 'var(--color-fg)',
        body: 'var(--color-body)',
        muted: 'var(--color-muted)',
        rule: 'var(--color-rule)',
        signal: 'var(--color-signal)',
        'signal-soft': 'var(--color-signal-soft)',
        amber: 'var(--color-amber)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        sans: 'var(--font-body)',
      },
      maxWidth: {
        page: '88rem',
      },
    },
  },
  plugins: [],
};
