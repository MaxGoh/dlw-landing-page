import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Do Less Work",
  description:
    "Learn about how Do Less Work uses cookies and similar technologies on our website.",
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        <p className="text-sm text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 mb-4">
              Do Less Work PTE. LTD. ("we", "us", or "our") uses cookies and
              similar tracking technologies on our website and platform. This
              Cookie Policy explains what these technologies are, why we use
              them, and your rights to control their use.
            </p>
            <p className="text-gray-700 mb-4">
              By using our website and services, you consent to the use of
              cookies in accordance with this policy. If you do not agree to our
              use of cookies, you can adjust your browser settings or refrain
              from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. What Are Cookies?
            </h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files that are placed on your device
              (computer, tablet, or mobile) when you visit a website. They help
              websites recognize your device and remember information about your
              visit, such as your preferences and settings.
            </p>
            <p className="text-gray-700 mb-4">
              We also use similar technologies including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                <strong>Web beacons:</strong> Small graphic images that track
                page views and user behavior
              </li>
              <li>
                <strong>Local storage:</strong> Technology that stores data
                locally on your device
              </li>
              <li>
                <strong>Session storage:</strong> Temporary storage that expires
                when you close your browser
              </li>
              <li>
                <strong>Tracking pixels:</strong> Transparent images used to
                collect information about website usage
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Types of Cookies We Use
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              3.1 Essential Cookies
            </h3>
            <p className="text-gray-700 mb-4">
              These cookies are necessary for our website to function properly.
              They enable basic functions like page navigation, secure area
              access, and remembering your cookie preferences.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Session management cookies</li>
              <li>Authentication cookies</li>
              <li>Security cookies</li>
              <li>Load balancing cookies</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              3.2 Analytics Cookies
            </h3>
            <p className="text-gray-700 mb-4">
              We use analytics cookies to understand how visitors interact with
              our website. These cookies help us improve our services by
              collecting anonymous information about:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Pages visited and time spent on each page</li>
              <li>Navigation paths through our site</li>
              <li>Error messages encountered</li>
              <li>Device and browser information</li>
              <li>Geographic location (country/region level)</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We primarily use Google Analytics for this purpose. You can learn
              more about Google Analytics cookies at:{" "}
              <a
                href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
                className="text-blue-600 hover:underline"
              >
                Google Analytics Cookie Usage
              </a>
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              3.3 Functionality Cookies
            </h3>
            <p className="text-gray-700 mb-4">
              These cookies allow us to remember choices you make and provide
              enhanced, personalized features:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Language and region preferences</li>
              <li>Dashboard customization settings</li>
              <li>Recently viewed content</li>
              <li>User interface preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              3.4 Marketing Cookies
            </h3>
            <p className="text-gray-700 mb-4">
              We may use marketing cookies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Track the effectiveness of our marketing campaigns</li>
              <li>Measure conversion rates from different traffic sources</li>
              <li>Deliver relevant advertisements on third-party sites</li>
              <li>Limit the number of times you see an advertisement</li>
              <li>Remember if you have visited our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Third-Party Cookies
            </h2>
            <p className="text-gray-700 mb-4">
              Some cookies on our website are placed by third-party service
              providers. These include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                <strong>Google Analytics:</strong> For website analytics and
                performance monitoring
              </li>
              <li>
                <strong>Payment processors:</strong> For secure transaction
                processing
              </li>
              <li>
                <strong>Customer support tools:</strong> For providing chat and
                support services
              </li>
              <li>
                <strong>Social media platforms:</strong> For social sharing
                features
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              These third parties have their own privacy policies and we
              recommend reviewing them to understand how they use cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Cookie Duration
            </h2>
            <p className="text-gray-700 mb-4">
              Cookies can be either "session" or "persistent" cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                <strong>Session cookies:</strong> Temporary cookies that expire
                when you close your browser. We use these for security and to
                maintain your session while using our services.
              </li>
              <li>
                <strong>Persistent cookies:</strong> Cookies that remain on your
                device for a set period or until you delete them. We use these
                to remember your preferences and recognize you on return visits.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Your Cookie Choices
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              6.1 Browser Settings
            </h3>
            <p className="text-gray-700 mb-4">
              Most web browsers allow you to control cookies through their
              settings. You can:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>View what cookies are stored on your device</li>
              <li>Delete cookies individually or all at once</li>
              <li>Block third-party cookies</li>
              <li>Block all cookies from specific websites</li>
              <li>Block all cookies entirely</li>
              <li>Set preferences for specific websites</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Note that blocking all cookies may impact the functionality of our
              website and prevent you from using certain features.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              6.2 Browser-Specific Instructions
            </h3>
            <p className="text-gray-700 mb-4">
              For information on managing cookies in specific browsers, visit:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  className="text-blue-600 hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                  className="text-blue-600 hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  className="text-blue-600 hover:underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  className="text-blue-600 hover:underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              6.3 Analytics Opt-Out
            </h3>
            <p className="text-gray-700 mb-4">
              You can opt-out of Google Analytics tracking by installing the
              Google Analytics Opt-out Browser Add-on:{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="text-blue-600 hover:underline"
              >
                Google Analytics Opt-out
              </a>
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              6.4 Do Not Track
            </h3>
            <p className="text-gray-700 mb-4">
              Some browsers offer a "Do Not Track" (DNT) setting. Currently, our
              website does not respond to DNT signals as there is no industry
              standard for handling them. However, you can still manage cookies
              using the methods described above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Cookies and Reddit Analysis
            </h2>
            <p className="text-gray-700 mb-4">
              Our Reddit intelligence services analyze publicly available Reddit
              data. We use cookies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Remember your dashboard preferences and saved searches</li>
              <li>Track which Reddit insights you've viewed</li>
              <li>Customize notifications based on your interests</li>
              <li>Improve our analysis algorithms based on usage patterns</li>
            </ul>
            <p className="text-gray-700 mb-4">
              These cookies do not interact with Reddit's website or affect your
              Reddit account in any way.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Updates to This Policy
            </h2>
            <p className="text-gray-700 mb-4">
              We may update this Cookie Policy from time to time to reflect
              changes in our practices or for legal, technical, or regulatory
              reasons. We will notify you of any material changes by updating
              the "Last updated" date at the top of this policy.
            </p>
            <p className="text-gray-700 mb-4">
              We encourage you to review this policy periodically to stay
              informed about our use of cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have questions about our use of cookies or this Cookie
              Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Do Less Work PTE. LTD.</strong>
                <br />
                Email: hello@dolesswork.ai
                <br />
                Website: dolesswork.ai
                <br />
                Address: Singapore
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Cookie Table
            </h2>
            <p className="text-gray-700 mb-4">
              Below is a detailed list of cookies we use on our website:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                      Cookie Name
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                      Type
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                      Purpose
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      dlw_session
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Essential
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Maintains user session
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">Session</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      dlw_auth
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Essential
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Authentication token
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">7 days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      dlw_preferences
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Functionality
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      User preferences
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">1 year</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">_ga</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Analytics
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Google Analytics tracking
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">2 years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">_gid</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Analytics
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Google Analytics tracking
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      24 hours
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
