import type { Metadata } from "next";
import HeroMinimal from "@/components/sections/HeroMinimal";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | GolfBack",
  description: "GolfBack's acceptable use policy outlining prohibited conduct and consequences for violations.",
};

export default function AcceptableUsePolicyPage() {
  return (
    <>
      <HeroMinimal
        label="Legal"
        heading="Acceptable Use Policy"
        subtitle="This policy outlines the standards of conduct required of all GolfBack customers and users."
      />

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl prose prose-neutral prose-headings:font-bold prose-headings:text-neutral-900 prose-p:text-neutral-600 prose-p:leading-relaxed prose-li:text-neutral-600">

            <p>
              GolfBack, LLC provides its services subject to the following Acceptable Use Policy ("AUP").
              By accessing or using our platform, you agree to comply with this policy. GolfBack reserves
              the right to update this policy at any time with written notice.
            </p>

            <h2>A. Unacceptable Use</h2>
            <p>Users of the GolfBack platform must refrain from the following categories of conduct:</p>

            <h3>1. Intellectual Property Violations</h3>
            <p>
              Do not infringe upon the copyrights, trademarks, trade secrets, or other intellectual
              property rights of any person or organization. You may not reproduce, distribute, or create
              derivative works from copyrighted material without explicit permission from the rights holder.
            </p>

            <h3>2. Hacking and Network Attacks</h3>
            <p>
              Do not attempt unauthorized access to any computer system, network, or account. Prohibited
              activities include but are not limited to: security breaches, distributing malicious software
              or viruses, conducting denial-of-service attacks, and interfering with accounts or systems
              that do not belong to you.
            </p>

            <h3>3. Fraud</h3>
            <p>
              Do not issue fraudulent offers to sell or buy products, services, or investments. Do not
              misrepresent the terms, nature, or details of any transaction to deceive another party.
            </p>

            <h3>4. Legal Violations</h3>
            <p>
              You may not use GolfBack's platform to violate any applicable local, state, national, or
              international law or regulation, or to promote, facilitate, or encourage illegal activities
              of any kind.
            </p>

            <h3>5. Unfair or Deceptive Practices</h3>
            <p>
              Do not engage in deceptive trade practices that unfairly disadvantage competitors, partners,
              or customers. This includes misrepresentation of your identity, affiliation, or the nature
              of any offer or service.
            </p>

            <h3>6. Abusive Behavior</h3>
            <p>
              Do not harass, threaten, defame, or engage in unwanted contact with any individual or
              organization. You may not post or distribute content that is discriminatory based on
              protected characteristics, or that contains profanity, vulgar language, or personally
              threatening material.
            </p>

            <h2>B. Consequences of Violations</h2>
            <p>
              Violations of this policy may result in account suspension, service termination, or legal
              action at GolfBack's sole discretion. In cases where investigation or remediation is
              required due to a user's violation, that user may be required to cover reasonable costs
              associated with those efforts.
            </p>

            <h2>C. Reporting Violations</h2>
            <p>
              If you become aware of a violation of this policy, please report it to GolfBack with
              relevant details and timestamps:
            </p>
            <ul>
              <li>By email: <a href="mailto:bmiller@golfback.com">bmiller@golfback.com</a></li>
            </ul>

            <h2>D. Policy Changes</h2>
            <p>
              GolfBack reserves the right to modify this Acceptable Use Policy at any time. Changes will
              be communicated with written notice. Continued use of the platform following notification
              constitutes acceptance of the updated policy.
            </p>

            <h2>Contact Us</h2>
            <p>Questions about this policy can be directed to:</p>
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
