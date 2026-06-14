import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, Tag, User } from "lucide-react";

const posts = [
  {
    title: "Why Per-Second Billing Changes Everything",
    excerpt: "Cloud providers charge by the hour because they can. We charge by the second because it's fair. Here's why that matters for AI development.",
    date: "June 10, 2026",
    readTime: "5 min read",
    tag: "Product",
  },
  {
    title: "The Hidden Cost of Idle GPUs",
    excerpt: "There are millions of GPUs sitting idle right now. We crunched the numbers on what that waste actually costs — and the opportunity it represents.",
    date: "June 3, 2026",
    readTime: "7 min read",
    tag: "Industry",
  },
  {
    title: "Tokenode Architecture: Built for Trust",
    excerpt: "A deep dive into how we designed our platform for security, reliability, and scale — from Docker sandboxing to Proof of Compute.",
    date: "May 25, 2026",
    readTime: "10 min read",
    tag: "Engineering",
  },
  {
    title: "Open Core, Open Future",
    excerpt: "Why we're open-sourcing our Agent under MIT license, and how community contributions are shaping the future of decentralized compute.",
    date: "May 18, 2026",
    readTime: "4 min read",
    tag: "Company",
  },
  {
    title: "The Tokenode Agent: Go-Powered Efficiency",
    excerpt: "Why we chose Go for our agent — single binary, ~15MB, zero dependencies, and blazing fast GPU detection with NVML.",
    date: "May 10, 2026",
    readTime: "6 min read",
    tag: "Engineering",
  },
  {
    title: "Compute as a Utility: Our Vision",
    excerpt: "We believe compute should be as accessible as electricity. Here's the roadmap to making that vision a reality.",
    date: "May 1, 2026",
    readTime: "8 min read",
    tag: "Vision",
  },
];

export default function Blog() {
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

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-5xl font-bold">Tokenode <span className="text-primary">Blog</span></h1>
            <p className="text-xl text-muted-foreground">
              Thoughts on decentralized compute, AI infrastructure, and building the future of GPU access.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-12 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {posts.map((post, idx) => (
              <Card key={idx} className="neon-border p-6 hover:neon-glow transition-all cursor-pointer group">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">{post.tag}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                <span className="text-sm text-primary font-medium group-hover:underline">Read more →</span>
              </Card>
            ))}
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
