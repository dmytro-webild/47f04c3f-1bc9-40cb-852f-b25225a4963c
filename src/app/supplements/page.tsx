"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import ProductCardFour from '@/components/sections/product/ProductCardFour';

export default function SupplementsPage() {
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

        <div id="products" data-section="products">
          <ProductCardFour
            title="Our Supplements"
            description="Discover our top 10 curated supplements for your well-being."
            textboxLayout="default"
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            useInvertedBackground={false}
            products={[
              { id: "s1", name: "Memory Fuel", price: "", variant: "Selling Fast", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777868743731-y4wa2vn3.png?_wi=1" },
              { id: "s2", name: "Mind Armor", price: "", variant: "Selling Fast", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777869055586-ikhqg5on.png?_wi=1" },
              { id: "s3", name: "ZenCortex", price: "", variant: "New Product", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777869239141-ymqry49a.png?_wi=1" },
              { id: "s4", name: "Java Brain", price: "", variant: "New Product ", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777868743731-y4wa2vn3.png?_wi=2" },
              { id: "s5", name: "Brain Song", price: "", variant: "Selling Fast", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777869055586-ikhqg5on.png?_wi=2" },
              { id: "s6", name: "Vitamin D+K", price: "", variant: "Selling Fast", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777869239141-ymqry49a.png?_wi=2" },
              { id: "s7", name: "Ashwagandha Max", price: "", variant: "Selling Fast", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777868743731-y4wa2vn3.png?_wi=3" },
              { id: "s8", name: "Turmeric Curcumin", price: "", variant: "Selling Fast", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777869055586-ikhqg5on.png?_wi=3" },
              { id: "s9", name: "Probiotic Gold", price: "", variant: "Selling Fast", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777869239141-ymqry49a.png?_wi=3" },
              { id: "s10", name: "B-Complex Boost", price: "", variant: "Selling Fast", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777868743731-y4wa2vn3.png?_wi=4" },
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Mind Haven Nutrition"
            columns={[
              { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Blog", href: "/blog" }] },
              { title: "Products", items: [{ label: "Supplements", href: "/supplements" }] },
              { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Use", href: "#" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}