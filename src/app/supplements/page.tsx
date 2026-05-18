"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import ProductCardFour from '@/components/sections/product/ProductCardFour';

export default function SupplementsPage() {
  const supplements = [
    { id: "s1", name: "Memory Fuel", price: "", variant: "Top Seller", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777868743731-y4wa2vn3.png?_wi=1", onProductClick: () => window.open('https://9eaff7gi9-wcdl8rikh31jez2o.hop.clickbank.net', '_blank') },
    { id: "s2", name: "Mind Armor", price: "", variant: "Top Seller", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777869055586-ikhqg5on.png?_wi=1", onProductClick: () => window.open('https://www.lifecoredynamics.com/mindarmor?&shield=84a7bhfn-82f2y41pn5g6wdw8s', '_blank') },
    { id: "s3", name: "ZenCortex", price: "", variant: "Top Seller", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777869239141-ymqry49a.png?_wi=1", onProductClick: () => window.open('https://fea986bo9d-43o8ti7r8ueooez.hop.clickbank.net', '_blank') },
    { id: "s4", name: "Java Brain", price: "", variant: "New Product", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777876557877-sxo8ck2a.png", onProductClick: () => window.open('https://bc846kpc7cw44ne5djn0sxjf40.hop.clickbank.net', '_blank') },
    { id: "s5", name: "Brain Song", price: "", variant: "Top Seller", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777873454182-yswjwhig.png", onProductClick: () => window.open('https://d0643djo9c3a1m9x03vjyly8bv.hop.clickbank.net', '_blank') },
    { id: "s6", name: "NeuroXen", price: "", variant: "Top Seller", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777875638563-frz4xls5.png", onProductClick: () => window.open('https://neuroxen.link', '_blank') },
    { id: "s7", name: "Neuro Prime", price: "", variant: "Top Seller", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777874864346-8ojlmuxm.png", onProductClick: () => window.open('https://neuroprime.link', '_blank') },
    { id: "s8", name: "Pineal Guardian X", price: "", variant: "Top Seller", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777874884898-6h39qfhm.png", onProductClick: () => window.open('https://pinealguardianx.link', '_blank') },
    { id: "s9", name: "Neura Brain Clarity", price: "", variant: "Top Seller", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777875195038-to04osm0.png", onProductClick: () => window.open('https://neurabrain.link', '_blank') },
    { id: "s10", name: "NeuroXen", price: "", variant: "Top Seller", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777875616012-9820ckf7.png", onProductClick: () => window.open('https://neuroxen.link', '_blank') },
  ];

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
            products={supplements}
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