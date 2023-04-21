/* eslint-disable prettier/prettier */
import ActionSheet from './pages/ActionSheet.svelte';
import Badge from './pages/Badge.svelte';
import Breadcrumbs from './pages/Breadcrumbs.svelte';
import Buttons from './pages/Buttons.svelte';
import Cards from './pages/Cards.svelte';
import Checkbox from './pages/Checkbox.svelte';
import Chips from './pages/Chips.svelte';
import ContentBlock from './pages/ContentBlock.svelte';
import Dialog from './pages/Dialog.svelte';
import Fab from './pages/Fab.svelte';
import FormInputs from './pages/FormInputs.svelte';
import List from './pages/List.svelte';
import ListButton from './pages/ListButton.svelte';
import MenuList from './pages/MenuList.svelte';
import Navbar from './pages/Navbar.svelte';
import Panel from './pages/SidePanels.svelte';
import Popover from './pages/Popover.svelte';
import Popup from './pages/Popup.svelte';
import Preloader from './pages/Preloader.svelte';
import Progressbar from './pages/Progressbar.svelte';
import Radio from './pages/Radio.svelte';
import RangeSlider from './pages/RangeSlider.svelte';
import Ripple from './pages/Ripple.svelte';
import SegmentedControl from './pages/SegmentedControl.svelte';
import SheetModal from './pages/SheetModal.svelte';
import Stepper from './pages/Stepper.svelte';
import Subnavbar from './pages/Subnavbar.svelte';
import Tabbar from './pages/Tabbar.svelte';
import Toast from './pages/Toast.svelte';
import Toggle from './pages/Toggle.svelte';
import Toolbar from './pages/Toolbar.svelte';

const pages = {
  ActionSheet,
  Badge,
  Breadcrumbs,
  Buttons,
  Cards,
  Checkbox,
  Chips,
  ContentBlock,
  Dialog,
  Fab,
  FormInputs,
  List,
  ListButton,
  MenuList,
  Navbar,
  Panel,
  Popover,
  Popup,
  Preloader,
  Progressbar,
  Radio,
  RangeSlider,
  Ripple,
  SegmentedControl,
  SheetModal,
  Stepper,
  Subnavbar,
  Tabbar,
  Toast,
  Toggle,
  Toolbar,
};
const routes = Object.keys(pages).map((name) => {
  const path = `/${name
    .split('Page')[0]
    .split('')
    .map((char, index) =>
      char.match(/[A-Z]/) && index !== 0 ? `-${char}` : char
    )
    .join('')
    .toLowerCase()}`;

  let title = name
    .split('Page')[0]
    .split('')
    .map((char, index) =>
      char.match(/[A-Z]/) && index !== 0 ? ` ${char}` : char
    )
    .join('');
  if (title === 'Fab') title = 'FAB (Floating Action Button)';
  if (title === 'Side Panels') title = 'Panel / Side Panels';
  return {
    component: pages[name],
    path,
    title,
  };
});
routes.sort((a, b) => (a.title > b.title ? 1 : -1));

export default routes;
