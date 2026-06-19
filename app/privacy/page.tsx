'use client';

import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0A1328] text-white">
      <nav className="border-b border-white/10 bg-[#0A1328]/90 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
          <a href="/" className="font-semibold text-xl">AuditForge</a>
          <span className="ml-auto text-sm text-white/50">by MVForge</span>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-[-1px] mb-2">Privacy Policy</h1>
        <p className="text-white/60 mb-10">MVForge LLC • Effective Date: June 19, 2026</p>

        <div className="prose prose-invert max-w-none text-[#9BA3B7]">
          <p>At MVForge, we are committed to protecting your privacy and digital sovereignty. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit auditforge.io or engage with our services.</p>

          <h2 className="text-white mt-10">1. Information We Collect</h2>
          <p><strong>Automatically Collected:</strong> IP address, device information, pages visited.</p>
          <p><strong>Information You Provide:</strong> Name, email, phone number, and business details when you contact us.</p>

          <h2 className="text-white mt-10">2. Text Messaging</h2>
          <p>We may send transactional text messages related to your inquiries about AuditForge services. Message and data rates may apply. We do not share your mobile number with third parties for marketing purposes.</p>

          <h2 className="text-white mt-10">3. How We Use & Share Information</h2>
          <p>We use your information to respond to inquiries and deliver our services. We do not sell your data. Information may be shared only with trusted vendors under confidentiality agreements or when legally required.</p>

          <h2 className="text-white mt-10">4. Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data by contacting us.</p>

          <p className="mt-10"><strong>Contact:</strong> forge@mvforge.io</p>
        </div>
      </div>
    </div>
  );
}
