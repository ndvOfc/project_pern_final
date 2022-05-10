// eslint-disable-next-line import/no-import-module-exports
import { Paper } from '@mui/material';
// eslint-disable-next-line import/no-import-module-exports
import { useNavigate } from 'react-router-dom';
// import { modulesArr } from '../ModuleArrs';
// eslint-disable-next-line import/no-import-module-exports
import css from './ModuleItem.module.css';
// import TopicsItem from '../TopicsItem/TopicsItem';

// eslint-disable-next-line react/prop-types
function ModulleItem({ titleModules, img }) {
  // console.log(titleModules);
  const navigate = useNavigate();
  return (
    <Paper
      onClick={() => navigate(`/modules/${titleModules}`)}
      className={css.paper}
      key={module.id}
      modulename={titleModules}
    >
      <img className={css.Img} src={img} alt="some" />
    </Paper>
  );
}

export default ModulleItem;
