import { IBadge } from './interface';

export const Badge = (props: IBadge) => {
  const { backroundColor, color, children } = props
  return (
    <span className={`${backroundColor} ${color}`}>
      {children}
    </span>
  )
}
