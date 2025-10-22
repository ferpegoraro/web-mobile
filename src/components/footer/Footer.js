import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.title}>Contos de Festas</h3>
            <p className={styles.description}>Criando momentos inesquecíveis</p>
          </div>

          <div className={styles.contact}>
            <p className={styles.contactItem}>📧 contato@contosdefestas.com</p>
            <p className={styles.contactItem}>📱 (11) 99999-9999</p>
          </div>
        </div>

        <div className={styles.bottom}></div>
      </div>
    </footer>
  );
}
