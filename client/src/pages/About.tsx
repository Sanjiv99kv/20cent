import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container">
          <h1 className="font-display font-bold text-6xl md:text-8xl mb-8 tracking-tighter">
            About Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Twenty Cents Studio is an integrated creative studio based in Tokyo. We combine cutting-edge technology with human artistry to redefine digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-abstract.png')] bg-cover bg-center opacity-20" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-display font-bold text-4xl md:text-6xl">
              AI × Human Optimization
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              "We draw a clear line between what AI can automate and what requires the human touch."
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 mx-auto" />
            <p className="text-lg text-gray-400 leading-relaxed">
              By establishing unique rules to separate these domains, we eliminate unnecessary work while delivering high-quality creative tailored to your needs. This allows us to offer flexible delivery timelines and a wide range of budget proposals based on your company's scale.
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-32 bg-background">
        <div className="container">
          <h2 className="font-display font-bold text-4xl mb-12">Company Profile</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 border-t border-border pt-8">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Company Name</h3>
              <p className="text-xl font-medium">20cent Inc. (株式会社20cent)</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Location</h3>
              <p className="text-xl font-medium">
                1-1-17 LANTIQUE105, Nakameguro<br />
                Meguro-ku, Tokyo
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Contact</h3>
              <p className="text-xl font-medium">
                01-2345-6789<br />
                info@20cent-jp.com
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Website</h3>
              <p className="text-xl font-medium">20cent-jp.com</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Services</h3>
              <ul className="text-xl font-medium space-y-1">
                <li>Web Development</li>
                <li>Video Production</li>
                <li>Brand Guidelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
