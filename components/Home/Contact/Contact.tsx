"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import SectionHeading from "@/components/Helper/SectionHeading";
import { contactInfo } from "@/data/Data";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { from_name: form.name, from_email: form.email, message: form.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" data-aos-duration="600">
          <SectionHeading
            title="Get In"
            highlight="Touch"
            subtitle="Have a project in mind or just want to say hi? I'd love to hear from you"
          />
        </div>

        {/* items-start so both columns align at the top, no forced stretching */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-stretch">
          {/* ── Left: Info ── */}
          <div
            className="flex flex-col gap-6 h-full"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Let&apos;s talk
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                I&apos;m currently open to junior frontend / full-stack
                developer roles and freelance projects. Feel free to reach out —
                I usually reply within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <Card
                  key={label}
                  className="border-blue-100 dark:border-gray-800 bg-blue-50/40 dark:bg-gray-900
                    hover:border-violet-200 dark:hover:border-violet-800 transition-all duration-200 group"
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="p-2.5 rounded-xl bg-violet-50 dark:bg-violet-900/30 flex-shrink-0">
                      <Icon
                        size={18}
                        className="text-violet-600 dark:text-violet-400"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={
                            href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-gray-700 dark:text-gray-300
                            group-hover:text-violet-600 dark:group-hover:text-violet-400
                            transition-colors truncate block"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {value}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <Card
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="100"
            className="border-blue-100 dark:border-gray-800 bg-blue-50/40 dark:bg-gray-900 h-full flex flex-col"
          >
            <CardContent className="p-6 sm:p-10 flex flex-col gap-6 h-full">
              <div className="flex flex-col gap-2">
                <Label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Name
                </Label>
                <Input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700
                    focus-visible:ring-violet-400 dark:focus-visible:ring-violet-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700
                    focus-visible:ring-violet-400 dark:focus-visible:ring-violet-500"
                />
              </div>

              {/* fixed rows so the box doesn't stretch to match the left side */}
              <div className="flex flex-col gap-1.5 flex-1">
                <Label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Message
                </Label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hi..."
                  className="resize-none bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700
      focus-visible:ring-violet-400 dark:focus-visible:ring-violet-500 flex-1 min-h-[120px]"
                />
              </div>

              <Button
                onClick={handleSubmit}
                disabled={status === "loading" || status === "success"}
                className="w-full mt-auto bg-violet-600 hover:bg-violet-700 dark:bg-violet-600
    dark:hover:bg-violet-700 text-white"
              >
                {status === "loading" && (
                  <Loader2 size={16} className="animate-spin mr-2" />
                )}
                {status === "success" && (
                  <CheckCircle2 size={16} className="mr-2" />
                )}
                {status === "idle" && <Send size={16} className="mr-2" />}
                {status === "loading"
                  ? "Sending..."
                  : status === "success"
                    ? "Message Sent!"
                    : "Send Message"}
              </Button>

              {status === "error" && (
                <p className="text-xs text-red-500 text-center">
                  Something went wrong. Please try emailing me directly.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
