import humanize from 'humanize-string'

export function booleanFormatter(value: boolean) {
  return value ? (
    <i className="material-symbols-outlined text-gray-500">done</i>
  ) : (
    <i className="material-symbols-outlined text-gray-500">close</i>
  )
}

export const enumFormatter = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const APP_NAMES = {
  stalled: { text: 'Sin procesar', color: 'bg-gray-200' },
  queued: { text: 'En cola', color: 'bg-purple-200' },
  generating: { text: 'Generando', color: 'bg-cyan-200' },
  uploading: { text: 'Subiendo', color: 'bg-yellow-200' },
  published: { text: 'Publicada', color: 'bg-green-200' },
  waiting: { text: 'En espera', color: 'bg-orange-200' },
}
type IAppStatus = keyof typeof APP_NAMES
export function appStatusFormatter(state: IAppStatus) {
  const selected = APP_NAMES[state]
  return (
    <span
      className={`${selected.color} text-black rounded-md p-2 text-sm whitespace-nowrap`}
    >
      {selected.text}
    </span>
  )
}

const SUBSCRIPTION_NAMES = {
  incomplete: { text: 'Incompleta', color: 'bg-gray-200' },
  incomplete_expired: { text: 'Incompleta expirada', color: 'bg-purple-200' },
  trialing: { text: 'En prueba', color: 'bg-yellow-200' },
  past_due: { text: 'Vencida', color: 'bg-yellow-300' },
  active: { text: 'Activa', color: 'bg-green-200' },
  canceled: { text: 'Cancelada', color: 'bg-orange-200' },
  unpaid: { text: 'Sin Pagar', color: 'bg-red-200' },
}
type ISubscriptionStatus = keyof typeof SUBSCRIPTION_NAMES
export function susbcriptionStatusFormatter(state: ISubscriptionStatus) {
  const selected = SUBSCRIPTION_NAMES[state]
  return (
    <span
      className={`${selected.color} text-black rounded-md p-2 text-sm whitespace-nowrap`}
    >
      {selected.text}
    </span>
  )
}

const INVOICE_NAMES = {
  draft: { text: 'Borrador', color: 'bg-gray-200' },
  open: { text: 'Esperando pago', color: 'bg-cyan-200' },
  paid: { text: 'Pagada', color: 'bg-green-200' },
  uncollectible: { text: 'Sin pagar', color: 'bg-red-200' },
  void: { text: 'Vacía', color: 'bg-orange-200' },
}
type InvoiceStatus = keyof typeof INVOICE_NAMES
export function invoiceStatusFormatter(state: InvoiceStatus) {
  const selected = INVOICE_NAMES[state]
  return (
    <span
      className={`${selected.color} text-black rounded-md p-2 text-sm whitespace-nowrap`}
    >
      {selected.text}
    </span>
  )
}
