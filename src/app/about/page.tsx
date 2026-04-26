"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

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
              { name: "Products", id: "/products" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Mind Haven Nutrition"
          />
        </div>

        <div id="about" data-section="about">
          <MetricSplitMediaAbout
            title="Our Mission for Mindfulness"
            description="We are dedicated to helping people reclaim their focus and clarity in a fast-paced world through science-backed nutrition and intentional living."
            metrics={[
              { value: "10+ years", title: "Research Experience" },
              { value: "100% Organic", title: "Pure Sourcing" },
            ]}
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Mind Haven Nutrition"
            columns={[
              { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Blog", href: "#" }] },
              { title: "Products", items: [{ label: "Supplements", href: "#products" }, { label: "Resources", href: "#" }] },
              { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Use", href: "#" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
