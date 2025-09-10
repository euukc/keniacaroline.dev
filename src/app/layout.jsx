import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";


const interTight = Inter_Tight({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Kênia Caroline - Desenvolvedora FullStack",
  description: "Criando soluções para problemas reais",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">

      <body className={`${interTight.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  );
}
