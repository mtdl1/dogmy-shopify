"use client"

import type React from "react"

import { X } from "lucide-react"
import { useEffect, useState } from "react"

export default function DiscountPopup() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    // Mostrar o popup após 5 segundos
    const timer = setTimeout(() => {
      setOpen(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode implementar a lógica para enviar os dados do formulário
    console.log({ email, phone })
    setOpen(false)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={() => setOpen(false)} // Fechar ao clicar fora
    >
      <div
        className="relative bg-white max-w-3xl w-full rounded-3xl overflow-hidden shadow-xl animate-fadeIn"
        style={{ animation: "fadeIn 0.3s ease-out" }}
        onClick={(e) => e.stopPropagation()} // Evitar que cliques no popup fechem ele
      >
        <div className="flex flex-col md:flex-row">
          {/* Lado esquerdo - Formulário */}
          <div className="p-8 md:p-10 flex-1">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100 z-10 bg-white/80 shadow-sm"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-2xl md:text-3xl font-bold">Ganhe 5% OFF</h2>
            <p className="text-xl md:text-2xl font-medium mb-4">na primeira compra!</p>

            <p className="text-sm mb-6">
              receba em seu e-mail o cupom,
              <br />
              novidades de lançamentos
              <br />e também benefícios exclusivos!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="email *"
                  required
                  className="w-full border-b border-gray-300 py-2 focus:border-primary focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  Celular
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">📱</span>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="seu celular (com DDD)"
                    className="w-full border-b border-gray-300 py-2 focus:border-primary focus:outline-none"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#7c4dff] text-white py-3 rounded-full font-medium hover:bg-[#6a3de8] transition-colors"
              >
                ENVIAR
              </button>
            </form>
          </div>

          {/* Lado direito - Imagem/Placeholder */}
          <div className="hidden md:block relative w-full md:w-[45%] bg-gradient-to-br from-[#8be8e5] to-[#39b7dd] p-10">
            <div className="flex flex-col items-center justify-center h-full text-white">
              <div className="text-[120px] font-bold leading-none">
                5<span className="text-[80px]">%</span>
              </div>
              <div className="text-[32px] font-bold leading-none">OFF</div>
              <div className="text-[24px] font-bold mt-4 text-center leading-tight">
                NA PRIMEIRA
                <br />
                COMPRA
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}