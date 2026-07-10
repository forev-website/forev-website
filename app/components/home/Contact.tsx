"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-28 text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Sol Taraf */}

        <div>

          <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white">
            İLETİŞİM
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight">
            Hemen
            <span className="block text-blue-300">
              Teklif Alın
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            Welsoft yorgan, pike, alez, otel tekstili ve OEM üretim
            talepleriniz için bizimle iletişime geçin.
          </p>

          <div className="mt-12 space-y-6">

            <div className="flex items-center gap-5">

              <Phone className="text-blue-300" />

              <div>
                <p className="font-semibold">
                  Telefon
                </p>

                <p className="text-slate-300">
                  +90 XXX XXX XX XX
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <Mail className="text-blue-300" />

              <div>

                <p className="font-semibold">
                  E-Mail
                </p>

                <p className="text-slate-300">
                  info@forevtekstil.com
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <MapPin className="text-blue-300" />

              <div>

                <p className="font-semibold">
                  Adres
                </p>

                <p className="text-slate-300">
                  Denizli / Türkiye
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Sağ Taraf */}

        <div className="rounded-[32px] bg-white p-10">

          <div className="grid gap-5">

            <input
              placeholder="Ad Soyad"
              className="rounded-xl border p-4 outline-none focus:border-[#153B63]"
            />

            <input
              placeholder="Firma Adı"
              className="rounded-xl border p-4 outline-none focus:border-[#153B63]"
            />

            <input
              placeholder="Telefon"
              className="rounded-xl border p-4 outline-none focus:border-[#153B63]"
            />

            <input
              placeholder="E-Mail"
              className="rounded-xl border p-4 outline-none focus:border-[#153B63]"
            />

            <textarea
              rows={5}
              placeholder="Mesajınız"
              className="rounded-xl border p-4 outline-none focus:border-[#153B63]"
            />

            <Button className="h-14 rounded-xl bg-[#153B63] text-lg hover:bg-[#0F2F4F]">

              <Send className="mr-2 h-5 w-5" />

              Teklif Gönder

            </Button>

          </div>

        </div>

      </div>
    </section>
  );
}