"use client";

import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-28 text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div>

          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white">
            CONTACT
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight">
            Let's Work
            <span className="block text-blue-300">
              Together
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            Looking for a reliable home textile manufacturer in Turkey?
            Explore our product collections and contact us directly
            for wholesale inquiries and product information.
          </p>

          <div className="mt-12 space-y-7">

            {/* PHONE */}

            <a
              href="tel:+905050879999"
              className="flex items-center gap-5 transition hover:opacity-80"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Phone className="text-blue-300" />
              </div>

              <div>
                <p className="font-semibold">
                  Phone
                </p>

                <p className="text-slate-300">
                  +90 505 087 9999
                </p>
              </div>
            </a>

            {/* EMAIL */}

            <a
              href="mailto:info@forevtekstil.com"
              className="flex items-center gap-5 transition hover:opacity-80"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Mail className="text-blue-300" />
              </div>

              <div>
                <p className="font-semibold">
                  Email
                </p>

                <p className="text-slate-300">
                  info@forevtekstil.com
                </p>
              </div>
            </a>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/905050879999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 transition hover:opacity-80"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <MessageCircle className="text-blue-300" />
              </div>

              <div>
                <p className="font-semibold">
                  WhatsApp
                </p>

                <p className="text-slate-300">
                  Contact us directly
                </p>
              </div>
            </a>

            {/* LOCATION */}

            <div className="flex items-center gap-5">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <MapPin className="text-blue-300" />
              </div>

              <div>
                <p className="font-semibold">
                  Location
                </p>

                <p className="text-slate-300">
                  Denizli, Turkey
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="rounded-[32px] bg-white p-10 shadow-2xl">

          <div className="mb-8">

            <h3 className="text-3xl font-bold text-slate-900">
              Get in Touch
            </h3>

            <p className="mt-3 leading-7 text-slate-500">
              Interested in our products?
              Send us a message and our team will get back to you.
            </p>

          </div>

          <div className="grid gap-5">

            <input
              placeholder="Full Name"
              className="rounded-xl border border-slate-200 p-4 text-slate-900 outline-none transition focus:border-[#153B63]"
            />

            <input
              placeholder="Company Name"
              className="rounded-xl border border-slate-200 p-4 text-slate-900 outline-none transition focus:border-[#153B63]"
            />

            <input
              placeholder="Phone / WhatsApp"
              className="rounded-xl border border-slate-200 p-4 text-slate-900 outline-none transition focus:border-[#153B63]"
            />

            <input
              type="email"
              placeholder="Business Email"
              className="rounded-xl border border-slate-200 p-4 text-slate-900 outline-none transition focus:border-[#153B63]"
            />

            <textarea
              rows={5}
              placeholder="How can we help you?"
              className="rounded-xl border border-slate-200 p-4 text-slate-900 outline-none transition focus:border-[#153B63]"
            />

            <button
              type="button"
              className="flex h-14 items-center justify-center rounded-xl bg-[#153B63] text-lg font-semibold text-white transition hover:bg-[#0F2F4F]"
            >
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}