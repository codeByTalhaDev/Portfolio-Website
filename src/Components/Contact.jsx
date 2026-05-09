import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const publicKey = "jYc_GaCGmzwBRy1n_";
    const serviceId = "service_inieds8";
    const templateId = "template_l0f4lmt";

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        setLoading(false);
        toast.success("Message Sent Successfully!");
        e.target.reset();
      },
      () => {
        setLoading(false);
        toast.error("Failed to send message!");
      }
    );
  };

  return (
    <section
      id="contact"
      className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-black text-white"
    >

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-3">
        Contact Me
      </h2>

      {/* Form */}
<form
  ref={form}
  onSubmit={sendEmail}
  data-aos="zoom-in-up"
  className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto 
             flex flex-col gap-4 sm:gap-5 md:gap-4
             bg-gray-950/60 
             backdrop-blur-sm
             border border-gray-800
             p-6 sm:p-6 md:p-6
             rounded-3xl
             shadow-2xl shadow-cyan-500/5
             hover:shadow-cyan-500/10
             transition-all duration-500"
>

<input
  type="text"
  name="user_name"
  placeholder="Your Name"
  required
  className="bg-gray-900 border border-gray-700 
             p-3 sm:p-4 md:p-5 
             rounded-xl 
             text-sm sm:text-base 
             outline-none
             transition-all duration-300
             focus:border-cyan-400
             focus:shadow-lg
             focus:shadow-cyan-500/20
             hover:border-cyan-500"
/>

<input
  type="email"
  name="user_email"
  placeholder="Your Email"
  required
  className="bg-gray-900 border border-gray-700 
             p-3 sm:p-4 md:p-5 
             rounded-xl 
             text-sm sm:text-base 
             outline-none
             transition-all duration-300
             focus:border-cyan-400
             focus:shadow-lg
             focus:shadow-cyan-500/20
             hover:border-cyan-500"
/>

<textarea
  name="message"
  rows="5"
  placeholder="Your Message"
  required
  className="bg-gray-900 border border-gray-700 
             p-3 sm:p-4 md:p-5 
             rounded-xl 
             text-sm sm:text-base 
             outline-none
             resize-none
             transition-all duration-300
             focus:border-cyan-400
             focus:shadow-lg
             focus:shadow-cyan-500/20
             hover:border-cyan-500"
></textarea>

<button
  type="submit"
  disabled={loading}
  className="bg-cyan-500 
             py-3 sm:py-4 
             rounded-xl 
             text-base sm:text-lg 
             font-semibold
             transition-all duration-300
             hover:bg-cyan-400
             hover:scale-[1.02]
             active:scale-95
             hover:shadow-lg
             hover:shadow-cyan-500/30
             disabled:opacity-50"
>
  {loading ? "Sending..." : "Send Message"}
</button>

      </form>

    </section>
  );
};

export default Contact;