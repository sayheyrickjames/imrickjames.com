import * as Switch from '@radix-ui/react-switch';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: (theme: 'dark' | 'light') => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <div className="theme-toggle">
      <span className="theme-label">Theme</span>
      <Switch.Root
        className="theme-switch"
        checked={theme === 'light'}
        onCheckedChange={(value) => onToggle(value ? 'light' : 'dark')}
        aria-label="Toggle theme"
      >
        <Switch.Thumb className="theme-thumb" />
      </Switch.Root>
      <span className="theme-value">{theme}</span>
    </div>
  );
}
