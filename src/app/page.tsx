import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-8 py-6 flex justify-between items-center">
        <div className="text-xl font-light tracking-widest uppercase">Pauu Intelligence</div>
        <div className="hidden md:flex space-x-12 text-sm font-light tracking-widest uppercase">
          <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
          <a href="#service" className="hover:opacity-50 transition-opacity">Service</a>
          <a href="#testimonials" className="hover:opacity-50 transition-opacity">Clients</a>
          <a href="#blog" className="hover:opacity-50 transition-opacity">Thinking</a>
          <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
        <div className="container mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-6xl md:text-8xl mb-8 leading-tight">
              Logic meets <br />
              <span className="text-gray-400 italic">Vision.</span>
            </h1>
            <p className="max-w-md text-lg mb-12">
              高度なテクノロジーと洗練された思考。私たちは、未来をデザインする知的なパートナーです。
            </p>
            <div className="h-px w-24 bg-black dark:bg-white mb-4"></div>
            <div className="text-xs tracking-widest uppercase">Technological Leadership</div>
          </div>
          <div className="relative aspect-square fade-in" style={{ animationDelay: '0.2s' }}>
            <Image
              src="/hero.png"
              alt="Intellectual Pauu"
              fill
              className="object-contain grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50 dark:bg-zinc-950">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl mb-16">Intelligence. Integrity. Innovation.</h2>
            <div className="grid md:grid-cols-2 gap-24">
              <p className="text-xl leading-relaxed">
                私たちは、従来の「可愛い」の枠を超え、知的でミニマルなアプローチでビジネスの課題を解決します。細部へのこだわりと、圧倒的な余白が、真の美しさと信頼を生み出します。
              </p>
              <div className="space-y-8 font-light text-sm uppercase tracking-widest">
                <div>
                  <div className="text-gray-400 mb-2">01 / Strategy</div>
                  <div>データに基づいた緻密な戦略設計</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-2">02 / Design</div>
                  <div>本質を突いたミニマルな視覚表現</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-2">03 / Code</div>
                  <div>堅牢で美しいシステム構築</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="section-padding">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative aspect-square">
              <Image
                src="/service.png"
                alt="Professional Pauu"
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-6xl mb-8">Strategic <br />Solutions</h2>
              <p className="mb-12 text-lg">
                複雑な情報を整理し、価値を最大限に引き出すための専門的な分析と提案を行います。
              </p>
              <ul className="space-y-6">
                {[
                  "マーケット市場調査とデータ分析",
                  "ブランドアイデンティティの構築",
                  "AIを活用した業務効率化支援",
                  "UX/UIデザインの最適化"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-4 border-b border-gray-100 dark:border-zinc-800 pb-4">
                    <span className="text-xs text-gray-400">0{i+1}</span>
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-padding bg-black text-white">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-5xl mb-24 font-light">Client Voice</h2>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { text: "ミニマルなデザインの中に、確かな知性を感じました。", author: "Tech Lead, Global Corp" },
              { text: "期待以上の分析力と、洗練されたプレゼンテーションに驚きました。", author: "CEO, Creative Studio" },
              { text: "細部まで妥協のない姿勢が、結果に直結しました。", author: "Product Manager, Startup" }
            ].map((t, i) => (
              <div key={i} className="space-y-6">
                <p className="italic text-gray-400 font-light">&ldquo;{t.text}&rdquo;</p>
                <div className="text-xs tracking-widest uppercase">{t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section-padding">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <h2 className="text-4xl md:text-6xl">Latest <br />Insights</h2>
            <div className="text-xs tracking-widest uppercase cursor-pointer hover:underline">View All Articles</div>
          </div>
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="space-y-16">
              {[
                { date: "2026.03.01", title: "ミニマリズムがもたらす意思決定の速度" },
                { date: "2026.02.15", title: "AIと共生する未来のクリエイティビティ" },
                { date: "2026.01.20", title: "余白がビジネスの解像度を上げる理由" }
              ].map((post, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="text-xs text-gray-400 mb-2 uppercase tracking-tighter">{post.date}</div>
                  <h3 className="text-2xl font-light group-hover:text-gray-400 transition-colors">{post.title}</h3>
                </div>
              ))}
            </div>
            <div className="relative aspect-square">
              <Image
                src="/blog.png"
                alt="Thinking Pauu"
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50 dark:bg-zinc-950">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl mb-8 font-light italic">Connect <br />with Us</h2>
              <p className="mb-12">
                新しいプロジェクトの相談、または知的で洗練されたサービスについての詳細。
                私たちは常に、新しい出会いを求めています。
              </p>
              <div className="space-y-4">
                <input type="text" placeholder="NAME" className="w-full bg-transparent border-b border-gray-300 dark:border-zinc-700 py-4 font-light focus:outline-none focus:border-black dark:focus:border-white transition-colors" />
                <input type="email" placeholder="EMAIL" className="w-full bg-transparent border-b border-gray-300 dark:border-zinc-700 py-4 font-light focus:outline-none focus:border-black dark:focus:border-white transition-colors" />
                <textarea rows={4} placeholder="MESSAGE" className="w-full bg-transparent border-b border-gray-300 dark:border-zinc-700 py-4 font-light focus:outline-none focus:border-black dark:focus:border-white transition-colors"></textarea>
                <button className="mt-8 px-12 py-4 border border-black dark:border-white text-xs tracking-widest uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">Submit Inquiry</button>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/contact.png"
                alt="Contact Pauu"
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-gray-100 dark:border-zinc-800 text-center">
        <div className="text-xs tracking-[0.4em] uppercase font-light text-gray-400">
          © 2026 Pauu Intelligence. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
