import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const titleColor = light ? 'text-wood-50' : 'text-bark-900';
  const eyebrowColor = light ? 'text-wood-300' : 'text-wood-500';
  const subtitleColor = light ? 'text-wood-100/80' : 'text-bark-600';
  const dividerColor = light ? 'bg-wood-400' : 'bg-wood-500';

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-sm font-medium tracking-[0.15em] uppercase ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      )}
      <div className={`flex flex-col gap-2 ${alignClass}`}>
        <h2 className={`text-4xl md:text-5xl leading-tight ${titleColor}`}>
          {title}
        </h2>
        <div className={`h-0.5 w-12 ${dividerColor}`} />
      </div>
      {subtitle && (
        <p className={`text-lg leading-relaxed max-w-2xl ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
