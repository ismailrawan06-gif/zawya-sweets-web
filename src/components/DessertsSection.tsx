import { Card, CardContent } from "@/components/ui/card";
import omAliImage from "@/assets/om-ali.jpg";
import baklavaImage from "@/assets/baklava.jpg";
import muhallabiaImage from "@/assets/muhallabia.jpg";

const desserts = [
  {
    name: "أم علي صحية",
    description: "محضرة بحليب اللوز الطبيعي والمكسرات العضوية",
    image: omAliImage,
    price: "٢٥ جنيه"
  },
  {
    name: "بقلاوة بالعسل",
    description: "عجينة رقيقة محشوة بالفستق والعسل الطبيعي",
    image: baklavaImage,
    price: "٣٠ جنيه"
  },
  {
    name: "مهلبية طبيعية",
    description: "مهلبية كريمية بالحليب الطبيعي ورقائق اللوز",
    image: muhallabiaImage,
    price: "٢٠ جنيه"
  }
];

const DessertsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-amiri text-4xl md:text-5xl font-bold text-foreground mb-4">
            حلوياتنا المميزة
          </h2>
          <p className="font-cairo text-lg text-muted-foreground max-w-2xl mx-auto">
            تذوق أجمل الحلويات المصرية التراثية المحضرة بأجود المكونات الطبيعية والصحية
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {desserts.map((dessert, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={dessert.image} 
                    alt={dessert.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-cairo font-semibold">
                    {dessert.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-amiri text-2xl font-bold text-foreground mb-2">
                    {dessert.name}
                  </h3>
                  <p className="font-cairo text-muted-foreground leading-relaxed">
                    {dessert.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="font-cairo text-muted-foreground mb-6">
            وأكثر من ٢٠ نوع حلوى أخرى في انتظارك
          </p>
        </div>
      </div>
    </section>
  );
};

export default DessertsSection;