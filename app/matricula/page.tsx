import Topbar from '../../componentes/headers/Topbar';
import Topo from '../../componentes/headers/Topo';

export default function Page() {
  return (
    <>
    <Topbar />
    <header className="top-bar-banner bg-gradient-to-b from-cyan-400 to-blue-50">
       <Topo/>
    </header>
    <h1>Matrícula</h1>
    </>
  );
}
