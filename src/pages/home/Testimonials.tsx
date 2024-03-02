import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionTitle from "@/components/shared/SectionTitle";
import TestimonialCard from "@/components/shared/TestimonialCard";

import avatar from "../../assets/Invisible.png";
import avatar1 from "../../assets/avatar1.jpg";
import amazonAvatar from "../../assets/amazon.jpg";
import netflix from "../../assets/Netflix.png";
import google from "../../assets/Google.png";
import youtube from "../../assets/Youtube.png";
import amazon from "../../assets/amazon.png";
import lenovo from "../../assets/lenovo.png";
import slack from "../../assets/slack.png";

const Testimonials = () => {
  return (
    <div className="mb-20">
      <SectionTitle heading="Testimonials" />
      <div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
        >
          <CarouselContent>
            <TestimonialCard
              avatar={avatar}
              name="Annette Black"
              designation="Chief Chairman of Netflix"
              description="“Golio is one of the BEST web designers I've ever worked
                        with professionally. I am a repeat customer who
                        continues to work with Zakir because of his
                        talent/skills, great customer service, work ethic, and
                        attention to detail. ”"
              logo={netflix}
            />

            <TestimonialCard
              avatar={avatar1}
              name="Sundar picay"
              designation="Chief Chairman of Google"
              description="“Golio is one of the BEST web designers I've ever worked
                        with professionally. I am a repeat customer who
                        continues to work with Zakir because of his
                        talent/skills, great customer service, work ethic, and
                        attention to detail. ”"
              logo={google}
            />

            <TestimonialCard
              avatar={avatar}
              name="Satty Nadale"
              designation="Chief Chairman of Youtube"
              description="“Golio is one of the BEST web designers I've ever worked
                        with professionally. I am a repeat customer who
                        continues to work with Zakir because of his
                        talent/skills, great customer service, work ethic, and
                        attention to detail. ”"
              logo={youtube}
            />

            <TestimonialCard
              avatar={amazonAvatar}
              name="Jeff Bezos"
              designation="Founder of Amazon"
              description="“Golio is one of the BEST web designers I've ever worked
                        with professionally. I am a repeat customer who
                        continues to work with Zakir because of his
                        talent/skills, great customer service, work ethic, and
                        attention to detail. ”"
              logo={amazon}
            />

            <TestimonialCard
              avatar={avatar}
              name="Yang Yuanqing"
              designation="CEO of Lenovo"
              description="“Golio is one of the BEST web designers I've ever worked
                        with professionally. I am a repeat customer who
                        continues to work with Zakir because of his
                        talent/skills, great customer service, work ethic, and
                        attention to detail. ”"
              logo={lenovo}
            />

            <TestimonialCard
              avatar={avatar}
              name="Denise Dresser"
              designation="CEO of Slack"
              description="“Golio is one of the BEST web designers I've ever worked
                        with professionally. I am a repeat customer who
                        continues to work with Zakir because of his
                        talent/skills, great customer service, work ethic, and
                        attention to detail. ”"
              logo={slack}
            />
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
