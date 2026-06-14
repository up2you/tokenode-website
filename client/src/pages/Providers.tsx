import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Cpu, Shield, DollarSign, Clock, CheckCircle, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Providers() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold">Turn Your Idle GPU Into <span className="text-primary">Passive Income</span></h1>
            <p className="text-xl text-muted-foreground">
              Your gaming rig sits idle 16+ hours a day. That's 16+ hours of lost revenue. 
              Install Tokenode Agent once, and your GPU starts earning while you sleep, work, or play.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Download Agent <Download className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: DollarSign, label: "Avg. Earnings", value: "$0.30/hr" },
              { icon: Clock, label: "Min Billing", value: "1 second" },
              { icon: Cpu, label: "Supported GPUs", value: "50+ models" },
              { icon: CheckCircle, label: "Payout", value: "Weekly" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">How It <span className="text-primary">Works</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Install", desc: "One command. Auto-detects your GPU, registers it on the network, and starts listening for tasks." },
              { step: "02", title: "Earn", desc: "Tasks run in isolated Docker containers. Your files stay safe. You get paid per second." },
              { step: "03", title: "Withdraw", desc: "Earnings accumulate in real-time. Withdraw weekly — no minimums, no hidden fees." },
            ].map((item, idx) => (
              <Card key={idx} className="neon-border p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported GPUs */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4">Supported <span className="text-primary">GPUs</span></h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Any NVIDIA GPU with 8GB+ VRAM and compute capability 7.0+ can earn on Tokenode.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              "RTX 4090 (24GB)", "RTX 4080 (16GB)", "RTX 4070 (12GB)",
              "RTX 3090 (24GB)", "RTX 3080 (10GB)", "RTX 3070 (8GB)",
              "A100 (80GB)", "V100 (32GB)", "A6000 (48GB)",
            ].map((gpu, idx) => (
              <div key={idx} className="neon-border rounded-lg p-4 text-center text-sm font-medium hover:neon-glow transition-all">
                {gpu}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to <span className="text-primary">Earn</span>?</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Join thousands of GPU owners already earning passive income. No contracts. No commitments.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Download Agent Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
