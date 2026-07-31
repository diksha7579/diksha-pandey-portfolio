import javaFullStack from "../assets/images/certificates/JavaFullStack Certificate.jpg";
import ibm from "../assets/images/certificates/IBM Certificate.jpg";
import infosys from "../assets/images/certificates/Infosys Certificate.jpg";
import microsoft from "../assets/images/certificates/Microsoft Certificate.jpg";
import sql from "../assets/images/certificates/SQL Certification.jpg";
import network from "../assets/images/certificates/Network certificate.jpg";
import dataScience from "../assets/images/certificates/Data Science Certificate.jpg";
import cyber from "../assets/images/certificates/Cyber Certificate.jpg";
import nptel from "../assets/images/certificates/NPTEL Certificate.jpg";
import algorithms from "../assets/images/certificates/ALGO Certificate.jpg";
import leetcode from "../assets/images/certificates/50days leetcode.jpg";
import greatLearning from "../assets/images/certificates/GreatLearning Certificate.jpg";

const certificatesData = [
  {
    id: 1,
    title: "Java Full Stack Development",
    organization: "AICTE",
    category: "Full Stack Development",
    image: javaFullStack,
    featured: true,
  },
  {
    id: 2,
    title: "Web Development",
    organization: "IBM SkillsBuild",
    category: "Web Development",
    image: ibm,
    featured: true,
  },
  {
    id: 3,
    title: "Website Development",
    organization: "Infosys Springboard",
    category: "Web Development",
    image: infosys,
    featured: true,
  },
  {
    id: 4,
    title: "Career Essentials in Generative AI",
    organization: "Microsoft",
    category: "Artificial Intelligence",
    image: microsoft,
    featured: true,
  },
  {
    id: 5,
    title: "SQL Certification",
    organization: "SQL",
    category: "Database",
    image: sql,
    featured: true,
  },
  {
    id: 6,
    title: "Networking / CCNA",
    organization: "Cisco",
    category: "Networking",
    image: network,
    featured: false,
  },
  {
    id: 7,
    title: "Data Science",
    organization: "Wipro",
    category: "Data Science",
    image: dataScience,
    featured: false,
  },
  {
    id: 8,
    title: "Cybersecurity",
    organization: "Eduskills",
    category: "Cybersecurity",
    image: cyber,
    featured: false,
  },
  {
    id: 9,
    title: "Compiler Design",
    organization: "NPTEL",
    category: "Computer Science",
    image: nptel,
    featured: false,
  },
  {
    id: 10,
    title: "Algorithms",
    organization: "Technical Certification",
    category: "Problem Solving",
    image: algorithms,
    featured: false,
  },
  {
    id: 11,
    title: "50 Days of LeetCode",
    organization: "LeetCode",
    category: "Problem Solving",
    image: leetcode,
    featured: false,
  },
  {
    id: 12,
    title: "Introduction to AI",
    organization: "Great Learning",
    category: "Artificial Intelligence",
    image: greatLearning,
    featured: false,
  },
];

export default certificatesData;