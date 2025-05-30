
import { useState, useEffect } from "react";
import { Mail, Phone, Github, Linkedin, MapPin, Download, ExternalLink, Calendar, Award, Users, Briefcase, GraduationCap, Code, Lightbulb, Star, Trophy, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "education", "experience", "projects", "skills", "certifications"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-purple-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Deepika T
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Education", "Experience", "Projects", "Skills", "Certifications"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                    activeSection === item.toLowerCase() ? "text-purple-600" : "text-gray-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Avatar className="w-32 h-32 mx-auto mb-8 ring-4 ring-purple-200">
              <AvatarImage 
                src="/lovable-uploads/d10f0042-09f2-48a3-b816-b78207187545.png" 
                alt="Deepika T"
                className="object-cover"
              />
              <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-purple-500 to-pink-600 text-white">
                DT
              </AvatarFallback>
            </Avatar>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent">
              Deepika T
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 flex items-center justify-center gap-2">
              <GraduationCap className="w-6 h-6 text-purple-600" />
              Electronics & Communication Engineering Student
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600 bg-white/60 rounded-full px-4 py-2">
                <Phone className="w-4 h-4 text-purple-600" />
                <span>9345288058</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 bg-white/60 rounded-full px-4 py-2">
                <Mail className="w-4 h-4 text-purple-600" />
                <span>deepikathiru1505@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 bg-white/60 rounded-full px-4 py-2">
                <MapPin className="w-4 h-4 text-purple-600" />
                <span>Ramanathapuram</span>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 hover:bg-purple-50 border-purple-200 text-purple-700"
                onClick={() => window.open("https://www.linkedin.com/in/deepika-snsinstitutions", "_blank")}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 hover:bg-purple-50 border-purple-200 text-purple-700"
                onClick={() => window.open("https://github.com/Deepikathiru", "_blank")}
              >
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 flex items-center justify-center gap-3">
            <Users className="w-8 h-8 text-purple-600" />
            About Me
          </h2>
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl border-l-4 border-l-purple-500">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                I am a dedicated Electronics & Communication Engineering student with a passion for automation, 
                power systems, and wireless communication technologies. With hands-on experience in PLC programming 
                and a strong foundation in both technical and leadership skills, I am committed to developing 
                innovative solutions for real-world challenges.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-purple-600" />
            Education
          </h2>
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-purple-600">B.E (ECE)</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700">
                        SNS College of Engineering, Coimbatore
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600 flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      8.4 CGPA
                    </div>
                    <div className="text-sm text-gray-500">2022-2026</div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-pink-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-pink-600">Higher Secondary</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700">
                        ST.Anne's Mat.Hr.Sec.School
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600 flex items-center gap-2">
                      <Trophy className="w-5 h-5" />
                      83%
                    </div>
                    <div className="text-sm text-gray-500">2022</div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-indigo-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-indigo-600">Secondary</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700">
                        ST.Anne's Mat.Hr.Sec.School
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      73%
                    </div>
                    <div className="text-sm text-gray-500">2020</div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8 text-purple-600" />
            Internship Experience
          </h2>
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">PLC Programming in Automation</CardTitle>
                    <CardDescription className="text-lg font-medium text-purple-600">Zeus Solutions</CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="mb-2 bg-purple-100 text-purple-700">Offline</Badge>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    July 08 2024 - July 28 2024
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Gained in-depth knowledge about PLC programming in automation. Enhanced technical skills through 
                real-time projects with hardware components and acquired comprehensive testing skills.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 flex items-center justify-center gap-3">
            <Lightbulb className="w-8 h-8 text-purple-600" />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">Efficiency Power Supply Managing System</CardTitle>
                  </div>
                  <Badge variant="outline" className="border-purple-200 text-purple-700">May 2023</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Offline</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Developed a system to optimize power efficiency, reduce energy waste, and monitor power 
                  consumption in real-time. The software components include power management software that provides 
                  real-time data analysis, energy efficiency algorithms, and an alert and notification system.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">Power Management</Badge>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-700">Energy Efficiency</Badge>
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">Real-time Monitoring</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-pink-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">LI-FI</CardTitle>
                  </div>
                  <Badge variant="outline" className="border-pink-200 text-pink-700">June 2024</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Offline</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Designed a LI-FI based Wireless Communication System for secure, efficient, and high-speed data 
                  transmission. Using visible, ultraviolet, or infrared light to transmit data, Li-Fi provides a 
                  cost-effective, energy-efficient, and environmentally friendly solution for wireless communication 
                  in education, healthcare, and industries where data security is paramount.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-pink-100 text-pink-700">Wireless Communication</Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">Data Security</Badge>
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">Light-based Technology</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-purple-600" />
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-lg text-purple-600 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Programming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-100 text-purple-700">C</Badge>
                  <Badge className="bg-pink-100 text-pink-700">HTML</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg border-l-4 border-l-pink-500">
              <CardHeader>
                <CardTitle className="text-lg text-pink-600 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-pink-100 text-pink-700">Canva</Badge>
                  <Badge className="bg-purple-100 text-purple-700">MS-Office</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg border-l-4 border-l-indigo-500">
              <CardHeader>
                <CardTitle className="text-lg text-indigo-600 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Operating Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-indigo-100 text-indigo-700">Windows</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-lg text-purple-600 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Non Technical
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-100 text-purple-700">Team Work</Badge>
                  <Badge className="bg-pink-100 text-pink-700">Adaptability</Badge>
                  <Badge className="bg-indigo-100 text-indigo-700">Time Management</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg border-l-4 border-l-pink-500">
              <CardHeader>
                <CardTitle className="text-lg text-pink-600 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-pink-100 text-pink-700">English (S,W,R)</Badge>
                  <Badge className="bg-purple-100 text-purple-700">Tamil (S,W,R)</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 flex items-center justify-center gap-3">
            <Trophy className="w-8 h-8 text-purple-600" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">C Nano Degree Course</h3>
                  </div>
                  <Badge variant="outline" className="border-purple-200 text-purple-700">Mar 2023</Badge>
                </div>
                <p className="text-sm text-gray-600">Prepinsta</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg border-l-4 border-l-pink-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-pink-600" />
                    <h3 className="font-semibold text-gray-900">Product Management</h3>
                  </div>
                  <Badge variant="outline" className="border-pink-200 text-pink-700">Jan 2024</Badge>
                </div>
                <p className="text-sm text-gray-600">Certification Authority</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg border-l-4 border-l-indigo-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">AI Associate</h3>
                  </div>
                  <Badge variant="outline" className="border-indigo-200 text-indigo-700">Oct 2024</Badge>
                </div>
                <p className="text-sm text-gray-600">Salesforce</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">PowerBI</h3>
                  </div>
                  <Badge variant="outline" className="border-purple-200 text-purple-700">Sep 2024</Badge>
                </div>
                <p className="text-sm text-gray-600">Microsoft</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg border-l-4 border-l-pink-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-pink-600" />
                    <h3 className="font-semibold text-gray-900">Certified Appsec Practitioner</h3>
                  </div>
                  <Badge variant="outline" className="border-pink-200 text-pink-700">Mar 2025</Badge>
                </div>
                <p className="text-sm text-gray-600">Secops</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg border-l-4 border-l-indigo-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Certified AI Foundations Associate</h3>
                  </div>
                  <Badge variant="outline" className="border-indigo-200 text-indigo-700">Feb 2025</Badge>
                </div>
                <p className="text-sm text-gray-600">Oracle</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Positions of Responsibility */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 flex items-center justify-center gap-3">
            <Users className="w-8 h-8 text-purple-600" />
            Positions of Responsibility
          </h2>
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Student Coordinator</h3>
                  </div>
                  <Badge variant="outline" className="border-purple-200 text-purple-700">Sep 2023</Badge>
                </div>
                <p className="text-gray-700 mb-2">Colors event | SNS College of Engineering</p>
                <p className="text-gray-600">Coordinated with faculty and administration to align placement activities with academic schedules and requirements.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg border-l-4 border-l-pink-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Active Member</h3>
                  </div>
                  <Badge variant="outline" className="border-pink-200 text-pink-700">Present</Badge>
                </div>
                <p className="text-gray-700">Women Empowerment Cell</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Participation Certificate */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-purple-600" />
            Participation Certificates
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">Paper Presentation</h3>
                  </div>
                  <Badge variant="outline" className="border-purple-200 text-purple-700">2023</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">Efficiency Power Supply Managing System</p>
                <p className="text-sm text-gray-500">Karpagam College of Engineering</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg border-l-4 border-l-pink-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-pink-600" />
                    <h3 className="font-semibold text-gray-900">Workshop</h3>
                  </div>
                  <Badge variant="outline" className="border-pink-200 text-pink-700">2023</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">Robotics and Automation, Canva Hands-on Workshop</p>
                <p className="text-sm text-gray-500">SNS College of Engineering</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 to-pink-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-purple-200 mb-4 flex items-center justify-center gap-2">
            <Star className="w-4 h-4" />
            Let's connect and build something amazing together!
            <Star className="w-4 h-4" />
          </p>
          <div className="flex justify-center gap-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-purple-200 hover:bg-purple-800"
              onClick={() => window.open("mailto:deepikathiru1505@gmail.com")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-purple-200 hover:bg-purple-800"
              onClick={() => window.open("https://www.linkedin.com/in/deepika-snsinstitutions", "_blank")}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-purple-200 hover:bg-purple-800"
              onClick={() => window.open("https://github.com/Deepikathiru", "_blank")}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
          <Separator className="my-6 bg-purple-700" />
          <p className="text-sm text-purple-300">© 2024 Deepika T. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
