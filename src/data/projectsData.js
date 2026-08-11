import ClaimAuto1 from "../assets/images/projects/ClaimAuto1.jpeg";
import ClaimAuto2 from "../assets/images/projects/ClaimAuto2.jpeg";
import Saatphere1 from "../assets/images/projects/Saatphere1.png";
import Saatphere2 from "../assets/images/projects/Saatphere2.png";
import Bakery1 from "../assets/images/projects/Bakery1.png";
import Bakery2 from "../assets/images/projects/Bakery2.png";

const projectsData = [
  {
    id: 1,
    title: "ClaimAuto",
    category: "Full Stack Development",
    description:
      "A full-stack health insurance claims management application designed to simplify and streamline the insurance claim lifecycle. Users can submit claims, track claim status, manage policy details, and support approval workflows through a secure and user-friendly interface.",
    technologies: ["ASP.NET", "React", "C#", "MySQL"],
    images: [
      ClaimAuto1,
      ClaimAuto2,
    ],
    github: "https://github.com/diksha7579/ClaimAuto-for-Health-Insurance",
    demo: null,
    featured: true,
  },

  {
    id: 2,
    title: "Saatphere",
    category: "Web Development",
    description:
      "A web project focused on creating a modern and engaging user experience while applying frontend development concepts, responsive design, and interactive interface elements.",
    technologies: ["HTML", "CSS", "JavaScript"],
    images: [
      Saatphere1,
      Saatphere2,
    ],
    github: "https://github.com/diksha7579/SaatPhere-",
    demo: null,
    featured: true,
  },

  {
    id: 3,
    title: "E-Bakery Store",
    category: "Web Development",
    description:
      "A responsive bakery store website developed using HTML, CSS, and JavaScript. The project focuses on creating an attractive user interface and an interactive frontend experience while applying fundamental web development concepts.",
    technologies: ["HTML", "CSS", "JavaScript"],
    images: [
      Bakery1,
      Bakery2,
    ],
    github: "https://github.com/diksha7579/E-Bakery-Store",
    demo: null,
    featured: false,
  },
];

export default projectsData;