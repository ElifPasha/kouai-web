import { ArrowRight, AtSign, BrainCircuit, CalendarDays, Code2, Sparkles, Users } from 'lucide-react';

const activities = [
  { icon: Code2, title: 'Atölyeler', text: 'Python’dan üretken yapay zekâya, birlikte öğrenip gerçek projeler geliştiriyoruz.' },
  { icon: BrainCircuit, title: 'Proje Takımları', text: 'Fikirleri ekiplerle buluşturuyor, dönem boyunca çalışan ürünlere dönüştürüyoruz.' },
  { icon: Users, title: 'Topluluk', text: 'Farklı bölümlerden meraklı öğrencileri, mezunları ve sektör profesyonellerini bir araya getiriyoruz.' },
];

export default function Home() {
  return <main>
    <nav className="nav" aria-label="Ana menü">
      <a className="brand" href="#anasayfa" aria-label="KOU AI ana sayfa"><span className="brand-mark"><Sparkles size={18}/></span><span>KOU<span>AI</span></span></a>
      <div className="nav-links"><a href="#biz-kimiz">Biz Kimiz?</a><a href="#etkinlikler">Etkinlikler</a><a href="#projeler">Projeler</a></div>
      <a className="nav-cta" href="#katil">Aramıza Katıl <ArrowRight size={16}/></a>
    </nav>
    <section className="hero" id="anasayfa">
      <div className="hero-glow" aria-hidden="true"/><div className="eyebrow"><span/> Kocaeli Üniversitesi Yapay Zekâ Kulübü</div>
      <h1>Geleceği izlemiyoruz.<br/><em>Birlikte üretiyoruz.</em></h1>
      <p className="hero-copy">Yapay zekâyı merak eden, öğrenen ve dönüştüren öğrencilerin buluşma noktası. Bölümün ne olursa olsun, burada fikrine yer var.</p>
      <div className="hero-actions"><a className="primary-button" href="#katil">Topluluğa katıl <ArrowRight size={18}/></a><a className="secondary-button" href="#biz-kimiz">Bizi keşfet</a></div>
      <div className="hero-note"><span className="avatars"><i>A</i><i>M</i><i>Z</i></span><strong>Öğren • Üret • Paylaş</strong><small>Kampüste yapay zekânın buluşma noktası</small></div>
    </section>
    <section className="intro" id="biz-kimiz"><div><span className="section-label">BİZ KİMİZ?</span><h2>Merakı, bilgiye;<br/>bilgiyi, <em>etkiye</em> dönüştürüyoruz.</h2></div><p>Teknik deneyim şart değil. Merakın varsa beraber öğreniriz. Eğitimler, konuşmalar ve takım projeleriyle yapay zekâyı yalnızca konuşmuyor; kampüste hayata geçiriyoruz.</p></section>
    <section className="activity-grid" id="projeler">{activities.map(({icon:Icon,title,text},index)=><article className="activity-card" key={title}><div className="card-top"><span>0{index+1}</span><Icon size={27}/></div><h3>{title}</h3><p>{text}</p><a href="#katil">Keşfet <ArrowRight size={15}/></a></article>)}</section>
    <section className="event" id="etkinlikler"><div className="event-date"><CalendarDays size={25}/><span><strong>ÇOK YAKINDA</strong>Yeni dönem etkinlikleri</span></div><p>Atölye ve buluşma takvimimizi sosyal medya hesaplarımızdan duyuracağız.</p><a href="#katil">Haberdar ol <ArrowRight size={17}/></a></section>
    <section className="join" id="katil"><span className="section-label">SIRADAKİ FİKİR SENİN OLABİLİR</span><h2>Geleceği beraber<br/><em>şekillendirelim.</em></h2><p>KOU AI topluluğuna katıl; öğren, üret ve kendi izini bırak.</p><a className="primary-button light" href="https://www.instagram.com/kouyapayzeka/" target="_blank" rel="noreferrer"><AtSign size={18}/> Instagram'dan bize ulaş</a></section>
    <footer><a className="brand" href="#anasayfa"><span className="brand-mark"><Sparkles size={18}/></span><span>KOU<span>AI</span></span></a><p>Öğrenciler tarafından, geleceğe merakla.</p><a className="nav-cta" href="https://www.instagram.com/kouyapayzeka/" target="_blank" rel="noreferrer"><AtSign size={17}/>@kouyapayzeka</a><small>© 2026 KOU Yapay Zekâ Kulübü</small></footer>
  </main>;
}
