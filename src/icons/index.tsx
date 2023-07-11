import React from 'react'
import { IconDTO, IconProps, IIcons } from './types'

const adjIconProps = (props: IconProps) => {
  const newProps: IconProps = {}
  newProps.color = props.color || defaultValues.color
  return newProps
}

const defaultValues: IconProps = {
  size: 16,
  color: '#000',
}

const Cart = (props: IconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.9519 12L17.1151 3.25335C16.9905 3.07675 16.8245 2.93337 16.6317 2.83575C16.4389 2.73814 16.2251 2.68925 16.0091 2.69335C15.5826 2.69335 15.1562 2.88002 14.903 3.26669L9.06628 12H2.68317C1.95025 12 1.35059 12.6 1.35059 13.3334C1.35059 13.4534 1.36391 13.5734 1.40389 13.6934L4.78867 26.0534C5.09516 27.1734 6.12125 28 7.34724 28H24.6709C25.8969 28 26.923 27.1734 27.2428 26.0534L30.6276 13.6934L30.6675 13.3334C30.6675 12.6 30.0679 12 29.335 12H22.9519ZM12.0113 12L16.0091 6.13335L20.0068 12H12.0113ZM16.0091 22.6667C14.5432 22.6667 13.3439 21.4667 13.3439 20C13.3439 18.5334 14.5432 17.3334 16.0091 17.3334C17.4749 17.3334 18.6742 18.5334 18.6742 20C18.6742 21.4667 17.4749 22.6667 16.0091 22.6667Z" fill={props.color} />
  </svg>
)

const CartAdd = (props: IconProps) => {
<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_390)">
<path d="M6.93333 5.89999H8.06666V4.19999H9.76666V3.06665H8.06666V1.36665H6.93333V3.06665H5.23333V4.19999H6.93333V5.89999ZM4.66666 11C4.04333 11 3.539 11.51 3.539 12.1333C3.539 12.7567 4.04333 13.2667 4.66666 13.2667C5.29 13.2667 5.8 12.7567 5.8 12.1333C5.8 11.51 5.29 11 4.66666 11ZM10.3333 11C9.71 11 9.20566 11.51 9.20566 12.1333C9.20566 12.7567 9.71 13.2667 10.3333 13.2667C10.9567 13.2667 11.4667 12.7567 11.4667 12.1333C11.4667 11.51 10.9567 11 10.3333 11ZM4.763 9.15832L4.78 9.09032L5.29 8.16665H9.51166C9.93666 8.16665 10.3107 7.93432 10.5033 7.58299L12.6907 3.61065L11.7047 3.06665H11.699L11.0757 4.19999L9.51166 7.03332H5.53366L5.46 6.88032L4.19066 4.19999L3.65233 3.06665L3.11966 1.93332H1.26666V3.06665H2.4L4.44 7.36765L3.675 8.75599C3.58433 8.91465 3.53333 9.10165 3.53333 9.29999C3.53333 9.92332 4.04333 10.4333 4.66666 10.4333H11.4667V9.29999H4.90466C4.831 9.29999 4.763 9.23765 4.763 9.15832Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_390">
<rect width="13.6" height="13.6" fill="white" transform="translate(0.700012 0.799988)"/>
</clipPath>
</defs>
</svg>

}

export const IconList = {
  Cart,
  CartAdd
}

const Icon: React.FC<IconDTO> = (props) => {
  const { name, size, color } = props
  const typedIcons: IIcons = IconList
  let SelectedIcon = typedIcons[name]

  if (SelectedIcon === undefined) {
    SelectedIcon = typedIcons.IconNone
  }

  return (
    <SelectedIcon color={color} size={size} />
  )
}

export default Icon
