import Navigation from "@/components/Navigation";
import CourseCard from "@/components/CourseCard";
import { getSixMonthCourses } from "@/data/courses";

const SixMonthCourses = () => {
  const courses = getSixMonthCourses();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Six-Month Courses</h1>
          <p className="text-lg text-muted-foreground">
            Our comprehensive six-month programmes take place over 12 weeks, providing in-depth 
            training and professional certification. Each course is R1500.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              fee={course.feeDisplay}
              image={course.image}
              slug={course.slug}
              duration={course.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SixMonthCourses;
