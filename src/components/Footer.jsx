import React from "react";
import {Link} from "react-router-dom";
import {Instagram,Facebook,MessageCircle,MapPin,Phone,Mail,Clock} from "lucide-react";
import {useStore} from "../context";

export default function Footer(){
 const {lang}=useStore(); const t=lang==="ar";
 return <footer className="bg-[#24170f] text-white mt-20">
  <div className="container-x py-14 grid md:grid-cols-4 gap-10">
   <div><div className="text-2xl font-black">SAFFRON<span className="text-brand-500">TABLE</span></div><p className="text-[#c7b9aa] mt-4 text-sm leading-7">{t?"مطعم سعودي عصري يجمع النكهات الغنية، المكونات الطازجة، والضيافة الدافئة.":"A modern Saudi dining concept bringing together bold flavors, fresh ingredients and warm hospitality."}</p><div className="flex gap-2 mt-5"><a className="p-2 rounded-full bg-white/5"><Instagram size={17}/></a><a className="p-2 rounded-full bg-white/5"><Facebook size={17}/></a></div></div>
   <div><h4 className="font-bold mb-4">{t?"استكشف":"Explore"}</h4><div className="grid gap-3 text-sm text-[#c7b9aa]"><Link to="/shop">{t?"القائمة":"Full Menu"}</Link><Link to="/offers">{t?"العروض":"Special Offers"}</Link><Link to="/new-arrivals">{t?"وصل حديثاً":"New on Menu"}</Link><Link to="/categories">{t?"الأقسام":"Categories"}</Link></div></div>
   <div><h4 className="font-bold mb-4">{t?"المطعم":"Restaurant"}</h4><div className="grid gap-3 text-sm text-[#c7b9aa]"><Link to="/about">{t?"قصتنا":"Our Story"}</Link><Link to="/contact">{t?"احجز طاولة":"Reserve a Table"}</Link><span>{t?"طلبات خارجية متاحة":"Takeaway available"}</span><span>{t?"جلسات عائلية":"Family dining"}</span></div></div>
   <div><h4 className="font-bold mb-4">{t?"تواصل معنا":"Visit Us"}</h4><div className="grid gap-3 text-sm text-[#c7b9aa]"><span className="flex gap-2"><MapPin size={17}/> Riyadh, Saudi Arabia</span><span className="flex gap-2"><Phone size={17}/> +966 50 000 0000</span><span className="flex gap-2"><Mail size={17}/> hello@saffrontable.sa</span><span className="flex gap-2"><Clock size={17}/> {t?"يومياً 12م - 1ص":"Daily 12 PM - 1 AM"}</span><a href="https://wa.me/966500000000" className="flex gap-2 text-brand-500"><MessageCircle size={17}/> WhatsApp</a></div></div>
  </div>
  <div className="border-t border-white/10 py-5 text-center text-xs text-[#8d7b6c]">© 2026 SAFFRON TABLE. Restaurant demo website for Saudi businesses.</div>
 </footer>
}
