import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <main className={styles.container}>
        <section className={styles.content}>
          <header className={styles.brand}>
            <h3 className={styles.title}>Contos de Festas</h3>
            <p className={styles.description}>Criando momentos inesquecíveis</p>
          </header>

          <address className={styles.contact}>
            <p className={styles.contactItem}>📧 contato@contosdefestas.com</p>
            <p className={styles.contactItem}>📱 (11) 99999-9999</p>
          </address>
        </section>

        <section className={styles.bottom}></section>
      </main>
    </footer>
  );
}
