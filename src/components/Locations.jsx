import React from 'react'

const sampleLocations = [
  {
    id: '1',
    name: 'Half Way Tree',
    address: '12 Constant Spring Rd, Kingston',
    imageUrl: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1200&auto=format&fit=crop',
    slug: 'half-way-tree'
  },
  {
    id: '2',
    name: 'Downtown Kingston',
    address: '17 Harbour St, Kingston',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    slug: 'downtown-kingston'
  },
  {
    id: '3',
    name: 'Mobay Hip Strip',
    address: 'Gloucester Ave, Montego Bay',
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop',
    slug: 'mobay-hip-strip'
  }
]

export default function Locations() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4">Our Locations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleLocations.map((loc) => (
          <a
            key={loc.id}
            href={`#/location/${loc.slug}`}
            className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img src={loc.imageUrl} alt={loc.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
            </div>
            <div className="p-4">
              <h3 className="text-white font-bold text-lg leading-tight">{loc.name}</h3>
              <p className="text-white/70 text-sm mt-1">{loc.address}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
