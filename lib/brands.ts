// Edit these to change the brand cards and their pages.
// Each entry in `sections` becomes one "episode" on the brand's page.
// Add `website` to show a "Visit Website" button on that brand's page.
export type BrandSection = {
  title: string;
  text?: string[];
  items?: { label: string; text: string }[];
};

export type Brand = {
  slug: string;
  name: string;
  tagline: string;
  mark: string;
  colors: [string, string];
  badge?: string;
  since?: string;
  category: string;
  role: string;
  description: string;
  sections: BrandSection[];
  website?: string;
};

export const BRANDS: Brand[] = [
  {
    slug: "gourav-gupta",
    name: "Gourav Gupta",
    tagline: "Skills should create real opportunities",
    mark: "GG",
    colors: ["#e50914", "#7a0610"],
    badge: "MAIN",
    since: "2016",
    category: "Founder · Educator",
    role: "FOUNDER & CEO, TECHCADD · ENTREPRENEUR · EDUCATOR · MENTOR",
    description:
      "“I have always believed one thing: skills should create real opportunities. Everything I have built starts there.”",
    sections: [
      {
        title: "Who I Was Before techcadd",
        text: [
          "I grew up in Moga, in a lower middle-class business family where hard work and education were taken seriously. I studied Mechanical Engineering, and like many students of my generation, I finished my education with a degree, but not always with the practical skills the working world expected.",
          "Before starting techcadd, I spent 3 years working at Siemens as a mechanical engineer and at a CADD center as a mechanical trainer. Those years taught me how businesses actually use technology, and what they look for when they hire.",
          "Repeatedly, I saw the same problem: talented young people with qualifications, but without the hands-on skills that companies needed. Employers were searching for skilled people, and students were searching for jobs, yet the two kept missing each other. I wanted to close that gap.",
        ],
      },
      {
        title: "The Turning Point: Founding techcadd in 2016",
        text: [
          "In 2016, I founded techcadd with a simple conviction: training should not end with a certificate; it should lead to a career. We started as a single computer training centre in a 10×10 room, teaching practical, industry-relevant skills through real projects.",
          "From the first batch, I insisted on one standard: every learner must be able to do the work, not just describe it. That principle still guides every course we teach.",
        ],
      },
      {
        title: "Who I Am Today",
        text: [
          "Today, I am the Founder & CEO of techcadd, an ISO-certified technology education organisation with 8+ centers across Jalandhar, Mukerian, Maqsudan, Phagwara, Hoshiarpur, Ludhiana, Amritsar, Mohali and Lucknow, and more than 25,000 learners trained.",
          "Over the years, what began as one institute has grown into a family of ventures across creative education, online learning, software engineering and artificial intelligence. I am an entrepreneur by profession, but at heart I am still an educator. Nothing gives me more satisfaction than seeing a student I met on their first day walk into their first job.",
        ],
      },
      {
        title: "What I Do",
        items: [
          { label: "Lead techcadd and its sister ventures", text: "setting direction, building teams and making sure every venture stays true to its purpose." },
          { label: "Shape what we teach", text: "keeping our programmes in AI, data science, software development, cybersecurity, cloud, digital marketing and CAD/CAM aligned with what employers need today." },
          { label: "Connect education with industry", text: "I work with universities and colleges across Punjab, including GNA University, SLIET Longowal, Khalsa College Ludhiana, GNDU and CT University, through workshops, seminars and placement drives. In November 2025, I represented techcadd at the IKGPTU joint campus placement drive." },
          { label: "Mentor students and young entrepreneurs", text: "helping them choose the right path, build real skills and believe in what they can achieve." },
          { label: "Build technology for businesses", text: "applying the same practical mindset to software, digital solutions and AI for organisations." },
        ],
      },
      {
        title: "What I Believe",
        items: [
          { label: "Build with purpose", text: "Every venture must start with a real need: a skills gap, a business problem or an underserved learner." },
          { label: "Learn continuously", text: "Technology changes every year. So must we: our courses, our teams and I myself." },
          { label: "Innovate responsibly", text: "New technology, especially AI, should be used thoughtfully and with people firmly in control." },
          { label: "Create lasting value", text: "Success is measured in careers launched and businesses strengthened, not in courses sold." },
        ],
      },
      {
        title: "My Mission",
        text: [
          "To empower young people with practical, industry-relevant skills, and to help businesses grow through purposeful technology, so that education leads to employment and innovation leads to progress.",
        ],
      },
      {
        title: "My Vision",
        text: [
          "I see a future where every young person in Punjab and across India, whether in a big city or a small town, has access to future-ready skills and a clear path to a meaningful career. I want to build an ecosystem where learning, building and innovating happen together, and where talent trained here goes on to shape the industries of tomorrow.",
        ],
      },
      {
        title: "A Message to Young Learners",
        text: [
          "Don't wait for the perfect moment or the perfect course. Start with one skill, practise it until you are confident, and build something real with it. Degrees open doors, but skills keep them open. If you are willing to keep learning, there has never been a better time to build a career in technology.",
          "— Gourav Gupta, Founder & CEO techcadd",
        ],
      },
    ],
  },
  {
    slug: "techcadd",
    name: "techcadd",
    tagline: "Where skills create real opportunities",
    mark: "TC",
    colors: ["#3fa9f5", "#1f5fbf"],
    since: "2016",
    category: "Training",
    role: "TECHNOLOGY EDUCATION · SKILL DEVELOPMENT",
    description:
      "Mr. Gourav Gupta founded techcadd in 2016 and has led it as Founder & CEO ever since. Under his leadership, techcadd has grown from a single training centre into one of the region's recognised technology-training institutes, operated by techcadd Computer Education (OPC) Pvt. Ltd. and ISO certified.",
    sections: [
      {
        title: "Why He Started techcadd",
        text: [
          "Gourav Gupta saw a widening gap between what students learn in classrooms and what employers expect on day one. Graduates had qualifications but lacked practical, job-ready skills. He founded techcadd to close that gap, with training built around real projects, current tools and a clear path to employment.",
        ],
      },
      {
        title: "techcadd Today",
        items: [
          { label: "Founded", text: "2016" },
          { label: "Centres", text: "8+: Jalandhar (2), Maqsudan, Mukerian, Phagwara, Hoshiarpur, Ludhiana, Amritsar, Chandigarh and Lucknow" },
          { label: "Learners trained", text: "25,500+" },
          { label: "Quality", text: "ISO-certified; online certificate verification" },
          { label: "Industry and academic links", text: "Workshops at GNA University, SLIET Longowal, Khalsa College Ludhiana, GNDU, Khalsa College Amritsar, CT University, SVIET, Shoolini University, H.P., Mukundlal College, Haryana; IKGPTU joint campus placement drive, placement drives at HIET, AGC and LPU." },
        ],
      },
      {
        title: "How techcadd Teaches",
        text: [
          "Under Gourav Gupta's direction, every techcadd programme follows three rules: learn by doing, learn what industry uses, and leave with proof of your skills.",
        ],
        items: [
          { label: "Career courses", text: "in AI, data science, Python, full-stack development, cybersecurity, cloud and DevOps, digital marketing and CAD/CAM" },
          { label: "After-12th programmes", text: "of 6 months and 1 year for school-leavers from every stream" },
          { label: "Industrial training", text: "of 45 days, 6 weeks and 6 months, with live projects" },
          { label: "Placement Cell", text: "support and career counselling" },
        ],
      },
      {
        title: "His Vision for techcadd",
        text: [
          "To make practical, industry-relevant technology education accessible to every learner, in big cities and small towns alike, and to ensure that every techcadd course ends not with a certificate, but with a career.",
        ],
      },
    ],
  },
  {
    slug: "xai",
    name: "XAI",
    tagline: "Exploring intelligence. Engineering possibilities.",
    mark: "XAI",
    colors: ["#2ecc71", "#138a4a"],
    category: "AI",
    role: "AI PRODUCTS · RESEARCH · INNOVATION",
    description:
      "Mr. Gourav Gupta founded XAI as a dedicated platform for artificial intelligence research and product development, a place where new ideas in AI are explored, tested and turned into products.",
    sections: [
      {
        title: "Why XAI Exists",
        text: [
          "Gourav Gupta believes the next generation of useful AI will come from people who are willing to experiment. XAI exists to give ideas room to grow: to research emerging AI, build prototypes quickly and move the most promising concepts from the lab into real-world use.",
        ],
      },
      {
        title: "XAI's Focus Areas",
        items: [
          { label: "AI product development", text: "designing and building AI-powered products" },
          { label: "Applied research", text: "exploring emerging models and intelligent systems" },
          { label: "Rapid prototyping", text: "testing ideas quickly to find what works" },
        ],
      },
      {
        title: "The XAI Approach",
        text: [
          "Under Gourav Gupta's leadership, XAI follows a research-to-product mindset. Curiosity drives the exploration; practical value decides what gets built. Every project is developed responsibly, with attention to safety, reliability and real-world usefulness.",
        ],
      },
      {
        title: "His Vision for XAI",
        text: [
          "To advance AI innovation from India by connecting research, experimentation and practical product development, and to turn bold ideas into intelligent products people can use.",
        ],
      },
    ],
  },
  {
    slug: "zavi-technologies",
    name: "Zaavi Technologies",
    tagline: "AI that works the way your business does",
    mark: "Z",
    colors: ["#f5a623", "#d4580b"],
    category: "AI Solutions",
    role: "AI SOLUTIONS · ENTERPRISE TECHNOLOGY",
    description:
      "Mr. Gourav Gupta founded Zaavi Technologies to help organisations put artificial intelligence to work, turning AI from an interesting idea into systems that deliver measurable results.",
    sections: [
      {
        title: "Why Zaavi Exists",
        text: [
          "Gourav Gupta saw many businesses excited about AI but unsure where to begin, and too many AI projects that ended as impressive demos and never reached daily use. Zaavi was founded to close that gap, with practical AI that starts with a real business problem and ends with a working solution.",
        ],
      },
      {
        title: "What Zaavi Delivers",
        items: [
          { label: "AI consulting & strategy", text: "finding where AI will pay off before investing" },
          { label: "Generative AI & knowledge assistants", text: "AI that drafts, summarises and answers from company documents" },
          { label: "AI agents & intelligent automation", text: "taking repetitive, multi-step work off teams" },
          { label: "Machine learning & predictive analytics", text: "forecasting, anomaly detection and decision support" },
          { label: "AI chatbots, AI integration & AI-ready cloud", text: "connecting AI to the systems businesses already use" },
        ],
      },
      {
        title: "The Zaavi Approach",
        items: [
          { label: "Find the right problem", text: "Start with the business goal, not the technology" },
          { label: "Prove the value", text: "A focused proof of concept on real data, measured against agreed KPIs" },
          { label: "Scale with confidence", text: "Full integration, user training, monitoring and continuous improvement" },
        ],
        text: ["Gourav Gupta's rule for Zaavi is simple: AI earns its place only when it creates measurable value."],
      },
      {
        title: "His Vision for Zaavi Technologies",
        text: [
          "To help businesses of every size, not just the largest, adopt AI with confidence and turn it into a lasting competitive advantage.",
        ],
      },
    ],
  },
  {
    slug: "syntax",
    name: "Syntax Developers",
    tagline: "Code, clean & simple",
    mark: "</>",
    colors: ["#9b59ff", "#5124b8"],
    category: "Software",
    role: "SOFTWARE ENGINEERING · IT SERVICES",
    description:
      "Mr. Gourav Gupta is the Founder & CEO of Syntax Developers, an ISO 9001:2015 certified software and IT services company headquartered in Mohali, Punjab, serving clients in India and overseas.",
    sections: [
      {
        title: "Why He Built Syntax Developers",
        text: [
          "Gourav Gupta believes businesses deserve technology partners who listen first and code second. Too many software projects fail because they solve the wrong problem or become impossible to maintain. He built Syntax Developers to deliver software that is clean, dependable and built around how a business actually works.",
        ],
      },
      {
        title: "What Syntax Developers Delivers",
        items: [
          { label: "Web design & development", text: "Fast, responsive websites and web applications" },
          { label: "Custom software", text: "Business systems built around specific workflows" },
          { label: "Mobile app development", text: "Android and iOS apps for customers and teams" },
          { label: "Cloud & cybersecurity", text: "Secure, scalable infrastructure and protection" },
          { label: "AI & machine learning", text: "Intelligent features built into business software" },
          { label: "IT consulting & managed services", text: "Ongoing technical guidance and support" },
        ],
      },
      {
        title: "The Syntax Way: Code, Clean and Simple",
        text: ["Gourav Gupta's engineering philosophy shapes every Syntax project:"],
        items: [
          { label: "Understand first", text: "define the business problem before writing a line of code" },
          { label: "Keep it clean", text: "readable, maintainable code that grows with the client" },
          { label: "Design for people", text: "software that users find simple and useful" },
          { label: "Deliver with quality", text: "ISO 9001:2015 certified processes and agile delivery" },
        ],
      },
      {
        title: "His Vision for Syntax Developers",
        text: [
          "To build dependable digital solutions that help businesses operate smarter, serve customers better and grow with confidence, and to show that world-class software can be engineered from Punjab.",
        ],
      },
    ],
  },
  {
    slug: "virtual-academy",
    name: "Virtual Academy",
    tagline: "Learn from anywhere",
    mark: "VA",
    colors: ["#ff5fa2", "#b0246a"],
    category: "E-learning",
    role: "ONLINE LEARNING · PERSONALISED MENTORSHIP",
    description:
      "Mr. Gourav Gupta founded Virtual Academy, powered by techcadd, to take practical technology education beyond the walls of the classroom. Learn from anywhere. Build skills for everywhere.",
    sections: [
      {
        title: "Why Virtual Academy Exists",
        text: [
          "Not every learner can attend a classroom. Working professionals, students in smaller towns and people balancing family or jobs often miss out on quality training. Gourav Gupta created Virtual Academy so that location and schedule are no longer barriers to building future-ready skills.",
        ],
      },
      {
        title: "How Virtual Academy Works",
        items: [
          { label: "One-to-one mentorship", text: "personal guidance from experienced trainers" },
          { label: "Intensive programmes and technology bootcamps", text: "focused, fast-paced skill building" },
          { label: "Flexible online learning", text: "study at a pace that fits around work or college" },
          { label: "Practical projects", text: "the same learn-by-doing approach as the classroom" },
        ],
      },
      {
        title: "Who It's For",
        items: [
          { label: "Working professionals", text: "Upskill in AI, data, cloud or development without leaving a job" },
          { label: "Students outside major cities", text: "Access quality training and mentors from home" },
          { label: "Career changers", text: "Build a new skill set step by step, with personal guidance" },
          { label: "College students", text: "Add industry skills alongside a degree" },
        ],
      },
      {
        title: "His Vision for Virtual Academy",
        text: [
          "To make practical, future-ready education available to anyone, anywhere, through flexible online learning and personal mentorship, so that talent, not location, decides how far a learner can go.",
        ],
      },
    ],
  },
  {
    slug: "iam",
    name: "IAM",
    tagline: "Where creativity meets technology",
    mark: "IAM",
    colors: ["#1fd1c1", "#0e7f8c"],
    since: "2018",
    category: "Animation & Multimedia",
    role: "INSTITUTE OF ANIMATION & MULTIMEDIA",
    description:
      "Mr. Gourav Gupta founded IAM, the Institute of Animation & Multimedia, in 2018 to give creative young people a professional path into the fast-growing world of digital media, animation and visual effects.",
    sections: [
      {
        title: "Why IAM Was Created",
        text: [
          "Gourav Gupta recognised that creative talent alone is not enough to build a career in media. Animators, designers and editors also need professional-grade technical skills and a portfolio that proves what they can do. IAM was created to bring imagination and technology together under one roof.",
        ],
      },
      {
        title: "What IAM Teaches",
        items: [
          { label: "3D Animation", text: "Modelling, rigging, character animation and environments" },
          { label: "VFX", text: "CGI, compositing and visual effects for film and advertising" },
          { label: "Advanced VFX Program (6 months)", text: "Nuke, Maya, Houdini, After Effects and Mocha Pro, with a professional showreel" },
          { label: "Graphic Design", text: "Branding, layout, colour and typography in Photoshop, Illustrator and CorelDRAW" },
          { label: "Video Editing & Motion Graphics", text: "Editing, storytelling and animated graphics for video and social media" },
          { label: "Photography & Videography", text: "Composition, lighting, shooting and post-production" },
          { label: "Sketching, Painting & Drawing", text: "Foundation art skills for animation and design careers" },
        ],
      },
      {
        title: "The IAM Approach",
        text: [
          "Under Gourav Gupta's leadership, IAM follows a portfolio-first model. Students learn on industry-standard software, work on real creative briefs and graduate with a showreel or portfolio they can present to studios, agencies and clients. IAM operates centres in Jalandhar, Phagwara, Hoshiarpur, Ludhiana, Amritsar and Mohali.",
        ],
      },
      {
        title: "His Vision for IAM",
        text: [
          "To nurture creative talent with technical mastery, so that imagination becomes a profession, and to make Punjab a source of skilled animators, designers and visual storytellers for India's media industry.",
        ],
      },
    ],
  },
  {
    slug: "eductech-infosys",
    name: "Edutech Infosys",
    tagline: "Education, powered by technology",
    mark: "EI",
    colors: ["#ffd93b", "#d99a00"],
    since: "2020",
    category: "EdTech",
    role: "EDUCATION TECHNOLOGY · DIGITAL SOLUTIONS",
    description:
      "Mr. Gourav Gupta founded Edutech Infosys in 2020 to bring technology and education closer together, building software and digital solutions that help institutions and organisations work more effectively.",
    sections: [
      {
        title: "Why Edutech Infosys Was Created",
        text: [
          "Gourav Gupta saw that many schools, institutes and businesses were still running on manual processes and outdated systems. Edutech Infosys was created to give them practical, affordable technology that saves time, improves the learner experience and supports growth.",
        ],
      },
      {
        title: "What Edutech Infosys Does",
        items: [
          { label: "Learning platforms", text: "digital tools for teaching, learning and assessment" },
          { label: "Institute management systems", text: "admissions, attendance, fees and reporting" },
          { label: "Software development", text: "custom applications for education and business" },
          { label: "Digital transformation", text: "moving institutions from manual work to modern systems" },
        ],
      },
      {
        title: "The Edutech Infosys Approach",
        text: [
          "Gourav Gupta's experience in running training institutes shapes how Edutech Infosys works: understand how educators and administrators actually work, build tools that fit those workflows, and support clients after launch.",
        ],
      },
      {
        title: "His Vision for Edutech Infosys",
        text: [
          "To make education more effective, accessible and future-ready through technology, so that institutions can spend less time on administration and more time on learning.",
        ],
      },
    ],
  },
];

export const getBrand = (slug: string) => BRANDS.find((b) => b.slug === slug);
