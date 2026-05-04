"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
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

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={true}
      background={{ variant: "gradient-bars" }}
      title="Clear Minds, Brighter Future"
      description="Unlock your mental potential with our evidence-based mindfulness tools and brain-health supplements designed for everyday clarity."
      testimonials={[
        { name: "Alice T.", handle: "@alicet", testimonial: "I've never felt more focused and calm. Truly a life-changing experience.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/portrait-of-a-relaxed-person-smiling-sof-1777201395521-4e56ae24.png" },
        { name: "Brian K.", handle: "@briank", testimonial: "Simple, effective, and beautifully crafted. Highly recommend to anyone seeking clarity.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/portrait-of-a-calm-individual-in-a-brigh-1777201403641-1ba5a484.png" },
        { name: "Chloe S.", handle: "@chloes", testimonial: "Excellent quality supplements. My brain fog has completely lifted.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/portrait-of-a-happy-serene-individual-so-1777201411989-8579c09a.png" },
        { name: "David W.", handle: "@davidw", testimonial: "Finally found products that actually support my mindfulness practice.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/portrait-of-a-content-person-enjoying-na-1777201420082-c3692714.png" },
        { name: "Elena R.", handle: "@elenar", testimonial: "Serenity in a bottle. This has become a staple of my daily morning routine.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/close-up-portrait-warm-lighting-content--1777201428774-ce99ea2e.png" },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/a-serene-high-quality-image-of-a-person--1777201297462-30664a9c.png"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Our Commitment to Mental Wellness"
      buttons={[{ text: "Learn More", href: "#features" }]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        { id: "p1", name: "Memory Fuel", price: "", variant: "Top Seller", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777868743731-y4wa2vn3.png" },
        { id: "p2", name: "Java Brain", price: "", variant: "Top Seller", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777869055586-ikhqg5on.png" },
        { id: "p3", name: "ZenCortex", price: "", variant: "New Product", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777869239141-ymqry49a.png" },
      ]}
      title="Natural Clarity Solutions"
      description="Our curated selection of products to support cognitive health and mindfulness."
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