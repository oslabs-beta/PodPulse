import { configureStore } from '@reduxjs/toolkit';
import namespaceSlice from './features/namespaceSlice';

export default configureStore({
  reducer: {
    namespace: namespaceSlice,
  },
});
