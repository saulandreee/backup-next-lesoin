import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-base-50">
      <div>
        <Navbar />
        <h1 className="text-4xl font-marcellus">Hey</h1>
        <Button size="lg">Testing</Button>
        <Button
          variant="secondary"
          size="lg"
        >
          Testing
        </Button>
        <Button
          size="lg"
          variant="outline"
        >
          Testing
        </Button>
        <Button
          size="lg"
          variant="destructive"
        >
          Testing
        </Button>
      </div>
    </main>
  );
}
