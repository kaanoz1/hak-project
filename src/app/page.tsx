import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Container from "@/components/UI/Container";
import { NextPage } from "next";

type Props = {};

const Page: NextPage<Props> = () => {
  return (
    <Container>
      <Home id="anasayfa" />
      <Mission id="misyonumuz" />
      <Services id="hizmetlerimiz" />
      <Contact id="iletisim" />
    </Container>
  );
};

export default Page;
