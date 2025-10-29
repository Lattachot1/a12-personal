"use client";
import { useAppSelector } from "@/redux/store";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";



export default function BookingList() {
    const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>();

    console.log("BookingList render - bookItems:", bookItems);

    if (!bookItems || bookItems.length === 0) {
        return <div className="text-gray-500 px-5">No Venue Booking</div>;
    }

    return (
        <>
            {bookItems.map((bookingItems) => (
                <div
                    key={bookingItems.nameLastname}
                    className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                >
                    <div className="text-xl">{bookingItems.nameLastname}</div>
                    <div className="text-md">{bookingItems.tel}</div>
                    <div className="text-md">{bookingItems.venue}</div>
                    <div className="text-md">{bookingItems.bookDate}</div>

                    <button
                        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                        onClick={() => {
                            dispatch(removeBooking(bookingItems));
                        }}
                    >
                        Remove from BookingList
                    </button>
                </div>
            ))}
        </>
    );
}