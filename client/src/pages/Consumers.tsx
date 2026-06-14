import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Cpu, Zap, Globe, DollarSign, Code, Terminal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Consumers() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold">GPU Compute, <span className="text-primary">On Demand</span></h1>
            <p className="text-xl text-muted-foreground">
              Stop overpaying for cloud GPUs. Submit your Docker image, get matched to a node in seconds, 
              and pay only for what you use. No contracts. No minimums. No fighting for capacity.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Start Renting <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-12 border-t border-border">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">80% Cheaper Than <span className="text-primary">Cloud</span></h2>
          <div className="max-w-2xl mx-auto">
            <div className="neon-border rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-card/50">
                    <th className="text-left p-4 font-semibold">Provider</th>
                    <th className="text-center p-4 font-semibold">Price/hr (RTX 4090)</th>
                    <th className="text-center p-4 font-semibold">Min Billing</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "AWS", price: "$1.52", min: "1 hr", highlight: false },
                    { name: "Lambda", price: "$0.79", min: "1 min", highlight: false },
                    { name: "Vast", price: "$0.45", min: "1 min", highlight: false },
                    { name: "Tokenode", price: "$0.30", min: "1 sec", highlight: true },
                  ].map((row, idx) => (
                    <tr key={idx} className={`border-b border-border/50 ${row.highlight ? "bg-primary/10" : ""}`}>
                      <td className={`p-4 font-semibold ${row.highlight ? "text-primary" : ""}`}>{row.name}</td>
                      <td className={`text-center p-4 ${row.highlight ? "text-primary font-bold" : ""}`}>{row.price}</td>
                      <td className="text-center p-4">{row.min}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">How to <span className="text-primary">Rent</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Submit", desc: "tokenode run --image pytorch:latest --gpu 1 --max-budget $5" },
              { step: "02", title: "Match", desc: "Our engine finds the cheapest, closest, or fastest node. Avg match: under 30 seconds." },
              { step: "03", title: "Done", desc: "Billing stops the second your task completes. Results delivered automatically." },
            ].map((item, idx) => (
              <Card key={idx} className="neon-border p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-mono">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Built for <span className="text-primary">Real Workloads</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Cpu, title: "Model Training", desc: "Fine-tune LLMs, train diffusion models, or run RL experiments. Any framework — PyTorch, TensorFlow, JAX." },
              { icon: Zap, title: "Batch Inference", desc: "Run thousands of inferences in parallel. Perfect for video processing, image generation, and NLP pipelines." },
              { icon: Globe, title: "Scientific Computing", desc: "Monte Carlo simulations, molecular dynamics, climate modeling — if it runs on CUDA, it runs on Tokenode." },
              { icon: Code, title: "CI/CD Testing", desc: "Run GPU-accelerated tests in your CI pipeline. Spin up, test, tear down. Pay only for what you use." },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="neon-border p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container text-center space-y-6">
          <h2 className="text-4xl font-bold">Start Computing in <span className="text-primary">Seconds</span></h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            No credit card required. No commitment. Just compute, when you need it.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Started Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
