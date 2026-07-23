import candidato from './assets/candidato.webp'
import ciudad from './assets/ciudad.webp'
import franja from './assets/franja.webp'

export interface Campo {
  id: string
  label: string
  /** El texto gris de adentro. No reemplaza al label: se ven los dos. */
  placeholder: string
  tipo: 'text' | 'email' | 'tel' | 'select' | 'textarea'
  requerido: boolean
  /** Solo para 'select'. */
  opciones?: string[]
}

export const formularioContent = {
  /** No se ve: el diseño no tiene título, pero la sección necesita nombre. */
  tituloAccesible: 'Sumate a la campaña',
  /** A dónde se postean los datos. Completar antes de publicar. */
  accion: '[[url-formulario]]',
  enviar: 'Quiero sumarme',

  campos: [
    {
      id: 'nombres',
      label: 'Nombres',
      placeholder: 'Tu nombre',
      tipo: 'text',
      requerido: true,
    },
    {
      id: 'apellidos',
      label: 'Apellidos',
      placeholder: 'Tus apellidos',
      tipo: 'text',
      requerido: true,
    },
    {
      id: 'correo',
      label: 'Correo',
      placeholder: 'tu@correo.com',
      tipo: 'email',
      requerido: true,
    },
    {
      id: 'telefono',
      label: 'Teléfono',
      placeholder: '+51 000 000 000',
      tipo: 'tel',
      requerido: false,
    },
    {
      id: 'motivo',
      label: 'Motivo del mensaje',
      placeholder: 'Seleccione',
      tipo: 'select',
      requerido: true,
      opciones: [
        'Quiero ser voluntario',
        'Tengo una propuesta',
        'Quiero invitarlo a mi barrio',
        'Otro',
      ],
    },
    {
      id: 'mensaje',
      label: 'Mensaje opcional',
      placeholder: 'Cuéntanos cómo te gustaría sumarte',
      tipo: 'textarea',
      requerido: false,
    },
  ] satisfies Campo[],

  imagenes: {
    candidato,
    altCandidato: 'Edmundo Del Águila con una lampa al hombro',
    ciudad,
    franja,
  },
}
