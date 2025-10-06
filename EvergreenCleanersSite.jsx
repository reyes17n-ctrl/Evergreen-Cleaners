import React, { useState } from "react";
import { motion } from "framer-motion";

// Evergreen Cleaners - Single-file React component (TailwindCSS)
// How to use:
// 1) Place this file in a React app (e.g. create-next-app or CRA).
// 2) Ensure TailwindCSS is configured. This component uses Tailwind utility classes.
// 3) Install framer-motion: `npm install framer-motion` (optional for subtle animations).
// 4) Replace placeholders (logoSVG, images, booking endpoint) with your real assets and endpoints.

export default function EvergreenCleanersSite() {
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    date: "",
    time: "",
    frequency: "one-time",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setBooking((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    // TODO: replace this with a real API endpoint (serverless function, Zapier, Calendly, etc.)
    // Example: POST /api/book -> your backend -> send confirmation, calendar invite, SMS, etc.

    try {
      // Simulate network latency for demo
      await new Promise((r) => setTimeout(r, 900));

      // Basic client-side validation
      if (!booking.name || !booking.phone || !booking.date) {
        throw new Error("Please fill in name, phone and preferred date.");
      }

      // For demo only: pretend booking succeeded
      setSuccess({ message: "Booking request received. We'll contact you to confirm." });
      setBooking({ name: "", phone: "", email: "", address: "", date: "", time: "", frequency: "one-time", notes: "" });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  // Brand colors (change in your Tailwind config or use inline style variables)
  // --brand: evergreen green; --accent: gold (luxury vibe)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800" style={{ fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}>
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/70 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            {/* Logo (replace with your logo svg or img) */}
            <a href="#home" className="flex items-center gap-3 no-underline">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg,#0b6b42,#0f9d58)' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C10 6 6 7 4 10C2 13 3 18 8 20C13 22 19 20 20 15C21 10 14 2 12 2Z" fill="white"/>
                </svg>
              </div>
              <div>
                <div className="text-lg font-semibold">Evergreen Cleaners</div>
                <div className="text-sm text-gray-600">Luxury Bin Cleaning — Everett, WA</div>
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-6 text-sm">
              <a href="#services" className="hover:text-gray-900">Services</a>
              <a href="#pricing" className="hover:text-gray-900">Pricing</a>
              <a href="#gallery" className="hover:text-gray-900">Gallery</a>
              <a href="#reviews" className="hover:text-gray-900">Reviews</a>
              <a href="#about" className="hover:text-gray-900">About</a>
            </nav>

            <a href="tel:4252441310" className="px-4 py-2 border rounded-full text-sm font-medium border-gray-200 hover:shadow">Call 425‑244‑1310</a>
            <a href="#booking" className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow">Book Online</a>
          </div>

          <div className="md:hidden">
            {/* Mobile: simple call button */}
            <a href="tel:4252441310" className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-green-600 text-white text-sm font-medium shadow">Call</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main id="home">
        <section className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 pt-12 lg:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">Evergreen Cleaners — Luxury Trash Bin Cleaning in Everett, WA</h1>
              <p className="mt-6 text-lg text-gray-600">Premium, eco-friendly cleaning and sanitizing for residential and commercial bins. Odor control, deep cleaning, and regular maintenance — delivered with white-glove service.</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#booking" className="inline-block px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow hover:scale-[1.02]">Book Now</a>
                <a href="#services" className="inline-block px-6 py-3 rounded-full border border-gray-200 text-sm">See Services</a>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div>
                  <div className="text-sm text-gray-500">Serving</div>
                  <div className="font-medium">Everett, Washington & nearby areas</div>
                </div>

                <div className="border-l h-10" />

                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <a href="tel:4252441310" className="font-medium">425‑244‑1310</a>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
              {/* Luxury feature card */}
              <div className="rounded-2xl p-8 shadow-xl border border-gray-100 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs Uppercase text-gray-500">White‑glove Service</div>
                    <div className="text-xl font-semibold">Spotless. Safe. Sustainable.</div>
                  </div>
                  <div className="text-sm text-gray-500">Est. 2025</div>
                </div>

                <ul className="mt-6 space-y-3 text-gray-700">
                  <li>✔ High‑pressure deep cleaning</li>
                  <li>✔ Hospital‑grade sanitizing</li>
                  <li>✔ Eco detergents & odor neutralizers</li>
                  <li>✔ Scheduling & automatic maintenance plans</li>
                </ul>

                <div className="mt-6">
                  <a href="#booking" className="inline-block px-5 py-2 rounded-full bg-green-600 text-white font-medium">Request Premium Service</a>
                </div>
              </div>

              {/* Small trust bar */}
              <div className="mt-6 flex gap-4 items-center text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100">⭐</div>
                  <div>
                    <div className="font-medium">4.9/5</div>
                    <div className="text-xs">based on local reviews</div>
                  </div>
                </div>

                <div className="border-l h-6" />

                <div className="text-sm">Licensed & Insured</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mt-20 bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold">Services</h2>
            <p className="mt-2 text-gray-600">Tailored packages for homes and businesses in Everett.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border shadow-sm bg-gray-50">
                <div className="text-lg font-semibold">Residential Bin Cleaning</div>
                <div className="mt-3 text-gray-600">Deep clean, deodorize and sanitize household garbage and recycling bins.</div>
                <ul className="mt-4 text-gray-700 space-y-2">
                  <li>• One-time or recurring plans</li>
                  <li>• Biodegradable cleaners</li>
                  <li>• Odor neutralization</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border shadow-sm bg-gray-50">
                <div className="text-lg font-semibold">Commercial / HOA Services</div>
                <div className="mt-3 text-gray-600">Scheduled bin maintenance for apartments, offices, and retail.</div>
                <ul className="mt-4 text-gray-700 space-y-2">
                  <li>• Custom schedules</li>
                  <li>• Volume discounts</li>
                  <li>• Monthly reporting</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border shadow-sm bg-gray-50">
                <div className="text-lg font-semibold">Sanitizing & Odor Control</div>
                <div className="mt-3 text-gray-600">Hospital-grade sanitizers and targeted treatments for persistent odors.</div>
                <ul className="mt-4 text-gray-700 space-y-2">
                  <li>• Eco-friendly sanitizers</li>
                  <li>• Targeted enzyme treatments</li>
                  <li>• Follow-up inspections</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mt-12 max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl font-bold">Pricing</h2>
          <p className="mt-2 text-gray-600">Transparent pricing — no hidden fees. Call us for custom quotes on large properties.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border shadow-sm">
              <div className="text-sm uppercase text-gray-500">Starter</div>
              <div className="text-2xl font-semibold mt-2">$29</div>
              <div className="text-sm text-gray-600">per bin — one-time</div>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>• High-pressure wash</li>
                <li>• Deodorize</li>
              </ul>
              <div className="mt-6">
                <a href="#booking" className="inline-block px-4 py-2 rounded-full border">Book</a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border shadow-md transform scale-102">
              <div className="text-sm uppercase text-gray-500">Premium</div>
              <div className="text-2xl font-semibold mt-2">$49</div>
              <div className="text-sm text-gray-600">per bin — includes sanitizing</div>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>• Deep-clean & sanitize</li>
                <li>• Odor neutralization</li>
                <li>• Priority scheduling</li>
              </ul>
              <div className="mt-6">
                <a href="#booking" className="inline-block px-4 py-2 rounded-full bg-green-600 text-white">Book Premium</a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border shadow-sm">
              <div className="text-sm uppercase text-gray-500">Commercial</div>
              <div className="text-2xl font-semibold mt-2">Custom</div>
              <div className="text-sm text-gray-600">Contact for volume pricing</div>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>• Custom recurring plans</li>
                <li>• Multi-site servicing</li>
                <li>• Reporting & audits</li>
              </ul>
              <div className="mt-6">
                <a href="tel:4252441310" className="inline-block px-4 py-2 rounded-full border">Call to Quote</a>
              </div>
            </div>
          </div>
        </section>

        {/* Booking form + Sidebar info */}
        <section id="booking" className="mt-16 bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold">Online Booking</h2>
              <p className="mt-2 text-gray-600">Request a booking and we'll call or email to confirm the appointment slot. For instant scheduling integrate Calendly or a bookings API.</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4 bg-gray-50 p-6 rounded-2xl border">
                {error && <div className="text-red-600">{error}</div>}
                {success && <div className="text-green-600">{success.message}</div>}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input name="name" value={booking.name} onChange={handleChange} placeholder="Full name" className="p-3 rounded-md border" />
                  <input name="phone" value={booking.phone} onChange={handleChange} placeholder="Phone" className="p-3 rounded-md border" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input name="email" value={booking.email} onChange={handleChange} placeholder="Email (optional)" className="p-3 rounded-md border" />
                  <input name="address" value={booking.address} onChange={handleChange} placeholder="Service address (Everett, WA)" className="p-3 rounded-md border" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input name="date" value={booking.date} onChange={handleChange} type="date" className="p-3 rounded-md border" />
                  <input name="time" value={booking.time} onChange={handleChange} type="time" className="p-3 rounded-md border" />
                  <select name="frequency" value={booking.frequency} onChange={handleChange} className="p-3 rounded-md border">
                    <option value="one-time">One-time</option>
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>

                <textarea name="notes" value={booking.notes} onChange={handleChange} placeholder="Notes (bin count, special instructions)" className="w-full p-3 rounded-md border" rows={4} />

                <div className="flex items-center gap-4">
                  <button type="submit" disabled={submitting} className="px-6 py-3 rounded-full bg-green-600 text-white font-medium shadow">{submitting ? 'Sending...' : 'Request Booking'}</button>
                  <div className="text-sm text-gray-600">We will contact you to confirm and collect payment if necessary.</div>
                </div>
              </form>

              <div className="mt-8 text-sm text-gray-600">
                <strong>Note:</strong> To enable instant booking and payments consider integrating Calendly (for slots), Stripe (for payments) and a small serverless function to create orders and send confirmations.
              </div>
            </div>

            <aside className="p-6 rounded-2xl border bg-white shadow-sm">
              <div className="text-sm text-gray-500">Need help?</div>
              <div className="mt-2 font-medium">Call us at <a href="tel:4252441310" className="text-green-600">425‑244‑1310</a></div>
              <div className="mt-4 text-gray-600">Service area: Everett, WA. We cover nearby neighborhoods — message or call for exact boundaries.</div>

              <div className="mt-6">
                <div className="text-xs text-gray-500">Business hours</div>
                <div className="mt-1 text-gray-700">Mon–Sat: 8:00 AM – 6:00 PM</div>
              </div>

              <div className="mt-6">
                <div className="text-xs text-gray-500">Payment</div>
                <div className="mt-1 text-gray-700">Card on file, invoice, or pay on service (cash/venmo/stripe)</div>
              </div>
            </aside>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="mt-12 max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl font-bold">Gallery</h2>
          <p className="mt-2 text-gray-600">Before & after photos — showing the difference a professional cleaning makes.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Replace these placeholder images with your photos */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-sm bg-gray-100 h-40 flex items-center justify-center text-gray-400">Photo {i + 1}</div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="mt-16 bg-white py-12">
          <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold">What customers say</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <blockquote className="p-6 rounded-2xl border bg-gray-50">
                "Evergreen Cleaners totally transformed our bins — no smell and great communication. Highly recommend!"
                <div className="mt-4 text-sm text-gray-500">— Jamie, Everett</div>
              </blockquote>

              <blockquote className="p-6 rounded-2xl border bg-gray-50">
                "Professional and on time. The team left everything neat and even re-positioned the bins for us."
                <div className="mt-4 text-sm text-gray-500">— Mark, Residential HOA</div>
              </blockquote>

              <blockquote className="p-6 rounded-2xl border bg-gray-50">
                "Great for our retail location — regular cleanings keep our dumpster area presentable."
                <div className="mt-4 text-sm text-gray-500">— Sarah, Business Owner</div>
              </blockquote>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-16 max-w-6xl mx-auto px-6 md:px-8 lg:px-12 pb-20">
          <h2 className="text-3xl font-bold">About Evergreen Cleaners</h2>
          <p className="mt-2 text-gray-600">Luxury-focused bin cleaning company serving Everett, WA. We combine high-performance equipment with eco-friendly cleaning solutions and exceptional customer service.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <ul className="space-y-3 text-gray-700">
                <li>• Licensed & Insured</li>
                <li>• Green cleaning products</li>
                <li>• Fully trained, background-checked technicians</li>
                <li>• Satisfaction guarantee</li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md bg-gray-100 h-48 flex items-center justify-center text-gray-400">Team photo</div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 my-16">
          <div className="rounded-2xl p-8 bg-gradient-to-r from-white to-gray-50 border shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xl font-semibold">Ready for a cleaner, fresher bin?</div>
              <div className="text-gray-600 mt-1">Schedule your first premium cleaning today. Serving Everett, WA.</div>
            </div>

            <div className="flex gap-4">
              <a href="#booking" className="px-6 py-3 rounded-full bg-green-600 text-white font-medium">Book Online</a>
              <a href="tel:4252441310" className="px-6 py-3 rounded-full border">Call Us</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/60 border-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-semibold">Evergreen Cleaners</div>
            <div className="text-sm text-gray-600">Serving Everett, WA • <a href="tel:4252441310">425‑244‑1310</a></div>
          </div>

          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Evergreen Cleaners. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
