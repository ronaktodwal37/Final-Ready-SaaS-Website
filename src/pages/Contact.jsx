import {
  AtSign,
  Check,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Eyebrow } from "../components/UI";

const initial = { name: "", email: "", company: "", interest: "", message: "" };
export default function Contact() {
  const [searchParams] = useSearchParams();
  const intent = searchParams.get("intent");
  const presetInterest =
    intent === "access" ? "Product access" : intent === "careers" ? "Careers" : "";
  const [form, setForm] = useState(() => ({
      ...initial,
      interest: presetInterest,
    })),
    [errors, setErrors] = useState({}),
    [loading, setLoading] = useState(false),
    [success, setSuccess] = useState(false);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!form.email.trim()) next.email = "Please enter your work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (!form.company.trim()) next.company = "Please enter your company name.";
    if (!form.interest) next.interest = "Please select an area of interest.";
    if (!form.message.trim()) next.message = "Tell us a little about your needs.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm(initial);
    }, 900);
  };
  return (
    <section className="contact-page">
      <div className="section-shell grid gap-12 py-20 lg:grid-cols-[.84fr_1.16fr] lg:py-24">
        <div className="lg:py-10">
          <Eyebrow>Get in touch</Eyebrow>
          <h1 className="page-title mt-6">
            Ready to transform your <span className="gradient-text">workflow?</span>
          </h1>
          <p className="page-lead mt-6">
            Request a demo and see how FlowPilot can help your team work smarter, not harder.
          </p>
          <div className="mt-9 space-y-4">
            {[
              [Sparkles, "Personalized demo"],
              [Users, "Expert guidance"],
              [ShieldCheck, "No commitment"],
            ].map(([Icon, text]) => (
              <div className="contact-benefit" key={text}>
                <span>
                  <Icon size={18} />
                </span>
                {text}
              </div>
            ))}
          </div>
          <div className="mt-10 space-y-4 text-sm font-semibold">
            <a href="mailto:hello@flowpilot.com" className="contact-line">
              <Mail />
              hello@flowpilot.com
            </a>
            <p className="contact-line">
              <MapPin />
              123 Innovation Drive, San Francisco, CA
            </p>
            <a href="tel:+15551234567" className="contact-line">
              <Phone />
              +1 (555) 123-4567
            </a>
          </div>
          <div className="mt-8 flex gap-3">
            {[AtSign, Send].map((Icon, i) => (
              <a
                href="#contact-form"
                aria-label={i ? "X placeholder" : "LinkedIn placeholder"}
                className="social-link"
                key={i}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="mt-6 max-w-md text-xs leading-5 text-slate">
            Contact details and social profiles are illustrative placeholders for this frontend
            demonstration.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="form-card"
          id="contact-form"
        >
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="success-state"
              >
                <span>
                  <Check size={28} />
                </span>
                <h2>Request captured</h2>
                <p>
                  Thanks for exploring FlowPilot. This was a frontend-only demonstration, so no data
                  was sent to a server.
                </p>
                <button onClick={() => setSuccess(false)}>Send another request</button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={submit}
                noValidate
              >
                <p className="text-sm font-bold text-violet-600">LET’S BUILD BETTER WORKFLOWS</p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-[-.04em]">
                  Request a free demo
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate">
                  Fields marked with * are required. Submissions stay in your browser.
                </p>
                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Full Name *"
                    name="name"
                    value={form.name}
                    onChange={update}
                    error={errors.name}
                    placeholder="Your name"
                  />
                  <Field
                    label="Work Email *"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update}
                    error={errors.email}
                    placeholder="you@company.com"
                  />
                  <Field
                    label="Company Name *"
                    name="company"
                    value={form.company}
                    onChange={update}
                    error={errors.company}
                    placeholder="Company name"
                  />
                  <label className="field">
                    <span>Your Interest *</span>
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={update}
                      aria-invalid={!!errors.interest}
                    >
                      <option value="">Select an option</option>
                      <option>Product demo</option>
                      <option>Team collaboration</option>
                      <option>Workflow automation</option>
                      <option>Product access</option>
                      <option>Careers</option>
                    </select>
                    {errors.interest && <small>{errors.interest}</small>}
                  </label>
                  <label className="field sm:col-span-2">
                    <span>Your Message *</span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={update}
                      rows="5"
                      placeholder="Tell us about your needs..."
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <small>{errors.message}</small>}
                  </label>
                </div>
                <button
                  disabled={loading}
                  className="button button-primary mt-6 w-full"
                  type="submit"
                >
                  {loading ? (
                    <>
                      <i className="spinner" />
                      Preparing request...
                    </>
                  ) : (
                    <>
                      Send request <Send size={17} />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
function Field({ label, error, ...props }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input {...props} aria-invalid={!!error} />
      {error && <small>{error}</small>}
    </label>
  );
}
