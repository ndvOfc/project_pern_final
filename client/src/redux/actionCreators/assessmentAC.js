import { createAction } from '@reduxjs/toolkit';
import { INIT_QUESTION, NEXT_QUESTION } from '../actionTypes/assessmentAT';

export const initQuestionAC = createAction(INIT_QUESTION);
export const nextQuestionAC = createAction(NEXT_QUESTION);
