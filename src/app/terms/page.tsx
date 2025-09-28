import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Do Less Work",
  description:
    "Terms and conditions for using Do Less Work's Reddit intelligence platform.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Agreement to Terms
            </h2>
            <p className="text-gray-700 mb-4">
              By accessing or using the Do Less Work platform and services
              ("Services"), you agree to be bound by these Terms of Service
              ("Terms"). If you disagree with any part of these terms, you may
              not access our Services.
            </p>
            <p className="text-gray-700 mb-4">
              These Terms constitute a legally binding agreement between you and
              Do Less Work PTE. LTD. ("Company", "we", "us", or "our")
              concerning your access to and use of the Do Less Work website and
              any related services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Description of Services
            </h2>
            <p className="text-gray-700 mb-4">
              Do Less Work provides a Reddit intelligence platform that helps
              businesses:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                Monitor and analyze Reddit discussions relevant to their
                business
              </li>
              <li>
                Identify opportunities for engagement and traffic generation
              </li>
              <li>Track brand mentions and competitor activity</li>
              <li>Generate insights to improve search engine rankings</li>
              <li>
                Build authority and credibility through strategic Reddit
                participation
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify, suspend, or discontinue any aspect
              of our Services at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Account Registration
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              3.1 Account Creation
            </h3>
            <p className="text-gray-700 mb-4">
              To access certain features of our Services, you must register for
              an account. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>
                Accept responsibility for all activities under your account
              </li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              3.2 Account Termination
            </h3>
            <p className="text-gray-700 mb-4">
              We may suspend or terminate your account if you violate these
              Terms or engage in conduct that we determine is harmful to our
              Services, other users, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Acceptable Use Policy
            </h2>
            <p className="text-gray-700 mb-4">
              You agree not to use our Services to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Spam or engage in manipulative practices on Reddit</li>
              <li>Violate Reddit's Terms of Service or Content Policy</li>
              <li>Scrape or collect data beyond permitted use</li>
              <li>Interfere with or disrupt our Services</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated systems or bots without permission</li>
              <li>Resell or redistribute our Services without authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Reddit Compliance
            </h2>
            <p className="text-gray-700 mb-4">
              When using insights from our Services to engage on Reddit, you
              must:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Comply with Reddit's Terms of Service and Content Policy</li>
              <li>Respect subreddit rules and moderator guidelines</li>
              <li>Engage authentically and transparently</li>
              <li>Avoid vote manipulation or brigading</li>
              <li>Disclose commercial relationships when required</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We are not affiliated with Reddit Inc. and are not responsible for
              your actions on the Reddit platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Payment Terms
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              6.1 Subscription Plans
            </h3>
            <p className="text-gray-700 mb-4">
              Our Services are offered through various subscription plans. By
              subscribing, you agree to pay the fees associated with your chosen
              plan.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              6.2 Billing
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Subscriptions are billed in advance on a recurring basis</li>
              <li>
                You authorize us to charge your payment method automatically
              </li>
              <li>Prices are subject to change with 30 days' notice</li>
              <li>All fees are in USD unless otherwise specified</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              6.3 Refunds
            </h3>
            <p className="text-gray-700 mb-4">
              Subscription fees are generally non-refundable. We may provide
              refunds at our sole discretion on a case-by-case basis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Intellectual Property
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              7.1 Our Property
            </h3>
            <p className="text-gray-700 mb-4">
              All content, features, and functionality of our Services,
              including but not limited to text, graphics, logos, and software,
              are owned by Do Less Work PTE. LTD. and are protected by
              intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              7.2 Your Content
            </h3>
            <p className="text-gray-700 mb-4">
              You retain ownership of content you submit to our Services. By
              submitting content, you grant us a worldwide, non-exclusive
              license to use, reproduce, and display your content as necessary
              to provide our Services.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              7.3 Reddit Content
            </h3>
            <p className="text-gray-700 mb-4">
              Reddit content analyzed by our Services remains the property of
              the respective Reddit users. We analyze publicly available content
              in compliance with Reddit's API terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Disclaimers
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              8.1 Service Availability
            </h3>
            <p className="text-gray-700 mb-4">
              Our Services are provided "as is" and "as available" without
              warranties of any kind. We do not guarantee uninterrupted or
              error-free operation of our Services.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              8.2 Reddit Data
            </h3>
            <p className="text-gray-700 mb-4">
              We analyze publicly available Reddit data but cannot guarantee its
              accuracy, completeness, or timeliness. Reddit may change its API
              or data availability at any time.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              8.3 Business Results
            </h3>
            <p className="text-gray-700 mb-4">
              While our Services provide insights and recommendations, we do not
              guarantee specific business outcomes, traffic increases, or search
              ranking improvements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, Do Less Work PTE. LTD.
              shall not be liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                Any indirect, incidental, special, or consequential damages
              </li>
              <li>Loss of profits, revenue, or business opportunities</li>
              <li>Actions taken based on insights from our Services</li>
              <li>Violations of Reddit's terms or policies</li>
              <li>Third-party actions or content</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Our total liability shall not exceed the amount you paid for our
              Services in the twelve months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Indemnification
            </h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify, defend, and hold harmless Do Less Work
              PTE. LTD., its officers, directors, employees, and agents from any
              claims, damages, losses, or expenses arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Your use of our Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of third parties</li>
              <li>Your actions on Reddit or other platforms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Governing Law and Disputes
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              11.1 Governing Law
            </h3>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with
              the laws of Singapore, without regard to its conflict of law
              provisions.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              11.2 Dispute Resolution
            </h3>
            <p className="text-gray-700 mb-4">
              Any disputes arising from these Terms or our Services shall be
              resolved through binding arbitration in Singapore, except where
              prohibited by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms at any time. Material
              changes will be notified through our Services or via email.
              Continued use of our Services after changes constitutes acceptance
              of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              13. Severability
            </h2>
            <p className="text-gray-700 mb-4">
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision shall be limited or eliminated to the
              minimum extent necessary, and the remaining provisions shall
              remain in full effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              14. Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service, please contact us at:
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
