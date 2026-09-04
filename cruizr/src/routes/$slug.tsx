import { createFileRoute, Link, notFound } from "@tanstack/react-router";
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
  
  // Custom mapping for beautiful formatting of state names or union territories
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

export const Route = createFileRoute("/$slug")({
  head: ({ params }) => {
    const data = SLUG_CONTENT_MAP[params.slug] || generateStateContent(params.slug);
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
    };
  },
  loader: ({ params }) => {
    const data = SLUG_CONTENT_MAP[params.slug] || generateStateContent(params.slug);
    if (!data) {
      throw notFound();
    }
    return data;
  },
  component: SlugLandingPage,
});

function SlugLandingPage() {
  const data = Route.useLoaderData();

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
