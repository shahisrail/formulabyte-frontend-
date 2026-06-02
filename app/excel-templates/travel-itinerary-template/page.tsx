import type { Metadata } from "next";
import TravelItineraryTemplatePage from "@/components/pages/TravelItineraryTemplatePage";

export const metadata: Metadata = {
  title: "Free AI Excel Travel Itinerary Template Generator",
  description: "Create free AI Excel travel itinerary templates for flights, hotels, schedules, budgeting, transportation, and trip planning.",
};

export default function Page() {
  return <TravelItineraryTemplatePage />;
}
