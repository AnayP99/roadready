import React from 'react';

export default function Loading() {
  return (
    <div className="w-full min-h-[50vh] flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-200">
      <div className="w-12 h-12 border-4 border-navy-200 border-t-brand-500 rounded-full animate-spin mb-4" />
      <span className="text-sm font-semibold text-navy-600 font-display">
        Shifting into gear...
      </span>
    </div>
  );
}
