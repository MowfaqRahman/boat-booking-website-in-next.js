import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 954474688" },
    { icon: Mail, label: "Email", value: "ak47bootlifeofficial@gmail.com" },
    { icon: MapPin, label: "Location", value: "Aluva, Ernakulam" },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6"> {/* Left column for contact information */} 
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-river transition-shadow duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{info.label}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="space-y-6"> {/* Right column for the map */} 
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Location</h3> {/* Added heading for the map */} 
            <Card className="h-full"> {/* Ensure map card takes full height */} 
              <CardContent className="p-0 h-full">
                <div className="w-full h-full bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.799796856526!2d76.33596541527788!3d10.03362929283733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0805186b593649%3A0x6334a17d2a58b0f!2sAluva%20River!5e0!3m2!1sen!2sin!4v1678901234567"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Location Map"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
