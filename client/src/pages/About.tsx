import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Globe, Shield, Github, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold">Compute Should Be <span className="text-primary">Democratic</span></h1>
            <p className="text-xl text-muted-foreground">
              Not everyone can afford an A100. But everyone should be able to afford AI. 
              Tokenode connects idle GPUs with people who need compute — no gatekeepers, no markups, no BS.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">The Problem We <span className="text-primary">Saw</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="neon-border p-8">
              <h3 className="text-2xl font-bold mb-4">Millions of GPUs, Idle</h3>
              <p className="text-muted-foreground leading-relaxed">
                In 2024, millions of high-end GPUs sit idle 16+ hours a day. Gamers sleep. Workstations idle. 
                Mining rigs went dark. That's billions of compute hours — wasted. We saw an opportunity 
                to turn waste into wealth.
              </p>
            </Card>
            <Card className="neon-border p-8">
              <h3 className="text-2xl font-bold mb-4">AI Is a Luxury</h3>
              <p className="text-muted-foreground leading-relaxed">
                $1.50+/hr for cloud GPU. Students can't afford to train models. Researchers in developing 
                countries are locked out. Indie developers can't compete. AI progress is being gatekept 
                by cloud pricing. We're changing that.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 border-t border-border">
        <div className="container text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold">Our <span className="text-primary">Mission</span></h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Make compute as accessible as electricity — turn it on, use what you need, pay for what you use. 
            No contracts. No minimums. No gatekeepers.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">What We <span className="text-primary">Believe</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: "Privacy First", desc: "End-to-end encryption isn't a feature — it's a requirement. Your data never touches our servers. Containers are destroyed after every task." },
              { icon: Github, title: "Open Core", desc: "Our Agent is fully open source (MIT). Anyone can audit the code, contribute improvements, or build on top of it. Transparency is non-negotiable." },
              { icon: Globe, title: "Global & Equal", desc: "A developer in Lagos should have the same access as one in San Francisco. Same price. Same performance. Same opportunity." },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="neon-border p-6 text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 border-t border-border">
        <div className="container text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold">Built by <span className="text-primary">One Person</span></h2>
          <p className="text-lg text-muted-foreground">
            Tokenode started as a solo project — one developer who believed compute should be accessible to everyone. 
            We're looking for people who share the vision.
          </p>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2">
            We're Hiring <ArrowRight />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
