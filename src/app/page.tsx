import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow">
        {/* Section 1: The Vision (Hero) */}
        <section className="relative w-full py-24 md:py-40 lg:py-56 text-center">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/20 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">
              An AI teammate for every employee.
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-6">
              Go beyond simple automation. Deploy intelligent agents that handle
              complex enterprise workflows from end to end.
            </p>
            <div className="mt-8">
              <Button size="lg">
                Watch Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: The "Wow" (Interactive Demo) */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              From tedious to done.
            </h2>
            <div className="w-full max-w-4xl mx-auto mt-8 border border-border rounded-xl shadow-2xl shadow-primary/10 overflow-hidden">
              <div className="bg-secondary/50 p-8 md:p-12 h-64 md:h-96 flex items-center justify-center">
                <p className="text-muted-foreground">[Video / Demo Placeholder]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: How It Works ("Agent Stack") */}
        <section className="w-full py-12 md:py-24 bg-secondary/20">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              A full-stack approach to automation.
            </h2>
            <div className="grid gap-8 md:grid-cols-3 mt-12 max-w-5xl mx-auto">
              <div className="p-8 bg-background border border-border rounded-xl transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <h3 className="text-xl font-bold">Proprietary Models</h3>
                <p className="text-muted-foreground mt-2">
                  Fine-tuned LLMs designed for enterprise logic and reasoning.
                </p>
              </div>
              <div className="p-8 bg-background border border-border rounded-xl transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <h3 className="text-xl font-bold">Agent-Native Platform</h3>
                <p className="text-muted-foreground mt-2">
                  A central hub to build, deploy, and monitor your digital
                  workforce.
                </p>
              </div>
              <div className="p-8 bg-background border border-border rounded-xl transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <h3 className="text-xl font-bold">Secure Infrastructure</h3>
                <p className="text-muted-foreground mt-2">
                  Your choice of cloud or our on-premise Agentic Workstation for
                  ultimate data control.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Use Cases */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Built for the complexity of your business.
            </h2>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-12 max-w-5xl mx-auto">
              {[
                "Invoice Processing",
                "Customer Ticket Triaging",
                "HR Onboarding",
                "Sales Lead Qualification",
                "Financial Data Reconciliation",
              ].map((useCase) => (
                <div key={useCase} className="p-4 bg-secondary/30 border border-border rounded-lg text-center transition-colors hover:bg-secondary/60">
                  <p className="font-medium text-sm">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: The Unfair Advantage (Workstation) */}
        <section className="w-full py-12 md:py-24 bg-secondary/20">
          <div className="container grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Your Data. Your Models. Your AI.
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Our on-premise Agentic Workstation gives you the power of
                cutting-edge AI with none of the data privacy trade-offs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">Total Privacy:</span> Your
                  sensitive data never leaves your control.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Predictable Cost:</span> A
                  fixed-cost asset, not a variable operational expense.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Peak Performance:</span> Pre-configured with agents fine-tuned for your industry.
                </li>
              </ul>
            </div>
            <div className="border border-border rounded-xl shadow-2xl shadow-primary/10 overflow-hidden">
               <div className="bg-secondary/50 p-8 md:p-12 h-80 flex items-center justify-center">
                <p className="text-muted-foreground">[Workstation Render Placeholder]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: The Mission */}
        <section className="w-full py-20 md:py-32 text-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Democratizing access to useful AI.
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-6">
              Our mission is to empower every company, not just the tech giants,
              with a true digital workforce.
            </p>
            <div className="mt-8">
              <Button variant="secondary">About Us</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 px-4 md:px-6 border-t border-border/40">
        <div className="container flex items-center justify-between text-sm text-muted-foreground">
          <p>&copy; 2025 Forth AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-foreground">Twitter</Link>
            <Link href="#" className="hover:text-foreground">LinkedIn</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}