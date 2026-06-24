import React, { useState } from 'react';
import WalletBalance from './features/wallet/WalletBalance';
import CardList from './features/cards/CardList';
import InboxButton from './components/ui/InboxButton';
import Footer from './components/layout/Footer';

export default function App() {
  const [balance, setBalance] = useState(0.00);
  const [cards, setCards] = useState([]);

  const handleFundWallet = () => {
    setBalance(prev => prev + 50.00);
  };

  const handleCreateCard = () => {
    const cardCost = 10.00;
    if (balance >= cardCost) {
      setBalance(prev => prev - cardCost);
      setCards(prev => [
        ...prev,
        {
          id: Date.now(),
          last4: Math.floor(1000 + Math.random() * 9000),
          balance: 0.00
        }
      ]);
    } else {
      alert("Insufficient funds. Please fund your wallet first.");
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-[#f4f6f9] relative font-sans text-gray-800 pb-24 shadow-xl">
      <WalletBalance 
        balance={balance} 
        onFund={handleFundWallet} 
        onCreateCard={handleCreateCard} 
      />
      
      <CardList 
        cards={cards} 
        onCreateCard={handleCreateCard} 
      />
      
      <InboxButton />
      
      <Footer />
    </div>
  );
}