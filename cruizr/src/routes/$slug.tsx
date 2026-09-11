import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import {
  Compass,
  MapPin,
  Radio,
  ShieldAlert,
  Users,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Bike
} from "lucide-react";
import { WaitlistForm } from "../components/WaitlistForm";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

// Content map for dynamic rendering based on the URL slug
interface PageContent {
  title: string;
  metaTitle: string;
  metaDesc: string;
  metaKeywords: string;
  heroBadge: string;
  headline: string;
  subheadline: string;
  introText: string;
  features: Array<{ title: string; desc: string; icon: string }>;
  ctaTitle: string;
  cityContext?: boolean;
}

const SLUG_CONTENT_MAP: Record<string, PageContent> = {
  // Cities
  "motorcycle-app-delhi": {
    title: "Delhi NCR Biker Community",
    metaTitle: "Best Motorcycle App in Delhi NCR — CRUIZR Biker Network",
    metaDesc: "Discover the best motorcycle app in Delhi NCR. Coordinate weekend rides to Murthal, tracks near Gurgaon, or off-road runs. Stay connected with local Delhi bikers.",
    metaKeywords: "motorcycle riders app Delhi NCR, bike riders app Delhi, motorcycle rides Delhi",
    heroBadge: "Delhi NCR Biker Hub",
    headline: "The Ultimate Companion App for Delhi Biker Clubs",
    subheadline: "Whether cruising to Murthal or navigating Gurgaon trail runs, keep your group connected.",
    introText: "From Noida to Gurgaon, CRUIZR is the preferred platform for motorcyclists in Delhi NCR. Organize weekend club rides, track your crew in real-time, and talk hands-free using our integrated intercom.",
    features: [
      { title: "Delhi Biker Clubs", desc: "Join local groups from South Delhi, Noida, and Gurugram.", icon: "users" },
      { title: "Weekend Routes", desc: "Share popular rides like Leopard Trail or highway runs.", icon: "compass" },
      { title: "Delhi NCR Trackers", desc: "Real-time live map updates for safe group coordination.", icon: "mappin" },
    ],
    ctaTitle: "Ready to stop riding alone in Delhi?",
    cityContext: true,
  },
  "motorcycle-app-bangalore": {
    title: "Bangalore Motorcycle Community",
    metaTitle: "Best Biker App in Bangalore — CRUIZR Ride Sharing & Companion",
    metaDesc: "Join Bangalore's premier bike riding community. Perfect app for weekend breakfast rides to Nandi Hills, Kolar, or offroad trails. Live GPS & intercom.",
    metaKeywords: "motorcycle riders app Bangalore, bike community Bangalore, Nandi Hills bike rides",
    heroBadge: "Bengaluru Biker Network",
    headline: "The Best Motorcycle App in Bangalore",
    subheadline: "Coordinate breakfast runs to Nandi Hills or plan off-road adventures with ease.",
    introText: "Bangalore has one of India's richest riding cultures. CRUIZR connects you with fellow Bangalore motorcyclists who match your pace and style. Never worry about losing the pack on highway curves again.",
    features: [
      { title: "Nandi & Kolar Runs", desc: "Organize breakfast rides with simple meetup coordination.", icon: "calendar" },
      { title: "Offline Mesh Network", desc: "Stay connected even through dense green trails around Bangalore.", icon: "radio" },
      { title: "Local Clubs", desc: "Connect with cruiser, adventure, or sportbike communities.", icon: "users" },
    ],
    ctaTitle: "Join the top Bangalore riding network",
    cityContext: true,
  },
  "motorcycle-app-mumbai": {
    title: "Mumbai Motorcycle Rides & Clubs",
    metaTitle: "Best Motorcycle App in Mumbai — CRUIZR Riding Club",
    metaDesc: "Explore Mumbai motorcycle rides and clubs. Plan monsoon bike rides in Lonavala or coastal cruises along Marine Drive. Safe tracking & intercom.",
    metaKeywords: "motorcycle community Mumbai, monsoon bike rides Mumbai, Lonavala rides",
    heroBadge: "Mumbai Biker Central",
    headline: "The Safest App for Mumbai Motorcycle Clubs",
    subheadline: "Navigate Western Ghats curves or cruise Marine Drive safely in group formations.",
    introText: "Whether you ride through city traffic or climb towards Lonavala and Igatpuri, CRUIZR ensures your group stays accountable. Track positions in real-time, get crash safety warnings, and manage your club in one place.",
    features: [
      { title: "Monsoon Group Runs", desc: "Coordinate safely in heavy monsoon downpours with live tracking.", icon: "mappin" },
      { title: "Ghat Navigation", desc: "Detailed group route sharing for challenging mountain routes.", icon: "compass" },
      { title: "Mumbai Riding Circles", desc: "Join established urban communities and local riding clubs.", icon: "users" },
    ],
    ctaTitle: "Ride safely across Mumbai",
    cityContext: true,
  },
  "motorcycle-app-pune": {
    title: "Pune Biker Community & Offroad Trails",
    metaTitle: "Best Bike Riding App in Pune — CRUIZR Offroad & Adventure",
    metaDesc: "Discover Pune's top bike riding community app. Coordinate offroad monsoon rides to Lavasa, Mahabaleshwar, or Tamhini Ghat. Integrated GPS tracker.",
    metaKeywords: "bike riders app Pune, offroad rides Pune, Tamhini Ghat motorcycle rides",
    heroBadge: "Pune Adventure Club",
    headline: "The Preferred App for Pune Offroad Rides",
    subheadline: "Conquer Tamhini Ghat or plan Lavasa cruises with Pune's top adventure platform.",
    introText: "Pune is surrounded by some of India's best riding roads and off-road trails. CRUIZR is optimized for Pune adventure seekers and daily tourers, featuring real-time group tracking, intercom access, and safety check-ins.",
    features: [
      { title: "Offroad & Trail Mapping", desc: "Filter by terrain and discover dirt or gravel routes near Pune.", icon: "compass" },
      { title: "Tamhini & Lavasa Rides", desc: "Simple group organization templates with live ETA shares.", icon: "calendar" },
      { title: "Safety Crash Alerts", desc: "Crash notifications keep riders safe on slick monsoonal twisties.", icon: "shieldalert" },
    ],
    ctaTitle: "Ready for your next Pune adventure?",
    cityContext: true,
  },
  "motorcycle-app-hyderabad": {
    title: "Hyderabad Biker Network",
    metaTitle: "Best Motorcycle App in Hyderabad — CRUIZR Biker Groups",
    metaDesc: "Connect with Hyderabad bike riders. Plan group highway rides, weekend trips, and join active motorbike clubs in Telangana. Safe GPS tracker.",
    metaKeywords: "motorcycle rides Hyderabad, Hyderabad bike clubs, Telangana biker app",
    heroBadge: "Hyderabad Rider Network",
    headline: "Connect with Hyderabad Biker Clubs",
    subheadline: "Schedule long-distance highway cruises or local weekend meetups in Telangana.",
    introText: "From cruising the ORR to planning long tours to Srisailam, CRUIZR connects solo riders with established Hyderabad clubs. Enjoy built-in intercom and real-time location mapping on every ride.",
    features: [
      { title: "Highway Coordination", desc: "Keep groups aligned on long-distance high-speed runs.", icon: "mappin" },
      { title: "Deccan Explorer Runs", desc: "Plan weekend rides to historic ruins and forest routes.", icon: "compass" },
      { title: "Rider Accountability", desc: "Meetup verification makes coordinating club check-ins simple.", icon: "users" },
    ],
    ctaTitle: "Stop riding alone in Hyderabad",
    cityContext: true,
  },
  "motorcycle-app-chennai": {
    title: "Chennai Bike Riding Community",
    metaTitle: "Best Biker App in Chennai — CRUIZR Biker Network",
    metaDesc: "Join Chennai's top bike community. Coordinate weekend rides along ECR to Pondicherry or track group rides safely. Live intercom & GPS.",
    metaKeywords: "bike community Chennai, ECR bike rides, Pondicherry motorcycle rides",
    heroBadge: "Chennai Riding Central",
    headline: "The Ultimate App for ECR Highway Rides",
    subheadline: "Coordinate beachside runs to Pondicherry with the best group riding platform.",
    introText: "East Coast Road (ECR) is a rider's paradise. CRUIZR brings together Chennai's passionate biking community, providing the ultimate tracking, chat, and communication tools for safe seaside runs.",
    features: [
      { title: "ECR Seaside Cruises", desc: "Easily plan coastal runs with set waypoints and break alerts.", icon: "calendar" },
      { title: "Chennai Riding Clubs", desc: "Find sportbike, cafe racer, and touring groups nearby.", icon: "users" },
      { title: "Live Intercom Comms", desc: "Talk with the pack hands-free over the internet or offline mesh.", icon: "radio" },
    ],
    ctaTitle: "Start riding along Chennai's ECR",
    cityContext: true,
  },
  "motorcycle-app-kolkata": {
    title: "Kolkata Biker Network & Clubs",
    metaTitle: "Best Motorcycle App in Kolkata — CRUIZR Biker Groups",
    metaDesc: "Discover the best motorcycle club app in Kolkata. Plan weekend rides to Digha or explore highway runs. Real-time tracking and intercom.",
    metaKeywords: "motorcycle club Kolkata, Kolkata bike rides, West Bengal biker app",
    heroBadge: "Kolkata Rider Hub",
    headline: "The Premier App for Kolkata Biker Clubs",
    subheadline: "Coordinate rides to Digha or explore rural Bengal with absolute tracking peace of mind.",
    introText: "CRUIZR brings modern group-riding technology to the Kolkata biker scene. Plan weekend getaways, communicate on the fly with built-in voice intercom, and keep track of every rider in your formation.",
    features: [
      { title: "Weekend Getaways", desc: "Plan tours to Digha, Mandarmani, or the hills with ease.", icon: "compass" },
      { title: "Live Group GPS", desc: "Never lose sight of your group members in dense traffic.", icon: "mappin" },
      { title: "Kolkata Riding Clubs", desc: "Create or join permanent clubs with dedicated chat boards.", icon: "users" },
    ],
    ctaTitle: "Explore Kolkata and Bengal with CRUIZR",
    cityContext: true,
  },

  // Features
  "group-motorcycle-rides": {
    title: "Group Motorcycle Rides",
    metaTitle: "Organize Group Motorcycle Rides Safely — CRUIZR App",
    metaDesc: "Discover how to organize safe group motorcycle rides. Use CRUIZR's live tracking, meeting point check-ins, and group voice intercom to stay aligned.",
    metaKeywords: "group motorcycle rides, organize group rides, track group rides, ride organizer app",
    heroBadge: "Group Ride Planner",
    headline: "Organize Group Rides Like a Pro",
    subheadline: "No more scattered chats, lost riders, or misaligned paces. Meet CRUIZR.",
    introText: "CRUIZR is designed from the ground up for group motorcycle rides. We replace messy group chats and confusing spreadsheets with a clean, unified planner that coordinates meetups, tracks location, and streams voice communication.",
    features: [
      { title: "Interactive Group Maps", desc: "See everyone's exact speed, distance, and direction in real-time.", icon: "mappin" },
      { title: "Integrated Group Chats", desc: "Discuss routes, weather, and break points in dedicated ride channels.", icon: "users" },
      { title: "Rider Accountability", desc: "Unique OTP codes verify check-ins at meeting points automatically.", icon: "shieldalert" },
    ],
    ctaTitle: "Make your group rides safer",
  },
  "motorcycle-ride-planning": {
    title: "Motorcycle Ride Planning",
    metaTitle: "Best Motorcycle Ride Planning App — CRUIZR Routes",
    metaDesc: "Plan your next motorcycle trip with precision. Share custom routes, set safety checkpoints, track group status, and find local riding partners.",
    metaKeywords: "motorcycle ride planning app, route planner app, plan bike ride, group route creator",
    heroBadge: "Route Coordinator",
    headline: "Simplify Your Motorcycle Ride Planning",
    subheadline: "Design routes, schedule stops, and share detailed maps with one tap.",
    introText: "A successful ride starts with careful planning. CRUIZR helps you build detailed trip itineraries, select preferred terrains, set meeting times, and automatically sync routes to all participating riders.",
    features: [
      { title: "Interactive Waypoints", desc: "Mark fuel stations, scenic spots, and rest stops on a shared map.", icon: "compass" },
      { title: "Terrain Filtering", desc: "Classify routes as highway, winding, offroad, or mixed trail.", icon: "bike" },
      { title: "Automatic Syncing", desc: "Updates to the route sync instantly with all group members.", icon: "radio" },
    ],
    ctaTitle: "Plan your next route today",
  },
  "offroad-motorcycle-rides": {
    title: "Offroad Motorcycle Rides",
    metaTitle: "Best App for Offroad Riding & Adventure Trails — CRUIZR",
    metaDesc: "Conquer offroad trails and adventure paths. Get real-time offline tracking, mesh communication, and terrain-specific ride matching. Perfect for dirt bikes.",
    metaKeywords: "best app for offroad riding, offriding rides, dirt bike trails, adventure riding app",
    heroBadge: "Offroad & Adventure",
    headline: "Unchain Your Offroad Biking Passion",
    subheadline: "Find offroad trails, organize adventure rides, and stay tracked even offline.",
    introText: "Offroad riding demands focus, capability, and robust safety tools. CRUIZR offers dedicated offline map tracking and mesh networking to keep adventure and dirt bike riders connected in regions with zero mobile coverage.",
    features: [
      { title: "Offroad Matchmaking", desc: "Find companion riders who share your dirt, gravel, or trail style.", icon: "users" },
      { title: "Mesh Communication", desc: "Built-in voice sync that operates over offline mesh in dead zones.", icon: "radio" },
      { title: "Emergency Tracking", desc: "Send coordinates to emergency contacts with one tap if stranded.", icon: "shieldalert" },
    ],
    ctaTitle: "Explore the dirt with CRUIZR",
  },
  "motorcycle-clubs": {
    title: "Motorcycle Clubs App",
    metaTitle: "Best App for Motorbike Clubs & Biker Communities",
    metaDesc: "Build your legacy. Discover the ultimate app for motorbike clubs. Manage members, coordinate recurring rides, and host private chat feeds.",
    metaKeywords: "best app for motorbike club, motorcycle club app, coordinate club rides, biker club portal",
    heroBadge: "Club Management",
    headline: "The Central App for Your Motorbike Club",
    subheadline: "Manage club members, plan private runs, and build your community legacy.",
    introText: "Whether you run an adventure squad, a classic cruiser circle, or a local riding group, CRUIZR provides permanent club hubs. Manage active rosters, schedule recurring rides, and keep discussions in one ad-free space.",
    features: [
      { title: "Permanent Club Chats", desc: "Dedicated spaces to discuss parts, maintenance, and routes.", icon: "users" },
      { title: "Private Runs", desc: "Host invite-only rides visible exclusively to verified club members.", icon: "calendar" },
      { title: "Legacy Stats", desc: "Track aggregate club miles, popular routes, and attendance over time.", icon: "compass" },
    ],
    ctaTitle: "Bring your motorbike club to CRUIZR",
  },
  "motorcycle-tracking": {
    title: "Live Group GPS Tracking",
    metaTitle: "Motorcycle GPS Tracker & Live Group Map — CRUIZR",
    metaDesc: "Track your entire crew in real-time. CRUIZR's interactive live group map shows every rider's position, speed, and status to prevent splits.",
    metaKeywords: "motorcycle GPS tracker, live group tracking app, track motorcycle location, group map",
    heroBadge: "Real-time Tracking",
    headline: "Live Group GPS Tracking Built for Riders",
    subheadline: "Watch every member's position update live on a shared interactive map.",
    introText: "No one gets left behind. CRUIZR shows you exactly where your pack is, their speed, and their distance from you. Whether leading 5 bikes or a 50-rider club convoy, stay in visual control.",
    features: [
      { title: "Real-time Positions", desc: "Low-latency location streaming designed specifically for moving bikes.", icon: "mappin" },
      { title: "Split-convoy Alerts", desc: "Get visual alerts if a rider takes a wrong turn or falls behind.", icon: "shieldalert" },
      { title: "Battery Optimization", desc: "Smart location polling minimizes battery drain on long tour days.", icon: "bike" },
    ],
    ctaTitle: "Start tracking your rides live",
  },
  "motorcycle-intercom": {
    title: "Motorcycle Intercom App",
    metaTitle: "Free Motorcycle Intercom & Push-to-Talk App — CRUIZR",
    metaDesc: "Replace expensive Bluetooth intercoms. CRUIZR provides free push-to-talk group voice communication using your phone and standard headset.",
    metaKeywords: "motorcycle intercom app, bike rider communication app, free walkie-talkie app",
    heroBadge: "Hands-Free Comms",
    headline: "Hands-Free Voice Intercom — No Hardware Required",
    subheadline: "Skip the expensive headsets. Talk to your crew directly using your phone.",
    introText: "Coordinate lane changes, alert the pack to potholes, or chat with friends easily. CRUIZR offers low-bandwidth voice intercom that connects your entire group with one tap.",
    features: [
      { title: "Push & Lock Voice", desc: "Lock your mic open for constant communication or use push-to-talk.", icon: "radio" },
      { title: "Low-Bandwidth Audio", desc: "Engineered to deliver clear audio even in weak 3G/4G coverage areas.", icon: "compass" },
      { title: "Universal Bluetooth Support", desc: "Works seamlessly with generic earbuds, helmet liners, or OEM kits.", icon: "bike" },
    ],
    ctaTitle: "Experience free group voice comms",
  },
  "motorcycle-safety": {
    title: "Rider Safety & SOS App",
    metaTitle: "Motorcycle Safety App with SOS & Crash Alerts — CRUIZR",
    metaDesc: "Ride with peace of mind. CRUIZR features real-time tracking, rider check-ins, crash notifications, and emergency location sharing.",
    metaKeywords: "motorcycle riders safety app, motorcycle crash alert app, motorcycle emergency app",
    heroBadge: "Rider Safety First",
    headline: "Safety & Accountability on Every Mile",
    subheadline: "Integrated crash detection, emergency SOS alerts, and live tracking safeguards.",
    introText: "Motorcycling carries inherent risks, but you don't have to face them alone. CRUIZR equips you and your group with automated crash warnings, quick SOS actions, and real-time location sharing to handle incidents instantly.",
    features: [
      { title: "Emergency SOS", desc: "Tap once to notify your group and emergency contacts with your exact GPS.", icon: "shieldalert" },
      { title: "Rider Check-ins", desc: "Confirm everyone arrives safely at rest stops with automated check-ins.", icon: "checkcircle2" },
      { title: "Crash Notifications", desc: "Sensors detect sudden stops and notify nearby group members immediately.", icon: "mappin" },
    ],
    ctaTitle: "Prioritize your riding safety",
  },
  "women-motorcycle-riders": {
    title: "Women Biker Community",
    metaTitle: "Women Motorcycle Community India — CRUIZR Female Riders",
    metaDesc: "Discover India's top women motorcycle riders community. Coordinate women-only bike rides, connect with local networks, and access secure safety features.",
    metaKeywords: "women motorcycle riders app India, women only bike rides, women motorcycle community India",
    heroBadge: "Women Biker Network",
    headline: "Empowering Women Motorcycle Riders in India",
    subheadline: "Coordinate secure, women-only group rides and connect with active female networks.",
    introText: "CRUIZR supports a thriving and secure ecosystem for female motorcyclists. Organize exclusive women-only highway runs, connect with verified members, and access our group safety tracking tools.",
    features: [
      { title: "Women-Only Runs", desc: "Plan private or public rides exclusive to verified female bikers.", icon: "users" },
      { title: "Enhanced Safety Features", desc: "Live location sharing and strict rider verification protocols.", icon: "checkcircle2" },
      { title: "Regional Biker Networks", desc: "Connect with female rider circles in Mumbai, Bangalore, Pune, and Delhi.", icon: "compass" },
    ],
    ctaTitle: "Join India's women biker network",
  },

  // Generic Keywords
  "best-motorcycle-app-india": {
    title: "Best Motorcycle App in India",
    metaTitle: "Best Motorcycle App in India — CRUIZR Riding Companion",
    metaDesc: "Discover why CRUIZR is the best bike riding and companion app in India. Plan routes, join communities, and stay connected with live intercom.",
    metaKeywords: "best motorcycle app India, best bike riding app India, Indian motorcycle community app",
    heroBadge: "Top Indian Riding App",
    headline: "The Best Motorcycle App in India",
    subheadline: "From Ladakh expeditions to Bangalore breakfast runs, CRUIZR is your ultimate co-rider.",
    introText: "CRUIZR is built specifically for the diverse road conditions, route habits, and community structures of Indian motorcyclists. Replaces disjointed tools with a clean, unified companion app.",
    features: [
      { title: "Indian Riding Clubs", desc: "Supports local groups across all major tier-1 and tier-2 cities.", icon: "users" },
      { title: "Monsoon Route Guides", desc: "Filter and flag waterlogged tracks or landslides dynamically.", icon: "compass" },
      { title: "Low-Data Optimization", desc: "Designed to operate on thin networks throughout rural highways.", icon: "radio" },
    ],
    ctaTitle: "Download India's top riding companion",
  },
  "motorcycle-trip-planner": {
    title: "Motorcycle Trip Planner App",
    metaTitle: "Motorcycle Trip Planner App — Route Creator & GPS Tracker | CRUIZR",
    metaDesc: "Plan long-distance motorcycle trips, highway tours, and offroad adventures with CRUIZR. The best motorcycle trip planner app for group rides and solo riders.",
    metaKeywords: "motorcycle trip planner, motorcycle trip planner app, group motorcycle trip planner, bike tour route planner, cruizer app",
    heroBadge: "Trip & Route Planner",
    headline: "The Ultimate Motorcycle Trip Planner App",
    subheadline: "Design routes, schedule fuel & rest stops, sync maps live, and keep every rider in formation.",
    introText: "Whether you are planning a multi-day Ladakh expedition, a weekend monsoon ride to Lonavala, or a coast-to-coast highway tour, CRUIZR is your complete motorcycle trip planner. Map waypoints, set team pace, monitor live GPS positions, and communicate via hands-free intercom.",
    features: [
      { title: "Multi-Stop Route Planning", desc: "Add scenic stops, fuel stations, and meetups on a syncable shared map.", icon: "compass" },
      { title: "Group Live Tracking", desc: "Real-time GPS ensures no rider gets separated on highway curves or mountain tracks.", icon: "mappin" },
      { title: "Offline Trail Mesh", desc: "Access trip plans and stay connected even in remote zero-cellular coverage zones.", icon: "radio" },
    ],
    ctaTitle: "Plan your next motorcycle trip with CRUIZR",
  },
  "ebike-motorcycle-app": {
    title: "E-Bike & Electric Motorcycle App",
    metaTitle: "E-Bike & Electric Motorcycle Ride Companion App — CRUIZR",
    metaDesc: "The premier app for e-bike riders, electric motorcycles, and commuter clubs. Plan routes, track group rides, and monitor battery-friendly GPS navigation.",
    metaKeywords: "cruzr e bike, cruzr ebike, ebike trip planner, electric motorcycle app, ebike ride tracker",
    heroBadge: "Electric & E-Bike Hub",
    headline: "Built for Electric Motorcycle & E-Bike Riders",
    subheadline: "Plan electric cruises, discover charger-friendly routes, and ride with local e-bike groups.",
    introText: "From city e-bike commutes to long-distance electric cruiser rides, CRUIZR connects electric motorcycle enthusiasts. Optimize route plans with charging stop waypoints, track live group formations, and ride safely with automated SOS alerts.",
    features: [
      { title: "E-Bike Route Planner", desc: "Plan smooth highway and city routes optimized for electric range.", icon: "compass" },
      { title: "Group E-Cruises", desc: "Organize weekend e-bike rides and match with local electric riders.", icon: "users" },
      { title: "Low-Battery GPS Sync", desc: "Ultra-efficient background tracking keeps phone battery high throughout the ride.", icon: "bike" },
    ],
    ctaTitle: "Join the electric motorcycle revolution",
  },
  "cruizer-cruzr-app": {
    title: "Cruizr, Cruizer & Cruzr Official App Hub",
    metaTitle: "CRUIZR (Cruizer, Cruzr, Cruiz) — Official Motorcycle Companion & Trip Planner",
    metaDesc: "Looking for Cruizr, Cruizer, Cruzr, Cruiz, Cruisz, Cuizer, or Cruzr ebike? Download the official #1 motorcycle trip planner and group ride app.",
    metaKeywords: "cruizr, cruisz, cruizer, criozr, crisere, cuizer, cruizzer, cruizers, cruiz, cruister, cruizy, cruzr e bike, scruiser, crusit, motorcycle trip planner, cruzr military discount, cruzr ebike, cruiser site, crossrider, cruzrs, web cruising",
    heroBadge: "Official App Portal",
    headline: "Welcome to CRUIZR (Cruizer / Cruzr / Cruiz App)",
    subheadline: "Whether you search for Cruizr, Cruizer, Cruzr, Cruiz, Cruisz, or Cruzr ebike — welcome to India's top motorcycle trip planner app.",
    introText: "No matter how you spell our name — Cruizr, Cruizer, Cruzr, Cruiz, Criozr, Crisere, Cuizer, Cruizzer, Cruizers, Cruister, Cruizy, Scruiser, Crusit, Crossrider, or Cruzrs — you've found the official motorcycle companion app. CRUIZR connects thousands of bikers for live GPS tracking, motorcycle trip planner tools, e-bike route support, military community discounts, and free voice intercom.",
    features: [
      { title: "Official App Access", desc: "Direct access to download the genuine CRUIZR (Cruizer/Cruzr) app on Android & iOS.", icon: "checkcircle2" },
      { title: "Motorcycle Trip Planner", desc: "Complete route itineraries, live GPS convoy tracking, and web cruising tools.", icon: "compass" },
      { title: "E-Bike & Military Perks", desc: "Support for Cruzr e-bike riders, electric cruisers, and verified military club discounts.", icon: "users" },
    ],
    ctaTitle: "Get CRUIZR — The Official Biker App",
  },
  "motorcycle-community-app": {
    title: "Motorcycle Community Platform",
    metaTitle: "Join the Ultimate Biker Community — CRUIZR Platform",
    metaDesc: "Connect with thousands of motorcycle enthusiasts. Share routes, photos, and stories. Join local riding clubs or start your own group.",
    metaKeywords: "motorcycle community app free, motorcycle social network app, bike riders social app",
    heroBadge: "Biker Community",
    headline: "A Biker Community App Built for Connection",
    subheadline: "Share stories, discover local rides, and turn solo runs into group experiences.",
    introText: "Motorcycling is more than transport—it is a community. CRUIZR connects you with riders nearby who share your bike type, experience, and style, fostering lifelong connections.",
    features: [
      { title: "Share Routes & Feeds", desc: "Post pictures, trail coordinates, and trip updates for your followers.", icon: "compass" },
      { title: "Discover Local Events", desc: "Find open rides, charity runs, and custom motorcycle meets nearby.", icon: "calendar" },
      { title: "Accountable Ratings", desc: "Rate co-riders on safety and pace to maintain high community trust.", icon: "checkcircle2" },
    ],
    ctaTitle: "Become part of the community",
  },
  "bike-riders-network": {
    title: "Bike Riders Network",
    metaTitle: "Join India's Top Bike Riders Network — CRUIZR App",
    metaDesc: "Explore the premier bike riders network. Connect with cafe racers, cruiser crews, adventure tourers, and sportbike squads in India.",
    metaKeywords: "bike riders network India, motorcycle rider networking app, find bike rides",
    heroBadge: "Rider Networking",
    headline: "The Ultimate Bike Riders Network",
    subheadline: "Connect with enthusiasts across India matching your exact machine and pace.",
    introText: "Whether you ride a retro classic cruiser, a heavy-duty adventure tourer, or an agile sportbike, CRUIZR's smart matching algorithm pairs you with the perfect companion riders in your city.",
    features: [
      { title: "Machine-Specific Matches", desc: "Connect specifically with riders owning similar displacement or styling.", icon: "bike" },
      { title: "Urban & Highway Feeds", desc: "Read safety logs and road conditions from real riders in your region.", icon: "mappin" },
      { title: "Verify Profiles", desc: "Every user goes through standard verification to ensure genuine interactions.", icon: "checkcircle2" },
    ],
    ctaTitle: "Connect to the bike riders network",
  },
  "motorcycle-gps-tracker": {
    title: "Motorcycle GPS Tracking App",
    metaTitle: "Motorcycle GPS Tracker & Live Group Map — CRUIZR",
    metaDesc: "Get the best motorcycle GPS tracker app. Monitor group location, check-in at waypoints, and share live ETAs with friends and family.",
    metaKeywords: "motorcycle GPS tracker, track group rides safely, download motorcycle riders app with GPS",
    heroBadge: "GPS Ride Tracking",
    headline: "Low-Latency Motorcycle GPS Tracking",
    subheadline: "Keep tabs on group formations and share live coordinates in real-time.",
    introText: "Forget buying expensive standalone hardware GPS trackers. CRUIZR utilizes your smartphone's built-in sensors and GPS to broadcast low-latency coordinates to your private group map, keeping everyone secure.",
    features: [
      { title: "Interactive Group Maps", desc: "Displays exact positioning of all convoy members on a shared screen.", icon: "mappin" },
      { title: "Minimal Battery Drain", desc: "Built with energy-efficient code protocols for day-long tours.", icon: "bike" },
      { title: "SOS Location Shares", desc: "Broadcast live GPS coordinates to selected emergency contacts.", icon: "shieldalert" },
    ],
    ctaTitle: "Start tracking your motorcycle runs",
  },
  "motorcycle-rides-near-me": {
    title: "Motorcycle Rides Near Me",
    metaTitle: "Find Motorcycle Rides Near Me — CRUIZR Group Ride App India",
    metaDesc: "Looking for motorcycle rides near you? CRUIZR instantly connects you with local group rides, weekend bike tours, and riding partners in your city across India.",
    metaKeywords: "motorcycle rides near me, find bike rides near me, local motorcycle rides India, group rides near me, find riding partner near me, weekend bike rides India",
    heroBadge: "Find Rides Near You",
    headline: "Find Motorcycle Rides Near You — Instantly",
    subheadline: "Stop searching alone. Discover group rides, weekend tours, and compatible riders in your city right now.",
    introText: "CRUIZR is the fastest way to find motorcycle rides near you. Whether you want a quick breakfast run, an offroad adventure, a monsoon hill ride, or a multi-day Himalayan tour, CRUIZR shows you live rides happening near your location — filtered by pace, bike type, and terrain. Available in Bangalore, Mumbai, Pune, Delhi NCR, Hyderabad, Chennai, Kolkata, Goa, and across India.",
    features: [
      { title: "Live Nearby Rides Feed", desc: "See all active and upcoming rides within your area in real-time.", icon: "mappin" },
      { title: "Smart Rider Matching", desc: "Instantly matched with riders who share your pace, bike, and style.", icon: "users" },
      { title: "Instant Join & Track", desc: "Join a ride with one tap and start live GPS tracking immediately.", icon: "compass" },
    ],
    ctaTitle: "Find motorcycle rides near you today",
  },
  "find-riding-partner": {
    title: "Find a Motorcycle Riding Partner",
    metaTitle: "Find Motorcycle Riding Partner in India — CRUIZR Rider Matching App",
    metaDesc: "Find a motorcycle riding partner near you in India. CRUIZR matches you with compatible riders by bike type, pace, experience, and city. Stop riding solo today.",
    metaKeywords: "find motorcycle riding partner, find riding partner India, motorcycle partner app, find bike rider near me, riding companion app India, motorcycle riding buddy app",
    heroBadge: "Rider Partner Matching",
    headline: "Find Your Perfect Motorcycle Riding Partner",
    subheadline: "No more solo rides. CRUIZR matches you with compatible riders in your city based on your bike, pace, and style.",
    introText: "Finding a motorcycle riding partner who matches your pace, bike type, and riding style has always been a challenge. CRUIZR solves this with a smart matching algorithm that considers your preferred terrain, experience level, and riding schedule to connect you with the ideal companion. Available in cities across India including Bangalore, Mumbai, Pune, Delhi NCR, Hyderabad, Chennai, Goa, and beyond.",
    features: [
      { title: "Smart Compatibility Matching", desc: "Matched by bike type, pace, experience, and terrain preference.", icon: "users" },
      { title: "Verified Rider Profiles", desc: "Every rider is verified for safety and accountability before you meet.", icon: "checkcircle2" },
      { title: "Group or 1-on-1 Rides", desc: "Find a single riding partner or join an entire group that fits your vibe.", icon: "compass" },
    ],
    ctaTitle: "Find your riding partner today",
  },
  "ladakh-motorcycle-ride": {
    title: "Ladakh Motorcycle Ride App",
    metaTitle: "Plan Your Ladakh Motorcycle Ride — CRUIZR Group Tour App India",
    metaDesc: "Planning a Ladakh motorcycle ride? CRUIZR helps you find group Ladakh bike tour partners, plan the Manali-Leh or Srinagar-Leh routes, use offline GPS tracking, and communicate in dead zones.",
    metaKeywords: "Ladakh motorcycle ride, Ladakh bike ride app, Manali Leh motorcycle route, Srinagar Leh bike tour, Ladakh group motorcycle tour, Ladakh offroad bike ride India",
    heroBadge: "Ladakh Expedition Hub",
    headline: "Plan Your Ladakh Motorcycle Expedition with CRUIZR",
    subheadline: "Find Ladakh group tour partners, navigate Manali-Leh or Srinagar-Leh, and stay connected in zero-network zones.",
    introText: "A Ladakh motorcycle ride is a dream for every Indian biker. With CRUIZR, planning your Ladakh expedition is seamless. Find group tour partners who match your pace and experience, coordinate the iconic Manali-Leh or Srinagar-Leh highway routes, use offline GPS tracking through Lahaul & Spiti, and communicate hands-free with built-in intercom even in the most remote mountain passes with zero network coverage.",
    features: [
      { title: "Offline GPS in Dead Zones", desc: "Track your entire Ladakh convoy even with zero cellular signal on high passes.", icon: "mappin" },
      { title: "Mesh Network Intercom", desc: "Communicate hands-free through Baralacha La, Tanglang La, and Khardung La.", icon: "radio" },
      { title: "Ladakh Tour Groups", desc: "Connect with experienced Ladakh riders and join organized group expeditions.", icon: "users" },
    ],
    ctaTitle: "Start planning your Ladakh motorcycle ride",
    cityContext: true,
  },
};

