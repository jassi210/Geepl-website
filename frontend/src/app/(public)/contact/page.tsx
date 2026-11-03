import type { Metadata } from 'next';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  CheckCircle2,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import ContactForm from '@/components/ui/ContactForm';
import { FadeIn, HoverCard } from '@/components/ui/MotionComponents';

export const metadata: Metadata = {
  title: 'Contact GoodEnough Energy | Gigafactory Greater Noida',
  description:
    'Contact GoodEnough Energy. Connect with our BESS application engineers for project sizing, request a quotation, or schedule a tour of our 7 GWh Greater Noida Gigafactory.',
  openGraph: {
    title: 'Contact GoodEnough Energy | Greater Noida BESS Gigafactory',
    description: 'Get in touch for commercial, industrial, or utility-scale BESS proposals.',
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Connect with GoodEnough"
        title="Let's Power Your Clean Energy Transition"
        subtitle="Whether you are sizing a BESS for a commercial facility, planning a utility solar-plus-storage farm, or booking a technical tour of our Greater Noida Gigafactory, our engineering desk is ready to assist."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      {/* ─── Contact Information Cards ─────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HoverCard>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Gigafactory & HQ</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    F4 B2, Plot No.1, Ecotech VII,<br />
                    Greater Noida Industrial Development Area,<br />
                    Gautam Budh Nagar, Uttar Pradesh - 201310, India
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-emerald-700">
                  Visitors by prior appointment
                </div>
              </div>
            </HoverCard>

            <HoverCard>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Direct Phone Lines</h3>
                  <div className="space-y-2 text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 text-xs">Direct:</span>
                      <a href="tel:+919220038938" className="font-bold hover:text-emerald-700">
                        +91 92200 38938
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 text-xs">Sales:</span>
                      <a href="tel:+919717767796" className="font-bold hover:text-emerald-700">
                        +91 97177 67796
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Mon–Sat, 9:30 AM – 6:30 PM IST
                </div>
              </div>
            </HoverCard>

            <HoverCard>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Electronic Mail</h3>
                  <div className="space-y-2 text-sm text-slate-700">
                    <div>
                      <span className="text-xs text-slate-500 block">General Enquiries:</span>
                      <a
                        href="mailto:connect@goodenough.energy"
                        className="font-bold text-emerald-700 hover:underline"
                      >
                        connect@goodenough.energy
                      </a>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Careers & Talent:</span>
                      <a
                        href="mailto:careers@goodenough.energy"
                        className="font-bold text-slate-900 hover:text-emerald-700 hover:underline"
                      >
                        careers@goodenough.energy
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-emerald-700">
                  Typically replies within 24 business hours
                </div>
              </div>
            </HoverCard>
          </div>
        </div>
      </section>

      {/* ─── Interactive Form & Plant Tour Booking ─────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
              <div className="mb-6">
                <span className="badge badge-success bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider mb-2">
                  Technical Consultation Request
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Tell Us About Your Energy Requirements
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  Fill out the form below. An application engineer will review your single-line diagram and schedule an initial sizing call.
                </p>
              </div>

              <ContactForm />
            </div>

            <div className="lg:col-span-5 space-y-8">
              {/* Plant Tour Invitation */}
              <div className="bg-slate-950 text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Calendar className="w-4 h-4" />
                  VIP Industrial Invitation
                </div>
                <h3 className="text-2xl font-black text-white">
                  Schedule a Greater Noida Gigafactory Tour
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We welcome C&I business owners, EPC partners, DISCOM officials, and renewable IPP developers to witness our automated robotic assembly line, laser welding, and full-power testing bays in person.
                </p>

                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>See cell sorting, robotic laser busbar welding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Inspect StorEDGE liquid cold-plate assemblies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Live demonstration of sub-20ms islanding switchover</span>
                  </li>
                </ul>

                <a
                  href="mailto:connect@goodenough.energy?subject=Request%20for%20Greater%20Noida%20Plant%20Tour"
                  className="btn btn-outline border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 w-full rounded-xl gap-2 font-bold"
                >
                  Request Gigafactory Tour Invitation
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Pan-India Service Network */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200">
                <h4 className="font-bold text-slate-900 text-lg mb-2">
                  Pan-India Field Engineering
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  GoodEnough Energy maintains rapid-response field service hubs across Northern India, Gujarat, Maharashtra, Karnataka, and Tamil Nadu.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-outline border-slate-300 text-slate-700 text-xs">Delhi-NCR</span>
                  <span className="badge badge-outline border-slate-300 text-slate-700 text-xs">Ahmedabad</span>
                  <span className="badge badge-outline border-slate-300 text-slate-700 text-xs">Pune</span>
                  <span className="badge badge-outline border-slate-300 text-slate-700 text-xs">Bengaluru</span>
                  <span className="badge badge-outline border-slate-300 text-slate-700 text-xs">Chennai</span>
                  <span className="badge badge-outline border-slate-300 text-slate-700 text-xs">Hyderabad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

