import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Cpu, Globe, Server, Database, ArrowRight, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Technology() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold">Built for <span className="text-primary">Trust</span>, Designed for <span className="text-primary">Scale</span></h1>
            <p className="text-xl text-muted-foreground">
              Every architectural decision prioritizes security, reliability, and performance. 
              From cryptographic hardware verification to sub-second billing — we built it right.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Architecture <span className="text-primary">Overview</span></h2>
          <div className="max-w-4xl mx-auto">
            <div className="neon-border rounded-xl p-8 bg-card/50">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Cpu className="w-10 h-10 text-primary" />
                  <span className="font-semibold">Provider Nodes</span>
                  <span className="text-xs text-muted-foreground">Go Agent</span>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
                <div className="flex flex-col items-center gap-2">
                  <Server className="w-10 h-10 text-primary" />
                  <span className="font-semibold">API Gateway</span>
                  <span className="text-xs text-muted-foreground">Cloudflare Edge</span>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
                <div className="flex flex-col items-center gap-2">
                  <Terminal className="w-10 h-10 text-primary" />
                  <span className="font-semibold">Consumer</span>
                  <span className="text-xs text-muted-foreground">CLI / SDK</span>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Lightweight Go agent on provider side. Python/FastAPI backend. Cloudflare Edge for global routing.
            </p>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Security <span className="text-primary">First</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: "Docker Sandboxing", desc: "cgroups/namespaces isolation, read-only rootfs, no network access to host. Your files stay yours." },
              { icon: Lock, title: "End-to-End Encryption", desc: "WireGuard tunnel between consumer and provider. No man-in-the-middle. No eavesdropping." },
              { icon: Cpu, title: "Proof of Compute", desc: "Periodic cryptographic challenges verify real hardware. Fake nodes are detected and banned automatically." },
              { icon: Database, title: "No Data Persistence", desc: "Containers are destroyed immediately after task completion. Zero data left behind." },
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

      {/* The Agent */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4">The <span className="text-primary">Agent</span></h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Lightweight, open-source, and built for performance.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="neon-border rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-card/50">
                    <th className="text-left p-4 font-semibold">Spec</th>
                    <th className="text-left p-4 font-semibold">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { spec: "Language", detail: "Go (single binary, ~15MB)" },
                    { spec: "Platforms", detail: "Linux (x86_64, ARM64), macOS (Apple Silicon)" },
                    { spec: "GPU Detection", detail: "NVIDIA Management Library (NVML)" },
                    { spec: "Resource Limits", detail: "CPU cores, RAM, GPU memory, bandwidth" },
                    { spec: "Heartbeat", detail: "Every 30 seconds" },
                    { spec: "License", detail: "MIT — fully open source" },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-border/50">
                      <td className="p-4 font-semibold">{row.spec}</td>
                      <td className="p-4 text-muted-foreground">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-6">
              <Button variant="outline" className="gap-2">
                <Github className="w-4 h-4" /> View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Platform */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4">The <span className="text-primary">Platform</span></h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Modern stack. Minimal cost. Maximum reliability.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="neon-border rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-card/50">
                    <th className="text-left p-4 font-semibold">Component</th>
                    <th className="text-left p-4 font-semibold">Technology</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { comp: "API", tech: "FastAPI (Python)" },
                    { comp: "Database", tech: "PostgreSQL (Supabase)" },
                    { comp: "Cache / Queue", tech: "Redis (Upstash)" },
                    { comp: "Edge", tech: "Cloudflare Workers" },
                    { comp: "Auth", tech: "JWT + API Keys" },
                    { comp: "File Storage", tech: "S3-compatible (Backblaze B2)" },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-border/50">
                      <td className="p-4 font-semibold">{row.comp}</td>
                      <td className="p-4 text-muted-foreground">{row.tech}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Road<span className="text-primary">map</span></h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { version: "v0.2", status: "In Progress", items: "GPU Detection, Heartbeat, Job Execution" },
              { version: "v0.5", status: "Next", items: "Scheduler, Billing, Credits" },
              { version: "v0.8", status: "Planned", items: "Reputation, Anti-Cheat, Proof of Compute" },
              { version: "v1.0", status: "Future", items: "Tunnel, Interactive Sessions" },
            ].map((row, idx) => (
              <Card key={idx} className="neon-border p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-primary">{row.version}</div>
                  <div>
                    <div className="text-sm text-muted-foreground">{row.items}</div>
                  </div>
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">{row.status}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container text-center space-y-6">
          <h2 className="text-4xl font-bold">Want to <span className="text-primary">Contribute</span>?</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Tokenode Agent is fully open source (MIT). Star us on GitHub, submit PRs, or build on top.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            <Github className="w-5 h-5" /> Star on GitHub
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
