import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Section 1: The Vision (Hero) */}
        <section className="w-full py-20 md:py-32 lg:py-40 text-center">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              An AI teammate for every employee.
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
              Go beyond simple automation. Deploy intelligent agents that handle
              complex enterprise workflows from end to end.
            </p>
            <div className="mt-8">
              <Button size="lg">Watch Demo</Button>
            </div>
          </div>
        </section>

        {/* Section 2: The "Wow" (Interactive Demo) */}
        <section className="w-full py-12 md:py-24 bg-secondary">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              From tedious to done.
            </h2>
            <div className="w-full max-w-4xl mx-auto mt-8 bg-background rounded-lg shadow-lg h-64 md:h-96 flex items-center justify-center">
              <p className="text-muted-foreground">[Video / Demo Placeholder]</p>
            </div>
          </div>
        </section>

        {/* Section 3: How It Works ("Agent Stack") */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              A full-stack approach to automation.
            </h2>
            <div className="grid gap-8 md:grid-cols-3 mt-8 max-w-5xl mx-auto">
              <div className="p-6 bg-secondary rounded-lg">
                <h3 className="text-xl font-bold">Proprietary Models</h3>
                <p className="text-muted-foreground mt-2">
                  Fine-tuned LLMs designed for enterprise logic and reasoning.
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-lg">
                <h3 className="text-xl font-bold">Agent-Native Platform</h3>
                <p className="text-muted-foreground mt-2">
                  A central hub to build, deploy, and monitor your digital
                  workforce.
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-lg">
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
        <section className="w-full py-12 md:py-24 bg-secondary">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Built for the complexity of your business.
            </h2>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5 mt-8 max-w-5xl mx-auto">
              {[
                "Invoice Processing",
                "Customer Ticket Triaging",
                "HR Onboarding",
                "Sales Lead Qualification",
                "Financial Data Reconciliation",
              ].map((useCase) => (
                <div key={useCase} className="p-4 bg-background rounded-lg text-center">
                  <p className="font-semibold">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: The Unfair Advantage (Workstation) */}
        <section className="w-full py-12 md:py-24">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Your Data. Your Models. Your AI.
              </h2>
              <p className="text-muted-foreground">
                Our on-premise Agentic Workstation gives you the power of
                cutting-edge AI with none of the data privacy trade-offs.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-semibold">Total Privacy:</span> Your
                  sensitive data never leaves your control.
                </li>
                <li>
                  <span className="font-semibold">Predictable Cost:</span> A
                  fixed-cost asset, not a variable operational expense.
                </li>
                <li>
                  <span className="font-semibold">Peak Performance:</span> Pre-configured with agents fine-tuned for your industry.
                </li>
              </ul>
            </div>
            <div className="bg-secondary rounded-lg shadow-lg h-80 flex items-center justify-center">
              <p className="text-muted-foreground">[Workstation Render Placeholder]</p>
            </div>
          </div>
        </section>

        {/* Section 6: The Mission */}
        <section className="w-full py-12 md:py-24 text-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Democratizing access to useful AI.
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
              Our mission is to empower every company, not just the tech giants,
              with a true digital workforce.
            </p>
            <div className="mt-8">
              <Button variant="secondary">About Us</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 px-4 md:px-6 border-t bg-secondary">
        <div className="container flex items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; 2025 Forth AI. All rights reserved.</p>
          {/* Add social links or other footer content here */}
        </div>
      </footer>
    </div>
  );
}