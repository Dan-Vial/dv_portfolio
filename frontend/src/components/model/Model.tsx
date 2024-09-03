import { ReactNode } from 'react'
import './Model.sass'

export interface PropsModel {
  className?: string,
  id?: string,
  children?: ReactNode
}

function Model({ className, id, children }: PropsModel) {
  return (
    <div id={id} className={className}>
      {children}
    </div>
  )
}

export default Model