import React from 'react';
import TimerCountdown from '@/ui/timer/payout-distribution';
import MrbBalance from '@/ui/my-balance/mrbbalance';
import TotalPayout from '@/ui/total-payout/payout';
import { PoolProvider } from '@/context/PoolContext';
import Pool from '@/ui/bitcoin-pool-balance/pool';

const Staking: React.FC = () => {
  return (
    
      <PoolProvider>
        <div className="home-main-container bg-white rounded-md mt-top">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>
            <div className="ml-left">⚡ <span className="text-gray-500">Bitcoin Lightning Address</span> : <span className="font-bold tracking-wide">babaji@satoshi</span></div>
            <div>
              <h3 className="ml-left mt-stakingpoolmargin text-lg font-semibold text-gray-500">Bitcoin Staking Pool:</h3>
            </div>
            <Pool />
            <div className="flex items-center justify-start">
              <div>
                <div>
                  <h3 className="ml-left mt-stakingpoolmargin text-lg font-semibold text-gray-500">Payout Distribution in:</h3>
                </div>
                <div className="ml-timermargin mt-top">
                  <TimerCountdown />
                </div>
              </div>
              <div className="ml-negativeleftmarginpayout">
                <div>
                  <h3 className="ml-left mt-stakingpoolmargin text-lg font-semibold text-gray-500">Total Next Payout:</h3>
                </div>
                <div className="ml-timermargin mt-top">
                  <TotalPayout />
                </div>
              </div>
              <div className="ml-negativeleftmargin">
                <div>
                  <h3 className="ml-left mt-stakingpoolmargin text-lg font-semibold text-gray-500">MRB Balance:</h3>
                </div>
                <div className="ml-timermargin mt-top">
                  <MrbBalance />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PoolProvider>
   

  );
};

export default Staking;
