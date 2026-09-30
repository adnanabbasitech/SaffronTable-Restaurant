import React from "react";
import {Link} from "react-router-dom";
import {ArrowRight,ChefHat,MessageCircle,Utensils,Clock,Star} from "lucide-react";
import {products,categories} from "../data/products";
import {useStore} from "../context";
import ProductGrid from "../components/ProductGrid";
import SectionTitle from "../components/SectionTitle";
export default function Home(){
 const {lang}=useStore(); const t=lang==="ar";
 return <main>
  <section className="hero-grid">
   <div className="container-x grid lg:grid-cols-2 min-h-[620px] items-center gap-10 py-14">
    <div className={t?"lg:order-2":""}>
     <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 text-brand-700 px-4 py-2 text-xs font-bold mb-6"><span className="w-2 h-2 bg-brand-500 rounded-full"/>{t?"نكهات سعودية بلمسة عصرية":"Saudi flavors, modern table"}</div>
     <h1 className="text-5xl md:text-7xl font-black leading-[.98] tracking-[-.04em] max-w-xl">{t?"طعم يجمعنا.": "Gather around great food."}<span className="block text-brand-600">{t?"تجربة تستحق التكرار.":"Made to be remembered."}</span></h1>
     <p className="text-[#75675b] text-lg leading-8 max-w-lg mt-6">{t?"استمتع بمشاوي شهية، أطباق سعودية، وبرجر مميز في أجواء دافئة وسط الرياض.":"Enjoy flame-grilled favorites, Saudi classics and signature burgers in a warm dining experience in Riyadh."}</p>
     <div className="flex flex-wrap gap-3 mt-8"><Link to="/shop" className="bg-[#3b2417] text-white px-7 py-4 rounded-full font-bold flex items-center gap-2">{t?"شاهد القائمة":"Explore menu"}<ArrowRight size={18}/></Link><Link to="/contact" className="bg-white border border-[#ddcfbe] px-7 py-4 rounded-full font-bold">{t?"احجز طاولة":"Reserve a table"}</Link></div>
     <div className="flex gap-7 mt-9 text-xs font-semibold text-[#75675b]"><span>✓ {t?"مكونات طازجة":"Fresh ingredients"}</span><span>✓ {t?"تحضير حسب الطلب":"Made to order"}</span></div>
    </div>
    <div className="relative"><div className="rounded-[32px] overflow-hidden aspect-[.95] shadow-2xl"><img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85" className="w-full h-full object-cover"/></div><div className="absolute -bottom-5 start-4 md:start-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"><div className="w-11 h-11 bg-brand-50 text-brand-600 rounded-full grid place-items-center"><Clock size={21}/></div><div><b className="text-sm">{t?"مفتوح يومياً":"Open daily"}</b><div className="text-xs text-slate-400 mt-1">12 PM — 1 AM</div></div></div></div>
   </div>
  </section>
  <section className="container-x py-20"><SectionTitle eyebrow={t?"اكتشف قائمتنا":"Explore the menu"} title={t?"اختر حسب رغبتك":"Something for every craving"} link="/categories"/>
   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{categories.slice(0,8).map((c,i)=><Link key={c.name} to={`/shop?category=${encodeURIComponent(c.name)}`} className="relative h-36 md:h-48 rounded-2xl overflow-hidden group"><img src={products[i*10]?.image} className="w-full h-full object-cover group-hover:scale-105 transition"/><div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/><div className="absolute bottom-4 start-4 text-white"><b className="block">{t?c.nameAr:c.name}</b><span className="text-xs text-white/70">10 {t?"أطباق":"dishes"}</span></div></Link>)}</div>
  </section>
  <section className="container-x pb-20"><SectionTitle eyebrow={t?"الأكثر طلباً":"Guest favorites"} title={t?"أطباقنا المميزة":"Signature favorites"}/><ProductGrid products={products.filter(p=>p.featured).slice(0,8)}/></section>
  <section className="bg-[#3b2417] text-white"><div className="container-x py-16 grid md:grid-cols-3 gap-8">{[[ChefHat,t?"نكهات أصيلة":"Authentic flavors",t?"وصفات مستوحاة من مطبخنا المحلي":"Recipes inspired by regional favorites"],[MessageCircle,t?"حجز سريع":"Easy reservations",t?"تواصل معنا مباشرة عبر واتساب":"Message us directly on WhatsApp"],[Utensils,t?"تجربة دافئة":"Warm dining",t?"جلسات مريحة للعائلات والأصدقاء":"Comfortable tables for family and friends"]].map(([I,h,p])=><div key={h} className="flex gap-4"><div className="w-12 h-12 rounded-2xl bg-white/10 grid place-items-center shrink-0"><I/></div><div><h3 className="font-bold">{h}</h3><p className="text-sm text-white/60 mt-1 leading-6">{p}</p></div></div>)}</div></section>
  <section className="container-x py-20"><SectionTitle eyebrow={t?"جديد على القائمة":"Just added"} title={t?"أطباق جديدة":"New on the menu"} link="/new-arrivals"/><ProductGrid products={products.filter(p=>p.new).slice(0,8)}/></section>
  <section className="container-x pb-20"><div className="rounded-3xl bg-brand-50 p-8 md:p-14 grid md:grid-cols-2 gap-8 items-center"><div><div className="text-brand-600 font-bold text-sm">{t?"لنجعلها مناسبة لك":"Make it your table"}</div><h2 className="text-3xl md:text-5xl font-black mt-2">{t?"لديك مناسبة خاصة؟":"Planning a special occasion?"}</h2><p className="text-slate-500 mt-4 leading-7">{t?"تواصل معنا للحجوزات، المناسبات الخاصة، والطلبات الخارجية.":"Talk to our team about reservations, private gatherings and takeaway orders."}</p><Link to="/contact" className="inline-flex mt-6 bg-[#3b2417] text-white px-6 py-3 rounded-full font-bold">{t?"تواصل معنا":"Talk to us"}</Link></div><div className="rounded-2xl overflow-hidden aspect-video"><img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover"/></div></div></section>
 </main>
}
