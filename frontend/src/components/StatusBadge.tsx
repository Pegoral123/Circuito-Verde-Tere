interface StatusBadgeProps {
  status: 'ABERTA' | 'FECHADA' | 'MANUTENÇÃO';
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const styles = {
    ABERTA: 'bg-green-100 text-green-800 border-green-300',
    FECHADA: 'bg-red-100 text-red-800 border-red-300',
    MANUTENÇÃO: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${styles[status]}`}>
      {status}
    </span>
  );
}
