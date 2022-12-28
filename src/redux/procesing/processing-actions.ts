import { createAction } from '@reduxjs/toolkit';
import ProcessingEnum from './processing-enum';

const isLoad = createAction<boolean, ProcessingEnum.IS_LOAD>(ProcessingEnum.IS_LOAD);

export default isLoad;
