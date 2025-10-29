import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {BookingItem} from "../../../interface";

type BookState={
    bookItems: BookingItem[];
}

// Ensure initialState is properly typed and initialized
const initialState: BookState = {
    bookItems: [],
};

export const bookSlice = createSlice({
    name: "bookSlice",
    initialState,
    reducers: {
        addBooking:(state, action:PayloadAction<BookingItem>)=>{
            // Initialize bookItem if it doesn't exist
            //if (!state.bookItems) {state.bookItems = [];}
            // Add the new booking
            //state.bookItems.push({...action.payload});
            const p = action.payload;
                // กันซ้ำด้วยคู่ (venue + bookDate)
                const idx = state.bookItems.findIndex(
                    (b) => b.venue === p.venue && b.bookDate === p.bookDate
                );

                if (idx !== -1) {
                    // อัปเดตทับรายการเดิม (ตามสะดวก จะข้ามก็ได้ถ้าต้องการ)
                    state.bookItems[idx] = p;
                } else {
                    state.bookItems.push(p);
                }
        },
        removeBooking:(state, action:PayloadAction<BookingItem>)=>{
            // filter returns a new array with items that do NOT match the payload
            if (!state.bookItems) {
                state.bookItems = [];
                return;
            }
            
            // Remove booking that matches all fields
            state.bookItems = state.bookItems.filter((obj) => 
                obj.venue !== action.payload.venue ||
                obj.bookDate !== action.payload.bookDate ||
                obj.nameLastname !== action.payload.nameLastname ||
                obj.tel !== action.payload.tel
            );
        }
    }
});

export const {addBooking, removeBooking} = bookSlice.actions;
export default bookSlice.reducer;