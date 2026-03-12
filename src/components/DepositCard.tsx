interface CardProps {
  title: string;
  amount: number;
}

export default function Card({ title, amount }: CardProps) {
  return (
    <div className="bg-[#0D2248] rounded-2xl p-4 text-center shadow-md border border-green-400">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <p className="text-2xl font-bold text-green-400">${amount.toFixed(2)}</p>
    </div>
  );
}
