import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, AlertTriangle, CheckCircle2, FileSearch, ArrowRight, Lock, BadgeCheck, BrainCircuit, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const offers = [
  {
    id: 1,
    company: "AstraNova Protect",
    name: "Home Secure Plus",
    price: 42,
    match: 92,
    coverage: "Locuință, incendiu, inundații, furt, răspundere civilă",
    hidden: "Nu acoperă daunele dacă instalațiile nu au fost verificate periodic.",
    risk: "Mediu",
    bestFor: "Apartamente moderne",
  },
  {
    id: 2,
    company: "Carpathia Insurance",
    name: "Essential Home",
    price: 29,
    match: 78,
    coverage: "Incendiu, cutremur, inundații de bază",
    hidden: "Despăgubirea poate fi redusă dacă locuința este nelocuită peste 30 de zile.",
    risk: "Ridicat",
    bestFor: "Buget redus",
  },
  {
    id: 3,
    company: "Dacia Safe",
    name: "Premium Family Shield",
    price: 55,
    match: 88,
    coverage: "Acoperire extinsă, bunuri interioare, asistență rapidă, daune accidentale",
    hidden: "Excluderi pentru obiecte de valoare nedeclarate separat.",
    risk: "Scăzut",
    bestFor: "Familii / bunuri valoroase",
  },
];

const riskStyle = {
  Scăzut: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Mediu: "bg-amber-50 text-amber-700 border-amber-100",
  Ridicat: "bg-red-50 text-red-700 border-red-100",
};

