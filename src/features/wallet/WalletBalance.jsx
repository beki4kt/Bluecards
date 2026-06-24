import React, { useState } from 'react';
import Button from '../../components/ui/Button';

export default function WalletBalance({ balance, onFund, onCreateCard }) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <div className="bg-gradient-to-br from-[#4b6cb7] to-[#8a2be2] pt-8 pb-8 px-5 rounded-b-[2.5rem] shadow-md">
      
      {/* Wallet Balance Display Card */}
      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 mb-5 border border-white/10 mt-2">
        <p className="text-white/90 text-sm font-medium mb-1">Wallet Balance</p>
        <div className="flex items-center gap-3">
          <h1 className="text-white text-4xl font-bold tracking-tight">
            ${balance.toFixed(2)}
          </h1>
          <button 
            onClick={handleRefresh}
            className={`text-white hover:text-gray-200 transition-all focus:outline-none ${isRefreshing ? 'animate-spin' : ''}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
              <path d="M3 3v5h5"></path>
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
              <path d="M16 21v-5h5"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Action Buttons Row */}
      <div className="flex gap-3">
        <Button variant="primary" onClick={onFund}>
          <span>💰</span> Fund Wallet
        </Button>
        <Button variant="glass" onClick={onCreateCard}>
          + Create Card
        </Button>
      </div>
    </div>
  );
}