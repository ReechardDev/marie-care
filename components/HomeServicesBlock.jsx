// components/HomeServicesBlock.jsx
"use client";

import Link from "next/link";
import Section from "@/components/Section";
// Safe, widely-available Lucide icons
import { Users, User, Utensils, Home, Car, Stethoscope } from "lucide-react";

const HOME_SERVICES = [
  { title: "Companionship", desc: "Engaging activities, conversation, and company.", Icon: Users },
  { title: "Personal Care", desc: "Bathing, grooming, mobility and daily living assistance.", Icon: User },
  { title: "Meals & Nutrition", desc: "Meal prep, hydration, diet support and reminders.", Icon: Utensils },
  { title: "Light Housekeeping", desc: "Laundry, tidying, organization for safer living.", Icon: Home },
  { title: "Errands & Transport", desc: "Groceries, pharmacy, and appointment rides.", Icon: Car },
  { title: "Specialized Care", desc: "Post-hospital, memory support, respite care.", Icon: Stethoscope },
];

export default function HomeServicesBlock() {
  return (
    <Section title="What I can help with">
      {/* Grid gap bumped: gap-5 lg:gap-6 */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {HOME_SERVICES.map(({ title, desc, Icon }) => (
          <div
            key={title}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-[#167a7a]/10 p-2">
                <Icon className="h-6 w-6 text-[#167a7a]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Link restyled to match pricing link */}
      <div className="mt-4">
        <Link
          href="/services"
          className="inline-block text-teal underline underline-offset-4 hover:no-underline text-sm font-medium"
        >
          See full services →
        </Link>
      </div>
    </Section>
  );
}
