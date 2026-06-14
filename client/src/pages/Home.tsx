import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, TrendingUp, Cpu, Code, Layers, BarChart3, Users, Globe } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Tokenode.ai Landing Page
 * Design: Neon Cyberpunk aesthetic with electric purple (#7C3AED) and fluorescent cyan (#00D4AA)
 * Dark background (#0F0F1A) with glowing neon effects and smooth animations
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 grid-background pointer-events-none" style={{ opacity: 0.03 }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028940769/EDTMsNQdpHnMBgQ7rcDxjd/tokenode-logo-UZGTVTFHarqgpPpvDv8x2B.webp"
              alt="Tokenode"
              className="h-8 w-8"
            />
            <span className="text-xl font-bold">Tokenode.ai</span>
          </a>
          <div className="flex items-center gap-6">
            <a href="#how-it-works" className="text-base text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-base text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-base text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663028940769/EDTMsNQdpHnMBgQ7rcDxjd/hero-background-4vbMTCcWDQtzqaHBCNMZfJ.webp')",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Your Idle <span className="text-primary">GPU</span>, Everyone's Compute.
                </h1>
                <p className="text-xl text-muted-foreground">
                  We're building the world's largest decentralized supercomputer — one idle GPU at a time. 
                  Turn your gaming rig into a money printer, or access AI compute at 80% less than AWS. 
                  No contracts. No minimums. Just compute, when you need it.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 group">
                  Start Earning <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 gap-2 group">
                  Get Compute <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-2xl font-bold text-primary">$0.30</div>
                  <div className="text-sm text-muted-foreground">Avg. GPU/hr</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">1s</div>
                  <div className="text-sm text-muted-foreground">Min billing</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">30s</div>
                  <div className="text-sm text-muted-foreground">Avg. match time</div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How <span className="text-primary">Tokenode</span> Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and decentralized. Connect in minutes, start earning or computing immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* GPU Suppliers */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">For GPU Suppliers</h3>
              <div className="space-y-4">
                {[
                  { step: 1, title: "Install Agent", desc: "One command. Auto-detects your GPU and registers it." },
                    { step: 2, title: "Auto-Match", desc: "Platform matches your GPU to incoming requests. No manual bidding." },
                    { step: 3, title: "Earn Per Second", desc: "Billing starts and stops with each task. Get paid automatically." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 neon-border p-4 rounded-lg hover:neon-glow transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                      <span className="text-primary font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Developers */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary">For AI Developers</h3>
              <div className="space-y-4">
                {[
                  { step: 1, title: "Submit Your Task", desc: "CLI: tokenode run --image pytorch:latest --gpu 1" },
                    { step: 2, title: "Auto-Match & Run", desc: "Cheapest, closest, or fastest node. Avg match: under 30s." },
                    { step: 3, title: "Get Results", desc: "Billing stops the second your task completes. Pay per second." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 neon-border-cyan p-4 rounded-lg hover:neon-glow-cyan transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/20 border border-secondary/50 flex items-center justify-center">
                      <span className="text-secondary font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Visual Overview Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              See How It <span className="text-primary">Connects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              GPU suppliers and AI developers connect through Tokenode's intelligent matching engine. 
              One platform. Two sides. Infinite possibilities.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden neon-border p-4 md:p-8 bg-card/50">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028940769/EDTMsNQdpHnMBgQ7rcDxjd/gpu-network-illustration-3QHF94ZLY6imABEToT7HDZ.webp"
              alt="GPU Network - Tokenode connects idle GPUs to AI compute workloads"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center">
            {[
              { label: "GPU Suppliers", desc: "Earn passive income from idle hardware" },
              { label: "AI Developers", desc: "Access affordable compute on demand" },
              { label: "Tokenode Platform", desc: "Smart matching, per-second billing, secure execution" },
            ].map((item, idx) => (
              <div key={idx} className="neon-border rounded-lg p-4 hover:neon-glow transition-all duration-300">
                <div className="text-sm font-semibold text-primary mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Tokenode <span className="text-primary">Wins</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We didn't just build another GPU marketplace. We reimagined what compute should look like — 
              accessible, fair, and borderless. Here's how we're different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Zap,
                title: "80% Cheaper Than Cloud",
                desc: "AWS charges $1.52/hr for an RTX 4090. We charge $0.30. Same GPU. Same performance. 80% less. No hidden fees, no surprise bills, no minimum commitments. Just pure, unadulterated value — because compute shouldn't be a luxury.",
                color: "text-primary",
              },
              {
                icon: Shield,
                title: "Military-Grade Security",
                desc: "Docker sandboxing with cgroups and namespaces. WireGuard tunnels for end-to-end encryption. Proof of Compute challenges to verify real hardware. Your data never touches our servers — and containers are destroyed the second your task completes. No trace. No risk.",
                color: "text-secondary",
              },
              {
                icon: TrendingUp,
                title: "Per-Second Billing",
                desc: "Not per hour. Not per minute. Per second. Your training job finishes at 3.2 seconds? You pay for 3.2 seconds. Your inference batch runs for 47.8 seconds? You pay for 47.8 seconds. Fair, precise, and honest — the way billing should have always worked.",
                color: "text-primary",
              },
              {
                icon: Cpu,
                title: "Any GPU, Anywhere",
                desc: "From an RTX 3060 in Tokyo to an A100 in Frankfurt. From a gaming PC in São Paulo to a workstation in Berlin. If it has 8GB+ VRAM and an internet connection, it can earn. No special hardware. No vendor lock-in. Just pure compute power, wherever it lives.",
                color: "text-secondary",
              },
              {
                icon: BarChart3,
                title: "Smart Auto-Matching",
                desc: "Cheapest, closest, or fastest — you choose the priority. Our intelligent matching engine scans thousands of nodes across the globe and finds the perfect one in under 30 seconds. No manual bidding. No endless searching. Just submit and go.",
                color: "text-primary",
              },
              {
                icon: Globe,
                title: "Borderless by Design",
                desc: "A developer in Lagos pays the same as one in San Francisco. A student in Jakarta has the same access as a researcher in Tokyo. Compute should be democratic — not a privilege of geography or wealth. We're building a global supercomputer that belongs to everyone.",
                color: "text-secondary",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={idx}
                  className="neon-border p-6 hover:neon-glow transition-all duration-300 cursor-pointer group min-h-[200px] flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${feature.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-snug">{feature.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pricing That Actually <span className="text-primary">Makes Sense</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cloud providers charge you for sitting in a waiting room. We charge you for the surgery. 
              Pay per second. No minimums. No surprises.
            </p>
          </div>

          {/* Price Comparison Table */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="neon-border rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-card/50">
                    <th className="text-left p-4 font-semibold">Provider</th>
                    <th className="text-center p-4 font-semibold">Price/hr (RTX 4090)</th>
                    <th className="text-center p-4 font-semibold">Min Billing</th>
                    <th className="text-center p-4 font-semibold">Setup Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "AWS", price: "$1.52", min: "1 hr", setup: "~30 min", highlight: false },
                    { name: "Lambda", price: "$0.79", min: "1 min", setup: "~10 min", highlight: false },
                    { name: "Vast", price: "$0.45", min: "1 min", setup: "~5 min", highlight: false },
                    { name: "Tokenode", price: "$0.30", min: "1 sec", setup: "~5 min", highlight: true },
                  ].map((row, idx) => (
                    <tr key={idx} className={`border-b border-border/50 ${row.highlight ? "bg-primary/10" : ""}`}>
                      <td className={`p-4 font-semibold ${row.highlight ? "text-primary" : ""}`}>{row.name}</td>
                      <td className={`text-center p-4 ${row.highlight ? "text-primary font-bold" : ""}`}>{row.price}</td>
                      <td className="text-center p-4">{row.min}</td>
                      <td className="text-center p-4">{row.setup}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto items-stretch">
            {[
              {
                name: "Standard",
                price: "$0.30",
                unit: "/hr",
                desc: "For individual developers",
                features: ["Per-second billing", "Basic support", "Community access", "Standard matching"],
                highlighted: false,
              },
              {
                name: "Pro",
                price: "$0.25",
                unit: "/hr",
                desc: "For professional teams",
                features: ["Per-second billing", "Priority support", "Advanced analytics", "Priority matching", "SLA 99%"],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                unit: "",
                desc: "For enterprises",
                features: ["Per-second billing", "24/7 support", "Custom solutions", "Dedicated matching", "SLA 99.9%"],
                highlighted: false,
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`p-6 flex flex-col transition-all duration-300 ${
                  plan.highlighted
                    ? "neon-glow border-primary/50"
                    : "neon-border hover:neon-glow"
                }`}
              >
                <h3 className="text-2xl font-bold mb-0.5 text-primary text-center">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 text-center">{plan.desc}</p>
                <div className="mb-3 text-center">
                  <span className="text-2xl font-bold text-orange-500">{plan.price}</span>
                  {plan.unit && <span className="text-muted-foreground text-xs ml-0.5">{plan.unit}</span>}
                </div>
                <ul className="space-y-1.5 mb-4 flex-1">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-1.5 text-xs">
                      <div className="w-3 h-3 rounded-full bg-secondary/30 border border-secondary/50 shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {/* Pad shorter plans to match Pro height */}
                  {plan.features.length < 5 && (
                    <li className="h-5" />
                  )}
                </ul>
                <Button
                  className={`w-full bg-primary/10 text-primary hover:bg-primary hover:text-white border border-primary/30`}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Be the Tokenode in Your <span className="text-secondary">Country</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're looking for one partner per country to own the local market. 
              You bring the relationships. We bring the platform. Together, we dominate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Users, label: "Exclusive Territory", value: "1-3 partners per country" },
              { icon: TrendingUp, label: "Revenue Share", value: "Up to 6% commission" },
              { icon: Globe, label: "Global Support", value: "24/7 partner assistance" },
              { icon: Layers, label: "Full Stack", value: "Marketing + training included" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="neon-border p-6 text-center">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{item.label}</h4>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              Apply as Partner <ArrowRight />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="relative rounded-xl overflow-hidden neon-border p-12 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="relative z-10 text-center space-y-6">
                <h2 className="text-4xl font-bold">
                The Future of Compute is <span className="text-primary">Decentralized</span>.
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join 10,000+ GPU owners already earning passive income. Or access affordable compute power today. 
                No credit card required. No commitment. Just pure, decentralized compute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started Now
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li><a href="/suppliers" className="hover:text-foreground transition-colors">For Suppliers</a></li>
                <li><a href="/developers" className="hover:text-foreground transition-colors">For Developers</a></li>
                <li><a href="/#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="/blog" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="/terms" className="hover:text-foreground transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">© 2026 Tokenode.ai. All rights reserved.</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Contact:</span>
              <a href="mailto:hello@tokenode.ai" className="text-primary hover:underline">hello@tokenode.ai</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
