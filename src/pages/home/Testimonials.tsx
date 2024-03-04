import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionTitle from "@/components/shared/SectionTitle";
import TestimonialCard from "@/components/shared/TestimonialCard";

import netflix from "../../assets/Netflix.png";
import { useGetTestimonialsQuery } from "@/redux/features/testimonials/testimonialApi";
import ClipLoader from "react-spinners/ClipLoader";
import { CSSProperties } from "react";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

type TItemProps = {
  _id: string;
  buyerName: string;
  image: string;
  title: string;
  description: string;
  createdAt: string;
};

const Testimonials = () => {
  const { data, isLoading, isError } = useGetTestimonialsQuery(undefined);
  // console.log(data);

  if (isLoading) {
    return (
      <p className="text-4xl text-gray-500 font-thin text-center mt-36">
        <ClipLoader cssOverride={override} color="#36d7b7" size={60} />
      </p>
    );
  }

  if (isError) {
    return (
      <p className="text-4xl text-red-500 font-thin text-center mt-16">
        Something went wrong data fetching try again later !!
      </p>
    );
  }
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
            {data?.data?.map((item: TItemProps) => (
              <TestimonialCard
                key={item._id}
                avatar={item.image}
                name={item.buyerName}
                designation={item.title}
                description={item.description.slice(0, 250)}
                logo={netflix}
              />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
