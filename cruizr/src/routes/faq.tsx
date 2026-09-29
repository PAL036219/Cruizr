import { createFileRoute } from "@tanstack/react-router";
import { HeadContent } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { SectionHeading } from "../components/SectionHeading";

// Add new questions and answers to this array!
// They will automatically appear on the page AND in the SEO data for AI bots.
// Search "TODO" and confirm each one against the live app before publishing.

const faqs = [
  // ---------- ABOUT CRUIZR ----------
  {
    question: "What is CRUIZR?",
    answer:
      "CRUIZR is a community app built for motorcycle riders in India. It helps you find rides, connect with riders and clubs, talk to your group with a built-in intercom, track trips live, and stay safe with SOS features.",
  },
  {
    question: "Is CRUIZR free to use?",
    answer:
      "Yes, you can download CRUIZR and use its core features for free.",
  },
  {
    question: "Is CRUIZR available on Android and iOS?",
    answer:
      "CRUIZR is available on Android and iOS.",
  },
  {
    question: "Which cities in India does CRUIZR support?",
    answer:
      "CRUIZR works anywhere in India where you have a phone signal. Ride and community activity is strongest in big riding hubs, and it grows as more riders join in your city.",
  },
  {
    question: "Who built CRUIZR?",
    answer:
      "CRUIZR is built by an independent Indian founder who is passionate about riding and wanted a single app for the riding community.",
  },
  {
    question: "Do I need a motorcycle to join CRUIZR?",
    answer:
      "You can join and explore the community without owning a bike, but the app is designed for riders and pillion riders who want to take part in rides.",
  },
  {
    question: "How do I sign up or create a profile?",
    answer:
      "Download the app, sign up with your details, and set up your rider profile with your name, city, and motorcycle. It takes only a couple of minutes.",
  },
  {
    question: "Is my personal data and location safe?",
    answer:
      "We take your privacy seriously. Your live location is shared only with the riders or contacts you choose, and we never sell your personal data. See our Privacy Policy for full details.",
  },
  {
    question: "Can I delete my account and data?",
    answer:
      "Yes. You can request deletion of your account and personal data at any time from the app settings or by contacting our support team.",
  },
  {
    question: "How do I contact support or report a bug?",
    answer:
      "You can reach us through the Contact page on this website or from the support option inside the app.",
  },
  {
    question: "Does CRUIZR work in low network areas?",
    answer:
      "Features like live tracking, intercom, and SOS need a mobile data connection. In low network areas they may be limited until your signal returns. We recommend downloading maps and sharing your route before heading into remote areas.",
  },
  {
    question: "Does the app drain my phone battery?",
    answer:
      "Any app that uses GPS and live audio uses more battery. Keep your phone charged, use a power bank or a bike charger on long rides, and turn on battery saver settings when you can.",
  },

  // ---------- RIDES AND COMMUNITY ----------
  {
    question: "How can I find local motorcycle rides near me?",
    answer:
      "Open CRUIZR, set your city, and browse upcoming rides created by riders and clubs near you. You can join with a single tap or create your own ride.",
  },
  {
    question: "Can I join a ride as a beginner?",
    answer:
      "Yes. Many rides on CRUIZR welcome new riders. Check the ride details for pace, distance, and difficulty, and message the ride host if you have questions.",
  },
  {
    question: "How do I create and host my own ride?",
    answer:
      "Tap the create ride option, add the route, date, meeting point, and ride details, then invite riders or publish it to the community.",
  },
  {
    question: "How do I find riders with the same bike, like Royal Enfield, KTM, or Dominar?",
    answer:
      "Add your motorcycle to your profile and browse groups and riders by bike brand or riding style. You will find communities for Royal Enfield, KTM, Bajaj, Honda, Yamaha, BMW, and more.",
  },
  {
    question: "How do I make or join a motorcycle club?",
    answer:
      "You can create a club profile in CRUIZR, invite members, organize club rides, and manage your community. To join a club, search for it and send a request or accept an invite.",
  },
  {
    question: "Can I invite friends who are not on the app?",
    answer:
      "Yes. Share an invite link with friends so they can download CRUIZR and join your ride or club.",
  },
  {
    question: "How do I report or block a rider?",
    answer:
      "Open the rider's profile and use the report or block option. Our team reviews reports to keep the community respectful and safe.",
  },
  {
    question: "Are rides and riders verified?",
    answer:
      "Riders create their own profiles and rides. We recommend checking a host's profile and ride history, and meeting in public places before joining rides with people you do not know.",
  },
  {
    question: "Can women riders find women-only groups or rides?",
    answer:
      "Yes. Women riders can create or join women-only groups and rides, so they can ride in a comfortable, supportive community.",
  },

  // ---------- INTERCOM ----------
  {
    question: "Is there a free intercom app for bikers?",
    answer:
      "Yes, CRUIZR includes a free built-in motorcycle intercom that lets you talk hands-free with your riding group using just your phone and a standard Bluetooth headset, with no expensive extra hardware.",
  },
  {
    question: "Which Bluetooth headsets work with CRUIZR?",
    answer:
      "Any standard Bluetooth headset or helmet headset that pairs with your phone as an audio device should work. Audio quality depends on your headset.",
  },
  {
    question: "Do I need a Sena or Cardo intercom to use CRUIZR?",
    answer:
      "No. You do not need a Sena, Cardo, or any dedicated intercom device. Your phone and a Bluetooth headset are enough.",
  },
  {
    question: "How many riders can talk at once on the intercom?",
    answer:
      "You can talk with your whole ride group in a shared channel.",
  },
  {
    question: "What is the range of the CRUIZR intercom?",
    answer:
      "CRUIZR's intercom works over the internet, not Bluetooth radio, so there is no fixed distance limit. It works as long as every rider has a stable mobile data connection.",
  },
  {
    question: "Does the intercom work on mobile data only?",
    answer:
      "Yes. The intercom needs a mobile data or Wi-Fi connection on each rider's phone.",
  },
  {
    question: "Can I listen to music or navigation while using the intercom?",
    answer:
      "You can use navigation voice guidance alongside the intercom on most phones. Music and audio mixing depends on your phone and headset.",
  },
  {
    question: "Does the intercom work with my helmet's built-in speakers?",
    answer:
      "Yes, if your helmet has Bluetooth speakers and a mic that pair with your phone, they will work with CRUIZR.",
  },
  {
    question: "Does wind noise affect intercom quality?",
    answer:
      "Wind noise can affect any rider audio. A good headset with a noise-cancelling mic, a well-fitted helmet, and a windscreen for the mic will give the best results.",
  },
  {
    question: "Does the intercom use a lot of data?",
    answer:
      "Voice calls use a modest amount of data. Long rides add up, so we recommend a decent mobile data plan.",
  },

  // ---------- NAVIGATION, TRACKING, TRIP PLANNING ----------
  {
    question: "Does CRUIZR work as a motorcycle trip tracker and route planner?",
    answer:
      "Yes. You can plan routes, track your group's real-time location on the map, and save your trip history.",
  },
  {
    question: "Can I plan multi-day motorcycle trips?",
    answer:
      "Yes. Plan your route, add stops for each day, and share the plan with your group so everyone stays on the same page.",
  },
  {
    question: "Can my group see my live location during a ride?",
    answer:
      "Yes. When you join a ride, your riding group can see your live location on the map so nobody gets lost.",
  },
  {
    question: "Can I share my live location with family?",
    answer:
      "Yes. You can share your live location with trusted contacts so family and friends know where you are on a trip.",
  },
  {
    question: "How do I save or share my trip history?",
    answer:
      "Your completed rides are saved in your profile. You can revisit them anytime or share them with your riding friends.",
  },
  {
    question: "Does CRUIZR show fuel stops, dhabas, and service centres on the route?",
    answer:
      "You can find useful stops along your route.",
  },
  {
    question: "Can CRUIZR alert me if a rider gets separated from the group?",
    answer:
      "Live group tracking lets everyone see where each rider is, so you can quickly spot who has fallen behind.",
  },
  {
    question: "Does CRUIZR track speed, distance, and ride stats?",
    answer:
      "Yes. CRUIZR records your ride distance and time so you can look back on every trip.",
  },

  // ---------- SAFETY AND SOS ----------
  {
    question: "What happens if a rider crashes or has an emergency?",
    answer:
      "CRUIZR works as a biker SOS app. It has crash detection and an emergency SOS button that alerts your emergency contacts and your riding group with your exact GPS location.",
  },
  {
    question: "How does the SOS button work?",
    answer:
      "Tap the SOS button in an emergency. CRUIZR immediately sends your live GPS location to your emergency contacts and your current riding group.",
  },
  {
    question: "Who gets alerted in an emergency?",
    answer:
      "Your saved emergency contacts and the riders in your current group receive the alert.",
  },
  {
    question: "Does crash detection give false alarms?",
    answer:
      "Crash detection is designed to spot real impacts, but rough roads or dropping your phone can sometimes trigger it. You get a chance to cancel the alert before it is sent.",
  },
  {
    question: "Can I add emergency contacts?",
    answer:
      "Yes. Add your emergency contacts in the app settings so they are ready before you ride.",
  },

  // ---------- GENERAL MOTORCYCLE QUESTIONS ----------
  {
    question: "Which motorcycles are best suited for the app?",
    answer:
      "CRUIZR is for every rider. Whether you ride a Bajaj Dominar, Pulsar, or Avenger, a BMW Motorrad, Royal Enfield, KTM, or any other cruiser, sports, or touring bike, you will find groups and rides that match your style.",
  },
  {
    question: "Which motorcycle is best for long-distance touring in India?",
    answer:
      "Popular touring choices in India include the Royal Enfield Himalayan and Classic 350, Bajaj Dominar 400, KTM Adventure series, Honda CB350, and BMW G 310 GS. The best one for you depends on comfort, budget, weight, and service network.",
  },
  {
    question: "What should I carry on a multi-day motorcycle ride?",
    answer:
      "Carry your documents, a basic tool kit, puncture repair kit, first-aid kit, power bank, rain gear, spare clothes, water, and some cash. Pack light and secure everything well.",
  },
  {
    question: "What riding gear is essential?",
    answer:
      "At minimum, wear an ISI or DOT/ECE certified full-face helmet, a riding jacket with armor, gloves, riding pants or knee guards, and proper riding boots.",
  },
  {
    question: "How do I ride safely in a group?",
    answer:
      "Agree on the route and stops before starting, keep a staggered formation, keep a safe distance, avoid overtaking within the group, and use a sweep rider at the back. Keep a steady pace that suits the slowest rider.",
  },
  {
    question: "What are common group riding hand signals?",
    answer:
      "Common signals include a raised fist to stop, an open hand pointing down to slow down, a pointed arm for road hazards, and a tap on the helmet for a break. Agree on signals with your group before you ride.",
  },
  {
    question: "How do I prepare my bike for a long trip?",
    answer:
      "Check tyre pressure and tread, brakes, chain tension and lubrication, engine oil, coolant, lights, battery, and fuel range. A full service before a long trip is a good idea.",
  },
  {
    question: "How often should I service my motorcycle?",
    answer:
      "Follow your bike's service schedule, usually every 3,000 to 6,000 km or as your manual recommends. Service it before long trips too.",
  },
  {
    question: "Which Bluetooth helmet or headset is best for riders?",
    answer:
      "Look for a comfortable fit, good wind noise reduction, long battery life, and water resistance. Any Bluetooth headset that pairs with your phone will work with CRUIZR.",
  },
  {
    question: "Do I need special documents to ride between states?",
    answer:
      "Carry your driving licence, registration certificate (RC), valid insurance, and PUC certificate. Digital copies on DigiLocker are generally accepted, but keeping physical copies is safer. Some states may have extra rules, so check before you go.",
  },
  {
    question: "How do I ride safely in the rain or on ghat roads?",
    answer:
      "Slow down, avoid sudden braking or acceleration, keep extra distance, and watch for oil, gravel, and wet leaves. On ghat roads, use engine braking on descents, stay in your lane at blind turns, and avoid overtaking on curves.",
  },
  {
    question: "What are basic group ride etiquette rules?",
    answer:
      "Be on time, start with a full tank, follow the ride captain, do not race, respect local traffic rules, look out for other riders, and tell the group before leaving or stopping.",
  },

  // ---------- BUSINESS, CLUBS AND PARTNERSHIPS ----------
  {
    question: "What is the best app for motorcycle riders in India?",
    answer:
      "CRUIZR brings rides, community, free intercom, live group tracking, and SOS safety into one app built for Indian riders.",
  },
  {
    question: "Can my riding club or brand partner with CRUIZR?",
    answer:
      "Yes. We are open to partnerships with riding clubs, gear brands, and event organizers. Contact us through the Contact page to talk about collaborating.",
  },
  {
    question: "Can I list my motorcycle event on CRUIZR?",
    answer:
      "Yes. Create your event or ride in the app to share it with the riding community. For bigger events, get in touch and we can help.",
  },
  {
    question: "Does CRUIZR have a premium plan or ads?",
    answer:
      "CRUIZR is free to use and it have also pro and expedition plan with more features. For more details visit our pricing page.",
  },
];


export const Route = createFileRoute("/faq")({
  component: FAQPage,
  head: () => ({
    meta: [
      {
        title: "Frequently Asked Questions | CRUIZR Motorcycle App",
      },
      {
        name: "description",
        content:
          "Got questions about CRUIZR? Learn how to find riding partners, use the free intercom, track motorcycle trips, and more on India's #1 motorcycle app.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://www.cruizr.in/faq/#faq",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }),
      },
    ],
  }),
});

function FAQPage() {
  return (
    <>
      <HeadContent />
      <div className="mx-auto max-w-4xl px-4 py-24 md:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about CRUIZR"

        />
        <div className="mt-12 text-left">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-white/10 bg-white/5 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}
