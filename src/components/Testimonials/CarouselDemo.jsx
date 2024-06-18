import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "./carousel.css"; // Make sure to import the CSS

const testimonials = [
  { name: "Alice Johnson", role: "CEO at Company A", comment: "This is an amazing service! Highly recommend to everyone." },
  { name: "Bob Smith", role: "Marketing Head at Company B", comment: "A wonderful experience from start to finish. Very professional." },
  { name: "Charlie Brown", role: "Developer at Company C", comment: "Exceptional quality and great customer support." },
  { name: "Daisy Lee", role: "Designer at Company D", comment: "Absolutely loved it! Will be back for more." },
  { name: "Evan Wright", role: "Manager at Company E", comment: "Fantastic! Truly exceeded my expectations." },
];

export function CarouselDemo() {
  return (
    <div className="flex justify-center items-center   bbb
    ">
      <Carousel className="w-full max-w-3xl">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="p-4">
                <Card className="carousel-card w-full max-w-2xl mx-auto">
                  <CardContent className="flex flex-col items-center justify-center p-12">
                    <span className="text-2xl font-semibold mb-2">{testimonial.name}</span>
                    <span className="text-lg text-gray-500 mb-4">{testimonial.role}</span>
                    <p className="text-center text-lg">{testimonial.comment}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
