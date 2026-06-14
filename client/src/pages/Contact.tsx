import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail, MessageCircle, Twitter, Github, Send } from "lucide-react";

export default function Contact() {
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
            <h1 className="text-5xl font-bold">Get in <span className="text-primary">Touch</span></h1>
            <p className="text-xl text-muted-foreground">
              Have a question? Want to become a partner? Need help getting started? We're here for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="neon-border p-8 text-center space-y-4">
              <Mail className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-2xl font-semibold">Email Us</h3>
              <p className="text-muted-foreground">
                For general inquiries, partnerships, and support.
              </p>
              <a href="mailto:hello@tokenode.ai" className="text-primary text-lg font-semibold hover:underline block">
                hello@tokenode.ai
              </a>
            </Card>
            <Card className="neon-border p-8 text-center space-y-4">
              <MessageCircle className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-2xl font-semibold">Join Our Discord</h3>
              <p className="text-muted-foreground">
                Chat with the community, get help, and stay updated.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Join Discord <ArrowRight />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-16 border-t border-border">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl font-bold">Follow <span className="text-primary">Us</span></h2>
          <div className="flex justify-center gap-6">
            {[
              { icon: Twitter, label: "Twitter", href: "#" },
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Send, label: "Telegram", href: "#" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <a key={idx} href={item.href} className="neon-border rounded-lg p-4 flex flex-col items-center gap-2 hover:neon-glow transition-all">
                  <Icon className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              );
            })}
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
