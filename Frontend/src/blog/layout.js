// import styles from "../styles/layout.module.css";
import Link from 'next/link';

const name = 'Next.js';
export const siteTitle = 'Next.js Project Website';

export default function Layout({ children, home }) {
  return (
    <div className="container">
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="A personal website using React with Next.js"
      />
      <header className="header">
        {home ? (
          <></>
        ) : (
          <h2>
            <Link href="/">
              <a>{name}</a>
            </Link>
          </h2>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="backToHome">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
