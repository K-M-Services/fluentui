import * as React from 'react';
import { createSvgIcon } from '../utils/createSvgIcon';

export const LiveIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 18 16" className={classes.svg}>
      <path d="M10.353,10.334a.476.476,0,0,1,.673.01.528.528,0,0,1-.011.742,7,7,0,0,0,.149,9.975.528.528,0,0,1,.023.752.476.476,0,0,1-.662.02,8,8,0,0,1-.172-11.5Z" />
      <path d="M20.985,11.086a.528.528,0,0,1-.011-.742.476.476,0,0,1,.673-.01,8,8,0,0,1-.172,11.5.476.476,0,0,1-.662-.02.528.528,0,0,1,.023-.752,7,7,0,0,0,.149-9.975Z" />
      <path d="M12.132,12.09a.464.464,0,0,1,.656.016.544.544,0,0,1-.018.76,4.5,4.5,0,0,0,.144,6.409.543.543,0,0,1,.035.775.462.462,0,0,1-.638.029,5.5,5.5,0,0,1-.179-7.989Z" />
      <path d="M19.23,12.866a.544.544,0,0,1-.018-.76.464.464,0,0,1,.656-.016,5.5,5.5,0,0,1-.179,7.989.462.462,0,0,1-.638-.029.542.542,0,0,1,.036-.775,4.5,4.5,0,0,0,.143-6.409Z" />
      <path d="M16,14.75A1.25,1.25,0,1,0,17.25,16,1.25,1.25,0,0,0,16,14.75Z" />
    </svg>
  ),
  displayName: 'LiveIcon',
});