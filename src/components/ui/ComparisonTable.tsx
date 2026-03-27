import { Check, X } from "lucide-react";
import clsx from "clsx";

type Row = {
  feature: string;
  golfback: boolean;
  competitor: boolean;
};

export default function ComparisonTable({
  title,
  golfbackLabel = "GolfBack",
  competitorLabel = "POS Built-in",
  rows,
  dark = false,
}: {
  title?: string;
  golfbackLabel?: string;
  competitorLabel?: string;
  rows: Row[];
  dark?: boolean;
}) {
  return (
    <div className="overflow-x-auto">
      {title && (
        <h3
          className={clsx(
            "mb-6 text-xl font-bold",
            dark ? "text-white" : "text-neutral-900"
          )}
        >
          {title}
        </h3>
      )}
      <table className="w-full text-left">
        <thead>
          <tr
            className={clsx(
              "border-b text-sm font-semibold uppercase tracking-wider",
              dark ? "border-brand-mid text-neutral-400" : "border-neutral-200 text-neutral-500"
            )}
          >
            <th className="pb-3 pr-4">Feature</th>
            <th className="pb-3 px-4 text-center text-brand-cyan">
              {golfbackLabel}
            </th>
            <th className="pb-3 pl-4 text-center">{competitorLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={clsx(
                "border-b transition-colors",
                dark
                  ? "border-brand-mid/50 hover:bg-brand-mid/20"
                  : "border-neutral-100 hover:bg-neutral-50",
                i % 2 === 0
                  ? dark
                    ? "bg-brand-dark/50"
                    : "bg-neutral-50/50"
                  : ""
              )}
            >
              <td
                className={clsx(
                  "py-3 pr-4 text-sm",
                  dark ? "text-neutral-300" : "text-neutral-700"
                )}
              >
                {row.feature}
              </td>
              <td className="px-4 py-3 text-center">
                {row.golfback ? (
                  <Check
                    size={18}
                    className="mx-auto text-brand-green"
                    aria-label="Yes"
                  />
                ) : (
                  <X
                    size={18}
                    className="mx-auto text-neutral-400"
                    aria-label="No"
                  />
                )}
              </td>
              <td className="py-3 pl-4 text-center">
                {row.competitor ? (
                  <Check
                    size={18}
                    className="mx-auto text-brand-green"
                    aria-label="Yes"
                  />
                ) : (
                  <X
                    size={18}
                    className="mx-auto text-neutral-400"
                    aria-label="No"
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
