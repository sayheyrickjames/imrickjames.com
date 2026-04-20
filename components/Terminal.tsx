import { useEffect, useRef, useState } from 'react';
import 'jquery.terminal/css/jquery.terminal.min.css';
import 'jquery.terminal';
import $ from 'jquery';

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
  { command: 'resume', description: 'Link to your resume' },
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

const Terminal = () => {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!terminalRef.current || loaded) return;

    const $terminal = $(terminalRef.current) as any;

    $terminal.terminal(
      async (input: string) => {
        const trimmed = input.trim();
        if (!trimmed) {
          return;
        }

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

        const data = await response.json();
        if (data?.output) {
          return data.output;
        }

        return `Command not found: ${trimmed}`;
      },
      {
        greetings: 'Welcome to Rick James\' terminal portfolio. Type `help` to begin.',
        prompt: 'rick@portfolio:~$ ',
        name: 'rick-portfolio',
        height: '100%',
        width: '100%',
        completion(command: string, callback: any) {
          const normalized = command.toLowerCase();
          const matches = completions.filter((item) => item.startsWith(normalized));
          callback(matches);
        },
        keydown(event: KeyboardEvent, terminal: any) {
          return true;
        },
      }
    );

    setLoaded(true);
  }, [loaded]);

  return <div className="terminal-shell" ref={terminalRef} />;
};

export default Terminal;
