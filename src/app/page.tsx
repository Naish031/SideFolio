import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Naish</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apso;m a frontend web developer with{" "}
        <Highlight>2 years of hands-on experience</Highlight> building
        responsive, high-performance websites that blend design and
        functionality. I specialize in{" "}
        <Highlight>crafting beautiful, interactive user interfaces</Highlight>{" "}
        that not only look great but also deliver seamless user experiences
        across all devices.
      </Paragraph>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
