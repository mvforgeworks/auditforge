'use client';

import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0A1328] text-white">
      <nav className="border-b border-white/10 bg-[#0A1328]/90 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
          <a href="/" className="font-semibold text-xl">AuditForge</a>
          <span className="ml-auto text-sm text-white/50">by MVForge</span>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-[-1px] mb-2">Terms of Service</h1>
        <p className="text-white/60 mb-10">MVForge LLC • Effective Date: June 19, 2026</p>

        <div className="prose prose-invert max-w-none text-[#9BA3B7]">
          <h2 className="text-white mt-6">Text Messaging Terms</h2>
          <p>By providing your mobile number and opting in, you consent to receive text messages from AuditForge related to your inquiries (scheduling, quotes, updates).</p>
          <ul>
            <li>Message and data rates may apply.</li>
            <li>Message frequency varies.</li>
            <li>Text <strong>HELP</strong> for help.</li>
            <li>Text <strong>STOP</strong> to cancel.</li>
          </ul>

          <h2 className="text-white mt-10">General Terms</h2>
          <p>By using auditforge.io or contacting us, you agree to these Terms. We provide cybersecurity and audit services “as is.”</p>
          <p>Your use is also governed by our <a href="/privacy">Privacy Policy</a>.</p>
          <p><strong>Governing Law:</strong> State of Ohio.</p>
          <p className="mt-8"><strong>Contact:</strong> forge@mvforge.io</p>
        </div>
      </div>
    </div>
  );
}
