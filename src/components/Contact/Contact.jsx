import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Copy,
  CheckCircle2,
  Loader2,
  Code2,
} from "lucide-react";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";

function Contact() {

  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState(false);

  const [copied, setCopied] = useState("");

  const copyText = async (text, label) => {

    try {

      await navigator.clipboard.writeText(text);

      setCopied(label);

      setTimeout(() => {

        setCopied("");

      }, 2200);

    } catch {}

  };

  const sendEmail = async (e) => {

    e.preventDefault();

    setLoading(true);

    setSuccess(false);

    setError(false);

    try {

      await emailjs.sendForm(

        "service_15iw6vm",

        "template_rr91xpg",

        form.current,

        "MnxYIk7OO8py32J_0"

      );

      form.current.reset();

      setSuccess(true);

    } catch (err) {

      console.log(err);

      setError(true);

    }

    setLoading(false);

  };

  const contactLinks = [

    {

      label: "Email",

      value: "pandeydiksha7579@gmail.com",

      href: "mailto:pandeydiksha7579@gmail.com",

      icon: Mail,

      copy: "pandeydiksha7579@gmail.com",

    },

    {

      label: "Phone",

      value: "+91 8273979289",

      href: "tel:+918273979289",

      icon: Phone,

      copy: "+918273979289",

    },

    {

      label: "LinkedIn",

      value: "linkedin.com/in/dikshapandey75",

      href: "https://www.linkedin.com/in/dikshapandey75/",

      icon: FaLinkedin,

    },

    {

      label: "GitHub",

      value: "github.com/diksha7579",

      href: "https://github.com/diksha7579",

      icon: FaGithub,

    },

  ];

  return (

<section
id="contact"
className="contact-section relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
>

<div className="contact-glow contact-glow-one" />
<div className="contact-glow contact-glow-two" />

<div className="relative z-10 mx-auto max-w-7xl">

<motion.div
initial={{opacity:0,y:35}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.7}}
className="mb-14"
>

<p className="contact-eyebrow">

06 / CONTACT

</p>

<h2 className="contact-heading">

Let's build

<span> something.</span>

</h2>

<p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">

Have an opportunity, project, startup or idea?

Let's discuss it.

I'm always interested in exciting work and collaborations.

</p>

</motion.div>

<div className="contact-layout">

<motion.div

className="contact-info"

initial={{opacity:0,x:-40}}

whileInView={{opacity:1,x:0}}

viewport={{once:true}}

transition={{duration:.7}}

>

<div className="contact-intro-card">

<div className="contact-intro-icon">

<Code2 size={24}/>

</div>

<p className="contact-intro-label">

AVAILABLE FOR WORK

</p>

<h3>

Let's connect.

</h3>

<p>

I'm actively looking for Full Stack Developer roles,
internships and freelance opportunities.

</p>

</div>

<div className="contact-links">

{

contactLinks.map((item)=>{

const Icon=item.icon;

return(

<motion.a

key={item.label}

href={item.href}

target={item.href.startsWith("http")?"_blank":undefined}

rel="noreferrer"

className="contact-link"

whileHover={{x:6}}

>

<div className="contact-link-icon">

<Icon size={18}/>

</div>

<div className="contact-link-content">

<span>

{item.label}

</span>

<strong>

{item.value}

</strong>

</div>

{

item.copy &&

<button

type="button"

className="copy-button"

onClick={(e)=>{

e.preventDefault();

copyText(item.copy,item.label);

}}

>

{

copied===item.label ?

<CheckCircle2 size={17}/>

:

<Copy size={17}/>

}

</button>

}

<ArrowUpRight

size={16}

className="contact-link-arrow"

/>

</motion.a>

)

})

}

</div>

<div className="contact-location">

<MapPin size={17}/>

<span>

Haldwani,

Uttarakhand,

India

</span>

</div>

{

copied &&

<div className="copied-toast">

Copied {copied}

</div>

}

</motion.div>

<motion.div

className="contact-form-card"

initial={{opacity:0,x:40}}

whileInView={{opacity:1,x:0}}

viewport={{once:true}}

transition={{duration:.7}}

>

<div className="contact-form-header">

<p>

SEND MESSAGE

</p>

<h3>

Share your idea

</h3>

</div>

<form

ref={form}

className="contact-form"

onSubmit={sendEmail}

>

<div className="contact-field">

<label>

Your Name

</label>

<input

type="text"

name="from_name"

placeholder="John Doe"

required

/>

</div>

<div className="contact-field">

<label>

Email Address

</label>

<input

type="email"

name="reply_to"

placeholder="john@email.com"

required

/>

</div>

<div className="contact-field">

<label>

Subject

</label>

<input

type="text"

name="subject"

placeholder="Job Opportunity"

required

/>

</div>

<div className="contact-field">

<label>

Message

</label>

<textarea

name="message"

rows="6"

placeholder="Tell me about your project..."

required

/>

</div>
              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2
                      size={18}
                      className="contact-spinner"
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    <span>
                      Send Message
                    </span>

                    <ArrowUpRight size={17} />
                  </>
                )}
              </button>

              {success && (
                <div className="contact-success">

                  <CheckCircle2 size={18} />

                  <span>
                    Your message has been sent successfully.
                    I'll get back to you soon.
                  </span>

                </div>
              )}

              {error && (
                <div className="contact-error">

                  <span>
                    Something went wrong.
                    Please try again.
                  </span>

                </div>
              )}

            </form>

          </motion.div>

        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .7,
          }}
          className="contact-bottom"
        >

          <div>

            <span>

              READY TO WORK TOGETHER?

            </span>

            <strong>

              Let's create something amazing.

            </strong>

          </div>

          <a
            href="mailto:pandeydiksha7579@gmail.com"
            className="contact-bottom-button"
          >

            Say Hello

            <ArrowUpRight size={17} />

          </a>

        </motion.div>

      </div>

    </section>

  );

}

export default Contact;