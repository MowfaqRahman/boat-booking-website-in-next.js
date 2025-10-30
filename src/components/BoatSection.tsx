import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Clock, Anchor } from "lucide-react";
import riverBoat from "@/assets/river-boat-main.jpg";

const BoatSection = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="boat" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our AK47 Boat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A beautiful, well-maintained vessel perfect for your river adventure. Comfortable seating for up to 8 passengers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden hover:shadow-river transition-all duration-300">
            <CardHeader className="p-0">
              <div className="relative h-96 overflow-hidden">
                <img
                  src={riverBoat}
                  alt="River cruise boat"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="mb-6">
                <span className="text-sm text-secondary font-medium uppercase tracking-wide">AK47 Vessel</span>
                <h3 className="text-3xl font-bold text-foreground mb-4">River Explorer</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  Experience the tranquility of AK47 in our comfortable, well-appointed boat. 
                  Perfect for family outings, romantic getaways, or celebrations with friends. 
                  Our experienced captain will guide you through the most scenic parts of the river, 
                  sharing local knowledge and ensuring a safe, enjoyable journey.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Capacity</p>
                    <p className="font-semibold text-foreground">Up to 8 Guests</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold text-foreground">Flexible Hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Anchor className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-semibold text-foreground">Expert Captain</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-foreground mb-3">Amenities & Features:</h4>
                <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    Comfortable seating for 8
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    Sun protection canopy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    Life jackets provided
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    Refreshments available
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    Scenic route options
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    Professional narration
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Button onClick={scrollToBooking} className="w-full bg-secondary hover:bg-secondary/90 text-lg py-6">
                Book Your AK47
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BoatSection;
