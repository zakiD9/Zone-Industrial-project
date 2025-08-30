import { ArrowRight } from "@mui/icons-material";
import { Button } from "@mui/material";

type Service = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

interface ServiceBoxProps {
  service: Service;
}

export default function ServiceBox({ service }: ServiceBoxProps) {
  return (
    <div className="p-4 md:w-1/3">
      <div
        className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden 
                   shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      >
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={service.image}
          alt={service.title}
        />
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {service.title}
          </h1>
          <p className="leading-relaxed mb-3">{service.description}</p>
          <div className="flex">
            {service.link && (
              <Button size="small" endIcon={<ArrowRight />}>Learn more</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
