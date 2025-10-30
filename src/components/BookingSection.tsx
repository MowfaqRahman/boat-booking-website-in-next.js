import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Calendar, Users, Ship } from "lucide-react";
import emailjs from '@emailjs/browser';

const BookingSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      try {
        await emailjs.sendForm(
          'service_169ap32', // Replace with your EmailJS service ID for admin
          'template_vwsas7e', // Admin Booking Template ID
          form.current,
          'NmWO8zzMT5HMD8myG' // Replace with your EmailJS public key
        );

        // Send confirmation email to the user
        await emailjs.sendForm(
          'service_169ap32', // Replace with your EmailJS service ID for user confirmation
          'template_bmz05wo', // User Booking Confirmation Template ID
          form.current,
          'NmWO8zzMT5HMD8myG' // Replace with your EmailJS public key
        );

        toast.success("Booking request and confirmation email sent!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          guests: "",
          message: "",
        });
      } catch (error) {
        console.error('❌ EmailJS Error:', error);
        toast.error("Failed to send booking request or confirmation. Please try again.");
      }
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book Your River Cruise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready for a peaceful river journey? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-river">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Booking Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name" // Ensure this matches {{name}} in your template
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email" // Ensure this matches {{email}} in your template
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                    id="phone"
                    name="phone" // Ensure this matches {{phone}} in your template
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        id="date"
                        name="date" // Ensure this matches {{date}} in your template
                        type="date"
                        className="pl-10"
                        value={formData.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests (Max 8)</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        id="guests"
                        name="guests" // Ensure this matches {{guests}} in your template
                        type="number"
                        min="1"
                        max="8"
                        placeholder="4"
                        className="pl-10"
                        value={formData.guests}
                        onChange={(e) => handleChange("guests", e.target.value)}
                        required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Special Requests (Optional)</Label>
                <Textarea
                    id="message"
                    name="message" // Ensure this matches {{message}} in your template
                    placeholder="Tell us about any special requirements or preferences..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                />
              </div>
              <input type="hidden" name="time" value={new Date().toLocaleString()} />

              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-lg py-6">
                <Ship className="mr-2 h-5 w-5" />
                Submit Booking Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingSection;
