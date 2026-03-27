import {
  BarChart3,
  Bell,
  TrendingUp,
  Zap,
  Mail,
  Users,
  Globe,
  Shield,
  Calendar,
  DollarSign,
  Target,
  Settings,
  Database,
  Clock,
  Search,
  Smartphone,
  PieChart,
  ArrowUpRight,
  Layers,
  MousePointerClick,
  Send,
  type LucideIcon,
} from "lucide-react";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import AnimateIn from "@/components/ui/AnimateIn";

const ICON_MAP: Record<string, LucideIcon> = {
  "bar-chart-3": BarChart3,
  bell: Bell,
  "trending-up": TrendingUp,
  zap: Zap,
  mail: Mail,
  users: Users,
  globe: Globe,
  shield: Shield,
  calendar: Calendar,
  "dollar-sign": DollarSign,
  target: Target,
  settings: Settings,
  database: Database,
  clock: Clock,
  search: Search,
  smartphone: Smartphone,
  "pie-chart": PieChart,
  "arrow-up-right": ArrowUpRight,
  layers: Layers,
  "mouse-pointer-click": MousePointerClick,
  send: Send,
};

type Feature = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureGrid({
  label,
  heading,
  subtitle,
  features,
  columns = 3,
  dark = false,
}: {
  label?: string;
  heading?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3;
  dark?: boolean;
}) {
  return (
    <section className={clsx("py-20 md:py-28", dark ? "bg-brand-navy" : "bg-white")}>
      <Container>
        {heading && (
          <SectionHeading
            label={label}
            heading={heading}
            subtitle={subtitle}
            dark={dark}
          />
        )}
        <div
          className={clsx(
            "grid gap-6 md:gap-8",
            columns === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {features.map((feature, i) => {
            const Icon = ICON_MAP[feature.icon] || Zap;
            return (
              <AnimateIn key={feature.title} delay={i * 0.1}>
              <Card
                variant={dark ? "dark" : "light"}
                hover
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-cyan/10">
                  <Icon size={24} className="text-brand-cyan" />
                </div>
                <h3
                  className={clsx(
                    "mb-2 text-lg font-semibold",
                    dark ? "text-white" : "text-neutral-900"
                  )}
                >
                  {feature.title}
                </h3>
                <p
                  className={clsx(
                    "text-sm leading-relaxed",
                    dark ? "text-neutral-300" : "text-neutral-500"
                  )}
                >
                  {feature.description}
                </p>
              </Card>
              </AnimateIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
