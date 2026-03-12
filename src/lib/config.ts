export const WALLETS = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    address: process.env.NEXT_PUBLIC_BTC_ADDRESS || 'bc1q0dly0gy6zvsqudx7cxh56auwjhg43wylt4xwya',
  },
  {
    name: 'Tether (ERC20)',
    symbol: 'USDT',
    address: process.env.NEXT_PUBLIC_USDT_ERC20_ADDRESS || '0x3e09cE4993814b438e220bE2bD04e5fd4C166179',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    address: process.env.NEXT_PUBLIC_ETH_ADDRESS || '0x3e09cE4993814b438e220bE2bD04e5fd4C166179',
  },
  {
    name: 'Ripple',
    symbol: 'XRP',
    address: process.env.NEXT_PUBLIC_XRP_ADDRESS || 'rag4voiXTrLszwWVQDngtABMMBZTgBzWsM',
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    address: process.env.NEXT_PUBLIC_SOL_ADDRESS || '9fY3jXfbb4KQ6yzorKRqaKF2hzKz4jT4oFhfd4j3Kn78',
  },
  {
    name: 'Tether (BEP20)',
    symbol: 'USDT-BSC',
    address: process.env.NEXT_PUBLIC_USDT_BEP20_ADDRESS || '0x3e09cE4993814b438e220bE2bD04e5fd4C166179',
  },
];

export const EMAILJS_CONFIG = {
  serviceId: process.env.EMAILJS_SERVICE_ID,
  templateId: process.env.EMAILJS_TEMPLATE_ID,
  publicKey: process.env.EMAILJS_PUBLIC_KEY,
};