function generateStateContent(slug: string): PageContent | null {
  if (!slug.startsWith("motorcycle-app-")) return null;

  const rawState = slug.replace("motorcycle-app-", "");

  const stateMappings: Record<string, string> = {
    "andaman-nicobar": "Andaman and Nicobar Islands",
    "andhra-pradesh": "Andhra Pradesh",
    "arunachal-pradesh": "Arunachal Pradesh",
    "himachal-pradesh": "Himachal Pradesh",
    "jammu-kashmir": "Jammu and Kashmir",
    "madhya-pradesh": "Madhya Pradesh",
    "tamil-nadu": "Tamil Nadu",
    "uttar-pradesh": "Uttar Pradesh",
    "west-bengal": "West Bengal",
    "delhi-ncr": "Delhi NCR",
  };

  const stateName = stateMappings[rawState] || rawState
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${stateName} Biker Community`,
    metaTitle: `Best Motorcycle App in ${stateName} — CRUIZR Riding Companion`,
    metaDesc: `Discover the best motorcycle app in ${stateName}. Plan group tours, join local motorbike clubs, use live GPS tracking, and hands-free intercom in ${stateName}.`,
    metaKeywords: `motorcycle app ${stateName}, bike riders ${stateName}, motorcycle community ${stateName}, group rides ${stateName}`,
    heroBadge: `${stateName} Biker Central`,
    headline: `The Premier Motorcycle App for ${stateName} Riders`,
    subheadline: `Connect with local clubs, track group tours, and share routes across ${stateName} safely.`,
    introText: `Whether you are cruising the highways, scaling mountain passes, or exploring scenic countryside routes in ${stateName}, CRUIZR keeps your group connected with live GPS, voice intercom, and automated crash safety.`,
    features: [
      { title: `${stateName} Riding Clubs`, desc: `Connect with passionate riders and motorbike clubs in ${stateName}.`, icon: "users" },
      { title: "Scenic Route Guides", desc: `Share and explore popular local rides and hidden trails in ${stateName}.`, icon: "compass" },
      { title: "Safety Check-ins", desc: "Keep every rider in your formation tracked and accounted for.", icon: "checkcircle2" },
    ],
    ctaTitle: `Ready to stop riding alone in ${stateName}?`,
    cityContext: true,
  };
}

// ── Bike Models Programmatic SEO Generator ──
const BIKE_MODELS_DB: Record<string, { name: string; brand: string; type: string; highlight: string }> = {
  "royal-enfield-himalayan-rides": { name: "Royal Enfield Himalayan", brand: "Royal Enfield", type: "Adventure Tourer", highlight: "Conquer Ladakh, Spiti, and offroad mountain passes with fellow Himalayan owners." },
  "royal-enfield-classic-350-rides": { name: "Royal Enfield Classic 350", brand: "Royal Enfield", type: "Retro Cruiser", highlight: "Join weekend highway thumper breakfast rides and retro cruiser clubs across India." },
  "royal-enfield-hunter-350-rides": { name: "Royal Enfield Hunter 350", brand: "Royal Enfield", type: "Urban Roadster", highlight: "Match with agile city riders, night cruise groups, and weekend breakfast runs." },
  "royal-enfield-continental-gt-650-rides": { name: "Continental GT 650", brand: "Royal Enfield", type: "Cafe Racer", highlight: "Experience high-speed highway convoys and twisty ghat runs with twin-cylinder enthusiasts." },
  "royal-enfield-interceptor-650-rides": { name: "Royal Enfield Interceptor 650", brand: "Royal Enfield", type: "Classic Twin", highlight: "Cruise coastlines and long-distance highways with fellow 650 Twin owners." },
  "royal-enfield-super-meteor-650-rides": { name: "Super Meteor 650", brand: "Royal Enfield", type: "Grand Tourer", highlight: "Plan seamless multi-day luxury highway tours with live GPS and group intercom." },
  "ktm-duke-390-rides": { name: "KTM Duke 390", brand: "KTM", type: "Street Naked", highlight: "Organize high-octane twisty canyon runs, track days, and cornering squad meetups." },
  "ktm-adventure-390-rides": { name: "KTM 390 Adventure", brand: "KTM", type: "Dual Sport ADV", highlight: "Tackle technical gravel trails, river crossings, and off-grid mountain trails." },
  "triumph-speed-400-rides": { name: "Triumph Speed 400", brand: "Triumph", type: "Modern Classic", highlight: "Join premium modern-classic riding squads for scenic breakfast and highway runs." },
  "triumph-scrambler-400x-rides": { name: "Triumph Scrambler 400X", brand: "Triumph", type: "Scrambler", highlight: "Explore unpaved trails, forest backroads, and mixed-terrain weekend expeditions." },
  "bmw-g310-gs-rides": { name: "BMW G 310 GS", brand: "BMW Motorrad", type: "Adventure", highlight: "Connect with GS riders across India for mountain tours and highway cruises." },
  "hero-xpulse-200-rides": { name: "Hero XPulse 200 4V", brand: "Hero MotoCorp", type: "Offroad & Dirt", highlight: "Find dirt trail buddies, rally raid practice groups, and technical trail rides." },
  "harley-davidson-x440-rides": { name: "Harley-Davidson X440", brand: "Harley-Davidson", type: "Cruiser Roadster", highlight: "Ride with modern cruiser clubs, sunset packs, and long-distance highway squads." },
  "yamaha-r15-rides": { name: "Yamaha R15 V4", brand: "Yamaha", type: "Supersport", highlight: "Connect with aerodynamic track enthusiasts, track day riders, and Sunday cornering groups." },
  "yamaha-mt-15-rides": { name: "Yamaha MT-15", brand: "Yamaha", type: "Hyper Naked", highlight: "Organize agile urban night rides, street meets, and quick weekend highway runs." },
  "kawasaki-ninja-300-rides": { name: "Kawasaki Ninja 300", brand: "Kawasaki", type: "Sportbike", highlight: "Ride with green-team sportbike convoys, high-speed tours, and expressway runs." },
  "bajaj-dominor-400-rides": { name: "Bajaj Dominar 400", brand: "Bajaj", type: "Power Cruiser", highlight: "Hyper-tour across Indian states with long-distance endurance riding buddies." },
  "tvs-apache-rr310-rides": { name: "TVS Apache RR310", brand: "TVS Racing", type: "Race Replica", highlight: "Match with sport performance riders for weekend twisties and track day meetups." },
  "yezdi-adventure-rides": { name: "Yezdi Adventure", brand: "Yezdi", type: "Adventure", highlight: "Explore uncharted terrains, rugged trails, and offbeat camping spots with Yezdi riders." },
  "jawa-42-rides": { name: "Jawa 42 & Bobber", brand: "Jawa", type: "Classic Cruiser", highlight: "Connect with classic heritage thumper circles for laid-back weekend tours." },
  "suzuki-v-strom-sx-rides": { name: "Suzuki V-Strom SX 250", brand: "Suzuki", type: "Sport Adventure Tourer", highlight: "Plan smooth highway cruises and light-trail adventures with fellow V-Strom riders." },
  "honda-cb350-rides": { name: "Honda H'ness CB350", brand: "Honda BigWing", type: "Modern Classic", highlight: "Join BigWing owner clubs, butter-smooth highway runs, and heritage tours." },
};

function generateBikeContent(slug: string): PageContent | null {
  const match = BIKE_MODELS_DB[slug];
  if (!match) {
    if (!slug.includes("-rides") && !slug.includes("-motorcycle-app")) return null;
    const cleanName = slug.replace("-rides", "").replace("-motorcycle-app", "").replace(/-/g, " ");
    const formatted = cleanName.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    return {
      title: `${formatted} Rider Community & Rides`,
      metaTitle: `${formatted} Motorcycle App & Group Rides — CRUIZR`,
      metaDesc: `Find ${formatted} riders near you in India. Join brand-specific clubs, coordinate weekend group tours, track convoys with live GPS, and talk via free intercom.`,
      metaKeywords: `${cleanName} bike app, ${cleanName} group rides, ${cleanName} community India, ${cleanName} riding club, best app for ${cleanName}`,
      heroBadge: `${formatted} Rider Hub`,
      headline: `The Ultimate App for ${formatted} Owners & Riders`,
      subheadline: `Connect with fellow ${formatted} riders in your city. Plan weekend group tours, track live convoys, and talk hands-free.`,
      introText: `Own a ${formatted}? CRUIZR connects you with compatible riders in your city who ride the exact same machine. Plan scenic tours, navigate offroad trails, talk via built-in free voice intercom, and keep everyone accounted for with real-time GPS tracking.`,
      features: [
        { title: `${formatted} Clubs`, desc: `Join verified ${formatted} owner circles and club channels in your city.`, icon: "users" },
        { title: "Live Convoy GPS", desc: "Never lose the pack on winding roads, highway bends, or mountain trails.", icon: "mappin" },
        { title: "Hands-Free Voice Intercom", desc: "Talk with fellow riders hands-free without buying expensive Bluetooth intercoms.", icon: "radio" },
      ],
      ctaTitle: `Ride with ${formatted} groups today`,
    };
  }

  return {
    title: `${match.name} Rider Community & App`,
    metaTitle: `${match.name} Motorcycle App & Group Rides — CRUIZR`,
    metaDesc: `Join India's top ${match.name} rider community. ${match.highlight} Live GPS tracking, free voice intercom, and club management.`,
    metaKeywords: `${match.name} app, ${match.name} group rides, ${match.name} bike club India, ${match.name} touring routes, ${match.brand} riders app`,
    heroBadge: `${match.brand} Club Hub`,
    headline: `The Best Motorcycle App for ${match.name} Riders`,
    subheadline: match.highlight,
    introText: `Whether you ride the ${match.name} through daily city traffic, highway cruises, or rugged mountain trails, CRUIZR connects you with riders who share your passion. Replace scattered WhatsApp groups with live convoy GPS tracking, 100% free voice intercom, and automated crash alerts.`,
    features: [
      { title: `${match.name} Squads`, desc: `Connect with local ${match.name} owners matching your riding discipline.`, icon: "users" },
      { title: "Turn-by-Turn Group GPS", desc: "Live formation map showing speed, distance, and turns for every member.", icon: "mappin" },
      { title: "Zero-Cost Voice Intercom", desc: "Push-to-talk voice communication that works with any standard helmet headset.", icon: "radio" },
    ],
    ctaTitle: `Connect with ${match.name} riders now`,
  };
}

