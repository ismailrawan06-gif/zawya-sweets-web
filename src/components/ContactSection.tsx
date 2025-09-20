import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-amiri text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            زورونا في زاوية صحية
          </h2>
          <p className="font-cairo text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            نحن في انتظاركم لتجربة أجمل الحلويات المصرية الصحية
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Address */}
          <Card className="bg-card/95 backdrop-blur-sm border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="font-cairo text-xl font-bold text-foreground mb-2">العنوان</h3>
              <p className="font-cairo text-muted-foreground">
                شارع التحرير، وسط البلد<br />
                القاهرة، مصر
              </p>
            </CardContent>
          </Card>
          
          {/* Phone */}
          <Card className="bg-card/95 backdrop-blur-sm border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-cairo text-xl font-bold text-foreground mb-2">الهاتف</h3>
              <p className="font-cairo text-muted-foreground">
                ٠١٠٠١٢٣٤٥٦٧<br />
                ٠٢٢٧٦٥٤٣٢١
              </p>
            </CardContent>
          </Card>
          
          {/* Hours */}
          <Card className="bg-card/95 backdrop-blur-sm border-primary/20 md:col-span-2 lg:col-span-1">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🕐</span>
              </div>
              <h3 className="font-cairo text-xl font-bold text-foreground mb-2">مواعيد العمل</h3>
              <p className="font-cairo text-muted-foreground">
                يومياً من ٩ صباحاً<br />
                حتى ١١ مساءً
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button variant="secondary" size="lg" className="font-cairo text-lg">
            احجز طاولة الآن
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;