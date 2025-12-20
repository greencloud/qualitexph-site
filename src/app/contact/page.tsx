'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banners/Pages';
import { useState } from "react";
import { siteConfig } from '@/config/site';

const subjects = [
  "Request a Quote",
  "Sales",
  "Support",
  "General Inquiry",
];

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setLoading(false);

    setStatus(data.message);
    if (res.ok) e.currentTarget.reset();
  }

  return (
    <>
      <Header />
      <Banner
        title="Contact Us"
        subtitle="Reach out, we are here to help"
        imageUrl="/banner-pages.webp"
        height={300}
      />
      <main className="max-w-375 mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-1/2 md:w-full">
            <h2 className="text-md font-semibold">Main Office Address</h2>
            <p className="text-md">{siteConfig.contact.main_office}</p>

            <h2 className="text-md font-semibold">Telephone</h2>
            <p className="text-md">{siteConfig.contact.phone}</p>

            <h2 className="text-md font-semibold">Email Address</h2>
            <p className="text-md">{siteConfig.contact.email}</p>
          </div>

          <div className="w-1/2 md:w-full">
            <p className="text-md">We would love to hear from you! Reach out for inquiries, collaborations, or support.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field (hidden from users) */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                title="Company (leave blank)"
                placeholder="Company (leave blank)"
                autoComplete="off"
                className="hidden"
              />

              <div>
                <label className="block font-medium">Complete Name</label>
                <input
                  name="name"
                  required
                  title="Complete Name"
                  placeholder="Enter your complete name"
                  className="w-full mt-1 rounded border border-gray-500 px-3 py-2"
                />
              </div>

              <div>
                <label className="blockfont-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  title="Email"
                  placeholder="Enter your email address"
                  className="w-full mt-1 rounded border border-gray-500 px-3 py-2"
                />
              </div>

              <div>
                <label className="block font-medium">Subject</label>
                <select
                  name="subject"
                  required
                  className="w-full mt-1 rounded border border-gray-500 px-3 py-2"
                  title="Subject"
                  aria-label="Select a subject"
                >
                  <option value="">Select a subject</option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-medium">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  title="Message"
                  placeholder="Enter your message here"
                  className="w-full mt-1 rounded border border-gray-500 px-3 py-2"
                />
              </div>

              <button
                disabled={loading}
                className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-gray-800 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-md mt-2 text-gray-700">{status}</p>
              )}
            </form>
          </div>
        </div>

        <div className="h-10">&nbsp;</div>

      </main>
      <Footer />
    </>
  );
}
