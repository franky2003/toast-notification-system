import { useEffect } from 'react'
import { AlertCircle, CheckCircle2, Info, X, XCircle } from 'lucide-react'
import { cn } from '../lib/utils'

const icons = {
  success: CheckCircle2,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
}

const variants = {
  success: 'bg-green-500 text-white',
  error: 'bg-red-500 text-white',
  warning: 'bg-yellow-500 text-white',
  info: 'bg-blue-500 text-white',
}

export function Toast({ id, message, type, onRemove }) {
  const Icon = icons[type]

  useEffect(() => {
    return () => {
      // Cleanup if needed
    }
  }, [id])

  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-lg px-4 py-3 shadow-lg',
        'animate-in fade-in slide-in-from-right-5',
        variants[type]
      )}
      role="alert"
    >
      <Icon className="h-5 w-5" />
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={() => onRemove(id)}
        className="ml-auto rounded-full p-1 hover:bg-white/20"
        aria-label="Close notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}