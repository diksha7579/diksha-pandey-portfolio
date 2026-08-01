import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  CalendarDays,
  MapPin,
  BookOpen,
  Award,
  Sparkles,
} from "lucide-react";

import educationData from "../../data/educationData";

import "./Education.css";

function Education() {

  return (

    <section
      id="education"
      className="education-section relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >

      <div className="education-glow education-glow-one" />
      <div className="education-glow education-glow-two" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ====================== Heading ====================== */}

        <motion.div
          initial={{
            opacity:0,
            y:35
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{
            once:true
          }}
          transition={{
            duration:.7
          }}
          className="mb-20"
        >

          <p className="education-eyebrow">

            02 / EDUCATION

          </p>

          <h2 className="education-heading">

            Education &
            <span> Academic Foundation.</span>

          </h2>

          <p className="education-description">

            My academic journey provided a strong foundation
            in computer science, analytical thinking and
            software engineering while encouraging continuous
            learning through projects, internships and modern
            technologies.

          </p>

        </motion.div>

        {/* ====================== Timeline ====================== */}

        <div className="education-timeline">

          {

            educationData.map((item,index)=>(

              <motion.div

                key={item.id}

                className="education-card"

                initial={{
                  opacity:0,
                  y:60
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                viewport={{
                  once:true,
                  amount:.25
                }}

                transition={{
                  duration:.7,
                  delay:index*.15
                }}

              >

                {/* ====================== Timeline Side ====================== */}

                <div className="education-line">

                  <div className="education-dot">

                    {

                      item.id===1 ?

                      <GraduationCap size={18}/>

                      :

                      <School size={18}/>

                    }

                  </div>

                  <div className="education-year">

                    {item.duration}

                  </div>

                </div>

                {/* ====================== Content ====================== */}

                <div className="education-content">

                  <div className="education-top">

                    <div>

                      <span className="education-level">

                        {item.level}

                      </span>

                      <h3 className="education-degree">

                        {item.degree}

                      </h3>

                    </div>

                    {

                      item.id===1 &&

                      <span className="education-current education-graduated">

                        ✓ Graduated

                      </span>

                    }

                  </div>

                  <div className="education-meta">

                    <div>

                      <School size={17}/>

                      {item.institution}

                    </div>

                    <div>

                      <MapPin size={17}/>

                      {item.location}

                    </div>

                    <div>

                      <CalendarDays size={17}/>

                      {item.duration}

                    </div>

                    <div className="education-score">

                      <Award size={17}/>

                      <strong>

                        {item.score}

                      </strong>

                    </div>

                  </div>  
                                      {/* ================= Academic Highlights ================= */}

                  {item.coursework && (

                    <>

                      <div className="education-coursework-title">

                        <BookOpen size={18} />

                        Academic Highlights

                      </div>

                      <div className="education-coursework">

                        {item.coursework.map((course) => (

                          <span
                            key={course}
                            className="education-chip"
                          >

                            {course}

                          </span>

                        ))}

                      </div>

                    </>

                  )}


                </div>

              </motion.div>

            ))

          }

        </div>

      </div>

    </section>

  );

}

export default Education;