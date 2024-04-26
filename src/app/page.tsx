import Discover from "./components/layouts/home/Discover";
import GlassStyle from "./components/layouts/home/GlassStyle";
import Latest from "./components/layouts/home/Latest";
import Popular from "./components/layouts/home/Popular";
import Testimony from "./components/layouts/home/Testimony";

export default function Home() {
  return (
    <main>
      <Latest />
      <GlassStyle />
      <Discover />
      <Popular />
      <Testimony />
    </main>
  );
}
