"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Target } from "lucide-react";

export default function AboutPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="largeSmall"
        background="none"
        cardStyle="gradient-mesh"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered
            navItems={[
              { name: "About", id: "/about" },
              { name: "Supplements", id: "/supplements" },
              { name: "Blog", id: "/blog" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Mind Haven Nutrition"
          />
        </div>

        <div id="about" data-section="about">
          <SplitAbout
            title="Our Mission for Mindfulness"
            description="We are dedicated to providing evidence-based tools and supplements to help you achieve clarity in a fast-paced world."
            tag="Mindfulness"
            tagIcon={Target}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/a-serene-high-quality-image-of-a-person--1777201297462-30664a9c.png"
            buttons={[{ text: "Contact Us", href: "/contact" }]}
            bulletPoints={[
              { title: "Natural Ingredients", description: "High-quality, evidence-backed supplements for cognitive wellness." },
              { title: "Mindful Practice", description: "Tools to help you stay grounded and focused throughout your day." }
            ]}
            textboxLayout="split"
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Mind Haven Nutrition"
            columns={[
              { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Blog", href: "/blog" }] },
              { title: "Products", items: [{ label: "Supplements", href: "/supplements" }, { label: "Resources", href: "#" }] },
              { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Use", href: "#" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}