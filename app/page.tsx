'use client';

import React from 'react';

export default function AuditForge() {
  return (
    <div className="min-h-screen bg-[#0A1328] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0A1328]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#6C5CE7] flex items-center justify-center">
              <span className="text-white font-semibold text-xl tracking-[-1px]">A</span>
            </div>
            <div>
              <div className="font-semibold text-xl tracking-[-0.5px]">AuditForge</div>
              <div className="text-[10px] text-white/50 -mt-1">by MVForge</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-9 text-sm font-medium">
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#demo" className="px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/5 transition-all text-sm">Try Demo</a>
            <a href="mailto:forge@mvforge.io?subject=AuditForge%20Assessment" className="btn-primary px-6 py-2.5 rounded-full text-sm font-medium">Book Assessment</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm tracking-[0.5px] mb-8">
            VETERAN-OWNED • OHIO
          </div>

          <h1 className="text-7xl leading-[1.05] font-semibold tracking-[-4.5px] mb-8 stoic">
            Automated audit intelligence<br />that reclaims your time.
          </h1>
          
          <p className="max-w-2xl mx-auto text-2xl text-[#9BA3B7] tracking-[-0.3px] mb-12">
            Strengthen financial controls without the manual burden.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:forge@mvforge.io?subject=AuditForge%20Assessment" className="btn-gold px-10 py-4 rounded-full text-lg font-medium inline-flex items-center justify-center">
              Schedule Assessment
            </a>
            <a href="#demo" className="px-10 py-4 rounded-full border border-white/30 hover:bg-white/5 text-lg font-medium transition-all">
              Try Interactive Demo
            </a>
          </div>
          <div className="mt-8 text-sm text-white/50">10–12 hours reclaimed per week for most service businesses</div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-t border-b border-white/10 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-16 gap-y-4 text-white/50 text-sm tracking-[1px]">
          <div>INVOICE AUDITOR</div>
          <div>PROFITABILITY ENGINE</div>
          <div>RECONCILIATION AI</div>
          <div>COMPLIANCE WATCH</div>
        </div>
      </div>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[#D4AF37] text-sm tracking-[3px] mb-4">QUICK WINS</div>
            <h2 className="text-5xl font-semibold tracking-[-2px]">Intelligence that works the moment you connect.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Invoice Auditor", desc: "Automatically detects billing errors, duplicate charges, and margin leakage across all clients." },
              { title: "Profitability Engine", desc: "Real-time visibility into true project margins — not just revenue — with drill-down capability." },
              { title: "Reconciliation AI", desc: "Intelligent matching of transactions across banks, cards, and accounting platforms." },
              { title: "Anomaly Detection", desc: "Surface unusual patterns before they become costly mistakes or compliance issues." },
              { title: "Audit Trail Builder", desc: "Generates clean, audit-ready documentation in minutes instead of days." },
              { title: "Weekly Intelligence Brief", desc: "Stoic, concise summaries every Friday so nothing important slips through the cracks." },
            ].map((feature, i) => (
              <div key={i} className="feature-card glass rounded-3xl p-9 border border-white/10">
                <div className="text-[#D4AF37] text-3xl font-semibold mb-6 tabular-nums">0{i + 1}</div>
                <h3 className="text-2xl font-semibold tracking-[-0.8px] mb-4">{feature.title}</h3>
                <p className="text-[#9BA3B7] leading-relaxed tracking-[-0.1px]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 border-t border-white/10 bg-[#0A1328]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[#D4AF37] text-sm tracking-[3px] mb-4">PRICING</div>
            <h2 className="text-5xl font-semibold tracking-[-2px]">Simple, transparent tiers.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="glass rounded-3xl p-9 border border-white/10 flex flex-col">
              <div className="text-[#D4AF37] text-sm tracking-[2px] mb-1">STARTER</div>
              <div className="text-6xl font-semibold tracking-[-3px] mt-2">$890</div>
              <div className="text-[#9BA3B7] mt-1">per month</div>
              <ul className="mt-10 space-y-4 text-[#9BA3B7] flex-1">
                <li className="flex items-center gap-3"><span className="text-[#6C5CE7]">•</span> Up to 3 connected entities</li>
                <li className="flex items-center gap-3"><span className="text-[#6C5CE7]">•</span> Invoice Auditor + Reconciliation</li>
                <li className="flex items-center gap-3"><span className="text-[#6C5CE7]">•</span> Weekly Intelligence Brief</li>
                <li className="flex items-center gap-3"><span className="text-[#6C5CE7]">•</span> Email support</li>
              </ul>
              <a href="mailto:forge@mvforge.io?subject=AuditForge%20Starter" className="mt-10 block text-center py-3.5 rounded-2xl border border-white/30 hover:bg-white/5 transition-colors">Get Started</a>
            </div>

            {/* Professional - Featured */}
            <div className="glass rounded-3xl p-9 border border-[#6C5CE7] flex flex-col relative">
              <div className="absolute -top-3 right-7 px-4 py-0.5 text-xs tracking-[1.5px] bg-[#6C5CE7] text-white rounded-full">MOST POPULAR</div>
              <div className="text-[#D4AF37] text-sm tracking-[2px] mb-1">PROFESSIONAL</div>
              <div className="text-6xl font-semibold tracking-[-3px] mt-2">$1,890</div>
              <div className="text-[#9BA3B7] mt-1">per month</div>
              <ul className="mt-10 space-y-4 text-[#9BA3B7] flex-1">
                <li className="flex items-center gap-3"><span className="text-[#6C5CE7]">•</span> Up to 12 connected entities</li>
                <li className="flex items-center gap-3"><span className="text-[#6C5CE7]">•</span> Full feature suite</li>
                <li className="flex items-center gap-3"><span className="text-[#6C5CE7]">•</span> Profitability Engine + Anomaly Detection</li>
                <li className="flex items-center gap-3"><span className="text-[#6C5CE7]">•</span> Priority support + monthly review call</li>
              </ul>
              <a href="mailto:forge@mvforge.io?subject=AuditForge%20Professional" className="mt-10 block text-center py-3.5 rounded-2xl bg-[#6C5CE7] hover:bg-[#8B7FF3] transition-colors">Book Assessment</a>
            </div>

            {/* Enterprise */}
            <div className="glass rounded-3xl p-9 border border-white/10 flex flex-col">
              <div className="text-[#D4AF37] text-sm tracking-[2px] mb-1">ENTERPRISE</div>
              <div className="text-6xl font-semibold tracking-[-3px] mt-2">Custom</div>
              <div className="text-[#9BA3B7] mt-1">tailored for scale</div>
              <ul className="mt-10 space-y-4 text-[#9BA3B7] flex-1">
                <li className="flex items-center gap-3"><span className="text-[#6C5CE7]">•</span> Unlimited entities</li>
                <li className="flex items-center gap-3"><span className="text-[#6C5CE7]">•</span> Advanced AI models & custom rules</li>
                <li className="flex items-center gap-3"><span className="text-[#6C5CE7]">•</span> Dedicated support + SLA</li>
                <li className="flex items-center gap-3"><span className="text-[#6C5CE7]">•</span> On-premise or private cloud options</li>
              </ul>
              <a href="mailto:forge@mvforge.io?subject=AuditForge%20Enterprise" className="mt-10 block text-center py-3.5 rounded-2xl border border-white/30 hover:bg-white/5 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment / Demo */}
      <section id="demo" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#D4AF37] text-sm tracking-[3px] mb-4">INTERACTIVE EXPERIENCE</div>
          <h2 className="text-6xl font-semibold tracking-[-2.5px] leading-none mb-6">See what AuditForge sees.</h2>
          <p className="text-[#9BA3B7] text-xl max-w-md mx-auto">Try a live, anonymized demonstration of the Invoice Auditor and Reconciliation engine.</p>

          <div className="mt-14">
            <a href="mailto:forge@mvforge.io?subject=AuditForge%20Demo%20Request" className="inline-flex items-center gap-3 px-9 py-4 rounded-2xl bg-white text-[#0A1328] hover:bg-[#D4AF37] font-medium transition-all text-lg">
              Request Private Demo
            </a>
          </div>
          <div className="mt-4 text-sm text-white/40">15-minute walkthrough • No obligation</div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-[#13264A]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#D4AF37] text-sm tracking-[3px] mb-4">ABOUT</div>
          <h2 className="text-5xl font-semibold tracking-[-2px] leading-tight mb-8">Built by service business owners, for service business owners.</h2>
          <p className="text-xl text-[#9BA3B7] max-w-2xl mx-auto">
            AuditForge is a flagship product of MVForge Systems — a veteran-owned technology company based in Ohio. 
            We design calm, precise software that strengthens financial oversight without adding operational noise.
          </p>
          <div className="mt-10 text-sm text-white/50">Self-ownership through technical mastery.</div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-4xl font-semibold tracking-[-1.5px]">Ready to reclaim your time?</h3>
          <p className="mt-4 text-[#9BA3B7]">Book your private AuditForge assessment today.</p>
          <a href="mailto:forge@mvforge.io?subject=AuditForge%20Assessment" className="btn-gold mt-9 inline-block px-12 py-4 rounded-2xl text-lg font-medium">Schedule Assessment</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-6 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-y-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#6C5CE7] flex items-center justify-center"><span className="text-white text-lg font-semibold tracking-[-1px]">A</span></div>
              <span className="font-semibold text-lg tracking-tight">AuditForge</span>
            </div>
            <div className="text-white/40 mt-2">MVForge Systems • Ohio, USA</div>
          </div>
          
          <div className="space-y-2 text-[#9BA3B7]">
            <a href="mailto:forge@mvforge.io" className="block hover:text-white">forge@mvforge.io</a>
            <a href="tel:+193****2945" className="block hover:text-white">(937) 729-2945</a>
          </div>
          
          <div className="text-white/40 md:text-right">© {new Date().getFullYear()} MVForge Systems. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
