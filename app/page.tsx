"use client"

import { useState, useEffect } from "react"
import {
  Mail,
  Linkedin,
  MapPin,
  Menu,
  X,
  Calendar,
  Award,
  GraduationCap,
  Briefcase,
  Star,
  Globe,
  ChevronDown,
  Github,
  ChevronUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CVWebsite() {
  const [activeSection, setActiveSection] = useState("about")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Show back to top button after scrolling 300px
      setShowBackToTop(window.scrollY > 300)

      // Update active section based on scroll position
      const sections = ["about", "experience", "education", "skills"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const technicalSkills = [
    "Python",
    "Power BI",
    "Tableau",
    "Google Analytics",
    "Excel Advanced",
    "SQL",
    "R Programming",
    "SPSS",
    "Machine Learning",
    "Statistical Analysis",
    "Survey Design",
    "NPS Studies",
    "Brand Tracking",
    "Media Effectiveness",
  ]

  const languages = [
    { name: "English", level: "Professional Working" },
    { name: "Cantonese", level: "Native" },
    { name: "Mandarin", level: "Professional Working" },
    { name: "Spanish", level: "Elementary" },
  ]

  const experiences = [
    {
      title: "Customer Insight, Manager",
      company: "AIA Hong Kong and Macau",
      period: "November 2024 – Present",
      description:
        "Lead survey projects and data collection, collaborating with stakeholders to enhance customer experiences.",
      highlights: [
        "Lead survey projects and data collection",
        "Manage and evaluate survey initiatives with KPI analysis",
        "Interpret survey data to provide actionable insights",
        "Research industry trends and apply best practices",
      ],
    },
    {
      title: "Assistant Manager, Customer Insight & Research",
      company: "Prudential Hong Kong",
      period: "February 2023 – November 2024",
      description:
        "Conducted comprehensive market research projects including brand tracking, NPS studies, and media effectiveness analysis.",
      highlights: [
        "Conducted tracking and customizing market research projects",
        "Developed thematic surveys on wealth and health",
        "Managed relationships with vendors and stakeholders",
        "Enhanced existing projects based on evolving needs",
      ],
    },
    {
      title: "Assistant Manager, Business Development",
      company: "DKSH",
      period: "June 2022 – January 2023",
      description: "Facilitated business development from lead generation to deal closure, focusing on FMCG clients.",
      highlights: [
        "Lead generation and proposal development",
        "Negotiated deals aligned with financial goals",
        "Identified upselling opportunities",
        "Established long-term client relationships",
      ],
    },
    {
      title: "Assistant Manager (Insight)",
      company: "CMRS Group (HK)",
      period: "September 2021 – June 2022",
      description: "Led team conducting in-depth social media analytics and delivered actionable insights to clients.",
      highlights: [
        "Led team for social media data analysis",
        "Maintained client relationships and new business pitching",
        "Proposed innovative analytics initiatives",
        "Served clients across properties & TV broadcast industries",
      ],
    },
    {
      title: "Senior Insights Executive",
      company: "Engine",
      period: "September 2019 – September 2021",
      description: "Managed end-to-end international research projects for financial services and retail clients.",
      highlights: [
        "Led complex international research projects",
        "Managed NPS studies and brand health tracking",
        "Coordinated internal and external resources",
        "Focused on financial services and retail industries",
      ],
    },
  ]

  const certifications = [
    {
      year: "2025",
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
    },
    {
      year: "2024",
      title: "Data Science and Machine Learning: Making Data-Driven Decisions",
      issuer: "Massachusetts Institute of Technology",
    },
    {
      year: "2024",
      title: "Analyzing Data with Excel (20779)",
      issuer: "Microsoft Certificate",
    },
    {
      year: "2024",
      title: "Microsoft Power BI Data Analyst (PL-300)",
      issuer: "Microsoft Certificate",
    },
    {
      year: "2024",
      title: "Principles of Market Research",
      issuer: "The University of Georgia",
    },
    {
      year: "2023",
      title: "Fellow, Life Management Institute Level 1 - Customer Experience Essentials",
      issuer: "Life Office Management Association (LOMA)",
    },
    {
      year: "2022",
      title: "Business Analytics: Decision Making Using Data",
      issuer: "Cambridge Judge Business School",
    },
  ]

  const coreCompetencies = [
    "Consumer Insights",
    "Market Research",
    "Data Analysis",
    "Customer Strategy",
    "Business Intelligence",
    "Data Visualization",
    "Project Management",
    "Stakeholder Management",
    "Vendor Management",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-700 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-1 left-0 right-0 bg-gray-900/90 backdrop-blur-md border-b border-gray-700 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Lewis SO
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["about", "experience", "education", "skills"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeSection === section
                        ? "bg-blue-600/30 text-blue-300 border border-blue-500/50 shadow-lg"
                        : "text-gray-200 hover:text-white hover:bg-gray-700/70 hover:shadow-md"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-200 hover:text-white hover:bg-gray-700"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-t border-gray-700">
              {["about", "experience", "education", "skills"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === section
                      ? "bg-blue-600/30 text-blue-300"
                      : "text-gray-200 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Lewis SO</h1>
              <p className="text-xl md:text-2xl text-blue-400 mb-6">
                Customer Insights | Market Research | Business Intelligence | Customer Experience | Business Analytics
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                8+ years of experience in consumer insights and market research, specializing in turning data into
                compelling stories and actionable business strategies.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm bg-gray-800 text-gray-200 border-gray-600 hover:bg-gray-700 hover:border-gray-500"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                8+ Years Experience
              </Badge>
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm bg-gray-800 text-gray-200 border-gray-600 hover:bg-gray-700 hover:border-gray-500"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                MSc Business Analytics
              </Badge>
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm bg-gray-800 text-gray-200 border-gray-600 hover:bg-gray-700 hover:border-gray-500"
              >
                <Award className="w-4 h-4 mr-2" />
                Multiple Certifications
              </Badge>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:scmlewis@gmail.com">Contact Me</a>
              </Button>
              <Button
                variant="outline"
                className="border-gray-500 text-gray-200 hover:text-white hover:bg-gray-700 hover:border-gray-400 font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                <a href="https://www.linkedin.com/in/lewisso" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <CardContent className="p-0">
                <p className="text-gray-300 leading-relaxed mb-6">
                  With over 8 years of hands-on experience in consumer insights and market research, I specialize in
                  helping brands understand their customers by analyzing data to uncover successes and opportunities. I
                  excel in turning insights into compelling stories, leveraging my expertise in market research,
                  business intelligence, and data analysis.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Currently pursuing an MSc in Business Analytics at HKUST Business School, I'm passionate about
                  combining traditional research methodologies with modern analytics to drive business growth.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center text-xl text-white">
                  <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-3">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-gray-400" />
                  <a href="mailto:scmlewis@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    scmlewis@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-4 h-4 mr-3 text-gray-400" />
                  <a
                    href="https://www.linkedin.com/in/lewisso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    linkedin.com/in/lewisso
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="w-4 h-4 mr-3 text-gray-400" />
                  <a
                    href="https://github.com/scmlewis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    github.com/scmlewis
                  </a>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-white mb-3 flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    Languages
                  </h4>
                  <div className="space-y-2">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-300">{lang.name}</span>
                        <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                          {lang.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 h-full w-0.5 bg-blue-400/30"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-8">
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-8 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900 shadow-lg z-10"></div>

                {/* Content */}
                <div className="ml-12 md:ml-16 flex-1">
                  <Card className="hover:shadow-xl transition-all duration-300 bg-gray-800 border-gray-700 hover:border-blue-500/50">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg font-bold text-white mb-1">{exp.title}</CardTitle>
                          <p className="text-blue-400 font-semibold">{exp.company}</p>
                        </div>
                        <Badge
                          variant="outline"
                          className="mt-2 md:mt-0 md:ml-4 whitespace-nowrap border-gray-600 text-gray-300"
                        >
                          <Calendar className="w-3 h-3 mr-1" />
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <ChevronDown className="w-4 h-4 mr-2 text-blue-400 mt-0.5 transform rotate-[-90deg] flex-shrink-0" />
                            <span className="text-sm text-gray-400">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-gray-800 border-gray-700 hover:border-blue-500/50">
              <CardHeader className="p-0 mb-4">
                <div className="flex items-center mb-2">
                  <GraduationCap className="w-6 h-6 mr-3 text-blue-400" />
                  <CardTitle className="text-xl text-white">HKUST Business School</CardTitle>
                </div>
                <Badge className="bg-blue-600/20 text-blue-400 border border-blue-500/30 w-fit">Current</Badge>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg font-semibold text-white mb-2">Master of Science, Business Analytics</p>
                <p className="text-gray-400 mb-4">2024 – 2026</p>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>🎓 Focused on data-driven decision-making, business intelligence, and predictive analytics</p>
                  <p>
                    🎓 Gained hands-on experience with BI tools and skills, such as Python, Power BI, Tableau, and
                    Google Analytics
                  </p>
                  <p>
                    🎓 Developed practical skills in statistics, machine learning, and data visualization for real-world
                    business applications
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-gray-800 border-gray-700 hover:border-blue-500/50">
              <CardHeader className="p-0 mb-4">
                <div className="flex items-center mb-2">
                  <GraduationCap className="w-6 h-6 mr-3 text-blue-400" />
                  <CardTitle className="text-xl text-white">The Chinese University of Hong Kong</CardTitle>
                </div>
                <Badge variant="outline" className="w-fit border-gray-600 text-gray-300">
                  Completed
                </Badge>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg font-semibold text-white mb-2">Bachelor of Social Science, Sociology</p>
                <p className="text-blue-400 font-semibold mb-4">Grade: First Class Honours</p>
                <div className="space-y-2 text-sm text-gray-300 mb-4">
                  <p>🎓 Focused on Social Research in major with a minor in Spanish</p>
                  <p>🎓 Acquired competencies in both quantitative and qualitative research methods</p>
                  <p>
                    🎓 Recognized on the Dean's List and awarded Shaw College's Certificate of Academic Merit for
                    academic excellence
                  </p>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-white mb-2">Honors & Awards</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-yellow-400" />
                      <span className="text-gray-300">Dean's List</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-yellow-400" />
                      <span className="text-gray-300">Shaw College's Certificate of Academic Merit</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center text-xl text-white">
                  <Star className="w-5 h-5 mr-2 text-blue-400" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {technicalSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="justify-center py-2 px-3 bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center text-xl text-white">
                  <Briefcase className="w-5 h-5 mr-2 text-blue-400" />
                  Core Competencies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-4">
                  {coreCompetencies.map((competency, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="justify-center py-2 px-4 bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600 transition-colors"
                    >
                      {competency}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="p-6 bg-gray-800 border-gray-700 mb-12">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="flex items-center text-xl text-white">
                <Award className="w-5 h-5 mr-2 text-blue-400" />
                Licenses & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-2 border-blue-400/30 pl-4 pb-3">
                    <div className="flex items-start justify-between mb-1">
                      <Badge variant="outline" className="text-xs border-blue-500/30 text-blue-400 mb-2">
                        {cert.year}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-gray-200 text-sm mb-1">{cert.title}</h4>
                    <p className="text-xs text-gray-400">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Let's Connect</h3>
          <div className="flex justify-center space-x-4 mb-8">
            <Button
              variant="outline"
              className="bg-transparent border-gray-500 text-gray-200 hover:text-white hover:bg-gray-700 hover:border-gray-400 font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:scmlewis@gmail.com">Email Me</a>
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-gray-500 text-gray-200 hover:text-white hover:bg-gray-700 hover:border-gray-400 font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              <a href="https://www.linkedin.com/in/lewisso" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-gray-500 text-gray-200 hover:text-white hover:bg-gray-700 hover:border-gray-400 font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Github className="w-4 h-4 mr-2" />
              <a href="https://github.com/scmlewis" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">© 2025 Lewis SO. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-40"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}
