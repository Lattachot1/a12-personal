import DateReserve from "@/components/DateReserve";
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"


export default function reservation() {

  {/*const urlParams = useSearchParams();
  const vid = urlParams.get("id");

  const dispatch = useDispatch<AppDispatch>();

  const makeBooking = (name:string, tel:string) => { 
    if(vid && bookingDate && bookingLocation) {
      const item: BookingItem = {
        nameLastname: name,
        tel: tel,
        venue: bookingLocation,
        bookDate: dayjs(bookingDate).format('YYYY-MM-DD'),
      }
      dispatch(addBooking(item));
    }
  }

  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  const [bookingLocation, setBookingLocation] = useState<string>("Bloom Pavilion");*/}




  
  return (
    <main className="w-[80%] flex flex-col items-center space-y-10">
     {/*} <div className="">{userProfile.data.name}</div>
      <table className="table-auto border border-separate border-spacing-2 ">
                <tbody>
                    <tr><td>Email</td><td>{userProfile.data.email}</td></tr>
                    <tr><td>Name</td><td>{userProfile.data.name}</td></tr>
                    <tr><td>Tel</td><td>{userProfile.data.tel}</td></tr>
                    <tr><td>Member since</td><td>{createdAt.toDateString()}</td></tr>
                </tbody>
            </table>*/}
      <div className="text-xl font-medium ">Venue Booking</div>
      {/*<div className="text-xl font-medium ">Venue ID: {vid}</div>*/}
      <div className="w-fit space-y-2">
        <div className="text-md text-left text-gray-600 ">Select start Date and Location</div>
        <DateReserve/>

      </div>
      

    </main>
  );
}
