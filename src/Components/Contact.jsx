import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to send message.");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-5 sm:px-8 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-4"></div>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Have a project or an opportunity? Feel free to get in touch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold mb-5">Let's Work Together</h3>

            <p className="text-gray-400 leading-8 mb-10">
              I'm always interested in discussing new projects, internship
              opportunities, and collaborations. Feel free to contact me
              anytime.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <FaEnvelope className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="font-medium">talhamughal02148@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <FaPhoneAlt className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="font-medium">+92 317 7914821</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="font-medium">Gujranwala, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-5 mt-10">
              <a
                href="https://github.com/codeByTalhaDev"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-gray-900 border border-gray-700 hover:border-cyan-400 flex items-center justify-center transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/in/codebytalhadev"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-gray-900 border border-gray-700 hover:border-cyan-400 flex items-center justify-center transition"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Right */}
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-left"
            className="bg-[#111827] border border-gray-700 rounded-3xl p-8 shadow-2xl shadow-cyan-500/5"
          >
            <div className="space-y-5">
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full bg-[#1F2937] text-white placeholder-gray-400 border border-gray-600 rounded-xl px-5 py-3 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />

              <input
                type="email"
                name="user_email"
                required
                placeholder="Your Email"
                className="w-full bg-[#1F2937] text-white placeholder-gray-400 border border-gray-600 rounded-xl px-5 py-3 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />

              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className="w-full bg-[#1F2937] text-white placeholder-gray-400 border border-gray-600 rounded-xl px-5 py-3 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />

              <textarea
                rows="6"
                name="message"
                required
                placeholder="Write your message..."
                className="w-full bg-[#1F2937] text-white placeholder-gray-400 border border-gray-600 rounded-xl px-5 py-3 outline-none resize-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                  loading
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-cyan-500 hover:bg-cyan-400 hover:scale-[1.02] text-black"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
