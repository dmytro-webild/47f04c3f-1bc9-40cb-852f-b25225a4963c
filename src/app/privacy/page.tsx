"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import LegalSection from '@/components/legal/LegalSection';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function PrivacyPolicyPage() {
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
              { name: "Blog", id: "/blog" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Mind Haven Nutrition"
          />
        </div>

        <div id="privacy" data-section="privacy">
          <LegalSection
            layout="page"
            title="Privacy Policy"
            sections={[
              {
                heading: "Introduction",                
                content: { type: "paragraph", text: "At Mind Haven Nutrition, we value your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information." }
              },
              {
                heading: "Data Collection",                
                content: { type: "list", items: ["Information you provide directly to us", "Usage data collected automatically", "Cookies and tracking technologies"] }
              },
              {
                heading: "How We Use Your Data",                
                content: { type: "numbered-list", items: ["To provide and maintain our services", "To notify you about changes to our service", "To provide customer support"] }
              }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Mind Haven Nutrition"
            columns={[
              { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Blog", href: "/blog" }] },
              { title: "Products", items: [{ label: "Supplements", href: "/products" }, { label: "Resources", href: "#" }] },
              { title: "Legal", items: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Use", href: "#" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}