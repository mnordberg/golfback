import type { Metadata } from "next";
import HeroMinimal from "@/components/sections/HeroMinimal";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Disclaimer | GolfBack",
  description: "GolfBack's disclaimer covering content use, pricing, promotions, and trademark acknowledgments.",
};

export default function DisclaimerPage() {
  return (
    <>
      <HeroMinimal
        label="Legal"
        heading="Disclaimer"
        subtitle="Please read this disclaimer carefully before using GolfBack's website or services."
      />

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl prose prose-neutral prose-headings:font-bold prose-headings:text-neutral-900 prose-p:text-neutral-600 prose-p:leading-relaxed prose-li:text-neutral-600">

            <h2>General Disclaimer</h2>
            <p>
              The content on this website is the intellectual property of GolfBack, LLC. You may not
              reuse, repurpose, republish, or reprint such content without our written consent.
            </p>
            <p>
              All information provided on this website is for educational and informational purposes only
              and is not a substitute for professional advice. GolfBack has made reasonable efforts to
              verify the accuracy of information presented on this site, but makes no guarantees as to its
              completeness or accuracy. Users assume their own risk when acting on any information presented
              here.
            </p>

            <h2>Pricing Disclaimer</h2>
            <p>
              Prices listed on this website are for advertising and informational purposes only and are
              subject to change without notice. GolfBack reserves the right to offer special or promotional
              pricing at any time. We cannot provide retroactive discounts or refunds in the event that
              pricing changes after a transaction has been completed.
            </p>

            <h2>Promotional Offers</h2>
            <p>
              Promotional offers, including limited-time pricing and introductory discounts, are subject to
              specific terms and expiration dates. Any offer described on this website is valid only within
              the period and conditions specified. GolfBack is under no obligation to extend, renew, or
              honor expired promotional offers.
            </p>

            <h2>Trademark Disclaimer</h2>
            <p>
              All product and company names referenced on this website are trademarks™ or registered®
              trademarks of their respective holders. Use of them on this site does not imply any
              affiliation with or endorsement by those trademark holders.
            </p>

            <h2>External Links</h2>
            <p>
              This website may contain links to third-party websites. These links are provided for
              convenience only. GolfBack has no control over the content of those sites and accepts no
              responsibility for them or for any loss or damage that may arise from your use of them.
            </p>

            <h2>Contact Us</h2>
            <p>Questions about this disclaimer can be directed to:</p>
            <ul>
              <li>By email: <a href="mailto:admin@golfbacksolutions.com">admin@golfbacksolutions.com</a></li>
              <li>By phone: (888) 817-8107</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
