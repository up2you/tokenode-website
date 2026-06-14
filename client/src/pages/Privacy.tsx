import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, Server, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

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

      <Footer />
    </div>
  );
}
