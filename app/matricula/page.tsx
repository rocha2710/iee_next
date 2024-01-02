import Topbar from '../../componentes/Topbar';
import Topo from '../../componentes/Topo';

export default function Page() {
  return (
    <>
    <Topbar />
    <header className="top-bar-banner bg-gradient-to-b from-cyan-400 to-blue-50">
       <Topo/>
    </header>
    </>
  );
}
