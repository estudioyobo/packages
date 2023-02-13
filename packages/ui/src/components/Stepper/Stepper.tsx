import './stepper.css'

interface StepperProps {
  steps: string[]
  current: number
}

function selectClass(step: number, current: number): string {
  if (step < current) {
    return 'stepper__item'
  } else if (step > current) {
    return 'stepper__item text-gray-400'
  } else {
    return 'stepper__item font-bold underline'
  }
}

const Stepper = ({ steps, current }: StepperProps) => {
  return (
    <div className="stepper">
      {steps.map((step, i) => (
        <span key={step} className={selectClass(i, current)}>
          {step}
        </span>
      ))}
    </div>
  )
}

export default Stepper
