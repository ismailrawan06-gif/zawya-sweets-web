import dessertsImage from "@/assets/desserts-display.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-amiri text-4xl md:text-5xl font-bold text-foreground">
              عن زاوية صحية
            </h2>
            <p className="font-cairo text-lg text-muted-foreground leading-relaxed">
              في زاوية صحية، نحن نؤمن بأن الحلويات التراثية المصرية يمكن أن تكون صحية ولذيذة في نفس الوقت. 
              نحن نستخدم أجود المكونات الطبيعية والعضوية لإعداد حلويات تراثية بطريقة عصرية صحية.
            </p>
            <p className="font-cairo text-lg text-muted-foreground leading-relaxed">
              من الأم علي المحضرة بحليب اللوز إلى البقلاوة المصنوعة بالعسل الطبيعي، 
              كل قطعة حلوى في مطعمنا تحكي قصة من التراث المصري بنكهة صحية معاصرة.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-cairo">100%</div>
                <div className="text-sm text-muted-foreground font-cairo">مكونات طبيعية</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-cairo">20+</div>
                <div className="text-sm text-muted-foreground font-cairo">نوع حلوى تراثية</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-warm">
              <img 
                src={dessertsImage} 
                alt="حلويات زاوية صحية" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-accent opacity-20"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-glow">
              <span className="text-2xl">🍯</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;