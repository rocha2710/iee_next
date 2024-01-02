import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Topbar from '../componentes/headers/Topbar';
import Topo from '../componentes/headers/Topo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IEE',
  description: 'Instituto de Ensino Educar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${inter.className} bg-blue-50`}>
        <header className="top-bar-banner bg-gradient-to-b from-cyan-400 to-blue-50">
          <Topbar/>
          <Topo/>
        </header>
        <div className="content-page gap-4 p-3 ml-auto mr-auto rounded mt-4 ">
          {children}
        </div>
        <footer className="fixed bottom-0">Desenvolvido por Superapps 2024.</footer>
      </body>
    </html>
  );
}
