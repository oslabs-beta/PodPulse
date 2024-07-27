import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {};

const getNamespaceState = async (namespace = 'default') => {
  try {
    document.getElementById('JAT-container').style.display = 'block';
    const response = await fetch(`/getNamespaceState/${namespace}/`);
    const data = await response.json();
    console.log('namespace object data from fetch:', data);
    document.getElementById('JAT-container').style.display = 'none';
    return data;
  } catch (error) {
    console.log('Error when fetching namespaceState:', error);
  }
};

export const getData = (namespace) => {
  return (dispatch, getState) => {
    dispatch(getNamespaceState(namespace));
  };
};

export const getNamespace = createAsyncThunk(
  'getNamespaceState',
  (arg, thunkAPI) => {
    return getNamespaceState(arg);
  }
);

export const namespaceSlice = createSlice({
  name: 'namespace',
  initialState: {
    namespaceState: {},
    currentNamespace: '',
    status: 'idle',
  },

  reducers: {
    checkState: (state, action) => {
      if (Object.keys(state.namespaceState).length == 0) {
        console.log('NAMESPACE IS EMPTY');
      } else {
        console.log('WE HAVE NAMSPACE: ', state.namespaceState);
      }
    },
    setCurrentNamespace: (state, action) => {
      console.log('SETTING CURRENT NAMESPACE: ', action.payload);
      state.currentNamespace = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getNamespace.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getNamespace.fulfilled, (state, action) => {
        state.status = 'DONE';
        console.log('PAYLOAD: ', action.payload);
        state.namespaceState = action.payload;
      })
      .addCase(getNamespace.rejected, (state, action) => {
        state.status = 'getNamespace failed';
        console.log(action.error.message);
        state.error = action.error.message;
      });
  },
});

export const { checkState, setCurrentNamespace } = namespaceSlice.actions;

export default namespaceSlice.reducer;
