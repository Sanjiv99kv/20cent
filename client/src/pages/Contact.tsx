import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { MapView } from "@/components/Map";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="container">
          <h1 className="font-display font-bold text-6xl md:text-8xl mb-8 tracking-tighter">
            {t.contact.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="space-y-8">
            <h2 className="font-display font-bold text-3xl">{t.contact.form.submit}</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">{t.contact.form.name}</label>
                  <Input id="name" placeholder={t.contact.form.name} className="bg-secondary border-transparent focus:border-black transition-colors h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">{t.contact.form.email}</label>
                  <Input id="email" type="email" placeholder={t.contact.form.email} className="bg-secondary border-transparent focus:border-black transition-colors h-12" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">{t.contact.form.company}</label>
                <Input id="subject" placeholder={t.contact.form.company} className="bg-secondary border-transparent focus:border-black transition-colors h-12" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">{t.contact.form.message}</label>
                <Textarea id="message" placeholder={t.contact.form.message} className="bg-secondary border-transparent focus:border-black transition-colors min-h-[200px] resize-none" />
              </div>

              <Button size="lg" className="w-full md:w-auto rounded-full px-8 h-12 bg-black text-white hover:bg-gray-800">
                {t.contact.form.submit} <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="font-display font-bold text-3xl">{t.contact.title}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{t.contact.info.address}</h3>
                    <p className="text-muted-foreground">
                      1-1-17 LANTIQUE105, Nakameguro<br />
                      Meguro-ku, Tokyo, Japan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{t.contact.info.phone}</h3>
                    <p className="text-muted-foreground">01-2345-6789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{t.contact.info.email}</h3>
                    <p className="text-muted-foreground">info@20cent-jp.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[400px] rounded-2xl overflow-hidden border border-border relative">
               <MapView 
                 className="w-full h-full"
                 onMapReady={(map: google.maps.Map) => {
                   const location = { lat: 35.6443, lng: 139.6991 }; // Nakameguro approx coords
                   map.setCenter(location);
                   map.setZoom(15);
                   new google.maps.Marker({
                     position: location,
                     map: map,
                     title: "Twenty Cents Studio"
                   });
                 }}
               />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
