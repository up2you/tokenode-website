import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scale, AlertTriangle, FileText, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Content */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Terms of <span className="text-primary">Service</span></h1>
            <p className="text-muted-foreground mb-12">Last updated: June 1, 2026</p>

            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-primary" /> 1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using Tokenode.ai ("the Platform"), you agree to these Terms of Service. 
                  If you do not agree, do not use the Platform. We may update these terms at any time; 
                  continued use constitutes acceptance of changes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" /> 2. Definitions
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Provider:</strong> A user who contributes GPU compute resources to the Platform.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Consumer:</strong> A user who rents GPU compute resources on the Platform.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Credits:</strong> The unit of account used for billing on the Platform.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Task:</strong> A compute workload submitted by a Consumer and executed on a Provider's hardware.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-primary" /> 3. Acceptable Use
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to use the Platform for:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Any illegal activity or violation of applicable laws</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Cryptocurrency mining without explicit provider consent</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Distributed denial-of-service (DDoS) attacks</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Hosting malware, ransomware, or other malicious software</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Any activity that defrauds or deceives other users</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">4. Provider Obligations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Providers agree to maintain accurate hardware specifications, keep the Tokenode Agent updated, 
                  and not tamper with reported metrics. Providers may set their own pricing within Platform guidelines. 
                  Tokenode reserves the right to verify hardware through Proof of Compute challenges.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">5. Consumer Obligations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Consumers agree to submit only lawful workloads, maintain sufficient Credits for their tasks, 
                  and not attempt to access Provider systems beyond the allocated container. 
                  Consumers are responsible for the content and legality of their workloads.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">6. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All payments are processed in Credits. Credits are purchased upfront and consumed per-second 
                  during task execution. Provider earnings are paid out weekly, subject to a 30-day hold for 
                  new providers. Tokenode charges a platform fee of 5% on all transactions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tokenode provides the Platform "as is" without warranties of any kind. We are not liable for 
                  losses arising from task failures, data loss, or service interruptions. Our total liability 
                  is limited to the amount paid by you in the 30 days preceding a claim.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate this agreement at any time. Upon termination, outstanding balances 
                  will be settled within 30 days. Tokenode may suspend accounts that violate these terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these terms, contact us at{' '}
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
