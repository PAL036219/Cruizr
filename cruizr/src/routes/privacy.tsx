import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — CRUIZR" },
      { name: "description", content: "Read CRUIZR's privacy policy to understand how we collect, use, and protect your personal data." },
      { property: "og:title", content: "Privacy Policy — CRUIZR" },
      { property: "og:description", content: "Your privacy matters. Learn how CRUIZR handles your data." },
      { property: "og:url", content: "https://cruizr.in/privacy" },
      { property: "og:image", content: "https://cruizr.in/assets/hero-riders.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Privacy Policy — CRUIZR" },
      { name: "twitter:description", content: "Your privacy matters. Learn how CRUIZR handles your data." },
      { name: "twitter:image", content: "https://cruizr.in/assets/hero-riders.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://cruizr.in/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20 md:px-8 md:py-28">
      <h1 className="font-heading text-4xl font-black md:text-5xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: July 06, 2026</p>

      <div className="mt-10 space-y-6 [&_h2]:font-heading [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_li]:mt-2">
        <p>
          This Privacy Notice for <strong>CRUIZR</strong> ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
        </p>

        <ul>
          <li>Download and use our mobile application (CRUIZR) or any other application of ours that links to this Privacy Notice</li>
          <li>Engage with us in other related ways, including any marketing or events</li>
        </ul>

        <p>
          <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:abhishek@cruizr.in" className="text-[var(--orange)] underline">abhishek@cruizr.in</a>.
        </p>

        <h2>Summary of Key Points</h2>
        <p>
          <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.
        </p>

        <p>
          <strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.
        </p>

        <p>
          <strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.
        </p>

        <p>
          <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
        </p>

        <p>
          <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.
        </p>

        <p>
          <strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
        </p>

        <p>
          <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
        </p>

        <p>
          <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
        </p>

        <h2>1. What Information Do We Collect?</h2>

        <h3>Personal information you disclose to us</h3>
        <p>
          <strong>In Short:</strong> We collect personal information that you provide to us.
        </p>
        <p>
          We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
        </p>
        <p><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
        <ul>
          <li>Names</li>
          <li>Email addresses</li>
          <li>Phone numbers</li>
          <li>Mailing addresses</li>
          <li>Usernames</li>
          <li>Passwords</li>
        </ul>

        <p><strong>Sensitive Information.</strong> We do not process sensitive information.</p>

        <p><strong>Social Media Login Data.</strong> We may provide you with the option to register with us using your existing social media account details. If you choose to register in this way, we will collect certain profile information about you from the social media provider.</p>

        <h3>Information automatically collected</h3>
        <p>
          <strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
        </p>
        <p>
          We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information.
        </p>
        <p>The information we collect includes:</p>
        <ul>
          <li><strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services.</li>
          <li><strong>Location Data.</strong> We collect location data such as information about your device's location, which can be either precise or imprecise. You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device.</li>
        </ul>

        <h2>2. How Do We Process Your Information?</h2>
        <p>
          <strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.
        </p>
        <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
        <ul>
          <li><strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
          <li><strong>To enable user-to-user communications.</strong> We may process your information if you choose to use any of our offerings that allow for communication with another user.</li>
          <li><strong>To administer prize draws and competitions.</strong> We may process your information to administer prize draws and competitions.</li>
          <li><strong>To evaluate and improve our Services, products, marketing, and your experience.</strong> We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.</li>
        </ul>

        <h2>3. When and With Whom Do We Share Your Personal Information?</h2>
        <p>
          <strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.
        </p>
        <p>We may need to share your personal information in the following situations:</p>
        <ul>
          <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          <li><strong>When we use Google Maps Platform APIs.</strong> We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API). Google Maps uses GPS, Wi-Fi, and cell towers to estimate your location. This data helps Google Maps provide directions, but it is not always perfectly precise.</li>
          <li><strong>Other Users.</strong> When you share personal information (for example, by posting comments, contributions, or other content to the Services) or otherwise interact with public areas of the Services, such personal information may be viewed by all users and may be publicly made available outside the Services in perpetuity.</li>
        </ul>

        <h2>4. What Is Our Stance on Third-Party Websites?</h2>
        <p>
          <strong>In Short:</strong> We are not responsible for the safety of any information that you share with third parties that we may link to or who advertise on our Services, but are not affiliated with, our Services.
        </p>

        <h2>5. Do We Use Cookies and Other Tracking Technologies?</h2>
        <p>
          <strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.
        </p>
        <p>
          We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
        </p>
        <p>
          We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising.
        </p>

        <h2>6. How Do We Handle Your Social Logins?</h2>
        <p>
          <strong>In Short:</strong> If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.
        </p>
        <p>
          Our Services offer you the ability to register and log in using your third-party social media account details. Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture.
        </p>

        <h2>7. How Long Do We Keep Your Information?</h2>
        <p>
          <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.
        </p>
        <p>
          We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
        </p>

        <h2>8. How Do We Keep Your Information Safe?</h2>
        <p>
          <strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.
        </p>
        <p>
          We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
        </p>

        <h2>9. What Are Your Privacy Rights?</h2>
        <p>
          <strong>In Short:</strong> You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.
        </p>

        <p><strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us.</p>

        <p><strong>Opting out of marketing and promotional communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by contacting us.</p>

        <h3>Account Information</h3>
        <p>
          If you would at any time like to review or change the information in your account or terminate your account, you can:
        </p>
        <ul>
          <li>Log in to your account settings and update your user account.</li>
          <li>Contact us using the contact information provided.</li>
        </ul>
        <p>
          Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
        </p>
        <p>If you have questions or comments about your privacy rights, you may email us at <a href="mailto:abhishek@cruizr.in" className="text-[var(--orange)] underline">abhishek@cruizr.in</a>.</p>

        <h2>10. Controls for Do-Not-Track Features</h2>
        <p>
          Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
        </p>

        <h2>11. Do We Make Updates to This Notice?</h2>
        <p>
          <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
        </p>
        <p>
          We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
        </p>

        <h2>12. How Can You Contact Us About This Notice?</h2>
        <p>
          If you have questions or comments about this notice, you may contact us by post at:
        </p>
        <p className="text-foreground font-medium">
          CRUIZR<br />
          jain nagar 3414 A<br />
          New Delhi, Delhi 110081<br />
          India
        </p>
        <p>Or email us at <a href="mailto:abhishek@cruizr.in" className="text-[var(--orange)] underline">abhishek@cruizr.in</a>.</p>

        <h2>13. How Can You Review, Update, or Delete the Data We Collect From You?</h2>
        <p>
          Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please contact us at <a href="mailto:abhishek@cruizr.in" className="text-[var(--orange)] underline">abhishek@cruizr.in</a>.
        </p>
      </div>
    </article>
  );
}