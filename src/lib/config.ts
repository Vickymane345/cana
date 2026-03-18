import image1 from "@/app/assets/wallets/btc.png";
import image2 from "@/app/assets/wallets/tether.png";
import image3 from "@/app/assets/wallets/etherium.png";
import image4 from "@/app/assets/wallets/xrp.png";
import image5 from "@/app/assets/wallets/solana.jpg";
export const WALLETS = [
  {
    name: 'Bitcoin',
    symbol: image1,
    address: process.env.NEXT_PUBLIC_BTC_ADDRESS || 'bc1q0dly0gy6zvsqudx7cxh56auwjhg43wylt4xwya',
  },
  {
    name: 'Tether (ERC20)',
    symbol: image2,
    address: process.env.NEXT_PUBLIC_USDT_ERC20_ADDRESS || '0x3e09cE4993814b438e220bE2bD04e5fd4C166179',
  },
  {
    name: 'Ethereum',
    symbol: image3,
    address: process.env.NEXT_PUBLIC_ETH_ADDRESS || '0x3e09cE4993814b438e220bE2bD04e5fd4C166179',
  },
  {
    name: 'Ripple',
    symbol: image4,
    address: process.env.NEXT_PUBLIC_XRP_ADDRESS || 'rag4voiXTrLszwWVQDngtABMMBZTgBzWsM',
  },
  {
    name: 'Solana',
    symbol: image5,
    address: process.env.NEXT_PUBLIC_SOL_ADDRESS || '9fY3jXfbb4KQ6yzorKRqaKF2hzKz4jT4oFhfd4j3Kn78',
  },
  {
    name: 'Tether (BEP20)',
    symbol: image2,
    address: process.env.NEXT_PUBLIC_USDT_BEP20_ADDRESS || '0x3e09cE4993814b438e220bE2bD04e5fd4C166179',
  },
];

export const EMAILJS_CONFIG = {
  serviceId: process.env.EMAILJS_SERVICE_ID,
  templateId: process.env.EMAILJS_TEMPLATE_ID,
  publicKey: process.env.EMAILJS_PUBLIC_KEY,
};
