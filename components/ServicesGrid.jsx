// components/ServicesGrid.jsx
import { Users, Bath, Utensils, House, ShoppingCart, Stethoscope } from "lucide-react";

const services = [
  { title: "Companionship", icon: Users, copy: "Engaging activities, conversation, and company." },
  { title: "Personal Care", icon: Bath, copy: "Bathing, grooming, mobility and daily living assistance." },
  { title: "Meals & Nutrition", icon: Utensils, copy: "Meal prep, hydration, diet support and reminders." },
  { title: "Light Housekeeping", icon: House, copy: "Laundry, tidying, organization for safer living." },
  { title: "Errands & Transport", icon: ShoppingCart, copy: "Groceries, pharmacy, and appointment rides." },
  { title: "Specialized Care", icon: Stethoscope, copy: "Post-hospital, memory support, respite care." },
];

export default function ServicesGrid() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          What I can help with
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, icon: Icon, copy }) => (
            <div key={title} className="rounded-2xl border bg-teal/5 p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#167a7a]/10">
                  <Icon className="text-[#167a7a]" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-700">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
