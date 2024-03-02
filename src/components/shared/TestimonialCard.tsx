import { Card, CardContent } from "../ui/card";
import { CarouselItem } from "../ui/carousel";

type TTCard = {
  avatar: string;
  name: string;
  designation: string;
  description: string;
  logo: string;
};

const TestimonialCard = ({
  avatar,
  name,
  designation,
  description,
  logo,
}: TTCard) => {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 mr-10">
      <div className="p-1">
        <Card className="bg-[#FFF9EE] w-[400px] h-[380px]">
          <CardContent className="aspect-square p-6">
            <div>
              <div className="flex items-center">
                <img
                  src={avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-[#061C3D] text-base font-medium leading-6">
                    {name}
                  </p>
                  <p className="text-[#7534FF] text-sm font-normal leading-5">
                    {designation}
                  </p>
                </div>
              </div>
              <p className="mt-6 mb-10 text-[#061C3D] text-lg font-normal leading-normal">
                {description}
              </p>
              <img src={logo} alt="Netflix" />
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};

export default TestimonialCard;
