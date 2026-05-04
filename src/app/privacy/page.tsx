"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import LegalSection from '@/components/legal/LegalSection';

export default function PrivacyPage() {
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

        <div id="legal" data-section="legal">
            <LegalSection
                layout="page"
                title="Privacy Policy"
                sections={[
                    { heading: "Data Collection", content: { type: "paragraph", text: "We collect information you provide directly to us when you create an account, purchase products, or contact us for support. This includes your name, email address, and payment information." } },
                    { heading: "How We Use Your Data", content: { type: "list", items: ["To process and fulfill your orders", "To communicate with you about your account or orders", "To improve our services and product offerings", "To comply with legal obligations"] } },
                    { heading: "Your Rights", content: { type: "numbered-list", items: ["Access the personal data we hold about you", "Request correction of inaccurate information", "Request deletion of your data", "Object to certain data processing activities"] } }
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