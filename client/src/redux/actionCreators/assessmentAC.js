import { createAction } from '@reduxjs/toolkit';
import { INIT_QUESTION } from '../actionTypes/assessmentAT';

export const initQuestionAC = createAction(INIT_QUESTION);
