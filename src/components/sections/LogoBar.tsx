import Image from "next/image";
import Container from "@/components/ui/Container";

const courses = [
  { name: "Golf Club of Texas", src: "/logos/gct-white-logo-small1.png", width: 202, height: 57, invert: false },
  { name: "Palm Beach Par 3", src: "/logos/pb3-horiz.png", width: 280, height: 68, invert: false },
  { name: "Carolina National Golf Club", src: "/logos/cnational-white-logo-small.png", width: 202, height: 57, invert: false },
  { name: "Micke Grove Golf Links", src: "/logos/logo_golfback_booking_engine.png", width: 250, height: 73, invert: true },
  { name: "Willow Creek Golf & Country Club", src: "/logos/white-logo.png", width: 202, height: 57, invert: false },
  { name: "Wyncote", src: "/logos/Logo-black-100x116-1.png", width: 100, height: 116, invert: true },
  { name: "Orange Lake Golf", src: "/logos/ol-new2022-1024x297.png", width: 1024, height: 297, invert: false },
  { name: "Tobacco Road", src: "/logos/main-logo.png", width: 772, height: 812, invert: true, blend: false },
  { name: "Chapel Ridge", src: "/logos/chapel-ridge-booking-engine.png", width: 280, height: 75, invert: true },
  { name: "The Preserve at Jordan Lake", src: "/logos/preserve-be-logo.png", width: 275, height: 80, invert: true },
];

function LogoItem({ course }: { course: typeof courses[number] }) {
  const isSquare = course.height / course.width > 0.7;
  return (
    <div className="mx-10 flex h-20 shrink-0 items-center justify-center opacity-50 grayscale transition-all hover:opacity-90 hover:grayscale-0">
      <Image
        src={course.src}
        alt={course.name}
        width={course.width}
        height={course.height}
        className={[
          "h-full w-auto object-contain",
          isSquare ? "max-w-[5rem]" : "max-w-[12rem]",
          course.invert ? "invert" : "",
          "blend" in course && course.blend ? "logo-blend-screen" : "",
        ].filter(Boolean).join(" ")}
      />
    </div>
  );
}

export default function LogoBar({
  heading = "Trusted by Over 125 Golf Courses",
}: {
  heading?: string;
}) {
  return (
    <section className="overflow-hidden bg-neutral-900 py-10 md:py-14">
      <Container>
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-brand-cyan/70">
          {heading}
        </p>
      </Container>
      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="logo-marquee">
          {courses.map((course) => (
            <LogoItem key={course.name} course={course} />
          ))}
          {/* Duplicate for seamless loop */}
          {courses.map((course) => (
            <LogoItem key={`${course.name}-dup`} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
