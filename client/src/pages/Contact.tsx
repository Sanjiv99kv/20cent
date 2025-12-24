import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { MapView } from "@/components/Map";

export default function Contact() {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="container">
          <h1 className="font-display font-bold text-6xl md:text-8xl mb-8 tracking-tighter">
            Contact
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Ready to start your project? Get in touch with us to discuss how we can help elevate your brand.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="space-y-8">
            <h2 className="font-display font-bold text-3xl">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your Name" className="bg-secondary border-transparent focus:border-black transition-colors h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-secondary border-transparent focus:border-black transition-colors h-12" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="Project Inquiry" className="bg-secondary border-transparent focus:border-black transition-colors h-12" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Tell us about your project..." className="bg-secondary border-transparent focus:border-black transition-colors min-h-[200px] resize-none" />
              </div>

              <Button size="lg" className="w-full md:w-auto rounded-full px-8 h-12 bg-black text-white hover:bg-gray-800">
                Send Message <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="font-display font-bold text-3xl">Contact Info</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
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
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-muted-foreground">01-2345-6789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
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