// ── Bike Accessories Programmatic SEO Generator ──
const ACCESSORIES_DB: Record<string, { title: string; metaTitle: string; metaDesc: string; keywords: string; badge: string; headline: string; subtitle: string; intro: string; f1: string; f2: string; f3: string }> = {
  "motorcycle-intercom-headset-app": {
    title: "Free Motorcycle Intercom Headset Alternative",
    metaTitle: "Free Motorcycle Intercom App vs Expensive Bluetooth Headsets — CRUIZR",
    metaDesc: "Looking for motorcycle intercoms? Skip ₹25,000 Sena/Cardo headsets. CRUIZR gives you free push-to-talk group intercom and offline P2P mesh voice using your phone.",
    keywords: "motorcycle intercom app, bluetooth intercom for bike helmet, cardo alternative app, sena alternative free, helmet walkie talkie app, bike rider communication",
    badge: "Free Intercom Alternative",
    headline: "Skip ₹25,000 Helmet Intercoms — Use CRUIZR Free",
    subtitle: "Crystal clear hands-free voice communication with your entire riding convoy directly from your smartphone.",
    intro: "Why spend tens of thousands on standalone Bluetooth intercom hardware with limited 4-rider range? CRUIZR delivers unlimited rider voice intercom over cellular networks, plus an offline P2P mesh driver for zero-network mountain passes like Ladakh and Spiti.",
    f1: "Universal Headset Support: Works with Apple AirPods, standard Bluetooth earphones, and generic helmet liners.",
    f2: "Unlimited Convoy Capacity: Connect 5, 20, or 50 riders in one seamless group voice room.",
    f3: "Offline Mountain Mesh: Phone-to-phone direct communication when cell towers disappear.",
  },
  "motorcycle-helmet-bluetooth-intercom": {
    title: "Motorcycle Helmet Bluetooth Intercom App",
    metaTitle: "Helmet Bluetooth Intercom App for Motorcyclists — CRUIZR",
    metaDesc: "Turn any helmet into a smart Bluetooth communicator. CRUIZR connects your phone & headset for free push-to-talk voice intercom with your convoy.",
    keywords: "helmet bluetooth intercom, motorcycle helmet communicator app, helmet intercom price India, best intercom for motorcycle helmet",
    badge: "Smart Helmet Audio",
    headline: "Turn Any Helmet into a Connected Smart Intercom",
    subtitle: "Push-to-talk voice, automated safety warnings, and live group tracking in your ears.",
    intro: "CRUIZR integrates with any Bluetooth helmet, intercom unit, or earbuds to provide crystal-clear group voice chat. Plan lane shifts, signal road hazards, and coordinate fuel stops without taking your hands off the handlebars.",
    f1: "Voice Activation & Push-to-Talk: Lock mic open or use convenient handlebar/headset controls.",
    f2: "Low-Bandwidth Encoding: Engineered to transmit crisp voice even on weak 2G/3G rural Indian networks.",
    f3: "Safety Override: Automated crash alerts and convoy split warnings override chat immediately.",
  },
  "motorcycle-gps-tracker-accessories": {
    title: "Motorcycle GPS Tracker & Live Navigation Guide",
    metaTitle: "Best Motorcycle GPS Tracker App & Hardware Alternative — CRUIZR",
    metaDesc: "Compare motorcycle GPS tracking devices vs mobile GPS apps. CRUIZR provides real-time convoy tracking, anti-theft sharing, speed monitoring, and crash detection.",
    keywords: "motorcycle GPS tracker, best GPS tracker for bike India, motorcycle tracking device, bike navigation accessory, live group GPS map",
    badge: "GPS Tracking Companion",
    headline: "Real-Time Motorcycle GPS Tracking — Zero Hardware Required",
    subtitle: "Monitor every rider's live location, speed, distance, and turn cues on an interactive group map.",
    intro: "Forget bulky standalone GPS tracking units that require expensive SIM subscriptions and complex wiring. CRUIZR transforms your smartphone into a high-precision motorcycle GPS tracker with low battery draw and group convoy sync.",
    f1: "Interactive Convoy Map: Watch your pack's exact positions update smoothly in real time.",
    f2: "Split-Convoy Alerts: Instant visual notifications if someone takes a wrong exit or falls behind.",
    f3: "Battery Optimized Engine: Engineered for 8+ hour continuous touring days without overheating.",
  },
  "motorcycle-mobile-phone-mount-guide": {
    title: "Motorcycle Mobile Phone Mounts & Navigation Mode",
    metaTitle: "Best Bike Mobile Phone Mount Guide & HUD Screen Mode — CRUIZR",
    metaDesc: "Find the best vibration-dampened mobile holders for motorcycles and turn your phone into a high-visibility cockpit HUD with CRUIZR live navigation.",
    keywords: "mobile holder for bike, anti vibration bike phone mount, motorcycle phone mount India, bike navigation cockpit app",
    badge: "Cockpit Navigation",
    headline: "Maximize Your Bike Phone Mount with CRUIZR Cockpit HUD",
    subtitle: "High-contrast daylight mode, glove-friendly large buttons, and live group radar on your handlebars.",
    intro: "Pair your vibration-dampened motorcycle phone mount with CRUIZR's dedicated riding cockpit mode. Designed with high-contrast sunlight visibility, big touch targets for riding gloves, and real-time convoy distance indicators.",
    f1: "Glove-Friendly Interface: Huge buttons for push-to-talk, waypoint check-ins, and emergency SOS.",
    f2: "High-Contrast Sunlight UI: Ultra-clear readability even under intense Indian midday sun.",
    f3: "Speed & Group Radar: Instantly view leader distance, sweeper status, and upcoming waypoint ETAs.",
  },
  "motorcycle-riding-gear-accessories": {
    title: "Motorcycle Riding Gear & Safety Systems",
    metaTitle: "Motorcycle Riding Gear Guide & Digital Safety Companion — CRUIZR",
    metaDesc: "Essential motorcycle riding gear guide: CE-level jackets, helmets, gloves, boots, and how CRUIZR's automated crash detection keeps you protected on every ride.",
    keywords: "motorcycle riding gear, bike riding accessories India, essential biker gear, motorcycle crash detection, biker safety gear guide",
    badge: "Rider Safety & Armor",
    headline: "Combine Premium Riding Gear with Digital Safety Tech",
    subtitle: "From CE-armored jackets to automated gyroscopic crash detection and instant emergency SOS.",
    intro: "Physical armor protects your body on impact; CRUIZR protects you before and after an incident. Equipping you with smart crash sensor algorithms that notify your pack and emergency contacts with your exact coordinates if you go down.",
    f1: "Automated Gyro Crash Detection: Detects sudden deceleration and tip-overs to trigger safety timers.",
    f2: "One-Tap Emergency SOS: Broadcasts GPS coordinates to your group and family contacts instantly.",
    f3: "Rider Accountability Check-ins: Automated verification at rest stops to ensure zero riders are left behind.",
  },
  "motorcycle-action-camera-mounts": {
    title: "Motorcycle Action Camera Mounts & Live Motovlog App",
    metaTitle: "Motorcycle Action Camera Setup Guide & Telemetry Overlays — CRUIZR",
    metaDesc: "Discover the best action camera helmet chin mounts, handlebar setups for GoPro & Insta360, and how CRUIZR telemetry overlays enhance your motovlog videos.",
    keywords: "motorcycle action camera mounts, helmet chin mount GoPro, motorcycle motovlog setup, bike telemetry overlay app",
    badge: "Motovlog & Telemetry",
    headline: "Supercharge Your Motovlogs with CRUIZR Ride Telemetry",
    subtitle: "Sync GPS route data, speed overlays, convoy positions, and live ride streaming.",
    intro: "Whether running a chin mount GoPro or an Insta360 selfie boom, CRUIZR is the companion app for motovloggers. Export route elevation profiles, live telemetry data, and invite followers to track your expedition in real time.",
    f1: "Live Ride Streaming: Share private or public live ride radar links with your community.",
    f2: "GPS Route Export: Export high-accuracy GPX routes with elevation, speed, and corner angles.",
    f3: "Convoy Photo Sync: Pool high-resolution group ride photos automatically into one shared album.",
  },
  "motorcycle-saddlebags-luggage-touring": {
    title: "Motorcycle Saddlebags, Luggage & Tour Planning",
    metaTitle: "Motorcycle Saddlebags & Touring Luggage Guide — CRUIZR Planner",
    metaDesc: "Plan long-distance motorcycle tours with the right saddlebags, tank bags, and tail packs. Use CRUIZR's multi-day itinerary planner and fuel stop coordinator.",
    keywords: "motorcycle saddlebags, bike luggage bags touring India, waterproof tank bag motorcycle, motorcycle touring trip planner",
    badge: "Touring & Luggage",
    headline: "Pack Your Saddlebags & Plan the Ultimate Motorcycle Tour",
    subtitle: "Multi-day itineraries, fuel stop calculations, and scenic trail waypoints with CRUIZR.",
    intro: "Long-distance motorcycle touring requires reliable luggage and bulletproof route planning. CRUIZR helps you calculate fuel ranges, coordinate hotel halts, mark repair workshops along the highway, and sync itineraries with your convoy.",
    f1: "Multi-Day Tour Itineraries: Add fuel stops, scenic viewpoints, and hotel check-ins.",
    f2: "Offline Route Maps: Keep access to your full trip itinerary even without internet connectivity.",
    f3: "Pack Fuel & Break Sync: Synchronize rest stops based on the lowest fuel range in your group.",
  },
  "motorcycle-fog-lights-auxiliary": {
    title: "Motorcycle Auxiliary Fog Lights & Night Ride Safety",
    metaTitle: "Motorcycle Fog Lights Guide & Night Tour Safety App — CRUIZR",
    metaDesc: "Best auxiliary fog lights guide for touring bikes and how CRUIZR's night ride radar and fog alerts keep motorcycle convoys safe in low-visibility conditions.",
    keywords: "fog lights for bike, auxiliary motorcycle lights India, night motorcycle ride safety, Himalayan fog lamps",
    badge: "Night & Weather Safety",
    headline: "Conquer Dense Fog & Night Rides with High Visibility",
    subtitle: "Auxiliary lighting tips combined with live convoy radar and weather hazard alerts.",
    intro: "Monsoon fog in Tamhini Ghat or night cruising through Rajasthan requires top-tier auxiliary lights and live radar tracking. CRUIZR displays rider positions through zero-visibility fog so convoys never separate.",
    f1: "Zero-Visibility Convoy Radar: Follow member dots on your map when headlights are blinded by fog.",
    f2: "Live Hazard Warnings: Front scouts flag potholes, waterlogging, and cattle on the road via intercom.",
    f3: "Safe Convoy Spacing: Visual distance meters ensure proper safe-following gaps at night.",
  },
  "motorcycle-crash-guard-accessories": {
    title: "Motorcycle Crash Guards & Engine Protection Guide",
    metaTitle: "Motorcycle Crash Guards & Slider Guide — CRUIZR Safety App",
    metaDesc: "Engine crash guards, frame sliders, and bash plates guide. Pair your bike armor with CRUIZR's smart crash detection and emergency assistance network.",
    keywords: "motorcycle crash guard, engine bash plate, frame slider bike, motorcycle protection accessories India",
    badge: "Engine Protection & Safety",
    headline: "Protect Your Machine & Yourself with CRUIZR Safety",
    subtitle: "From heavy-duty steel crash guards to intelligent fall-detection sensors and SOS alerts.",
    intro: "Engine guards and frame sliders absorb the physical shock of an off-road drop or highway slide. CRUIZR provides the digital safety net: automatically sensing the incident and alerting nearby convoy members with your exact coordinates.",
    f1: "Instant Drop Notification: Nearby group members receive immediate audio and visual alerts.",
    f2: "Nearest Mechanic & Hospital: Quick emergency lookup for roadside repair and medical facilities.",
    f3: "Rider Pace Audits: Keeps group pace within safe limits on technical gravel and wet tarmac.",
  },
  "motorcycle-tyre-inflator-puncture-kit": {
    title: "Motorcycle Tyre Inflator, Puncture Kits & Trail Assist",
    metaTitle: "Bike Tyre Inflator & Puncture Kit Guide — CRUIZR Roadside SOS",
    metaDesc: "Essential portable tyre inflators and tubeless puncture kits for motorcycle touring, paired with CRUIZR's roadside rider assist and emergency location sharing.",
    keywords: "portable tyre inflator for bike, tubeless puncture repair kit, motorcycle breakdown assist, roadside SOS bike",
    badge: "Breakdown & Puncture Assist",
    headline: "Never Get Stranded by a Flat Tyre on the Highway",
    subtitle: "Carry the right puncture kit and use CRUIZR to signal nearby riders for emergency assistance.",
    intro: "A puncture in a remote ghat or forest pass can ruin a tour. CRUIZR includes a direct Roadside Assist & SOS broadcast feature that pings verified riders within a 20km radius to lend tyre inflators, tools, or fuel.",
    f1: "Community Breakdown SOS: Alert fellow riders in the area when you need tools or spare tubes.",
    f2: "Puncture Location Marker: Mark tyre repair shops and puncture stalls on the shared map.",
    f3: "Emergency Contact Ping: Sends automated SMS coordinates to your emergency family list.",
  },
};

