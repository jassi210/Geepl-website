'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight, TrendingUp, DollarSign, Leaf, Zap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function RoiCalculator() {
  const [loadKw, setLoadKw] = useState<number>(300);
  const [outageHoursPerDay, setOutageHoursPerDay] = useState<number>(3);
  const [dieselRatePerLitre, setDieselRatePerLitre] = useState<number>(92);
  const [peakTariff, setPeakTariff] = useState<number>(11);

  // DG typically consumes ~0.28 to 0.30 litres diesel per kWh
  const dieselPerKwh = 0.28;
  const dgCostPerKwh = dieselPerKwh * dieselRatePerLitre; // e.g. 0.28 * 92 = ~25.76 INR / kWh

  // Daily energy needed during outage
  const dailyOutageKwh = loadKw * outageHoursPerDay;
  const annualOutageKwh = dailyOutageKwh * 365;

  // DG generation annual cost
  const annualDgCost = annualOutageKwh * dgCostPerKwh;

  // BESS charging cost (assuming charging at off-peak grid rate ~INR 6/kWh with 88% roundtrip efficiency)
  const bessChargingRate = 6.5;
  const bessRte = 0.88;
  const effectiveBessCostPerKwh = bessChargingRate / bessRte;
  const annualBessCost = annualOutageKwh * effectiveBessCostPerKwh;

  // Annual Net Operational Savings
  const annualFuelSavings = Math.max(0, annualDgCost - annualBessCost);

  // Peak Shaving additional savings (assuming 2 hours peak load reduction daily at delta peakTariff - baseRate)
  const peakShavingKwh = loadKw * 2 * 300; // 300 working days
  const peakSavings = peakShavingKwh * Math.max(0, peakTariff - 6.5);

  const totalAnnualSavings = annualFuelSavings + peakSavings;

  // Carbon reduction (approx 2.68 kg CO2 per litre of diesel)
  const annualDieselLitres = annualOutageKwh * dieselPerKwh;
  const co2ReductionTons = (annualDieselLitres * 2.68) / 1000;

  // Recommended BESS sizing
  const recommendedCapacityKwh = Math.round(loadKw * Math.max(2, outageHoursPerDay * 1.25));

  // Approx BESS CapEx (approx 15,000 INR per kWh installed turnkey)
  const estimatedCapex = recommendedCapacityKwh * 15000;
  const paybackYears = (estimatedCapex / totalAnnualSavings).toFixed(1);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-white">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Financial Model
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            BESS vs Diesel Generator ROI Calculator
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Simulate your operational cost reduction, diesel displacement, and estimated payback period.
          </p>
        </div>
        <div className="badge badge-success gap-1.5 py-3 px-4 font-semibold text-xs">
          <ShieldCheck className="w-3.5 h-3.5" />
          Based on Greater Noida Gigafactory LFP Specs
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Average Facility Load */}
          <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-slate-200">
                Connected / Critical Load (kW)
              </label>
              <span className="badge badge-outline border-emerald-500 text-emerald-400 font-mono font-bold">
                {loadKw} kW
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="2000"
              step="50"
              value={loadKw}
              onChange={(e) => setLoadKw(Number(e.target.value))}
              className="range range-success range-sm w-full"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>50 kW (SME / Clinic)</span>
              <span>1000 kW (Mid Industry)</span>
              <span>2000 kW (Heavy Plant)</span>
            </div>
          </div>

          {/* Daily DG / Outage Runtime */}
          <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-slate-200">
                Daily Grid Interruption or DG Running Hours
              </label>
              <span className="badge badge-outline border-emerald-500 text-emerald-400 font-mono font-bold">
                {outageHoursPerDay} hrs / day
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="12"
              step="0.5"
              value={outageHoursPerDay}
              onChange={(e) => setOutageHoursPerDay(Number(e.target.value))}
              className="range range-success range-sm w-full"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>1 hr (Minor Outages)</span>
              <span>6 hrs (Industrial Feeder)</span>
              <span>12 hrs (Remote / Island)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Diesel Price */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Diesel Price (₹ / Litre)
              </label>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-400">₹</span>
                <input
                  type="number"
                  min="70"
                  max="130"
                  value={dieselRatePerLitre}
                  onChange={(e) => setDieselRatePerLitre(Number(e.target.value))}
                  className="input input-sm input-bordered bg-slate-900 border-slate-700 text-white w-full focus:border-emerald-500 font-semibold"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1.5">
                Current DG cost: ~₹{dgCostPerKwh.toFixed(1)}/kWh
              </p>
            </div>

            {/* Grid Peak Tariff */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Grid Peak TOD Tariff (₹ / kWh)
              </label>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-400">₹</span>
                <input
                  type="number"
                  min="6"
                  max="20"
                  value={peakTariff}
                  onChange={(e) => setPeakTariff(Number(e.target.value))}
                  className="input input-sm input-bordered bg-slate-900 border-slate-700 text-white w-full focus:border-emerald-500 font-semibold"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1.5">Off-peak rate assumed ₹6.5/kWh</p>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 p-6 rounded-2xl border border-emerald-500/30">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-emerald-400 mb-1">
              Estimated Financial Benefit
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white">
              ₹{(totalAnnualSavings / 100000).toFixed(2)} Lakhs
              <span className="text-xs font-normal text-slate-400 block sm:inline sm:ml-2">
                / year saved
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 my-6">
              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  Estimated Payback
                </div>
                <div className="text-xl font-bold text-emerald-300 font-mono">
                  {paybackYears} Years
                </div>
                <div className="text-[10px] text-slate-400">vs 15+ yr lifespan</div>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                  <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                  CO₂ Abatement
                </div>
                <div className="text-xl font-bold text-emerald-300 font-mono">
                  {co2ReductionTons.toFixed(1)} MT
                </div>
                <div className="text-[10px] text-slate-400">per annum offset</div>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
              <div className="flex justify-between">
                <span className="text-slate-400">Recommended BESS Size:</span>
                <span className="font-bold text-white font-mono">{recommendedCapacityKwh} kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Displaced Diesel Fuel:</span>
                <span className="font-bold text-emerald-400 font-mono">
                  {Math.round(annualDieselLitres).toLocaleString()} L / yr
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Recommended Model:</span>
                <span className="font-bold text-white">
                  {recommendedCapacityKwh <= 1000
                    ? `StorEDGE 0.25 (${Math.ceil(recommendedCapacityKwh / 250)} units)`
                    : `StorEDGE 5.0 Containerised`}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-800 flex flex-col gap-2">
            <Link
              href="/contact?type=roi_consultation"
              className="btn btn-primary bg-emerald-600 hover:bg-emerald-500 border-none text-white w-full rounded-xl gap-2 font-bold shadow-lg shadow-emerald-700/30"
            >
              Request Custom Feasibility Study
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-[11px] text-center text-slate-400">
              Zero obligation • On-site energy audit available across India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

