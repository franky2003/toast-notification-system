import { ToastProvider } from '../context/ToastContext'
import { ToastContainer } from '../components/ToastContainer'
import ToastDemo from '../demo'

export default function Page() {
  return (
    <ToastProvider>
      <main className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center p-4">
        <ToastDemo />
        <ToastContainer />
      </main>
    </ToastProvider>
  )
}