function generateAccessoryContent(slug: string): PageContent | null {
  const match = ACCESSORIES_DB[slug];
  if (!match) return null;

  return {
    title: match.title,
    metaTitle: match.metaTitle,
    metaDesc: match.metaDesc,
    metaKeywords: match.keywords,
    heroBadge: match.badge,
    headline: match.headline,
    subheadline: match.subtitle,
    introText: match.intro,
    features: [
      { title: match.f1.split(":")[0], desc: match.f1.split(":")[1] || match.f1, icon: "radio" },
      { title: match.f2.split(":")[0], desc: match.f2.split(":")[1] || match.f2, icon: "mappin" },
      { title: match.f3.split(":")[0], desc: match.f3.split(":")[1] || match.f3, icon: "shieldalert" },
    ],
    ctaTitle: `Upgrade your ride with CRUIZR`,
  };
}

// ── Bike Apps & Software Category Generator ──
const APPS_DB: Record<string, { title: string; metaTitle: string; metaDesc: string; keywords: string; badge: string; headline: string; subtitle: string; intro: string; f1: string; f2: string; f3: string }> = {
  "best-bike-riding-app-india": {
    title: "Best Bike Riding App in India",
    metaTitle: "Best Bike Riding App in India — CRUIZR Companion for Motorcyclists",
    metaDesc: "Discover why CRUIZR is rated India's #1 bike riding app. Plan group rides, find riding partners, use free intercom, and track groups live with GPS.",
    keywords: "best bike riding app India, motorcycle riding partner app, bike group ride app India, top biker apps, motorcycle GPS tracker app",
    badge: "India's #1 Biker App",
    headline: "The Best Bike Riding App for Indian Motorcyclists",
    subtitle: "From Bangalore breakfast runs to Himalayan expeditions, CRUIZR is your all-in-one co-rider.",
    intro: "CRUIZR was created specifically for Indian road conditions, local motorbike clubs, and passionate solo tourers. Unifying rider matching, live GPS mapping, free hands-free intercom, and automated crash safety into one stunning app.",
    f1: "Smart Rider Matching: Connect with local riders matching your machine, pace, and riding discipline.",
    f2: "Free Group Voice Intercom: Talk with your convoy hands-free with zero hardware purchases.",
    f3: "Live GPS Convoy Map: Real-time interactive radar keeping everyone aligned across miles.",
  },
  "free-motorcycle-intercom-app": {
    title: "Free Motorcycle Intercom App",
    metaTitle: "Free Motorcycle Intercom App for Android & iOS — CRUIZR Walkie-Talkie",
    metaDesc: "Download CRUIZR, the 100% free motorcycle intercom app. Talk hands-free with your riding group using standard earphones or helmet Bluetooth. Zero hardware required.",
    keywords: "free motorcycle intercom app, motorcycle walkie talkie app, bike rider voice communication, free helmet intercom",
    badge: "Free Voice Intercom",
    headline: "100% Free Motorcycle Intercom for Your Smartphone",
    subtitle: "Talk hands-free with your entire riding convoy without spending a rupee on expensive hardware.",
    intro: "CRUIZR's integrated voice engine provides low-latency, crystal-clear push-to-talk audio. Works seamlessly with wired earbuds, AirPods, or Bluetooth helmet communication kits.",
    f1: "Zero Hardware Required: Use the phone and earphones you already own.",
    f2: "Ultra-Low Data Usage: Optimized audio compression runs smoothly even on weak mobile signals.",
    f3: "Offline Mesh Driver: Phone-to-phone direct communication in remote mountain passes.",
  },
  "motorcycle-group-ride-planner-app": {
    title: "Motorcycle Group Ride Planner App",
    metaTitle: "Motorcycle Group Ride Planner & Coordinator App — CRUIZR",
    metaDesc: "Plan and coordinate safe group motorcycle rides. CRUIZR replaces messy WhatsApp chats with unified route itineraries, OTP check-ins, and live tracking.",
    keywords: "motorcycle group ride planner, coordinate group bike ride, motorcycle ride organizer app, bike convoy coordinator",
    badge: "Group Ride Planner",
    headline: "Plan & Lead Group Motorcycle Rides Like a Pro",
    subtitle: "Unified itineraries, meeting point check-ins, live GPS radar, and integrated convoy chat.",
    intro: "Stop managing club rides across five messy WhatsApp groups and broken location pins. CRUIZR provides a dedicated group ride hub where routes, meeting times, member rosters, and live GPS positions sync effortlessly.",
    f1: "Shared Route Itineraries: Custom waypoints for fuel stops, regroup points, and scenic halts.",
    f2: "OTP Rider Verification: Simple check-in protocol ensuring all members reach the meetup safely.",
    f3: "Split-Convoy Detection: Visual and audio alerts if a member takes a wrong turn or falls behind.",
  },
  "motorcycle-speedometer-gps-app": {
    title: "Motorcycle Speedometer & GPS HUD App",
    metaTitle: "Motorcycle Speedometer, GPS HUD & Ride Tracker App — CRUIZR",
    metaDesc: "Accurate GPS speedometer, trip odometer, top speed recorder, and high-visibility cockpit HUD for motorcycles. Download CRUIZR for free.",
    keywords: "motorcycle speedometer app, bike GPS odometer, motorcycle HUD app, top speed recorder bike",
    badge: "Cockpit Speedometer",
    headline: "High-Precision Motorcycle GPS Speedometer & HUD",
    subtitle: "Live speed, distance, trip elevation, top speed recording, and daylight-optimized HUD mode.",
    intro: "CRUIZR's speedometer cockpit provides high-accuracy GPS speed tracking, trip duration, max lean angles, and route elevation graphs. Perfect for mounting on your handlebars for clear, distraction-free monitoring.",
    f1: "Daylight High-Contrast Mode: Large speed readouts visible under bright direct sunlight.",
    f2: "Trip Statistics & Logs: Automatically logs top speed, average pace, distance, and elevation gain.",
    f3: "Safe Speed Alerts: Customizable speed warnings to help keep convoys at a safe group pace.",
  },
  "biker-emergency-sos-app": {
    title: "Biker Emergency SOS & Crash Alert App",
    metaTitle: "Biker Emergency SOS & Crash Detection App India — CRUIZR Safety",
    metaDesc: "Protect your rides with CRUIZR's automated motorcycle crash detection, emergency SOS broadcasts, and instant GPS location sharing with family and convoy.",
    keywords: "biker emergency SOS app, motorcycle crash alert app, motorcycle accident detection, bike rider safety app India",
    badge: "Emergency SOS Safety",
    headline: "Automated Motorcycle Crash Detection & Emergency SOS",
    subtitle: "Smart gyroscopic crash sensors, automated emergency contact SMS, and convoy SOS broadcasts.",
    intro: "Motorcycle riding carries inherent risks on Indian roads and twisties. CRUIZR acts as your digital guardian angel, detecting severe impacts and notifying your group members and family with precise GPS coordinates immediately.",
    f1: "Gyroscopic Crash Sensors: Smart deceleration algorithm distinguishes phone drops from real falls.",
    f2: "Automated SOS Ping: Sends instant SMS alerts with exact Google Maps coordinates to emergency contacts.",
    f3: "Convoy Audio Override: Blasts emergency siren to all group members' headsets in real time.",
  },
  "motorcycle-route-recorder-gps": {
    title: "Motorcycle Route Recorder & GPX Tracker App",
    metaTitle: "Motorcycle Route Recorder, GPX Tracker & Trail Mapper — CRUIZR",
    metaDesc: "Record your motorcycle trips, discover hidden twisty trails, export GPX routes, and share scenic rides with the biking community using CRUIZR.",
    keywords: "motorcycle route recorder, GPX tracker bike, record motorcycle rides, discover bike trails India",
    badge: "Route Recorder & GPX",
    headline: "Record, Export & Share Your Epic Motorcycle Routes",
    subtitle: "High-accuracy GPS trail recording, elevation graphs, GPX file exports, and community discovery.",
    intro: "Track every twist, mountain pass, and offroad trail with precision. CRUIZR creates beautiful visual route cards with elevation profiles, photos, and terrain tags for your personal riding logbook or community sharing.",
    f1: "High-Accuracy GPS Logging: Records precise coordinates even during high-speed cornering.",
    f2: "GPX Export & Import: Seamlessly transfer routes to Google Maps, Garmin, or fellow rider apps.",
    f3: "Community Trail Discovery: Discover top-rated routes near you rated by real Indian motorcyclists.",
  },
  "bike-club-management-app": {
    title: "Motorbike Club Management & Community Portal",
    metaTitle: "Motorbike Club Management App & Biker Community Hub — CRUIZR",
    metaDesc: "The ultimate app for motorbike clubs. Manage membership rosters, schedule recurring rides, collect event RSVPs, and communicate in dedicated club channels.",
    keywords: "motorbike club management app, motorcycle club portal, bike club app India, coordinate club rides",
    badge: "Club Management Hub",
    headline: "The Modern Operating System for Motorbike Clubs",
    subtitle: "Manage member rosters, schedule private runs, track club miles, and build your legacy.",
    intro: "Whether managing a 20-member local weekend squad or a 500-member multi-city riding chapter, CRUIZR gives club leaders powerful tools to organize rides, verify members, and keep chats focused and spam-free.",
    f1: "Permanent Club Hubs: Dedicated chat boards, ride archives, and member directories.",
    f2: "Private & Verified Runs: Host exclusive rides visible only to approved club members.",
    f3: "Club Mileage Leaderboards: Track cumulative club miles, attendance, and member rankings over time.",
  },
  "women-biker-safety-riding-app": {
    title: "Women Biker Community & Safe Riding App",
    metaTitle: "Women Biker Community & Safe Riding App India — CRUIZR Female Riders",
    metaDesc: "India's premier women motorcycle riding community. Coordinate women-only rides, connect with verified female bikers, and ride safely with live tracking.",
    keywords: "women biker app India, female motorcycle riders community, women only bike rides, women rider safety app",
    badge: "Women Rider Network",
    headline: "Empowering & Connecting Women Motorcyclists Across India",
    subtitle: "Exclusive women-only group rides, verified profiles, and comprehensive safety tracking.",
    intro: "CRUIZR supports a vibrant and secure space for female motorcyclists across Mumbai, Bangalore, Pune, Delhi NCR, and beyond. Plan private weekend runs, meet companion riders matching your pace, and ride with complete confidence.",
    f1: "Verified Women-Only Rides: Host and join rides exclusive to verified female motorcyclists.",
    f2: "Multi-Tier Safety Network: Continuous live location sharing with emergency contacts.",
    f3: "Active Regional Chapters: Connect with female rider clubs across major Indian metro cities.",
  },
  "motorcycle-trip-cost-calculator": {
    title: "Motorcycle Trip Cost & Mileage Calculator",
    metaTitle: "Motorcycle Trip Cost & Fuel Expense Calculator — CRUIZR App",
    metaDesc: "Calculate motorcycle trip fuel costs, split tour expenses among group members, and track tour budgets for Leh Ladakh, Spiti, and highway expeditions.",
    keywords: "motorcycle trip cost calculator, bike fuel expense tracker, split motorcycle ride cost, Ladakh trip budget calculator",
    badge: "Trip Budget Calculator",
    headline: "Calculate Fuel Costs & Split Tour Expenses Instantly",
    subtitle: "Estimate fuel requirements, calculate toll and stay budgets, and split convoy costs equitably.",
    intro: "Planning a multi-day tour to Ladakh, Goa, or the Western Ghats? CRUIZR calculates estimated fuel consumption based on your bike model, current petrol rates, and distance, making group expense splitting transparent and hassle-free.",
    f1: "Bike-Specific Fuel Calculator: Estimates range and fuel cost based on your engine displacement.",
    f2: "Split Group Expenses: Keep track of shared food, stays, and fuel bills in one tap.",
    f3: "Tour Budget Estimation: Pre-calculate total tour costs for long-distance Indian expeditions.",
  },
};

