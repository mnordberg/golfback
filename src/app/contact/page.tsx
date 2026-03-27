import type { Metadata } from "next";
import HeroMinimal from "@/components/sections/HeroMinimal";
import ContactForm from "@/components/sections/ContactForm";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact GolfBack",
  description:
    "Get in touch with GolfBack. Whether you have questions, need support, or want to learn more about our platform, we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <HeroMinimal
        label="Get in Touch"
        heading="Let's Talk"
        subtitle="Questions, partnership inquiries, or just want to learn more — we're here."
      />

      <ContactForm />

      {/* Contact Info */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-3">
            <div className="text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                Office
              </p>
              <p className="text-sm leading-relaxed text-neutral-600">
                Hummelstown, PA
              </p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                Phone
              </p>
              <p className="text-sm leading-relaxed text-neutral-600">
                (717) 455-8010
              </p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                Email
              </p>
              <p className="text-sm leading-relaxed text-neutral-600">
                info@golfback.com
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
