import React from 'react';

export default function InboxButton() {
  return (
    <button className="fixed bottom-14 right-6 sm:absolute sm:bottom-16 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex items-center pr-5 pl-1.5 py-1.5 gap-3 cursor-pointer hover:shadow-[0_4px_25px_rgba(0,0,0,0.15)] active:scale-95 transition-all border border-gray-50 z-40">
      <div className="bg-[#0088cc] rounded-full p-2.5 text-white flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </div>
      <span className="font-semibold text-gray-700 text-sm">Inbox</span>
    </button>
  );
}