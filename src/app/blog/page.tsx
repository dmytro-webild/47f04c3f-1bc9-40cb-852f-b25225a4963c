"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import { useState } from "react";
import Input from '@/components/form/Input';
import ButtonHoverMagnetic from '@/components/button/ButtonHoverMagnetic/ButtonHoverMagnetic';

export default function BlogPage() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

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
            <div className="flex gap-2 items-center">
              <div className="flex-1">
                <Input value={comment} onChange={setComment} placeholder="Share your thoughts..." />
              </div>
              <ButtonHoverMagnetic 
                  text="Post"
                  onClick={handleAddComment}
              />
            </div>

            <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Comments</h4>
                {comments.length === 0 ? (
                    <p className="text-gray-500 italic">No comments yet.</p>
                ) : (
                    <ul className="space-y-4">
                        {comments.map((c, index) => (
                            <li key={index} className="p-4 bg-gray-100 rounded border">
                                {c}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
          </div>
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