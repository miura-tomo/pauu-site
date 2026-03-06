'use client';

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const heroRef = useRef(null);
  const serviceRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  // Parallax effects
  const heroY = useTransform(smoothProgress, [0, 0.2], [0, -100]);
  const serviceY = useTransform(smoothProgress, [0.1, 0.4], [50, -50]);

  return (
    <main className="min-h-screen bg-white dark:bg-black selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <CustomCursor />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-8 py-6 flex justify-between items-center text-white">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-light tracking-[0.3em] uppercase"
        >
          Pauu Intelligence
        </motion.div>
        <div className="hidden md:flex space-x-12 text-xs font-light tracking-[0.2em] uppercase">
          {["About", "Service", "Clients", "Thinking", "Contact"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="hover:opacity-50 transition-opacity"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="container mx-auto px-8 grid md:grid-cols-2 gap-12 items-center relative z-10"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-9xl mb-8 leading-tight font-light"
            >
              Logic <br />
              <span className="text-gray-300 italic dark:text-zinc-700">Vision.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="max-w-md text-lg mb-12 text-gray-400"
            >
              高度なテクノロジーと洗練された思考。私たちは、未来をデザインする知的なパートナーです。
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative aspect-square"
          >
            <Image
              src="/hero.png"
              alt="Intellectual Pauu"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Background Light Effect */}
        <div className="absolute inset-0 bg-radial-gradient from-gray-50 to-white dark:from-zinc-900 dark:to-black z-0 opacity-50" />
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-5xl md:text-7xl mb-16 leading-tight">Intelligence.<br />Integrity.<br />Innovation.</h2>
            <div className="grid md:grid-cols-2 gap-24">
              <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                従来の枠を超え、知的でミニマルなアプローチでビジネスの課題を解決します。細部へのこだわりと、圧倒的な余白が、真の美しさと信頼を生み出します。
              </p>
              <div className="space-y-12 font-light text-xs uppercase tracking-[0.3em]">
                {["Strategy", "Design", "Code"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="border-t border-zinc-200 dark:border-zinc-800 pt-6"
                  >
                    <div className="text-zinc-400 mb-2">0{i + 1} / {item}</div>
                    <div className="text-lg normal-case tracking-normal">
                      {i === 0 && "データに基づいた緻密な戦略設計"}
                      {i === 1 && "本質を突いたミニマルな視覚表現"}
                      {i === 2 && "堅牢で美しいシステム構築"}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Section */}
      <section ref={serviceRef} id="service" className="section-padding overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div
              style={{ y: serviceY }}
              className="relative aspect-square"
            >
              <Image
                src="/service.png"
                alt="Professional Pauu"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl mb-8 leading-tight">Strategic<br />Solutions</h2>
              <p className="mb-12 text-lg text-zinc-500">
                複雑な情報を整理し、価値を最大限に引き出すための専門的な分析と提案を行います。
              </p>
              <ul className="grid gap-8">
                {[
                  "マーケット市場調査とデータ分析",
                  "ブランドアイデンティティの構築",
                  "AIを活用した業務効率化支援",
                  "UX/UIデザインの最適化"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 10 }}
                    className="group flex items-center space-x-6 border-b border-zinc-100 dark:border-zinc-900 pb-6 cursor-pointer"
                  >
                    <span className="text-xs text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors">0{i + 1}</span>
                    <span className="text-xl font-light">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section-padding bg-zinc-950 text-white">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32">
            <h2 className="text-5xl md:text-8xl font-thin">Insights</h2>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xs tracking-[0.4em] uppercase opacity-50 cursor-pointer border-b border-white/20 pb-2"
            >
              View Archive
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 gap-32 items-center">
            <div className="space-y-20">
              {[
                { date: "2026.03.01", title: "ミニマリズムがもたらす意思決定の速度" },
                { date: "2026.02.15", title: "AIと共生する未来のクリエイティビティ" },
                { date: "2026.01.20", title: "余白がビジネスの解像度を上げる理由" }
              ].map((post, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="text-xs text-zinc-600 mb-4 tracking-widest">{post.date}</div>
                  <h3 className="text-3xl font-light group-hover:opacity-50 transition-all">{post.title}</h3>
                </motion.div>
              ))}
            </div>
            <motion.div
              whileHover={{ rotate: 1, scale: 1.02 }}
              className="relative aspect-square grayscale brightness-110"
            >
              <Image
                src="/blog.png"
                alt="Thinking Pauu"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white dark:bg-black">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-8xl mb-12 font-light italic tracking-tighter text-zinc-300 dark:text-zinc-800">
                Connect.
              </h2>
              <div className="space-y-12">
                {["NAME", "EMAIL", "MESSAGE"].map((field) => (
                  <div key={field} className="relative group">
                    <input
                      type={field === "EMAIL" ? "email" : "text"}
                      placeholder={field}
                      className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-6 font-light focus:outline-none focus:border-black dark:focus:border-white transition-all text-xl"
                    />
                  </div>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#000", color: "#fff" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto px-20 py-6 border border-black dark:border-white text-xs tracking-[0.5em] uppercase transition-all"
                >
                  Join the Future
                </motion.button>
              </div>
            </motion.div>
            <div className="relative aspect-[3/4]">
              <Image
                src="/contact.png"
                alt="Contact Pauu"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-zinc-100 dark:border-zinc-900 text-center">
        <div className="text-[10px] tracking-[0.6em] uppercase font-light text-zinc-400">
          © 2026 Pauu Intelligence / Defined by Vision.
        </div>
      </footer>
    </main>
  );
}
