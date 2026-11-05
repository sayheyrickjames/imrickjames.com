import Image from 'next/image';
import { siPaypal, siMedium, siAirbnb, siSquare, siApple, siPinterest } from 'simple-icons';

const brand = (icon: { path: string; title: string }) => (
  <svg viewBox="0 0 24 24" role="img" aria-label={icon.title}>
    <path d={icon.path} />
  </svg>
);


export const logos: { name: string; node: JSX.Element }[] = [
  { name: 'PayPal', node: brand(siPaypal) },
  { name: 'Plaid', node: <Image src="/images/logo-plaid.png" alt="" width={32} height={32} /> },
  { name: 'Medium', node: brand(siMedium) },
  { name: 'Stash', node: <Image src="/images/logo-stash.png" alt="" width={32} height={32} /> },
  { name: 'Airbnb', node: brand(siAirbnb) },
  { name: 'Square', node: brand(siSquare) },
  { name: 'Apple', node: brand(siApple) },
  { name: 'Pinterest', node: brand(siPinterest) },
];

export default function LogoGrid() {
  return (
    <ul className="logos">
      {logos.map((l) => (
        <li className="logo-item" key={l.name}>
          {l.node}
          {l.name}
        </li>
      ))}
    </ul>
  );
}

/** The same marks as LogoGrid, as an infinite wordmark ticker. */
export function LogoMarquee() {
  return (
    <ul className="logo-ticker">
      {logos.map((l) => (
        <li className="logo-item inline" key={l.name}>
          {l.node}
          {l.name}
        </li>
      ))}
    </ul>
  );
}
