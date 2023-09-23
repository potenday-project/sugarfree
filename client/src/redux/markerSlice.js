import { createSlice } from "@reduxjs/toolkit";

export const markerSlice = createSlice({
  name: "marker",
  initialState: {
    clicked: false,
    content: "",
    id: 0,
    position: { lat: 0, lng: 0 },
    address: "",
    time: "",
    count: 0,
    cafeStar: 0,
    menu: [
      {
        name: "americano",
        menuStar: 0,
        price: 0,
        nutrients: {
          sugar: 0,
          sodium: 0,
          fat: 0,
          Caffeine: 0,
        },
        reviews: [
          {
            userId: 0,
            content: "",
            createdAt: "",
          },
        ],
      },
    ],
  },

  reducers: {
    setMarker: (state, action) => {
      state.id = action.payload.id;
      state.content = action.payload.content;
      state.position = action.payload.position;
      state.address = action.payload.address;
      state.time = action.payload.time;
      state.count = action.payload.count;
      state.cafeStar = action.payload.cafeStar;
      state.menu = action.payload.menu;
      return state;
    },

    onDrop: (state, action) => {
      state.clicked = action.payload.clicked;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMarker, onDrop } = markerSlice.actions;
export default markerSlice.reducer;
