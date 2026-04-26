"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextAbout from '@/components/sections/about/TextAbout';
import { Globe, Target, Users, Zap, Shield, Leaf, Sun } from "lucide-react";

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
        {
          name: "About",          id: "about"},
        {
          name: "Products",          id: "products"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Mind Haven Nutrition"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars"}}
      title="Clear Minds, Brighter Future"
      description="Unlock your mental potential with our evidence-based mindfulness tools and brain-health supplements designed for everyday clarity."
      testimonials={[
        {
          name: "Alice T.",          handle: "@alicet",          testimonial: "I've never felt more focused and calm. Truly a life-changing experience.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/portrait-of-a-relaxed-person-smiling-sof-1777201395521-4e56ae24.png"},
        {
          name: "Brian K.",          handle: "@briank",          testimonial: "Simple, effective, and beautifully crafted. Highly recommend to anyone seeking clarity.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/portrait-of-a-calm-individual-in-a-brigh-1777201403641-1ba5a484.png"},
        {
          name: "Chloe S.",          handle: "@chloes",          testimonial: "Excellent quality supplements. My brain fog has completely lifted.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/portrait-of-a-happy-serene-individual-so-1777201411989-8579c09a.png"},
        {
          name: "David W.",          handle: "@davidw",          testimonial: "Finally found products that actually support my mindfulness practice.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/portrait-of-a-content-person-enjoying-na-1777201420082-c3692714.png"},
        {
          name: "Elena R.",          handle: "@elenar",          testimonial: "Serenity in a bottle. This has become a staple of my daily morning routine.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/close-up-portrait-warm-lighting-content--1777201428774-ce99ea2e.png"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/a-serene-high-quality-image-of-a-person--1777201297462-30664a9c.png"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/a-serene-high-quality-image-of-a-person--1777201297462-30664a9c.png",          alt: "Alice"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/an-aesthetic-top-down-view-of-organic-br-1777201305082-d26e68ef.png",          alt: "Brian"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/abstract-minimalist-illustration-represe-1777201312172-afaa60e4.png",          alt: "Chloe"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/soft-focus-macro-shot-of-a-fresh-plant-l-1777201319202-856066b5.png",          alt: "David"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/minimalistic-composition-of-an-hourglass-1777201328089-1069eb13.png",          alt: "Elena"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "Mindfulness"},
        {
          type: "text",          text: "Brain Health"},
        {
          type: "text",          text: "Daily Clarity"},
        {
          type: "text",          text: "Sustainable"},
        {
          type: "text",          text: "Evidence-Based"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Our Commitment to Mental Wellness"
      buttons={[
        {
          text: "Learn More",          href: "#features"},
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          name: "Memory Fuel",          price: "",          variant: "Top Seller",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777207508215-g4hmf8jn.png"},
        {
          id: "p2",          name: "Java Brain",          price: "",          variant: "Top Seller",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/uploaded-1777207759110-ng3eb0r8.png"},
        {
          id: "p3",          name: "ZenCortex",          price: "$29.99",          variant: "New Product",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/high-quality-wellness-product-elegant-mi-1777201361689-00c4a0c5.png"},
        {
          id: "p4",          name: "Brain Health Nutrients",          price: "$45.99",          variant: "60 Tablets",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/wellness-product-set-elegantly-arranged--1777201370644-c1e12d0a.png"},
        {
          id: "p5",          name: "Mindful Matcha",          price: "$19.99",          variant: "Standard Pack",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/supplement-bottle-focusing-on-focus-clea-1777201378347-11370fc7.png"},
        {
          id: "p6",          name: "Daily Calm Routine",          price: "$59.99",          variant: "3-Piece Set",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/wellness-product-peaceful-aura-elegant-c-1777201386356-7e54b894.png"},
      ]}
      title="Natural Clarity Solutions"
      description="Our curated selection of products to support cognitive health and mindfulness."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Scientific Research",          description: "Every ingredient is backed by clinical research and testing.",          buttonIcon: Zap,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/abstract-minimalist-illustration-represe-1777201312172-afaa60e4.png"},
        {
          title: "Natural Purity",          description: "Sourced from the finest organic growers around the world.",          buttonIcon: Shield,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/soft-focus-macro-shot-of-a-fresh-plant-l-1777201319202-856066b5.png"},
        {
          title: "Sustainable Practices",          description: "Eco-friendly packaging and fair-trade sourcing standard.",          buttonIcon: Leaf,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/minimalistic-composition-of-an-hourglass-1777201328089-1069eb13.png"},
        {
          title: "Mental Clarity",          description: "Supports deep focus and reduces everyday mental fog.",          buttonIcon: Sun,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/serene-light-rays-entering-a-minimalist--1777201335719-e07fa925.png"},
      ]}
      title="Designed for Optimal Function"
      description="Evidence-backed features that ensure your mind stays sharp and relaxed."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          value: "15,000+",          title: "Happy Users",          description: "Community members using our tools.",          icon: Users,
        },
        {
          id: "m2",          value: "98%",          title: "Focus Boost",          description: "Reported increase in daily focus.",          icon: Target,
        },
        {
          id: "m3",          value: "450+",          title: "Global Partners",          description: "Sustainable sourcing partnerships.",          icon: Globe,
        },
      ]}
      title="Impact by the Numbers"
      description="Real results from thousands of mindful individuals."
    />
  </div>

  <div id="testimonial-single" data-section="testimonial-single">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="This experience has completely redefined how I view mindfulness. Clarity is no longer an aspiration, but my reality."
      rating={5}
      author="Sarah L."
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/portrait-of-a-relaxed-person-smiling-sof-1777201437071-56c2d205.png",          alt: "Sarah"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/portrait-of-a-calm-individual-in-a-brigh-1777201447989-03ea834b.png",          alt: "Brian"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/portrait-of-a-happy-serene-individual-so-1777201457354-c796e673.png",          alt: "Chloe"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/portrait-of-a-content-person-enjoying-na-1777201465343-d8365526.png",          alt: "David"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/close-up-portrait-warm-lighting-content--1777201475079-67449249.png",          alt: "Elena"},
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",          title: "How quickly do supplements work?",          content: "Most users report improvements in clarity within 7-10 days of consistent usage."},
        {
          id: "f2",          title: "Are these products natural?",          content: "Yes, we prioritize organic and natural ingredients in all our supplements."},
        {
          id: "f3",          title: "Can I use these alongside other treatments?",          content: "Always consult with your primary healthcare provider before adding new supplements."},
      ]}
      sideTitle="Questions? We Have Answers."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Get in touch"
      title="Start Your Mindfulness Journey Today"
      description="Have questions or need personalized advice? Reach out to our expert care team."
      buttons={[
        {
          text: "Contact Us",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Mind Haven Nutrition"
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About",              href: "#about"},
            {
              label: "Blog",              href: "#"},
          ],
        },
        {
          title: "Products",          items: [
            {
              label: "Supplements",              href: "#products"},
            {
              label: "Resources",              href: "#"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Use",              href: "#"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
