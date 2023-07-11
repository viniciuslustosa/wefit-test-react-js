import React from 'react';
import { IconString } from '../../icons/types';
import { Button as ButtonDefault } from '@mui/material';
import Icon from '../../icons';

interface Props {
    title: string,
    icon: IconString,
    onClick: () => void,
}

const Button: React.FC<Props> = ({ title, icon, onClick }) => {
  return (
    <React.Fragment>
        <ButtonDefault onClick={onClick} variant="contained" startIcon={<Icon name={icon} size={20} color="white" />}>
            { title }
        </ButtonDefault>
    </React.Fragment>
  );
}
export default Button;