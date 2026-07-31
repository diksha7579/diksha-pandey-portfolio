import Background from "../Background/Background";
import Cursor from "../Cursor/Cursor";
import Spotlight from "../Spotlight/Spotlight";
import ScrollProgress from "../ScrollProgress/ScrollProgress";

function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">
      
      <Background />

      <Spotlight />

      <ScrollProgress />

      <Cursor />

      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}

export default Layout;