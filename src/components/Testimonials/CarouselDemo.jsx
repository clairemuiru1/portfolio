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
  { name: "Kelvin Naikuni", role: "Classmate", comment: "She is the perfect person to work with. The true definition of a team member and leader. Worked with her severally and all I can give is nothing but more credits." },
  { name: "Felix Kiprotich", role: "Classmate", comment: "I've had the pleasure of knowing Claire for some time now, and I must say, her dedication and expertise in Python and JavaScript programming are truly remarkable. Claire's commitment to her work is evident in every project she undertakes. Her hardworking nature and result-driven approach make her a valuable asset to any team. I highly recommend Claire for her exceptional skills and commendable work ethic." },
  { name: "Anita Kahenya", role: "Technical Mentor", comment: "I am pleased to recommend Claire, a dedicated student at Moringa School. As a timekeeper, she demonstrated excellent organizational skills and a commitment to productivity. Claire's curiosity and eagerness to learn were evident through her constant questioning and deep understanding of concepts. Her learner's mindset and determination were inspiring, and she consistently gave her best effort. Claire's strong work ethic, collaborative abilities, and passion for learning make her an excellent candidate for any opportunity she pursues." },
  { name: "Weddy Makena", role: "Software Developer", comment: "I had the pleasure of working with Claire on several projects, and I am consistently impressed with her skills and professionalism. Claire possesses an exceptional grasp of both frontend and backend development, demonstrating a keen ability to tackle complex problems with innovative solutions." },
  { name: "Daudi Mwanzia", role: "Classmate", comment: "Her attention to detail and commitment to delivering high-quality code are evident in every project she undertakes. Claire excels at understanding requirements and translating them into functional, user-friendly applications. Her ability to communicate effectively with both technical and non-technical team members makes her an invaluable asset to any project." },
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