function generateBikeAppContent(slug: string): PageContent | null {
  const match = APPS_DB[slug];
  if (!match) return null;

  return {
    title: match.title,
    metaTitle: match.metaTitle,
    metaDesc: match.metaDesc,
    metaKeywords: match.keywords,
    heroBadge: match.badge,
    headline: match.headline,
    subheadline: match.subtitle,
    introText: match.intro,
    features: [
      { title: match.f1.split(":")[0], desc: match.f1.split(":")[1] || match.f1, icon: "radio" },
      { title: match.f2.split(":")[0], desc: match.f2.split(":")[1] || match.f2, icon: "mappin" },
      { title: match.f3.split(":")[0], desc: match.f3.split(":")[1] || match.f3, icon: "shieldalert" },
    ],
    ctaTitle: `Download CRUIZR for free`,
  };
}

export function resolveSlugContent(slug: string): PageContent | null {
  return (
    SLUG_CONTENT_MAP[slug] ||
    generateStateContent(slug) ||
    generateBikeContent(slug) ||
    generateAccessoryContent(slug) ||
    generateBikeAppContent(slug)
  );
}

export const Route = createFileRoute("/$slug")({
  head: ({ params }) => {
    const data = resolveSlugContent(params.slug);
    if (!data) {
      return {
        meta: [
          { title: "CRUIZR Biker Network" },
          { name: "description", content: "CRUIZR connects motorcycle riders across India." }
        ]
      };
    }
    return {
      meta: [
        { title: data.metaTitle },
        { name: "description", content: data.metaDesc },
        { name: "keywords", content: data.metaKeywords },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
        { property: "og:title", content: data.metaTitle },
        { property: "og:description", content: data.metaDesc },
        { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp" },
        { property: "og:image:alt", content: data.metaTitle },
        { property: "og:url", content: `https://www.cruizr.in/${params.slug}` },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "en_IN" },
        { property: "og:site_name", content: "CRUIZR" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@cruizrapp" },
        { name: "twitter:title", content: data.metaTitle },
        { name: "twitter:description", content: data.metaDesc },
        { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3xuYR1aDiFRPPjvXP3CgYQXGxhr1/social-images/social-1783841341750-Cruizr_Logo.webp" },
      ],
      links: [{ rel: "canonical", href: `https://www.cruizr.in/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": `https://www.cruizr.in/${params.slug}#webpage`,
                url: `https://www.cruizr.in/${params.slug}`,
                name: data.metaTitle,
                description: data.metaDesc,
                isPartOf: { "@id": "https://www.cruizr.in/#website" },
                breadcrumb: {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cruizr.in/" },
                    { "@type": "ListItem", position: 2, name: data.title, item: `https://www.cruizr.in/${params.slug}` },
                  ],
                },
              },
            ],
          }),
        },
      ],
    };
  },
  loader: ({ params }): PageContent => {
    if (params.slug === "royal-enfield-himalayan-440") {
      throw redirect({ to: "/blog/$postSlug", params: { postSlug: "royal-enfield-himalayan-440" } });
    }
    const data = resolveSlugContent(params.slug);
    if (!data) {
      throw notFound();
    }
    return data;
  },
  component: SlugLandingPage,
});

