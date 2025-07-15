import { Timeline } from '@/components/ui/timeline'
import React from 'react'

const Experience = () => {
  const experienceData = [
    {
      title: "Mayo 2025 - Actual",
      content: (
        <div>
          <h4 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
            Freelancer
          </h4>
          <p className="text-lg font-semibold text-neutral-600 dark:text-neutral-400 mb-4">
            Sistema para empresa dedicado al sector inmobiliario
          </p>
          <ul className="text-neutral-700 dark:text-neutral-300 space-y-2 mb-4">
            <li>• Stepper de 4 etapas con Zustand, validación con React Hook Form + Zod, rutas protegidas por roles y persistencia de estado.</li>
            <li>• Diversos flujos incluso implementando optimistic updates con React Query.</li>
            <li>• Dashboard con Recharts, filtros dinámicos persistentes por fecha/moneda, manejo de estados UI y validación de rangos de fechas.</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">React</span>
            <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm font-medium">Tailwind CSS</span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Zustand</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">React Query</span>
          </div>
        </div>
      ),
    },
    {
      title: "Marzo 2025",
      content: (
        <div>
          <h4 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
            Yacobian - Freelancer
          </h4>
          <p className="text-lg font-semibold text-neutral-600 dark:text-neutral-400 mb-4">
            Empresa de España dedicada al sector inmobiliario
          </p>
          <ul className="text-neutral-700 dark:text-neutral-300 space-y-2 mb-4">
            <li>• Desarrollo end-to-end de aplicación web mobile-first desde prototipos de Figma.</li>
            <li>• Dashboard personalizado, ofreciendo flexibilidad y autonomía al cliente en la gestión de contenido mediante operaciones CRUD.</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">React</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">Next.js</span>
            <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm font-medium">Tailwind CSS</span>
          </div>
        </div>
      ),
    },
    {
      title: "Abril 2024 - Feb 2025",
      content: (
        <div>
          <h4 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
            Tualo - Desarrollador Fullstack
          </h4>
          <p className="text-lg font-semibold text-neutral-600 dark:text-neutral-400 mb-4">
            Empresa de México dedicada a gestionar finanzas
          </p>
          <ul className="text-neutral-700 dark:text-neutral-300 space-y-2 mb-4">
            <li>• Desarrollo end-to-end de aplicación web mobile-first desde prototipos de Figma.</li>
            <li>• Dashboard personalizado, ofreciendo flexibilidad y autonomía al cliente en la gestión de contenido mediante operaciones CRUD.</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">React</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">Next.js</span>
            <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm font-medium">Tailwind CSS</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-dvh w-full flex items-center justify-center"
    >
      <Timeline data={experienceData} />
    </section>
  )
}

export default Experience