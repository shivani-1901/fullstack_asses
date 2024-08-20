import { createSlice } from '@reduxjs/toolkit';

export const surveySlice = createSlice({
  name: 'survey',
  initialState: {
    name: '',
    description: '',
    components: [],
  },
  reducers: {
    setSurvey: (state, action) => {
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.components = action.payload.components;
    },
    addComponent: (state, action) => {
      state.components.push(action.payload);
    },
    removeComponent: (state, action) => {
      state.components = state.components.filter(
        (comp) => comp.id !== action.payload.id
      );
    },
    updateComponent: (state, action) => {
      const index = state.components.findIndex(
        (comp) => comp.id === action.payload.id
      );
      if (index !== -1) {
        state.components[index] = action.payload;
      }
    },
  },
});

export const { setSurvey, addComponent, removeComponent, updateComponent } =
  surveySlice.actions;

export default surveySlice.reducer;
