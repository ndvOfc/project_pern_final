/* eslint-disable react/jsx-boolean-value */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation, Pagination } from 'swiper';

import ModuleItem from './ModuleItem/ModuleItem';
import TopicsItem from './TopicsItem/TopicsItem';
import { getModules, getTopics } from '../../redux/thunk/moduleAsyncAction';
// import Loader from '../UI/Loader/Loader';
// import { modulesArr } from './ModuleArrs';
import css from './Modules.module.css';
// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
import './styles.css';

function Modules() {
  const dispatch = useDispatch();
  const { modules } = useSelector((state) => state.modulesReducer);

  useEffect(() => {
    // dispatch(fetchAuthPassportJs());
    dispatch(getModules());
    dispatch(getTopics('JavaScript'));
  }, [dispatch]);
  // console.log(modules[0].img, '<<<<<<<<<<<<<<<<<<');
  return (
    <Container className={css.Container} maxWidth="sm">
      <Box className={css.Box}>
        <Box className={css.Slider}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={false}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {modules.length &&
              modules.map((module) => (
                <SwiperSlide key={module.id}>
                  <ModuleItem
                    className={css.ModuleItem}
                    key={module.id}
                    titleModules={module.titleModules}
                    // временное решение пока нет картирки в бд
                    img={module.img}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </Box>
      </Box>

      <TopicsItem />
    </Container>
  );
}

export default Modules;
