import { TrendingUp, Users, Globe, DollarSign } from "lucide-react";
import { useEffect, useRef } from "react";

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Active Brokers",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      value: "$2.4B+",
      label: "Monthly Volume",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      value: "120+",
      label: "Countries",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      value: "99.9%",
      label: "Uptime SLA",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group text-center"
              >
                <div className="mb-6 inline-flex p-6 rounded-2xl bg-card border border-border group-hover:border-primary/50 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                    <Icon size={40} className="text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <div className={`text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
