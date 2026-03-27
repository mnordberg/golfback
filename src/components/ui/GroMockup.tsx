export default function GroMockup() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>
            <span className="text-[10px] font-medium text-neutral-400">GolfBack GRO — Dynamic Pricing</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green" />
            <span className="text-[10px] text-brand-green">Live</span>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden w-36 shrink-0 border-r border-neutral-100 bg-neutral-50/50 p-3 xl:block">
            <div className="mb-4">
              <span className="text-[9px] font-semibold uppercase tracking-wider text-neutral-400">GRO</span>
            </div>
            {[
              { label: "Dashboard", active: false },
              { label: "Revenue Optimizer", active: false },
              { label: "High Demand Days", active: false },
              { label: "Dynamic Pricing", active: true },
              { label: "Admin Alerts", active: false },
              { label: "Marketing", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`mb-0.5 rounded px-2 py-1.5 text-[10px] leading-tight ${
                  item.active
                    ? "bg-brand-cyan/10 font-medium text-brand-teal"
                    : "text-neutral-400"
                }`}
              >
                {item.label}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-4">
            <div className="mb-4">
              <p className="text-[10px] text-neutral-400">Revenue Optimizer</p>
              <p className="text-sm font-semibold text-neutral-800">Dynamic Pricing Strategies</p>
            </div>

            {/* Season selector */}
            <div className="mb-3">
              <p className="mb-1 text-[9px] font-medium uppercase tracking-wider text-neutral-400">Season</p>
              <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2">
                <span className="text-[11px] font-medium text-neutral-700">01/01 – 12/31 · Peak Season</span>
                <svg className="h-3 w-3 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Time period */}
            <div className="mb-3">
              <p className="mb-1 text-[9px] font-medium uppercase tracking-wider text-neutral-400">Time Period</p>
              <div className="flex gap-1.5">
                {["6am–10am", "10am–2pm", "2pm–6pm"].map((t, i) => (
                  <div
                    key={t}
                    className={`flex-1 rounded-lg border px-2 py-1.5 text-center text-[10px] font-medium ${
                      i === 1
                        ? "border-brand-cyan/40 bg-brand-cyan/10 text-brand-teal"
                        : "border-neutral-200 bg-white text-neutral-400"
                    }`}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Rate plans */}
            <div className="mb-3">
              <p className="mb-1.5 text-[9px] font-medium uppercase tracking-wider text-neutral-400">Rate Plans</p>
              <div className="space-y-1">
                {[
                  { label: "Standard Rate", checked: true },
                  { label: "Senior Rate", checked: true },
                  { label: "Twilight Rate", checked: false },
                  { label: "Member Rate", checked: false },
                ].map((plan) => (
                  <div key={plan.label} className="flex items-center gap-2 rounded px-2 py-1">
                    <div className={`h-3 w-3 rounded-sm border ${plan.checked ? "border-brand-teal bg-brand-cyan/80" : "border-neutral-300 bg-white"} flex items-center justify-center`}>
                      {plan.checked && (
                        <svg className="h-2 w-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-[10px] text-neutral-600">{plan.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk level slider */}
            <div className="mb-3">
              <div className="mb-1.5 flex items-center justify-between">
                <p className="text-[9px] font-medium uppercase tracking-wider text-neutral-400">Risk Level</p>
                <span className="rounded-full bg-brand-cyan/10 px-2 py-0.5 text-[9px] font-semibold text-brand-teal">Level 2</span>
              </div>
              <div className="relative mb-2 h-1.5 w-full rounded-full bg-neutral-200">
                <div className="absolute left-0 top-0 h-full w-2/5 rounded-full bg-gradient-to-r from-brand-teal to-brand-cyan" />
                <div className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-brand-cyan bg-white shadow" style={{ left: "calc(40% - 6px)" }} />
              </div>
              <div className="flex justify-between text-[8px] text-neutral-400">
                <span>Conservative</span><span>Moderate</span><span>Aggressive</span>
              </div>
            </div>

            {/* Impact summary */}
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-lg border border-neutral-100 bg-neutral-50 p-2 text-center">
                <p className="text-[8px] uppercase tracking-wider text-neutral-400">Low Util.</p>
                <p className="text-sm font-bold text-brand-amber">−18%</p>
                <p className="text-[8px] text-neutral-400">price drop</p>
              </div>
              <div className="rounded-lg border border-neutral-100 bg-neutral-50 p-2 text-center">
                <p className="text-[8px] uppercase tracking-wider text-neutral-400">Base Rate</p>
                <p className="text-sm font-bold text-neutral-700">$52</p>
                <p className="text-[8px] text-neutral-400">standard</p>
              </div>
              <div className="rounded-lg border border-neutral-100 bg-neutral-50 p-2 text-center">
                <p className="text-[8px] uppercase tracking-wider text-neutral-400">High Util.</p>
                <p className="text-sm font-bold text-brand-green">+32%</p>
                <p className="text-[8px] text-neutral-400">price lift</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -inset-2 -z-10 rounded-2xl bg-brand-cyan/5 blur-2xl" />
    </div>
  );
}
