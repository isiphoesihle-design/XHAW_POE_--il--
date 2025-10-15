import Navigation from "@/components/Navigation";
import CourseCard from "@/components/CourseCard";
import { getShortCourses } from "@/data/courses";

const ShortCourses = () => {
  const courses = getShortCourses();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Short Courses</h1>
          <p className="text-lg text-muted-foreground">
            Our focused six-week short skills training programmes provide practical knowledge 
            for immediate application. Each course is R750.
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

export default ShortCourses;
