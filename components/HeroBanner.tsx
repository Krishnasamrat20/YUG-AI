import React from 'react';

export default function HeroBanner({
  title,
  subtitle,
  image,
  height = 160
}: {
  title?: string;
  subtitle?: string;
  image?: string;
  height?: number;
}) {
  return (
    <div className="relative rounded-lg overflow-hidden mb-6">
      <div
        style={{
          height: height,
          backgroundImage: image ? `url('${image}')` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className="w-full image-transition bg-gradient-to-br from-transparent to-transparent relative"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(7,12,22,0.6), rgba(7,12,22,0.6))`
          }}
        />
        <svg
          className="absolute right-[-6%] top-0 h-full w-[60%] opacity-10"
          viewBox="0 0 600 400"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#B58F2A" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <rect width="600" height="400" fill="url(#g1)" />
        </svg>
      </div>

      {(title || subtitle) && (
        <div className="absolute left-6 bottom-6 text-white">
          {title && <h2 className="text-2xl font-semibold">{title}</h2>}
          {subtitle && <p className="mt-1 text-sm text-slate-200">{subtitle}</p>}
        </div>
      )}
    </div>
  );
}
