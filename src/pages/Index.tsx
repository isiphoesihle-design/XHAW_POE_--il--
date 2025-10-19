import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Briefcase, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-training.jpg";

const Index = () => {
  const features = [
    {
      icon: Award,
      title: "Professional Training",
      description: "Comprehensive courses designed to build marketable skills",
    },
    {
      icon: Users,
      title: "Empowering Communities",
      description: "Supporting domestic workers and gardeners to upskill and grow",
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description: "Enhanced employability and entrepreneurship potential",
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "6-month and 6-week course options to suit your needs",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[hsl(var(--gradient-hero))] to-background overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in slide-in-from-left duration-700">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Empowering the Nation
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Providing skills training for domestic workers and gardeners in Johannesburg. 
                Established in 2025, we empower individuals to enhance their 
                careers and create new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/six-month-courses">
                  <Button size="lg" variant="hero" className="w-full sm:w-auto">
                    Explore Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/calculator">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Calculate Fees
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-in slide-in-from-right duration-700">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-[var(--shadow-hover)]">
                <img
                  src={heroImage}
                  alt="Students learning together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide quality education that empowers individuals to achieve their full potential
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-[var(--shadow-hover)] transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-primary">Six-Month Courses</h3>
                <p className="text-muted-foreground">
                  Comprehensive programs including First Aid, Sewing, Landscaping, and Life Skills. 
                  Each course is R1500 and runs over 12 weeks.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                    <span>Professional certification upon completion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                    <span>Hands-on practical training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                    <span>Expert instructors with industry experience</span>
                  </li>
                </ul>
                <Link to="/six-month-courses">
                  <Button className="w-full mt-4">View Six-Month Courses</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20 hover:shadow-[var(--shadow-hover)] transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-secondary">Short Courses (6 Weeks)</h3>
                <p className="text-muted-foreground">
                  Focused programs in Child Minding, Cooking, and Garden Maintenance. 
                  Each course is R750 and runs for 6 weeks.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 text-secondary flex-shrink-0" />
                    <span>Quick skill development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 text-secondary flex-shrink-0" />
                    <span>Flexible scheduling options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 text-secondary flex-shrink-0" />
                    <span>Immediate practical application</span>
                  </li>
                </ul>
                <Link to="/short-courses">
                  <Button variant="secondary" className="w-full mt-4">View Short Courses</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Discount Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Special Discounts Available</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Save more when you enroll in multiple courses!
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">5%</div>
                <p className="text-sm text-muted-foreground">Two courses</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">10%</div>
                <p className="text-sm text-muted-foreground">Three courses</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">15%</div>
                <p className="text-sm text-muted-foreground">More than three</p>
              </CardContent>
            </Card>
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-2">Calculate</div>
                <Link to="/calculator" className="text-sm underline hover:no-underline">
                  Your total fees
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Journey?</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Contact us today to learn more about our courses and enrollment process
              </p>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-background text-primary hover:bg-background/90">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
