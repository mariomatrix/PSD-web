import { CloudSun, Anchor, Clock } from 'lucide-react'

interface ServiceBarProps {
  dict: {
    serviceBar: { weather: string; status: string; hours: string }
  }
}

export default function ServiceBar({ dict }: ServiceBarProps) {
  return (
    <section className="bg-marine text-white py-5 relative z-30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-light tracking-wide">
          <div className="flex items-center gap-3">
            <CloudSun className="w-5 h-5 text-gold" />
            <span>{dict.serviceBar.weather}</span>
          </div>

          <div className="hidden md:block w-px h-6 bg-white/20" />

          <div className="flex items-center gap-3">
            <Anchor className="w-5 h-5 text-gold" />
            <span>{dict.serviceBar.status}</span>
          </div>

          <div className="hidden md:block w-px h-6 bg-white/20" />

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-gold" />
            <span>{dict.serviceBar.hours}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
