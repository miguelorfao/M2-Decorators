import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../Context";

function PrivatePolicy() {
  const { companyName, companyEmail, companyNumber, address } = useAppContext();
  const effectiveDate = "18 August, 2025";
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            <div className="logo">
              M <sup>2</sup> Decorators — Review Policy & Disclaimer
            </div>{" "}
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="rounded-2xl px-4 py-2 text-sm font-medium border border-gray-300 hover:border-gray-400 hover:bg-gray-50 shadow-sm"
              aria-label="Print this Review Policy"
            >
              Print
            </button>
            <Link to={"/"}>Back</Link>
          </div>
        </div>
      </header>

      {/* Body */}
      <section className="mx-auto max-w-4xl px-6 py-8 text-black">
        <div className="mb-6 text-sm text-gray-600">
          Effective date: {effectiveDate}
        </div>

        <div className="grid gap-6">
          {/* Purpose */}
          <article className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-3">
              1. Purpose of Reviews
            </h2>
            <p>
              We publish customer reviews to help visitors understand the
              quality of our decorating services and to showcase authentic
              customer experiences that support informed decisions.
            </p>
          </article>

          {/* Types of Reviews */}
          <article className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-3">
              2. Types of Reviews Accepted
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Reviews submitted by genuine customers who have used our
                services.
              </li>
              <li>Written feedback (short testimonials) and star ratings.</li>
              <li>Honest experiences—positive or constructive—are welcome.</li>
            </ul>
          </article>

          {/* Content Guidelines */}
          <article className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-3">
              3. Review Content Guidelines
            </h2>
            <p className="mb-3">
              To maintain quality and professionalism, reviews must:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Be relevant to your experience (craftsmanship, materials,
                timeliness, communication).
              </li>
              <li>
                Be truthful, respectful, and avoid defamatory or unverified
                claims.
              </li>
              <li>
                Exclude personal/sensitive data (addresses, phone numbers,
                emails, health information).
              </li>
              <li>
                Be lawful and polite—no hate speech, harassment, or
                discriminatory language.
              </li>
              <li>
                Be original (not copied); keep it reasonably concise (suggested
                under 300 words).
              </li>
            </ul>
          </article>

          {/* Moderation Rights */}
          <article className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-3">4. Moderation Rights</h2>
            <p className="mb-3">
              {companyName} reserves the right to review, edit, or remove
              reviews that:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Violate the content guidelines above.</li>
              <li>Contain profanity, explicit or illegal content.</li>
              <li>Appear to be spam, promotional, or irrelevant.</li>
              <li>Seem fraudulent or unrelated to genuine experiences.</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              Edits are limited to minor clarity, spelling, or formatting; we
              will not change the meaning of your review.
            </p>
          </article>

          {/* Publication & Use */}
          <article className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-3">5. Publication & Use</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                By submitting a review, you consent to its public display on our
                website.
              </li>
              <li>
                We may display your first name and/or initial. You may request
                anonymity.
              </li>
              <li>
                We may reuse your review in marketing (e.g., social media,
                print) without additional permission; we do not sell reviews to
                third parties.
              </li>
            </ul>
          </article>

          {/* Editing/Removal */}
          <article className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-3">6. Editing & Removal</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Minor edits may be made for clarity, spelling, or formatting.
              </li>
              <li>
                If you request changes or removal, we’ll act promptly;
                backups/caches may retain prior versions.
              </li>
            </ul>
          </article>

          {/* Disclaimer */}
          <article className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-3">7. Disclaimer</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                {companyName} is not responsible for inaccuracies in
                user-submitted reviews.
              </li>
              <li>
                We are not liable for third-party statements posted on our site.
              </li>
              <li>
                We may update this policy at any time. Material changes will be
                highlighted on this page.
              </li>
            </ul>
          </article>

          {/* Contact */}
          <article className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-3">8. Contact</h2>
            <p className="mb-3">
              If you have concerns about a review or this policy, contact us:
            </p>
            <address className="not-italic grid gap-1">
              <div>
                <span className="font-medium">Email:</span>{" "}
                <a className="underline" href={`mailto:${companyEmail}`}>
                  {companyEmail}
                </a>
              </div>
              <div>
                <span className="font-medium">Phone:</span>{" "}
                <a className="underline" href={`tel:${companyNumber}`}>
                  {companyNumber}
                </a>
              </div>
              <div>
                <span className="font-medium">Address:</span> {companyName},{" "}
              </div>
            </address>
          </article>

          {/* Legal Note */}
          <article className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <p className="text-sm text-gray-600">
              This policy is provided for general information and does not
              constitute legal advice. For full compliance, consult a qualified
              legal professional in your jurisdiction.
            </p>
          </article>
        </div>

        {/* Footer: Back to top */}
        <div className="mt-8 flex justify-end">
          <a href="#top" className="text-sm underline">
            Back to top
          </a>
        </div>
      </section>

      <footer className="py-8" />
    </main>
  );
}

export default PrivatePolicy;
