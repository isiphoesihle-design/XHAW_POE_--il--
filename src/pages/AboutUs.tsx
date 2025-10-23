import { Star, Quote } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AboutUs = () => {
  const successStories = [
    {
      name: "Nomvula Dlamini",
      course: "First Aid & Sewing",
      year: "2024",
      story: "After completing the First Aid and Sewing courses, I started my own small business making custom clothing and offering first aid training to my community. The skills I learned have transformed my life and allowed me to support my family independently.",
      achievement: "Now runs a successful tailoring business with 3 employees",
      initials: "ND"
    },
    {
      name: "Thabo Mokoena",
      course: "Landscaping",
      year: "2023",
      story: "The Landscaping course gave me the confidence and expertise to start my own garden maintenance company. I went from working for someone else to being my own boss. Today, I have regular clients across Johannesburg and have hired two assistants to help with the growing demand.",
      achievement: "Founded 'Green Dreams Landscaping' serving 50+ clients",
      initials: "TM"
    },
    {
      name: "Precious Nkosi",
      course: "Child Minding",
      year: "2024",
      story: "As a mother of three, I wanted to turn my natural caregiving abilities into a professional skill. The Child Minding course taught me essential child development and safety practices. I now run a registered home-based childcare center and care for 8 children daily.",
      achievement: "Licensed childcare provider with 5-star parent ratings",
      initials: "PN"
    },
    {
      name: "Joseph Mahlangu",
      course: "Cooking & Garden Maintenance",
      year: "2023",
      story: "Combining the cooking and garden maintenance courses was the best decision I made. I now offer a unique service - providing fresh produce from gardens I maintain and preparing healthy meals for busy families. My business has grown beyond my expectations.",
      achievement: "Featured in 'Johannesburg Small Business Success Stories'",
      initials: "JM"
    },
    {
      name: "Zanele Khumalo",
      course: "Life Skills & Sewing",
      year: "2024",
      story: "The Life Skills course helped me overcome my fear of starting a business, and the Sewing course gave me the technical skills. I now design and sell traditional African wear at markets and online. My confidence has soared, and I'm financially independent for the first time.",
      achievement: "Generated R50,000 in sales within first 6 months",
      initials: "ZK"
    },
    {
      name: "Sipho Ndlovu",
      course: "First Aid",
      year: "2023",
      story: "After completing the First Aid course, I was able to secure a position as a safety officer at a construction company. The certification opened doors I never thought possible. I've since been promoted twice and am now training others in workplace safety.",
      achievement: "Promoted to Senior Safety Manager, training 100+ workers",
      initials: "SN"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[hsl(var(--gradient-hero))] to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-in fade-in duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              About Empowering the Nation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Since 2025, we've been transforming lives through skills development and education, 
              empowering domestic workers and gardeners across Johannesburg to reach their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-[var(--shadow-hover)] transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, high-quality skills training that empowers individuals 
                  from underserved communities to build successful careers, start businesses, 
                  and achieve financial independence through education and practical experience.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-[var(--shadow-hover)] transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                  <Quote className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading skills development organization in South Africa, recognized 
                  for creating pathways to prosperity and transforming communities through 
                  education, one student at a time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 space-y-2">
                <div className="text-4xl font-bold text-primary">500+</div>
                <p className="text-sm text-muted-foreground">Students Trained</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 space-y-2">
                <div className="text-4xl font-bold text-primary">95%</div>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 space-y-2">
                <div className="text-4xl font-bold text-primary">7</div>
                <p className="text-sm text-muted-foreground">Professional Courses</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 space-y-2">
                <div className="text-4xl font-bold text-primary">85%</div>
                <p className="text-sm text-muted-foreground">Employment Success</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from real people whose lives have been transformed through our training programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {successStories.map((story, index) => (
              <Card 
                key={index} 
                className="hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12 bg-gradient-to-br from-primary to-secondary">
                      <AvatarFallback className="text-primary-foreground font-semibold">
                        {story.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-lg">{story.name}</h3>
                      <p className="text-sm text-muted-foreground">{story.course} • {story.year}</p>
                    </div>
                  </div>
                  
                  <Quote className="h-6 w-6 text-primary/20" />
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {story.story}
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-primary">
                      {story.achievement}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground max-w-4xl mx-auto">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
              <p className="text-lg opacity-90">
                Email: info@empoweringthenation.co.za
              </p>
              <p className="text-lg opacity-90">
                Phone: +27 12 345 6789
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;