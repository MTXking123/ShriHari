'use client';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-20 px-6 md:px-20 py-10 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          This Privacy Policy describes how we collect, use, and disclose your information when you use our website or services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address, and any other information you voluntarily provide through forms or contact pages.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>To respond to your inquiries</li>
          <li>To improve our website and services</li>
          <li>To communicate with you about updates or offers</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Cookies</h2>
        <p className="mb-4">
          We may use cookies and similar tracking technologies to improve your browsing experience on our site.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
        <p className="mb-4">
          We may use third-party services such as analytics tools or embedded content. These services may collect data in accordance with their own privacy policies.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Retention</h2>
        <p className="mb-4">
          We retain personal data only as long as necessary to fulfill the purposes outlined in this policy.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
        <p className="mb-4">
          You may request access, correction, or deletion of your personal data by contacting us.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Updates to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          <span className="text-blue-600">your@email.com</span>
        </p>
      </div>
    </div>
  );
}
