import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-4">
      <h1 className="text-4xl font-bold">Forth AI</h1>
      <p className="text-lg text-muted-foreground">Agent-Native Enterprise Software</p>
      <div className="flex gap-4">
        <Button>Request a Demo</Button>
        <Button variant="secondary">Contact Sales</Button>
      </div>
    </main>
  );
}
