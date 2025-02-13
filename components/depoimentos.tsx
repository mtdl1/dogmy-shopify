export default function Depoimentos() {
  const testimonials = [
    {
      name: "Ana Maria",
      image: "/Depoimento_1.png",
      text: "Meu cachorro estava com o pelo meio sem brilho e caindo muito. Desde que comecei a dar o suplemento da Dogmy, o pelo dele está mais macio e parou de cair. Super recomendo!",
    },
    {
      name: "João Paulo",
      image: "/Depoimento_2.png",
      text: "Meu cachorro estava com o pelo meio sem brilho e caindo muito. Desde que comecei a dar o suplemento da Dogmy, o pelo dele está mais macio e parou de cair. Super recomendo!",
    },
    {
      name: "Carla Souza",
      image: "/Depoimento_3.png",
      text: "Meu cachorro estava com o pelo meio sem brilho e caindo muito. Desde que comecei a dar o suplemento da Dogmy, o pelo dele está mais macio e parou de cair. Super recomendo!",
    },
  ]

  return (
    <section className="bg-[#1B4538] py-16 mt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-[#E5D6C5] text-center mb-12">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`Foto de ${testimonial.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white text-center text-sm mb-4 max-w-xs">{testimonial.text}</p>
              <span className="text-[#E5D6C5] uppercase text-sm tracking-wider">{testimonial.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

