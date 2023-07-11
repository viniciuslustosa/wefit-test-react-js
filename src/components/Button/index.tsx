import React from 'react';
import { IconString } from '../../icons/types';
import { Button as ButtonDefault } from '@mui/material';
import Icon from '../../icons';

interface Props {
    title: string,
    icon?: IconString,
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
    onClick: () => void,
}

const Button: React.FC<Props> = ({ title, icon, color, onClick }) => {
  return (
    <React.Fragment>
        <ButtonDefault color={color} onClick={onClick} variant="contained">
            { icon && (<Icon name={icon} size={20} color="white" />)}
            { title }
        </ButtonDefault>
    </React.Fragment>
  );
}
export default Button;