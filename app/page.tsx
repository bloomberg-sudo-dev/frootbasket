import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ShoppingBag,
  Github,
  Twitter,
  Linkedin,
  Cpu,
  KeyRound,
  Settings2,
  ShieldCheck,
  GitFork,
  BadgeDollarSign,
  UsersRound,
  CloudCog,
} from "lucide-react"

export default function FrootbasketLandingPage() {
  const features = [
    {
      icon: <BadgeDollarSign className="h-10 w-10 text-clay-orange" />,
      title: "No Monthly Fees",
      description: "Own your platform. Say goodbye to recurring subscription costs and vendor lock-in.",
    },
    {
      icon: <CloudCog className="h-10 w-10 text-clay-orange" />,
      title: "Self-Hosted or Cloud Ready",
      description:
        "Deploy on your own infrastructure for full control, or choose any cloud provider. Your data, your rules.",
    },
    {
      icon: <UsersRound className="h-10 w-10 text-clay-orange" />,
      title: "Built for Devs & Indie Brands",
      description: "An extensible, developer-first platform that's also intuitive for ambitious independent brands.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-clay-orange" />,
      title: "Stripe-Ready, AI-Powered, Open",
      description: "Seamless Stripe integration, AI capabilities, and completely open-source. Innovate without limits.",
    },
  ]

  const whyOpenSource = [
    {
      icon: <KeyRound className="h-8 w-8 text-clay-orange" />,
      title: "Full Control & Ownership",
      description: "Customize every aspect of your store and own your data without restrictions.",
    },
    {
      icon: <GitFork className="h-8 w-8 text-clay-orange" />,
      title: "Community Driven",
      description: "Benefit from a global community of developers and users contributing to the platform.",
    },
    {
      icon: <Settings2 className="h-8 w-8 text-clay-orange" />,
      title: "Limitless Customization",
      description: "Tailor your ecommerce experience precisely to your brand and customer needs.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-clay-orange" />,
      title: "Transparency & Security",
      description: "Audit the code, contribute to security, and trust in a transparent development process.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-sand text-charcoal font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-sand/80 backdrop-blur-md border-b border-charcoal/10">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-clay-orange">
            <ShoppingBag className="h-7 w-7" />
            <span>Frootbasket</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="https://github.com/bloomberg-sudo-dev/frootbasket"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-gray hover:text-clay-orange transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Button
              asChild
              variant="default" // Use default variant for custom styling
              className="hidden sm:inline-flex bg-earthy-green text-white hover:bg-earthy-green/90 rounded-md"
            >
              <Link href="https://tally.so/r/3jXVra">Join the Waitlist</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 bg-gradient-to-b from-sand via-[#fdf7f2] to-sand">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-charcoal">
              FrootBasket: Shopify, <span className="block sm:inline text-clay-orange">but Open Source.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-warm-gray max-w-xl mx-auto">
              The ecommerce platform you <span className="font-semibold text-charcoal">own</span>, not rent.
            </p>
            <Button
              asChild
              size="lg"
              variant="default"
              className="mt-10 px-10 py-7 text-lg font-semibold bg-earthy-green text-white hover:bg-earthy-green/90 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-150"
            >
              <Link href="https://example.com/waitlist-signup">Join the Waitlist</Link>
            </Button>
            <p className="mt-4 text-sm text-warm-gray/80">Be the first to know when we launch.</p>
          </div>
        </section>

        {/* Feature Highlight Section */}
        <section className="py-16 lg:py-24 bg-sand">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-12">
              Everything You Need, <span className="text-clay-orange">Nothing You Don't</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border border-charcoal/10 shadow-md hover:shadow-lg hover:shadow-clay-orange/10 transition-shadow duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-charcoal">{feature.title}</h3>
                  <p className="text-warm-gray text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Screenshot Section */}
        <section className="py-16 lg:py-24 bg-[#fdf9f4]">
          {" "}
          {/* Slightly off-sand */}
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-12">
              See <span className="text-clay-orange">FrootBasket</span> in Action
            </h2>
            <div className="max-w-4xl mx-auto bg-white rounded-xl border border-charcoal/15 shadow-xl overflow-hidden">
              <div className="h-10 flex items-center px-4 bg-[#f7f3ed]">
                {" "}
                {/* Darker sand for bar */}
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-clay-orange rounded-full"></div>
                  <div className="w-3 h-3 bg-[#f4a261] rounded-full"></div> {/* Lighter orange */}
                  <div className="w-3 h-3 bg-earthy-green rounded-full"></div>
                </div>
              </div>
              <div className="aspect-video bg-[#e0dcd3]">
                {" "}
                {/* Darker sand for placeholder content */}
                <Image
                  src="/placeholder.svg?width=1200&height=750"
                  width={1200}
                  height={750}
                  alt="Frootbasket Dashboard Demo Screenshot"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <p className="text-center mt-8 text-warm-gray">
              A glimpse into the intuitive and powerful Frootbasket dashboard.
            </p>
          </div>
        </section>

        {/* Why Open Source? Section */}
        <section className="py-16 lg:py-24 bg-sand">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                  The Power of <span className="text-clay-orange">Open Source</span>
                </h2>
                <p className="text-warm-gray mb-8 text-lg leading-relaxed">
                  Frootbasket is built on the principles of transparency, collaboration, and freedom. Open source means
                  you're not just a customer; you're part of a community. Take control of your ecommerce future, adapt
                  the platform to your unique needs, and benefit from collective innovation.
                </p>
              </div>
              <div className="space-y-6">
                {whyOpenSource.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white border border-charcoal/10 rounded-lg shadow-sm"
                  >
                    {item.icon}
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal">{item.title}</h3>
                      <p className="text-warm-gray text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-[#fdf9f4] border-t border-charcoal/10">
        {" "}
        {/* Slightly off-sand */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2 text-lg font-semibold text-clay-orange">
              <ShoppingBag className="h-6 w-6" />
              <span>Frootbasket</span>
            </div>
            <div className="flex gap-6">
              <Link
                href="https://x.com/OpemipoOduntan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gray hover:text-clay-orange transition-colors"
                aria-label="Frootbasket on X/Twitter"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com/company/your-frootbasket"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gray hover:text-clay-orange transition-colors"
                aria-label="Frootbasket on LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://github.com/bloomberg-sudo-dev/frootbasket"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gray hover:text-clay-orange transition-colors"
                aria-label="Frootbasket on GitHub"
              >
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-warm-gray/80">
            <p>&copy; {new Date().getFullYear()} Frootbasket. All rights reserved.</p>
            <Link href="/privacy-policy" className="underline hover:text-clay-orange transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
