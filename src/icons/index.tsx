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

const CartAdd = (props: IconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1_390)">
      <path d="M6.93333 5.89999H8.06666V4.19999H9.76666V3.06665H8.06666V1.36665H6.93333V3.06665H5.23333V4.19999H6.93333V5.89999ZM4.66666 11C4.04333 11 3.539 11.51 3.539 12.1333C3.539 12.7567 4.04333 13.2667 4.66666 13.2667C5.29 13.2667 5.8 12.7567 5.8 12.1333C5.8 11.51 5.29 11 4.66666 11ZM10.3333 11C9.71 11 9.20566 11.51 9.20566 12.1333C9.20566 12.7567 9.71 13.2667 10.3333 13.2667C10.9567 13.2667 11.4667 12.7567 11.4667 12.1333C11.4667 11.51 10.9567 11 10.3333 11ZM4.763 9.15832L4.78 9.09032L5.29 8.16665H9.51166C9.93666 8.16665 10.3107 7.93432 10.5033 7.58299L12.6907 3.61065L11.7047 3.06665H11.699L11.0757 4.19999L9.51166 7.03332H5.53366L5.46 6.88032L4.19066 4.19999L3.65233 3.06665L3.11966 1.93332H1.26666V3.06665H2.4L4.44 7.36765L3.675 8.75599C3.58433 8.91465 3.53333 9.10165 3.53333 9.29999C3.53333 9.92332 4.04333 10.4333 4.66666 10.4333H11.4667V9.29999H4.90466C4.831 9.29999 4.763 9.23765 4.763 9.15832Z" fill={props.color}/>
    </g>
    <defs>
      <clipPath id="clip0_1_390">
        <rect width="13.6" height="13.6" fill="white" transform="translate(0.700012 0.799988)"/>
      </clipPath>
    </defs>
  </svg>
)

const Add = (props: IconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.9 4.5H8.1V8.1H4.5V9.9H8.1V13.5H9.9V9.9H13.5V8.1H9.9V4.5ZM9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM9 16.2C5.031 16.2 1.8 12.969 1.8 9C1.8 5.031 5.031 1.8 9 1.8C12.969 1.8 16.2 5.031 16.2 9C16.2 12.969 12.969 16.2 9 16.2Z" fill={props.color}/>
  </svg>
)

const Remove = (props: IconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 8.1V9.9H13.5V8.1H4.5ZM9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM9 16.2C5.031 16.2 1.8 12.969 1.8 9C1.8 5.031 5.031 1.8 9 1.8C12.969 1.8 16.2 5.031 16.2 9C16.2 12.969 12.969 16.2 9 16.2Z" fill={props.color}/>
  </svg>
)

const Bin = (props: IconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.99736 16C1.99736 17.1 3.17447 18 4.61316 18H15.0764C16.5151 18 17.6922 17.1 17.6922 16V4H1.99736V16ZM19.0001 1H14.4224L13.1145 0H6.57501L5.26711 1H0.689453V3H19.0001V1Z" fill={props.color}/>
  </svg>
)

const Search = (props: IconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9 21.875L13.325 15.3C12.825 15.7333 12.242 16.0708 11.576 16.3125C10.91 16.5542 10.2014 16.675 9.45 16.675C7.6473 16.675 6.12163 16.05 4.87298 14.8C3.62433 13.55 3 12.0417 3 10.275C3 8.50833 3.625 7 4.875 5.75C6.125 4.5 7.6375 3.875 9.4125 3.875C11.1875 3.875 12.6958 4.5 13.9375 5.75C15.1792 7 15.8 8.50958 15.8 10.2787C15.8 10.9929 15.6833 11.6833 15.45 12.35C15.2167 13.0167 14.8667 13.6417 14.4 14.225L21 20.775L19.9 21.875ZM9.425 15.175C10.7792 15.175 11.9302 14.6958 12.8781 13.7375C13.826 12.7792 14.3 11.625 14.3 10.275C14.3 8.925 13.826 7.77083 12.8781 6.8125C11.9302 5.85417 10.7792 5.375 9.425 5.375C8.05695 5.375 6.8941 5.85417 5.93645 6.8125C4.97882 7.77083 4.5 8.925 4.5 10.275C4.5 11.625 4.97882 12.7792 5.93645 13.7375C6.8941 14.6958 8.05695 15.175 9.425 15.175Z" fill={props.color}/>
  </svg>
)

const Cancel = (props: IconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.22505 19.725L5.17505 18.675L10.95 12.9L5.17505 7.12498L6.22505 6.07498L12 11.85L17.775 6.07498L18.825 7.12498L13.05 12.9L18.825 18.675L17.775 19.725L12 13.95L6.22505 19.725Z" fill={props.color}/>
  </svg>
)


export const IconList = {
  Cart,
  CartAdd,
  Add,
  Remove,
  Bin,
  Search,
  Cancel
}

const Icon: React.FC<IconDTO> = (props) => {
  const { name, size, color, onClick } = props
  const typedIcons: IIcons = IconList
  let SelectedIcon = typedIcons[name]

  if (SelectedIcon === undefined) {
    SelectedIcon = typedIcons.IconNone
  }

  return (
    <div onClick={onClick} style={{ cursor: `${onClick ? "pointer" : 'normal'}`, display: 'flex'}}>
      <SelectedIcon color={color} size={size} />
    </div>
  )
}

export default Icon
