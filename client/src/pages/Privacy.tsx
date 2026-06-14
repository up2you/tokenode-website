import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, Server, FileText } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">← Back to Home</a>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Privacy <span className="text-primary">Policy</span></h1>
            <p className="text-muted-foreground mb-12">Last updated: June 1, 2026</p>

            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" /> Our Commitment
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Tokenode, privacy isn't just a policy — it's a core design principle. 
                  We built our platform so that your data never touches our servers. 
                  Tasks run in isolated containers with end-to-end encryption. 
                  We collect only what's necessary to operate the marketplace.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" /> Information We Collect
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Account Information:</strong> Email address, wallet address, and GPU specifications when you register as a provider.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Usage Data:</strong> Task duration, GPU utilization, and performance metrics to operate the matching engine.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Payment Data:</strong> Transaction records for billing and payouts. We use third-party processors — we never store full payment details.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-primary" /> What We Don't Collect
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Your task data, models, or training results</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Personal files or documents on your machine</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Browsing history or personal communications</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-primary" /> Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All communications between providers and consumers are encrypted using WireGuard tunnels. 
                  Containers are destroyed after each task. We use industry-standard encryption for data at rest 
                  and in transit. Our infrastructure is regularly audited for security vulnerabilities.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Server className="w-6 h-6 text-primary" /> Third-Party Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use Supabase for database hosting, Upstash for caching, and Stripe for payment processing. 
                  Each provider has their own privacy policy governing how they handle data. 
                  We select partners who meet our security standards.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="text-muted-foreground">
                  For privacy-related inquiries, contact us at{' '}
                  <a href="mailto:hello@tokenode.ai" className="text-primary hover:underline">hello@tokenode.ai</a>.
                </p>
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
