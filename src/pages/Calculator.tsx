import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { courses } from "@/data/courses";
import { Calculator as CalcIcon, Percent } from "lucide-react";

const Calculator = () => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const handleCourseToggle = (courseId: string) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const calculateTotal = () => {
    const subtotal = selectedCourses.reduce((sum, courseId) => {
      const course = courses.find((c) => c.id === courseId);
      return sum + (course?.fee || 0);
    }, 0);

    const numCourses = selectedCourses.length;
    let discount = 0;

    if (numCourses === 2) discount = 0.05;
    else if (numCourses === 3) discount = 0.10;
    else if (numCourses > 3) discount = 0.15;

    const discountAmount = subtotal * discount;
    const vat = (subtotal - discountAmount) * 0.15;
    const total = subtotal - discountAmount + vat;

    return {
      subtotal,
      discount: discount * 100,
      discountAmount,
      vat,
      total,
      numCourses,
    };
  };

  const totals = calculateTotal();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-full">
                <CalcIcon className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Fee Calculator</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the courses you're interested in and see your total fees with applicable discounts
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Course Selection */}
            <div className="lg:col-span-2 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Six-Month Courses</CardTitle>
                  <CardDescription>R1500 per course</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {courses
                    .filter((c) => c.type === "six-month")
                    .map((course) => (
                      <div key={course.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <Checkbox
                          id={course.id}
                          checked={selectedCourses.includes(course.id)}
                          onCheckedChange={() => handleCourseToggle(course.id)}
                        />
                        <div className="flex-1">
                          <Label
                            htmlFor={course.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {course.title}
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            {course.description}
                          </p>
                        </div>
                        <span className="font-semibold text-sm">{course.feeDisplay}</span>
                      </div>
                    ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Short Courses (6 Weeks)</CardTitle>
                  <CardDescription>R750 per course</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {courses
                    .filter((c) => c.type === "short")
                    .map((course) => (
                      <div key={course.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <Checkbox
                          id={course.id}
                          checked={selectedCourses.includes(course.id)}
                          onCheckedChange={() => handleCourseToggle(course.id)}
                        />
                        <div className="flex-1">
                          <Label
                            htmlFor={course.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {course.title}
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            {course.description}
                          </p>
                        </div>
                        <span className="font-semibold text-sm">{course.feeDisplay}</span>
                      </div>
                    ))}
                </CardContent>
              </Card>
            </div>

            {/* Price Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Fee Summary</CardTitle>
                  <CardDescription>
                    {totals.numCourses} course{totals.numCourses !== 1 ? "s" : ""} selected
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>R{totals.subtotal.toFixed(2)}</span>
                    </div>

                    {totals.discount > 0 && (
                      <div className="flex justify-between text-sm text-primary">
                        <span className="flex items-center gap-1">
                          <Percent className="h-3 w-3" />
                          Discount ({totals.discount}%)
                        </span>
                        <span>-R{totals.discountAmount.toFixed(2)}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-sm">
                      <span>VAT (15%)</span>
                      <span>R{totals.vat.toFixed(2)}</span>
                    </div>

                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-primary">R{totals.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {totals.numCourses === 0 && (
                    <p className="text-sm text-muted-foreground text-center pt-4">
                      Select courses to see total fees
                    </p>
                  )}

                  {totals.numCourses > 0 && (
                    <div className="pt-4 border-t">
                      <h4 className="font-semibold text-sm mb-2">Discount Structure:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• 1 course: No discount</li>
                        <li>• 2 courses: 5% off</li>
                        <li>• 3 courses: 10% off</li>
                        <li>• 4+ courses: 15% off</li>
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
