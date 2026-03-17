import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { getDictionary } from "../get-dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "id");

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-primary/30 selection:text-white">
      <Navbar dict={dict} />
      <main>
        <Hero dict={dict} />
        <Features dict={dict} />
        <Pricing dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
