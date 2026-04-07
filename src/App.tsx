/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Zap, 
  MessageCircle, 
  ArrowRight,
  Star,
  Users
} from "lucide-react";

export default function App() {
  const KAKAO_LINK = "http://pf.kakao.com/_xeUixkn";

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-rose-500" />,
      title: "당일 즉시 활동",
      description: "복잡한 절차 없이 가입 즉시 바로 활동이 가능합니다."
    },
    {
      icon: <Clock className="w-6 h-6 text-rose-500" />,
      title: "자유로운 시간",
      description: "내가 원하는 시간에, 원하는 만큼만 자유롭게 일하세요."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-rose-500" />,
      title: "철저한 익명 보장",
      description: "개인정보 노출 걱정 없는 100% 익명 프라이버시 시스템입니다."
    },
    {
      icon: <Star className="w-6 h-6 text-rose-500" />,
      title: "업계 최고 대우",
      description: "시급 54,000원 + @의 압도적인 수익을 보장합니다."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-900 overflow-x-hidden pb-24">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-md mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center">
              <MessageCircle className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">캠톡프렌즈</span>
          </div>
          <a 
            href={KAKAO_LINK}
            className="text-sm font-semibold text-rose-400 border border-rose-500/30 px-3 py-1 rounded-full hover:bg-rose-500/10 transition-colors"
          >
            가입문의
          </a>
        </div>
      </header>

      <main className="max-w-md mx-auto pt-16 bg-slate-950 text-white">
        {/* Hero Section */}
        <section className="relative px-6 pt-10 pb-16 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 bg-rose-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-600 rounded-full blur-3xl"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <span className="inline-block px-3 py-1 bg-rose-500/20 text-rose-400 text-xs font-bold rounded-full mb-4 border border-rose-500/30">
              20세 이상 여성이라면 누구나 가능
            </span>
            <h1 className="text-3xl font-extrabold leading-tight mb-4 text-white">
              캠톡커 모집 <br />
              <span className="text-rose-500">최고의 대우</span>로 <br />
              함께하세요!
            </h1>
            <p className="text-slate-400 mb-8 leading-relaxed">
              집에서 편하게 원하는 시간에 <br />
              자유롭게 활동이 가능합니다.
            </p>

            <div className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl p-6 text-white shadow-xl shadow-rose-900/40 mb-10 border border-rose-400/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-rose-100 text-sm font-medium">첫날부터 시급</span>
                <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Best Value</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black italic">54,000</span>
                <span className="text-xl font-bold">원</span>
                <span className="ml-2 text-rose-100 font-medium">+ @</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative w-full aspect-square rounded-3xl bg-slate-900 overflow-hidden border-2 border-rose-500/30 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" 
              alt="Bright smiling young Korean woman with bun"
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            
            {/* Decorative Elements matching the uploaded image */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 flex items-center justify-center rotate-12">
              <Star className="text-yellow-400 fill-yellow-400 w-6 h-6" />
            </div>
            <div className="absolute bottom-20 left-4 w-16 h-16 bg-rose-500/20 backdrop-blur-md rounded-2xl border border-rose-500/30 flex items-center justify-center -rotate-12">
              <Zap className="text-rose-500 w-8 h-8" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">실시간 파트너 모집 중</p>
                <p className="text-[10px] text-rose-400 italic">20세 이상 여성 누구나!</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Trust Section */}
        <section className="px-6 py-12 bg-slate-900">
          <div className="text-center mb-10">
            <h2 className="text-xl font-bold mb-4 text-white">왜 캠톡프렌즈인가요?</h2>
            <div className="w-12 h-1 bg-rose-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 leading-relaxed">
              <strong className="text-rose-400 font-bold">캠톡프렌즈</strong>는 캠톡의 공식 회원가입을 <br />
              도와드리는 <span className="underline decoration-rose-500/50 decoration-4 underline-offset-4 text-white">가장 든든한 파트너</span>입니다.
            </p>
          </div>

          <div className="grid gap-4">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800 p-5 rounded-2xl border border-white/5 shadow-sm flex items-start gap-4"
              >
                <div className="p-3 bg-rose-500/10 rounded-xl">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{benefit.title}</h3>
                  <p className="text-sm text-slate-400 leading-snug">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features / Guide */}
        <section className="px-6 py-16 bg-slate-950">
          <div className="bg-rose-500/10 rounded-3xl p-8 relative overflow-hidden border border-rose-500/20">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <CheckCircle2 className="w-24 h-24 text-rose-500" />
            </div>
            <h2 className="text-2xl font-bold mb-6 relative z-10 text-white">가입 즉시 <br />혜택을 누리세요</h2>
            <ul className="space-y-4 relative z-10">
              {[
                "20세 이상 여성 누구나 가능",
                "수익금 당일 정산 시스템",
                "24시간 전담 매니저 케어",
                "초보자도 5분이면 적응 완료"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Footer Info */}
        <footer className="px-6 py-12 text-center border-t border-slate-100 bg-slate-900 text-white">
          <div className="mb-8 space-y-2">
            <p className="text-sm font-bold text-rose-400">캠톡 공식파트너 캠톡프렌즈</p>
            <p className="text-xs text-slate-400">문의전화: 010-4447-8292</p>
            <p className="text-xs text-slate-400">대표전화: 1551-7449</p>
            <p className="text-xs text-slate-400">카톡ID: @camt</p>
          </div>
          <p className="text-[10px] text-slate-500 mb-4">
            © 2026 캠톡프렌즈. All rights reserved. <br />
            본 서비스는 만 19세 이상 성인만 이용 가능합니다.
          </p>
          <div className="flex justify-center gap-4 text-[10px] font-medium text-slate-600">
            <span>이용약관</span>
            <span>개인정보처리방침</span>
            <span>청소년보호정책</span>
          </div>
        </footer>
      </main>

      {/* Floating CTA Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 z-50 bg-gradient-to-t from-slate-950 via-slate-950 to-transparent">
        <div className="max-w-md mx-auto">
          <motion.a 
            href={KAKAO_LINK}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 w-full bg-rose-500 hover:bg-rose-600 text-white font-black text-xl py-5 rounded-2xl shadow-2xl shadow-rose-300 transition-all group"
          >
            <MessageCircle className="w-7 h-7 fill-white/20" />
            지금 바로 문의하기
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <p className="text-center text-[10px] text-slate-400 mt-3 font-medium">
            * 클릭 시 카카오톡 상담 채널로 연결됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
