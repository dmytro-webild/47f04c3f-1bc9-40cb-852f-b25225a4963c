"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import { useState } from "react";
import Input from '@/components/form/Input';

export default function BlogPage() {
  const [comment, setComment] = useState("");
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

        <div id="blog" data-section="blog">
          <BlogCardTwo
            animationType="slide-up"
            title="Mindfulness Insights"
            description="Explore the latest research and tips on cognitive health."
            textboxLayout="default"
            useInvertedBackground={false}
            blogs={[
              { id: "b1", category: "Wellness", title: "The Science of Clarity", excerpt: "How deep focus transforms your daily productivity.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CtJvMn9momZmpQncydBEDXlj8M/tmp/a-group-of-people-doing-meditation-1777870513384-a63a5410.png", authorName: "Dr. Aris", authorAvatar: "", date: "May 20, 2024" }
            ]}
          />
          <div className="container mx-auto p-8 max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Leave a comment</h3>
            <Input value={comment} onChange={setComment} placeholder="Share your thoughts..." />
            <button className="mt-4 px-6 py-2 bg-primary text-white rounded">Post Review</button>
          </div>
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Mind Haven Nutrition"
            columns={[
              { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Blog", href: "/blog" }] },
              { title: "Products", items: [{ label: "Supplements", href: "/products" }, { label: "Resources", href: "#" }] },
              { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Use", href: "#" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}