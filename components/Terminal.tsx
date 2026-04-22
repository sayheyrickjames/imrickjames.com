import { useEffect, useRef, useState } from 'react';
import 'jquery.terminal/css/jquery.terminal.min.css';
import 'jquery.terminal';
import $ from 'jquery';
import PreviewModal, { PreviewData } from './PreviewModal';
import ThemeToggle from './ThemeToggle';

declare global {
  interface Window {
    Terminal: any;
  }
}

const commandDescriptions = [
  { command: 'help', description: 'List available commands' },
  { command: 'about', description: 'Your elevator pitch and skills' },
  { command: 'work', description: 'List your flagship projects' },
  { command: 'work 1-5', description: 'Deep dive into a project' },
  { command: '1-5', description: 'Quick project deep dive' },
  { command: 'contact', description: 'Show contact links' },
  { command: 'resume', description: 'Open the resume preview' },
];

const renderHelpOutput = () => {
  return [
    'Available commands:',
    ...commandDescriptions.map((item) => `  ${item.command}  —  ${item.description}`),
    '',
    'Try `about`, `work`, or `contact`.',
  ].join('\n');
};

const completions = [
  'help',
  'about',
  'work',
  'work 1',
  'work 2',
  'work 3',
  'work 4',
  'work 5',
  'contact',
  'resume',
  'clear',
  '1',
  '2',
  '3',
  '4',
  '5',
];

type ApiResponse = {
  status: 'success' | 'error';
  type: 'text' | 'preview' | 'adventure';
  output: string;
  previewData?: PreviewData;
  hint?: string;
};

const Terminal = () => {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const $termRef = useRef<any>(null);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewData, setPreviewData] = useState<PreviewData | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [geoCity, setGeoCity] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const storedTheme = window.localStorage.getItem('portfolio-theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('portfolio-theme', theme);
    }
  }, [theme]);

  // 1B: Fetch geo on mount — silent fail, no UI impact
  useEffect(() => {
    fetch('/api/geo')
      .then((r) => r.json())
      .then(({ city }) => { if (city) setGeoCity(city); })
      .catch(() => {});
  }, []);

  // 1B: Echo geo greeting once both terminal and geo data are ready
  useEffect(() => {
    if (geoCity && $termRef.current && loaded) {
      $termRef.current.echo(`[[;;;geo-greeting]Hey there from ${geoCity}!]`);
    }
  }, [geoCity, loaded]);

  // Cleanup idle timer on unmount
  useEffect(() => {
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!terminalRef.current || loaded) return;

    const $terminal = $(terminalRef.current) as any;
    $termRef.current = $terminal;

    const clearNudge = () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
        idleTimerRef.current = null;
      }
    };

    $terminal.terminal(
      async (input: string) => {
        clearNudge();

        const trimmed = input.trim();
        if (!trimmed) return;

        if (trimmed === 'help') {
          return renderHelpOutput();
        }

        if (trimmed === 'clear') {
          $terminal.clear();
          return;
        }

        const response = await fetch('/api/commands/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ command: trimmed }),
        });

        if (!response.ok) {
          return `Server error: ${response.status} ${response.statusText}`;
        }

        const data: ApiResponse = await response.json();
        if (data.type === 'preview' && data.previewData) {
          setPreviewData(data.previewData);
          setPreviewOpen(true);
        }

        return data.output || `Command returned no output.`;
      },
      {
        greetings: "Welcome to Rick James' terminal portfolio. Type `help` to begin.",
        prompt: 'rick@portfolio:~$ ',
        name: 'rick-portfolio',
        height: '100%',
        width: '100%',
        // 1A: Cancel nudge on first keypress
        keydown: clearNudge,
        completion(command: string, callback: any) {
          const normalized = command.toLowerCase();
          const matches = completions.filter((item) => item.startsWith(normalized));
          callback(matches);
        },
      }
    );

    // 1A: Nudge after 5s of inactivity — respects reduced motion (static text either way)
    idleTimerRef.current = setTimeout(() => {
      if ($termRef.current) {
        $termRef.current.echo('[[;;;nudge]Not sure where to start? Try typing `help`.]');
      }
    }, 5000);

    setLoaded(true);
  }, [loaded]);

  return (
    <div className="terminal-wrapper">
      <div className="terminal-controls">
        <ThemeToggle theme={theme} onToggle={setTheme} />
      </div>

      <div className="terminal-shell">
        <div ref={terminalRef} className="terminal-window" />
        <PreviewModal open={previewOpen} onOpenChange={setPreviewOpen} previewData={previewData} />
      </div>
    </div>
  );
};

export default Terminal;
