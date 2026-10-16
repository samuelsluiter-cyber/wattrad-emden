import React from 'react';
import { REVIEWS } from '@/data/reviews';
import { StarIcon, BikeIcon } from './Icons';

export function ReviewsSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <StarIcon className="w-3.5 h-3.5 text-amber-500" />
            <span>Kundenstimmen aus Emden & Umgebung</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Was Radlerinnen & Radler über WattRad sagen
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Echtes Feedback von Menschen, die täglich auf zwei Rädern durch Ostfriesland fahren.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
            >
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-3 text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs text-slate-400 font-medium ml-1.5">{review.date}</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &bdquo;{review.comment}&ldquo;
                </p>
              </div>

              {/* Author & Bike Details */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="font-bold text-sm text-slate-900">{review.author}</div>
                <div className="text-[11px] text-slate-500 font-medium">{review.role}</div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 mt-2 bg-emerald-50 px-2 py-1 rounded-md">
                  <BikeIcon className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{review.bikeType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
