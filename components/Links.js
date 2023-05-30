import Image from 'next/image';
import github from '../public/icons/github.svg';
import hashscan from '../public/icons/hashscan.svg';

export default function Links({ className }) {
  return (
    <ul className={`d-flex justify-content-center ${className}`}>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/LimeChain/whbar"
          className="text-small d-flex align-items-center link p-4"
        >
          <Image src={github} alt="github-logo" />
          <span className="ms-3">Docs</span>
        </a>
      </li>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://hashscan.io/mainnet/contract/0.0.2934819"
        className="text-small d-flex align-items-center link p-4"
      >
        <Image src={hashscan} alt="hashscan-logo" />
        <span className="ms-3">View in HashScan</span>
      </a>
    </ul>
  );
}
