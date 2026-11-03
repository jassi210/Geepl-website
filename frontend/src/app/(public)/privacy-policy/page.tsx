import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy | GoodEnough Energy',
  description: 'GoodEnough Energy privacy policy and enterprise data handling practices.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        badge="Legal & Compliance"
        title="Privacy Policy"
        subtitle="How GoodEnough Energy Private Limited collects, utilizes, and protects information submitted through our digital platforms."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Information We Collect</h2>
            <p>
              When you submit a technical inquiry, request a BESS sizing calculation, or schedule a tour of our Greater Noida Gigafactory, we collect personal and corporate details including your name, business email address, phone number, organization name, and electrical power parameters.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Use of Information</h2>
            <p>
              The information you provide is used exclusively by our engineering and business development teams to prepare technical proposals, single-line diagram (SLD) reviews, feasibility simulations, and respond to commercial inquiries. We do not sell or lease your information to any third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Telemetry & Data Security</h2>
            <p>
              For deployed StorEDGE systems with active remote monitoring agreements, system telemetry data (e.g. voltage, cell temperature, frequency) is encrypted using enterprise-grade TLS encryption and transmitted securely to our Network Operations Center.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Contacting Us Regarding Privacy</h2>
            <p>
              If you have any questions or wish to request data deletion, contact us at:{' '}
              <a href="mailto:connect@goodenough.energy" className="text-emerald-700 font-semibold underline">
                connect@goodenough.energy
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

