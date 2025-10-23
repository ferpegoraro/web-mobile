import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <main className={styles.container}>
        <section className={styles.logo}>
          <h1 className={styles.title}>Contos de Festas</h1>
          <p className={styles.subtitle}>Momentos inesquecíveis</p>
        </section>
        
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Início</Link>
          <Link href="/about" className={styles.navLink}>Sobre</Link>
          <Link href="/contact" className={styles.navLink}>Contato</Link>
        </nav>
      </main>
    </header>
  );
}
