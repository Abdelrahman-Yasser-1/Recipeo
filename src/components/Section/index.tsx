import React from "react";

interface SectionProps {
  children?: React.ReactNode;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  containerClassName?: string;
  headerClassName?: string;
}

export default React.memo((props: SectionProps) => {
  const { children, icon, title, subtitle, containerClassName, headerClassName } = props;
  return (
    <section className={containerClassName}>
      <header className={`sticky top-[3px] z-40 mb-1 flex items-start gap-2 bg-background py-2 bg-white ${headerClassName}`}>
        <div className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-lg border bg-slate-100 text-primary">
          {icon}
        </div>
        <div>
          <h2 className="font-bold">{title}</h2>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </header>
      {children}
    </section>
  );
});
