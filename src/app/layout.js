import "./globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export const metadata = {
  title: "Contos de Festas - Momentos Inesquecíveis",
  description: "Criando momentos inesquecíveis e transformando sonhos em realidade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="main-layout">
          <Header />
          <main className="content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
