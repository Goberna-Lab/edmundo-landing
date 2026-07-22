export interface Motivo {
  id: string
  titulo: string
  texto: string
}

export const loQueMeMueveContent = {
  kicker: 'Lo que me mueve',
  titulo: 'Por qué doy este paso',
  cita: '[[mueve-cita]]',
  motivos: [
    { id: 'escuchar', titulo: '[[mueve-1-titulo]]', texto: '[[mueve-1-texto]]' },
    { id: 'ordenar', titulo: '[[mueve-2-titulo]]', texto: '[[mueve-2-texto]]' },
    { id: 'resultados', titulo: '[[mueve-3-titulo]]', texto: '[[mueve-3-texto]]' },
  ] satisfies Motivo[],
}
