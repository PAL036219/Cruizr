import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — CRUIZR" },
      { name: "description", content: "The terms governing your use of the CRUIZR app and website." },
      { property: "og:title", content: "Terms of Service — CRUIZR" },
      { property: "og:description", content: "CRUIZR terms of service." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20 md:px-8 md:py-28">
      <h1 className="font-heading text-4xl font-black md:text-5xl">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="mt-10 space-y-6 [&_h2]:font-heading [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_li]:mt-2">
        <p>
          These Terms of Service ("Terms") govern your access to and use of CRUIZR (the "Service").
          By using the Service, you agree to these Terms.
        </p>

        <h2>1. Eligibility</h2>
        <p>You must be at least 16 years old and legally able to enter into a contract to use CRUIZR.</p>

        <h2>2. Accounts</h2>
        <ul>
          <li>You are responsible for keeping your account credentials secure.</li>
          <li>Provide accurate, current information (real name, valid contact, honest bike/experience details).</li>
          <li>One account per person. Impersonation is prohibited.</li>
        </ul>

        <h2>3. User conduct</h2>
        <ul>
          <li>No harassment, hate speech, threats, or discrimination.</li>
          <li>No commercial activity, spam, or unauthorized promotion.</li>
          <li>No sharing another user's location or personal data without consent.</li>
          <li>Respect ride organizers and follow reasonable group rules.</li>
        </ul>

        <h2>4. Riding safety — important disclaimer</h2>
        <p>
          CRUIZR is a discovery and coordination tool. Riding a motorcycle or bicycle involves inherent
          and serious risks. You are solely responsible for your own safety, your equipment, obeying
          traffic laws, wearing appropriate gear, and making judgment calls on the road. CRUIZR does
          not vet riding skill and is not liable for accidents, injuries, or property damage arising
          from participation in rides.
        </p>

        <h2>5. Content</h2>
        <p>
          You retain ownership of content you post but grant CRUIZR a worldwide, royalty-free license
          to host, display, and distribute that content within the Service. Don't post content you
          don't own the rights to.
        </p>

        <h2>6. Intellectual property</h2>
        <p>
          The CRUIZR name, logo, app, and website are our property. You may not copy, modify, or
          reverse-engineer any part of the Service.
        </p>

        <h2>7. Termination</h2>
        <p>
          We may suspend or terminate your account for any violation of these Terms or for behavior
          that endangers other users. You may delete your account at any time.
        </p>

        <h2>8. Disclaimer & limitation of liability</h2>
        <p>
          The Service is provided "as is" without warranties of any kind. To the maximum extent
          permitted by law, CRUIZR is not liable for any indirect, incidental, or consequential
          damages arising from your use of the Service.
        </p>

        <h2>9. Changes</h2>
        <p>We may update these Terms and will notify you of material changes.</p>

        <h2>10. Governing law</h2>
        <p>These Terms are governed by the laws of the jurisdiction where CRUIZR is established.</p>

        <h2>Contact</h2>
        <p>Questions? Email <a href="mailto:support@cruizr.app" className="text-[var(--orange)] underline">support@cruizr.app</a>.</p>

        <p className="mt-10 text-xs italic">
          This placeholder is provided for informational purposes only and is not legal advice.
          Have counsel review before launch.
        </p>
      </div>
    </article>
  );
}
