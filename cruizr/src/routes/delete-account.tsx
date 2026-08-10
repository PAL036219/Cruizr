import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: [
      { title: "Delete Account Request — CRUIZR" },
      { name: "description", content: "How to request deletion of your CRUIZR account and associated personal data." },
      { property: "og:title", content: "Delete Account Request — CRUIZR" },
      { property: "og:description", content: "Learn how to request deletion of your CRUIZR profile and account data." },
      { property: "og:url", content: "https://www.cruizr.in/delete-account" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Delete Account Request — CRUIZR" },
    ],
    links: [{ rel: "canonical", href: "https://www.cruizr.in/delete-account" }],
  }),
  component: DeleteAccountPage,
});

function DeleteAccountPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20 md:px-8 md:py-28">
      <h1 className="font-heading text-4xl font-black md:text-5xl">Account & Data Deletion Request</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: August 11, 2026</p>

      <div className="mt-10 space-y-6 [&_h2]:font-heading [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_li]:mt-2">
        <p>
          At <strong>CRUIZR</strong>, we respect your privacy and give you full control over your personal data. Below are the steps you can take to permanently delete your CRUIZR account and all associated personal data.
        </p>

        <h2>Method 1: Delete Directly Inside the CRUIZR Mobile App</h2>
        <p>You can delete your account and all data instantly within the CRUIZR mobile application:</p>
        <ul>
          <li>Open the <strong>CRUIZR</strong> app on your device and log in.</li>
          <li>Navigate to your <strong>Profile Tab</strong>.</li>
          <li>Tap on <strong>Settings ⚙️</strong>.</li>
          <li>Scroll down and tap <strong>Delete Account 🗑️</strong>.</li>
          <li>Confirm deletion. Your account and profile will be deleted immediately.</li>
        </ul>

        <h2>Method 2: Request Deletion via Email</h2>
        <p>
          If you no longer have access to the mobile app or have uninstalled it, you can request account deletion via email:
        </p>
        <ul>
          <li>Send an email to <a href="mailto:abhishek@cruizr.in" className="text-[var(--orange)] underline font-semibold">abhishek@cruizr.in</a> or <a href="mailto:pal036219@gmail.com" className="text-[var(--orange)] underline font-semibold">pal036219@gmail.com</a>.</li>
          <li>Use the subject line: <strong>CRUIZR Account Deletion Request</strong>.</li>
          <li>Include the registered email address associated with your account.</li>
        </ul>

        <h2>Data Retention & Deletion Policy</h2>
        <p>
          When your account deletion request is processed:
        </p>
        <ul>
          <li><strong>Permanently Deleted:</strong> Profile information (Name, Email, Phone, Experience level, Bike details), Ride history, Location logs, and Social posts/comments are permanently purged.</li>
          <li><strong>Retention Timeframe:</strong> Account deletion requests sent via email are processed within <strong>48 hours</strong>. In-app deletion is instant.</li>
          <li><strong>No Retained Data:</strong> No personal identifiers are retained after account deletion.</li>
        </ul>

        <h2>Questions?</h2>
        <p>
          If you have any questions regarding your data privacy or account deletion, please contact us at <a href="mailto:abhishek@cruizr.in" className="text-[var(--orange)] underline">abhishek@cruizr.in</a>.
        </p>
      </div>
    </article>
  );
}