export default function ViaSTEMInsuranceFrontend() {
  const [insuranceType, setInsuranceType] = useState("Locuință");
  const [budget, setBudget] = useState("40");
  const [priority, setPriority] = useState("Acoperire maximă");
  const [selectedOffer, setSelectedOffer] = useState(offers[0]);

  const sortedOffers = useMemo(() => {
    return [...offers].sort((a, b) => b.match - a.match);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-zinc-950">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute top-48 right-10 h-72 w-72 rounded-full bg-zinc-200/70 blur-3xl" />
      </div>

      <header className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-white shadow-sm">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight">ViaSTEM</p>
            <p className="text-xs text-zinc-500">AI Insurance Comparator</p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-zinc-600 md:flex">
          <a href="#demo" className="hover:text-zinc-950">Demo</a>
          <a href="#compare" className="hover:text-zinc-950">Comparație</a>
          <a href="#ai" className="hover:text-zinc-950">Analiză AI</a>
        </nav>
        <Button className="rounded-full bg-zinc-950 px-5 text-white hover:bg-zinc-800">
          Încearcă demo
        </Button>
      </header>

      <main className="relative mx-auto max-w-7xl px-6 pb-20 pt-8">
        <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-2 text-sm text-zinc-700 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-orange-600" />
              Compară polițe. Înțelege clauze. Alege informat.
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-zinc-950 md:text-7xl">
              Asigurări explicate clar de AI.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              ViaSTEM analizează ofertele de asigurare în funcție de nevoile tale și semnalează clauzele riscante ascunse în limbaj juridic complicat.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="h-12 rounded-full bg-orange-600 px-7 text-base text-white hover:bg-orange-700">
                Compară acum <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="h-12 rounded-full border-zinc-300 bg-white/70 px-7 text-base hover:bg-white">
                Vezi analiza AI
              </Button>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-sm">
              {[
                ["3 sec", "analiză demo"],
                ["AI", "clauze ascunse"],
                ["92%", "potrivire maximă"],
              ].map(([big, small]) => (
                <div key={big} className="rounded-3xl border border-white/70 bg-white/60 p-4 shadow-sm backdrop-blur">
                  <p className="text-xl font-semibold">{big}</p>
                  <p className="mt-1 text-zinc-500">{small}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div id="demo" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Card className="rounded-[2rem] border-white/80 bg-white/75 shadow-2xl shadow-zinc-900/10 backdrop-blur-xl">
              <CardContent className="p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-500">Configurator inteligent</p>
                    <h2 className="text-2xl font-semibold tracking-tight">Caută oferta potrivită</h2>
                  </div>
                  <div className="rounded-2xl bg-orange-50 p-3 text-orange-600">
                    <SlidersHorizontal className="h-5 w-5" />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-zinc-700">Tip asigurare</span>
                    <select value={insuranceType} onChange={(e) => setInsuranceType(e.target.value)} className="h-12 w-full rounded-2xl border border-zinc-200 bg-white px-4 outline-none transition focus:border-orange-400">
                      <option>Locuință</option>
                      <option>Auto RCA/CASCO</option>
                      <option>Sănătate</option>
                      <option>Călătorie</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-zinc-700">Buget lunar estimat</span>
                    <div className="flex items-center rounded-2xl border border-zinc-200 bg-white px-4">
                      <input value={budget} onChange={(e) => setBudget(e.target.value)} className="h-12 w-full bg-transparent outline-none" />
                      <span className="text-zinc-500">€/lună</span>
                    </div>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-zinc-700">Prioritate</span>
                    <select value={priority} onChange={(e) => setPriority(e.target.value)} className="h-12 w-full rounded-2xl border border-zinc-200 bg-white px-4 outline-none transition focus:border-orange-400">
                      <option>Acoperire maximă</option>
                      <option>Preț minim</option>
                      <option>Risc contractual scăzut</option>
                      <option>Proces rapid de despăgubire</option>
                    </select>
                  </label>

                  <Button className="mt-2 h-12 w-full rounded-2xl bg-zinc-950 text-white hover:bg-zinc-800">
                    Generează comparația AI
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="compare" className="mt-16 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card className="rounded-[2rem] border-white/80 bg-white/75 shadow-xl shadow-zinc-900/5 backdrop-blur-xl">
            <CardContent className="p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-zinc-950 p-3 text-white">
                  <FileSearch className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Rezultate pentru: {insuranceType}</p>
                  <h2 className="text-2xl font-semibold tracking-tight">Oferte comparate</h2>
                </div>
              </div>

              <div className="space-y-4">
                {sortedOffers.map((offer) => (
                  <button key={offer.id} onClick={() => setSelectedOffer(offer)} className={`w-full rounded-3xl border p-5 text-left transition hover:-translate-y-0.5 hover:shadow-lg ${selectedOffer.id === offer.id ? "border-orange-300 bg-orange-50/80" : "border-zinc-200 bg-white"}`}>
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-semibold">{offer.name}</h3>
                          <span className={`rounded-full border px-3 py-1 text-xs ${riskStyle[offer.risk]}`}>Risc {offer.risk}</span>
                        </div>
                        <p className="mt-1 text-sm text-zinc-500">{offer.company} · {offer.bestFor}</p>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">{offer.coverage}</p>
                      </div>
                      <div className="min-w-32 rounded-2xl bg-white p-4 text-center shadow-sm">
                        <p className="text-2xl font-semibold">{offer.match}%</p>
                        <p className="text-xs text-zinc-500">potrivire</p>
                        <p className="mt-2 text-sm font-medium">€{offer.price}/lună</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card id="ai" className="rounded-[2rem] border-white/80 bg-zinc-950 text-white shadow-xl shadow-zinc-900/10">
            <CardContent className="p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-white/10 p-3 text-orange-300">
                  <BrainCircuit className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">DeepSeek API simulation</p>
                  <h2 className="text-2xl font-semibold tracking-tight">Analiză AI</h2>
                </div>
              </div>

              <div className="rounded-3xl bg-white/7 p-5 ring-1 ring-white/10">
                <p className="text-sm text-zinc-400">Oferta selectată</p>
                <h3 className="mt-1 text-2xl font-semibold">{selectedOffer.name}</h3>
                <p className="mt-2 text-zinc-300">{selectedOffer.company}</p>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-3xl bg-white/7 p-5 ring-1 ring-white/10">
                  <div className="mb-2 flex items-center gap-2 text-orange-300">
                    <AlertTriangle className="h-5 w-5" />
                    <p className="font-medium">Clauză sensibilă detectată</p>
                  </div>
                  <p className="leading-7 text-zinc-300">{selectedOffer.hidden}</p>
                </div>

                <div className="rounded-3xl bg-white/7 p-5 ring-1 ring-white/10">
                  <div className="mb-2 flex items-center gap-2 text-emerald-300">
                    <CheckCircle2 className="h-5 w-5" />
                    <p className="font-medium">Recomandare simplificată</p>
                  </div>
                  <p className="leading-7 text-zinc-300">
                    Pentru profilul ales, această ofertă este potrivită dacă prioritatea ta este „{priority}” și bugetul tău este în jur de €{budget}/lună.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-3xl bg-white/7 p-5 ring-1 ring-white/10">
                    <Lock className="mb-3 h-5 w-5 text-zinc-300" />
                    <p className="text-sm text-zinc-400">Transparență</p>
                    <p className="mt-1 text-xl font-semibold">Ridicată</p>
                  </div>
                  <div className="rounded-3xl bg-white/7 p-5 ring-1 ring-white/10">
                    <BadgeCheck className="mb-3 h-5 w-5 text-zinc-300" />
                    <p className="text-sm text-zinc-400">Scor final</p>
                    <p className="mt-1 text-xl font-semibold">{selectedOffer.match}/100</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
