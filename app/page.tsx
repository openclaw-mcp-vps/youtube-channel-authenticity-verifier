export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Content Verification Tool
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Verify Real YouTube Channels vs{' '}
          <span className="text-[#58a6ff]">Algorithm Gaming</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Instantly detect fake engagement, bot-inflated metrics, and inauthentic growth patterns. Protect your brand partnerships and ad spend with ML-powered authenticity scores.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Verifying — $19/mo
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-4 rounded-lg text-lg transition-colors"
          >
            See How It Works
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#58a6ff]">98%</div>
            <div className="text-sm text-[#8b949e]">Detection Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#58a6ff]">50+</div>
            <div className="text-sm text-[#8b949e]">Metrics Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#58a6ff]">&lt;5s</div>
            <div className="text-sm text-[#8b949e]">Per Channel Scan</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Install Extension', desc: 'Add to Chrome or Firefox in one click. Works directly on YouTube pages.' },
            { step: '02', title: 'Scan Any Channel', desc: 'Click the extension icon on any YouTube channel to trigger a full analysis.' },
            { step: '03', title: 'Get Authenticity Score', desc: 'Receive a 0–100 score with detailed breakdown of engagement patterns and red flags.' }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] font-mono text-sm mb-3">{step}</div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-[#8b949e] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited channel scans',
              'ML-powered authenticity scoring',
              'Engagement pattern analysis',
              'Bot & fake follower detection',
              'Export reports as PDF/CSV',
              'Priority email support'
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does the authenticity score work?</h3>
            <p className="text-[#8b949e] text-sm">Our ML model analyzes 50+ signals including subscriber-to-view ratios, comment sentiment patterns, engagement velocity, and historical growth curves to produce a 0–100 authenticity score.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Which browsers are supported?</h3>
            <p className="text-[#8b949e] text-sm">The extension supports Chrome, Firefox, and Edge. Safari support is coming soon. The web dashboard works in any modern browser.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime from your account dashboard with no penalties or hidden fees. You retain access until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} YouTube Channel Authenticity Verifier. All rights reserved.
      </footer>
    </main>
  )
}
