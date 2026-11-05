import Head from 'next/head';
import Terminal from '../components/Terminal';

export default function TerminalPage() {
  return (
    <main className="page-shell">
      <Head>
        <title>Terminal · Rick James</title>
      </Head>
      <Terminal />
    </main>
  );
}
