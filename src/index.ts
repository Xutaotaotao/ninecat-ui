// import './../assets/font/iconfont.css';
import { App } from 'vue';
import { default as nTag } from '../packages/nTag';
// import nAlert from '../packages/n-alert';
// import nAvatar from '../packages/n-avatar';
// import nButton from '../packages/n-button';
// import nButtonGroup from '../packages/n-button-group';
// import nBadge from '../packages/n-badge';
// import nSidenav from '../packages/n-sidenav';
// import nSidenavItem from '../packages/n-sidenav-item';
// import nSubSidenav from '../packages/n-sub-sidenav';
// import nSteps from '../packages/n-steps';
// import nStep from '../packages/n-step/index.tsx';
// import nCard from '../packages/nCard';
// import nLoader from '../packages/nLoader';
// import nIcon from '../packages/nIcon';
// import nMessage from '../packages/nMessage';
// import nInput from '../packages/nInput';
// import nCol from '../packages/nCol';
// import nRow from '../packages/nRow';
// import nToast from '../packages/nToast';
// import nTable from '../packages/nTable';
// import nPagination from '../packages/nPagination';
// import nModal from '../packages/nModal';
// import nProgress from '../packages/nProgress';
// import nDrawer from '../packages/nDrawer';
// import nUpload from '../packages/nUpload';
// import nList from '../packages/nList';
// import nToggle from '../packages/nToggle';
// import nRate from '../packages/nRate';
// import nTooltip from '../packages/nTooltip';
// import nTree from '../packages/nTree';
// import nTag from '../packages/nTag';
// import nCheckbox from '../packages/n-checkbox';
// import locale from './locale/index';

const components = [
  // nAlert,
  // nButton,
  // nBadge,
  // nLoader,
  // nIcon,
  // nButtonGroup,
  // nInput,
  // nCol,
  // nRow,
  // // nToast,
  // nTable,
  // nPagination,
  // nModal,
  // nProgress,
  // nDrawer,
  // nAvatar,
  // nUpload,
  // nList,
  // nCard,
  // nToggle,
  // nRate,
  // // nTree,
  // nTooltip,
  nTag,
  // nSidenav,
  // nSidenavItem,
  // nSubSidenav,
  // nSteps,
  // nStep,
  // nCheckbox
];

const install = function(app: App) {
  components.forEach(component => {
    app.use(component as unknown as { install: () => any });
  });
  return app;
};

export {
  nTag
}

export default {
  install
};