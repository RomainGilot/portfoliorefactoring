import Layout from "../../../components/common/Layout";
import Welcome from "../Welcome/Welcome";
import AboutMe from "../AboutMee/AboutMe";
import Contact from "../Contact/Contact";
import Journey from "../Journey/Journey";

export default function Home() {
  return (
    <Layout>
      <Welcome />
      <AboutMe />
      <Journey />
      <Contact />
    </Layout>
  );
}
