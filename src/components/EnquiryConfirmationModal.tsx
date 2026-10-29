import React from 'react';
import { CheckCircle2, X, Calendar, User, Mail, Phone, BookOpen, Clock, ShieldCheck, Download } from 'lucide-react';
import { EnquiryFormData } from '../types';
import { COURSES_DATA } from '../data/courses';

interface EnquiryConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: EnquiryFormData | null;
  referenceNumber: string;
}

export const EnquiryConfirmationModal: React.FC<EnquiryConfirmationModalProps> = ({
  isOpen,
  onClose,
  data,
  referenceNumber,
}) => {
  if (!isOpen || !data) return null;

  const selectedCourse = COURSES_DATA.find((c) => c.id === data.program);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirmation-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in"
    >
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
        
        {/* Top Success Badge */}
        <div className="text-center pb-4 border-b border-slate-100">
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
            Demo Submission Successful
          </span>
          <h2 id="confirmation-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
            Enquiry Received!
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Reference ID: <span className="font-mono font-bold text-slate-800">{referenceNumber}</span>
          </p>
        </div>

        {/* Demo Notice Note */}
        <div className="my-4 p-3 bg-blue-50/80 rounded-xl border border-blue-200 text-xs text-blue-900 leading-relaxed">
          <div className="flex items-center gap-1.5 font-bold mb-0.5">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Interactive Demo Receipt</span>
          </div>
          Because this is a fictional portfolio website, no real email or SMS was transmitted. In a real institutional platform, an admissions advisor would review your preferences and contact you within 24 hours.
        </div>

        {/* Summary Details */}
        <div className="space-y-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-700">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-slate-500">Learner Name:</span>
            <span className="font-bold text-slate-900">{data.fullName}</span>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-slate-500">Contact Email:</span>
            <span className="font-medium text-slate-900">{data.email}</span>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-slate-500">Phone Number:</span>
            <span className="font-medium text-slate-900">{data.phone}</span>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-slate-500">Program Track:</span>
            <span className="font-bold text-blue-600">
              {selectedCourse ? selectedCourse.title : 'General Academic Advice'}
            </span>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-slate-500">Preferred Timing:</span>
            <span className="capitalize font-medium text-slate-900">
              {data.preferredMode.replace('-', ' ')}
            </span>
          </div>

          {data.message && (
            <div className="pt-1">
              <span className="text-slate-500 block mb-1">Your Questions / Notes:</span>
              <p className="p-2 bg-white rounded border border-slate-200 text-slate-600 italic">
                "{data.message}"
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
          >
            Close Receipt
          </button>
        </div>

      </div>
    </div>
  );
};
