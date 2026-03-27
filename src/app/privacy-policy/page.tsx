import type { Metadata } from "next";
import HeroMinimal from "@/components/sections/HeroMinimal";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | GolfBack",
  description: "GolfBack's privacy policy covering data collection, usage, storage, and your rights as a user of our platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroMinimal
        label="Legal"
        heading="Privacy Policy"
        subtitle="Effective Date: October 31, 2020"
      />

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl prose prose-neutral prose-headings:font-bold prose-headings:text-neutral-900 prose-p:text-neutral-600 prose-p:leading-relaxed prose-li:text-neutral-600">

            <h2>Information We Collect</h2>
            <p>GolfBack collects several categories of data in the course of providing its services.</p>

            <h3>Personal Data</h3>
            <p>While using our service, we may ask you to provide personally identifiable information, including but not limited to:</p>
            <ul>
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Industry and business information</li>
            </ul>

            <h3>Usage Data</h3>
            <p>
              We may also collect information about how the service is accessed and used. This usage data may include
              information such as your computer's Internet Protocol address (IP address), browser type, browser version,
              the pages of our service that you visit, the time and date of your visit, the time spent on those pages,
              unique device identifiers, and other diagnostic data.
            </p>

            <h3>Tracking and Cookies Data</h3>
            <p>
              We use cookies and similar tracking technologies to track activity on our service and hold certain information.
              Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct
              your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our service.
            </p>
            <p>Types of cookies we use:</p>
            <ul>
              <li><strong>Session Cookies:</strong> We use session cookies to operate our service.</li>
              <li><strong>Preference Cookies:</strong> We use preference cookies to remember your preferences and various settings.</li>
              <li><strong>Security Cookies:</strong> We use security cookies for security purposes.</li>
              <li><strong>Advertising Cookies:</strong> Advertising cookies are used to serve you with advertisements that may be relevant to you and your interests.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>GolfBack uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To allow you to participate in interactive features of our service when you choose to do so</li>
              <li>To provide customer care and support</li>
              <li>To provide analysis or valuable information so that we can improve the service</li>
              <li>To monitor the usage of the service</li>
              <li>To detect, prevent, and address technical issues</li>
            </ul>

            <h2>Transfer of Data</h2>
            <p>
              Your information, including personal data, may be transferred to — and maintained on — computers located
              outside of your state, province, country, or other governmental jurisdiction where the data protection laws
              may differ from those of your jurisdiction.
            </p>
            <p>
              GolfBack will take all steps reasonably necessary to ensure that your data is treated securely and in
              accordance with this privacy policy, and no transfer of your personal data will take place to an organization
              or a country unless there are adequate controls in place including the security of your data and other
              personal information.
            </p>

            <h2>Disclosure of Data</h2>
            <h3>Legal Requirements</h3>
            <p>GolfBack may disclose your personal data in the good faith belief that such action is necessary to:</p>
            <ul>
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of GolfBack</li>
              <li>Prevent or investigate possible wrongdoing in connection with the service</li>
              <li>Protect the personal safety of users of the service or the public</li>
              <li>Protect against legal liability</li>
            </ul>

            <h2>Security of Data</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet
              or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
              protect your personal data, we cannot guarantee its absolute security.
            </p>

            <h2>Service Providers</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our service ("Service Providers"), to
              provide the service on our behalf, to perform service-related services, or to assist us in analyzing how
              our service is used. These third parties have access to your personal data only to perform these tasks on
              our behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally
              identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware
              that your Child has provided us with personal data, please contact us. If we become aware that we have
              collected personal data from children without verification of parental consent, we take steps to remove
              that information from our servers.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
