import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const ActionsClasses = (props, classes) => {
  return {
    base: {
      common: cls(
        'transition-transform z-40 left-1/2 bottom-0 transform -translate-x-1/2 max-w-md w-full max-h-screen overflow-y-auto',
        positionClass('fixed', classes)
      ),
      ios: 'pt-2 px-2 pb-2-safe duration-300',
      material:
        'pb-safe last-child-hairline-b-none rounded-t-2xl duration-400 ease-material-in',
      opened: '',
      closed: 'translate-y-full',
    },
    backdrop: {
      common:
        'fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 duration-300',
      opened: '',
      closed: 'opacity-0 pointer-events-none',
    },
  };
};
