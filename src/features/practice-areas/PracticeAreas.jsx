function PracticeAreas() {
  const areas = [
    {
      title: 'Real Estate',
      description: 'Practice area lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: '🏠',
    },
    {
      title: 'Estate Planning',
      description: 'Practice area sed do eiusmod tempor incididunt ut labore et dolore.',
      icon: '📋',
    },
    {
      title: 'Estate Administration',
      description: 'Practice area ut enim ad minim veniam, quis nostrud exercitation.',
      icon: '⚖️',
    },
    {
      title: 'Family Law',
      description: 'Practice area ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      icon: '👨‍👩‍👧‍👦',
    },
    {
      title: 'Adoption',
      description: 'Practice area duis aute irure dolor in reprehenderit in voluptate.',
      icon: '❤️',
    },
    {
      title: 'Bankruptcy',
      description: 'Practice area velit esse cillum dolore eu fugiat nulla pariatur.',
      icon: '💼',
    },
    {
      title: 'Personal Injury',
      description: 'Practice area excepteur sint occaecat cupidatat non proident.',
      icon: '🏥',
    },
  ]

  return (
    <section id="practice-areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Areas of Practice
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Practice areas section lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-accent"
            >
              <div className="text-5xl mb-4">{area.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                {area.title}
              </h3>
              <p className="text-gray-700 mb-4">{area.description}</p>
              <button className="text-accent font-semibold hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PracticeAreas