function SlugLandingPage() {
  const data = Route.useLoaderData() as PageContent;

  return (
    <div className="bg-background min-h-screen text-foreground">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-dark py-20 md:py-32">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-radial)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl px-4 text-center md:px-8">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--orange)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[var(--orange)] animate-pulse" />
              {data.heroBadge}
            </div>
            <h1 className="font-heading text-4xl font-black leading-[1.1] text-white sm:text-5xl md:text-7xl">
              {data.headline.split(" ").map((w, idx) => {
                const highlightWords = [
                  "Delhi", "Bangalore", "Mumbai", "Pune", "Hyderabad", "Chennai",
                  "Kolkata", "Best", "Safest", "Companion", "Offroad", "Central",
                  "Intercom", "GPS", "Safety", "ECR", "Biker", "India"
                ];
                const cleanWord = w.replace(/[^a-zA-Z]/g, "");
                if (highlightWords.includes(cleanWord)) {
                  return <span key={idx} className="text-gradient"> {w} </span>;
                }
                return <span key={idx}> {w} </span>;
              })}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70 md:text-xl">
              {data.subheadline}
            </p>
            <div className="mt-10 flex justify-center">
              <WaitlistForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* DETAILED CONTENT SECTION */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7">
                <SectionHeading
                  center={false}
                  eyebrow="Rider Companion"
                  title={<>Why serious riders choose <span className="text-gradient">CRUIZR</span></>}
                  subtitle={data.introText}
                />
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-[var(--orange)] shrink-0" />
                    <span><strong>100% Free Voice Intercom:</strong> Push & Talk with your crew without buying hardware.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-[var(--orange)] shrink-0" />
                    <span><strong>Live Convoy GPS:</strong> Real-time mapping showing speed, distance, and turns.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-[var(--orange)] shrink-0" />
                    <span><strong>Safe Rider Audits:</strong> Safety check-ins, SOS buttons, and crash notification sensors.</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 rounded-3xl bg-muted/40 p-8 border border-border">
                <h3 className="font-heading text-2xl font-bold mb-4">India's Biking Revolution</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  CRUIZR is designed for Indian roads, highway routes, and off-road trail conditions. Find companions near you who match your riding discipline.
                </p>
                <div className="border-t border-border pt-6">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-semibold">Active Hubs</div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {["Bangalore", "Mumbai", "Pune", "Delhi NCR", "Hyderabad", "Chennai", "Kolkata"].map((c) => (
                      <span key={c} className="rounded-full bg-border/40 px-3 py-1 text-foreground/80 border border-border/20">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CORE HIGHLIGHT CARDS */}
      <section className="bg-muted/10 py-16 md:py-24 border-t border-b border-border/20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {data.features.map((feat, idx) => {
              const IconMap: Record<string, any> = {
                users: Users,
                compass: Compass,
                mappin: MapPin,
                calendar: Calendar,
                radio: Radio,
                shieldalert: ShieldAlert,
                checkcircle2: CheckCircle2,
                bike: Bike,
              };
              const IconComp = IconMap[feat.icon] || Compass;
              return (
                <Reveal key={idx} delay={idx * 120}>
                  <div className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-[var(--orange)]/30 transition-colors">
                    <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--orange)] to-[var(--cyan)] text-white">
                      <IconComp size={22} />
                    </div>
                    <h3 className="font-heading text-lg font-bold">{feat.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCALIZED SECTION IF CITY PAGE */}
      {data.cityContext && (
        <section className="py-20 md:py-28 bg-gradient-to-b from-transparent to-muted/20">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
            <Reveal>
              <h2 className="font-heading text-3xl font-black md:text-5xl mb-4">
                Find Local Rides & Clubs in <span className="text-gradient">{data.title.replace(" Biker Community", "").replace(" Motorcycle Rides & Clubs", "").replace(" Biker Network", "")}</span>
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground mb-8">
                Connect with local groups and riders who match your style. Join safety runs, weekend breakfast meetups, or rugged offroad explorations.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-4">
                <Link
                  to="/features"
                  className="rounded-full bg-border/40 px-6 py-2.5 text-sm font-semibold border border-border hover:bg-border/60 transition-colors inline-flex items-center gap-2"
                >
                  Explore Features <ArrowRight size={16} />
                </Link>
                <Link
                  to="/about"
                  className="rounded-full bg-[var(--orange)] px-6 py-2.5 text-sm font-semibold text-white hover:scale-105 transition-transform"
                >
                  Read Our Story
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* DYNAMIC CTA */}
      <section className="relative overflow-hidden bg-dark py-20 md:py-28">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-radial)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
          <Reveal>
            <h2 className="font-heading text-3xl font-black leading-tight text-white md:text-5xl">
              {data.ctaTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-white/70">
              Join thousands of passionate riders finding their groups, tracking convoys, and exploring trails. CRUIZR is coming soon.
            </p>
            <div className="mt-10 flex justify-center">
              <WaitlistForm />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
