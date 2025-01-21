import Image from 'next/image';

function BackgroundPattern(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={104} height={102} {...props}>
      <path
        fill="#A775F1"
        d="M104 102V59.727H84.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C95.01 25.86 98.909 22.257 104 19.375V0c-9.758 4.27-17.712 9.874-23.864 16.813-6.151 6.939-10.712 14.545-13.681 22.818C63.485 47.904 62 59.941 62 75.74V102h42zm-62 0V59.727H22.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C33.01 25.86 36.909 22.257 42 19.375V0c-9.652 4.27-17.58 9.874-23.784 16.813C12.01 23.752 7.424 31.358 4.455 39.631 1.485 47.904 0 59.941 0 75.74V102h42z"
      />
    </svg>
  );
}

export type Testimonial = {
  title: string;
  description: string;
  user: {
    name: string;
    image: string;
    status: string;
  };
};

type TestimonialProps = {
  testimonial: Testimonial;
};

function Testimonial({ testimonial }: TestimonialProps) {
  const { title, description, user } = testimonial;

  return (
    <div className="relative">
      <div className="flex items-center gap-x-[1.0625rem]">
        <Image
          src={user.image}
          alt={user.name}
          className="rounded-full"
          width={28}
          height={28}
          priority
        />
        <div className="flex flex-col gap-y-1">
          <span className="text-[0.8125rem] font-medium leading-[0.8125rem]">{user.name}</span>
          <span className="text-[0.6875rem] font-medium leading-[0.6875rem] opacity-50">
            {user.status}
          </span>
        </div>
      </div>
      <h3 className="mt-[1.125rem] text-xl font-semibold leading-6">{title}</h3>
      <p className="text-[0.8125rem] font-medium leading-[1.125rem]">
        <q>&nbsp;{description}&nbsp;</q>
      </p>
    </div>
  );
}

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  // Return null if testimonial count is not exactly 5
  // This ensures the grid layout maintains its intended design
  if (testimonials.length !== 5) return null;

  return (
    <section className="w-full">
      <h2 className="sr-only">Testimonials</h2>
      {/* Testimonials grid */}
      <div className="mx-auto grid max-w-96 grid-cols-1 gap-6 sm:max-w-[33.75rem] sm:grid-cols-2 lg:max-w-[69.375rem] lg:grid-cols-4 lg:gap-x-[1.875rem] [&>*]:shadow-[40px_60px_50px_-47px_rgba(72,85,106,0.25)]">
        {/* First testimonial */}
        <div className="relative rounded-lg bg-[#733FC8] p-8 pt-[1.625rem] sm:col-span-2 lg:max-w-[33.75rem] [&_h3]:text-white [&_img]:ring-2 [&_img]:ring-[#A775F1] [&_p]:mt-10 [&_p]:text-[#CFCFCF]/70 sm:[&_p]:mt-4 [&_span]:text-white">
          <BackgroundPattern className="absolute right-6 top-0 sm:right-20" />
          <Testimonial testimonial={testimonials[0]} />
        </div>

        {/* Second testimonial */}
        <div className="rounded-lg bg-[#48556A] p-8 pt-[1.625rem] sm:col-start-2 lg:col-start-3 lg:max-w-[15.9375rem] [&_h3]:text-white lg:[&_h3]:max-w-[11.9375rem] [&_p]:mt-4 [&_p]:text-white/70 [&_span]:text-white">
          <Testimonial testimonial={testimonials[1]} />
        </div>

        {/* Third testimonial */}
        <div className="rounded-lg bg-[#FFFFFF] p-8 pt-[1.625rem] sm:row-start-2 sm:pb-[1.625rem] lg:max-w-[15.9375rem] [&_h3]:text-[#48556A] lg:[&_h3]:max-w-[11.9375rem] [&_p]:mt-4 [&_p]:text-[#48556A]/70 sm:[&_p]:mt-6 [&_span]:text-[#48556A]">
          <Testimonial testimonial={testimonials[2]} />
        </div>

        {/* Fourth testimonial */}
        <div className="rounded-lg bg-[#19202D] p-8 pt-[1.625rem] sm:col-span-2 sm:pb-[1.625rem] lg:row-start-2 lg:max-w-[33.75rem] [&_h3]:text-[#ECF2F8] [&_img]:ring-2 [&_img]:ring-[#733FC8] [&_p]:mt-4 [&_p]:text-white/70 sm:[&_p]:mt-6 lg:[&_p]:max-w-[29.375rem] [&_span]:text-white">
          <Testimonial testimonial={testimonials[3]} />
        </div>

        {/* Fifth testimonial */}
        <div className="w-full rounded-lg bg-[#FFFFFF] p-8 pt-[1.625rem] sm:col-span-2 sm:pb-[1.625rem] lg:col-auto lg:col-start-4 lg:row-span-2 lg:max-w-[15.9375rem] [&_h3]:text-[#48556A] lg:[&_h3]:max-w-[11.9375rem] [&_p]:mt-4 [&_p]:text-[#48556A]/70 sm:[&_p]:mt-6 [&_span]:text-[#48556A]">
          <Testimonial testimonial={testimonials[4]} />
        </div>
      </div>
    </section>
  );
}
