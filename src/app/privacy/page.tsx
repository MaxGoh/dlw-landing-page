import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Do Less Work",
  description:
    "Learn how Do Less Work protects your privacy and handles your data when using our Reddit intelligence platform.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 mb-4">
              Do Less Work PTE. LTD. ("we," "our," or "us") operates the Do Less
              Work platform, which provides Reddit intelligence services to help
              businesses drive traffic and boost search rankings. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2.1 Personal Information
            </h3>
            <p className="text-gray-700 mb-4">
              When you use our services, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Contact information (name, email address, phone number)</li>
              <li>
                Business information (company name, website URL, industry)
              </li>
              <li>Account credentials (username, password)</li>
              <li>
                Payment information (processed securely through third-party
                payment processors)
              </li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2.2 Reddit Analysis Data
            </h3>
            <p className="text-gray-700 mb-4">
              In providing our services, we analyze:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                Public Reddit posts and comments related to your business or
                industry
              </li>
              <li>Reddit community engagement metrics</li>
              <li>Competitor mentions and discussions</li>
              <li>Trending topics and keywords in relevant subreddits</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2.3 Automatically Collected Information
            </h3>
            <p className="text-gray-700 mb-4">We automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                Device information (IP address, browser type, operating system)
              </li>
              <li>
                Usage data (pages visited, features used, time spent on
                platform)
              </li>
              <li>
                Analytics data (through Google Analytics and similar services)
              </li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Provide and maintain our Reddit intelligence services</li>
              <li>
                Analyze Reddit data to generate insights for your business
              </li>
              <li>Monitor brand mentions and competitor activity</li>
              <li>Generate reports and analytics dashboards</li>
              <li>Send notifications about relevant Reddit discussions</li>
              <li>Process payments and manage subscriptions</li>
              <li>Improve our services and develop new features</li>
              <li>Communicate with you about your account and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Information Sharing and Disclosure
            </h2>
            <p className="text-gray-700 mb-4">
              We may share your information with:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              4.1 Service Providers
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Cloud hosting providers (for data storage)</li>
              <li>Analytics providers (Google Analytics)</li>
              <li>Payment processors</li>
              <li>Email service providers</li>
              <li>Customer support tools</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              4.2 Business Transfers
            </h3>
            <p className="text-gray-700 mb-4">
              In the event of a merger, acquisition, or sale of assets, your
              information may be transferred to the acquiring entity.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              4.3 Legal Requirements
            </h3>
            <p className="text-gray-700 mb-4">
              We may disclose information when required by law, court order, or
              government request, or to protect our rights, property, or safety.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Data Security
            </h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to
              protect your information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection</li>
              <li>Secure data centers with physical security controls</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Your Rights and Choices
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              6.1 Access and Correction
            </h3>
            <p className="text-gray-700 mb-4">
              You can access and update your personal information through your
              account settings or by contacting us.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              6.2 Data Deletion
            </h3>
            <p className="text-gray-700 mb-4">
              You may request deletion of your personal information, subject to
              legal and contractual obligations.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              6.3 Marketing Communications
            </h3>
            <p className="text-gray-700 mb-4">
              You can opt-out of marketing emails by clicking the unsubscribe
              link or contacting us directly.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              6.4 Cookies
            </h3>
            <p className="text-gray-700 mb-4">
              You can manage cookie preferences through your browser settings.
              See our Cookie Policy for more information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Reddit Data and Third-Party Content
            </h2>
            <p className="text-gray-700 mb-4">
              Our services analyze publicly available Reddit content. We do not
              control Reddit's data practices and recommend reviewing Reddit's
              privacy policy. We only access and analyze public Reddit data in
              compliance with Reddit's API terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Data Retention
            </h2>
            <p className="text-gray-700 mb-4">
              We retain your personal information for as long as necessary to
              provide our services and comply with legal obligations. Reddit
              analysis data is retained for the duration of your subscription
              and may be aggregated and anonymized for product improvement
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. International Data Transfers
            </h2>
            <p className="text-gray-700 mb-4">
              As we are based in Singapore, your information may be transferred
              to and processed in Singapore and other countries where our
              service providers operate. We ensure appropriate safeguards are in
              place for international transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Children's Privacy
            </h2>
            <p className="text-gray-700 mb-4">
              Our services are not intended for individuals under 18 years of
              age. We do not knowingly collect personal information from
              children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will
              notify you of material changes by posting the new policy on our
              website and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or our data
              practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Do Less Work PTE. LTD.</strong>
                <br />
                Email: hello@dolesswork.ai
                <br />
                Address: Singapore
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
