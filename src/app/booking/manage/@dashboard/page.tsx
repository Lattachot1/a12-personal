import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import getUserProfile from "@/libs/getUserProfile"

export default async function DashboardPage(){
    const session = await getServerSession(authOptions as any);
    if(!session){
        return(null);
    }
    const profile = await getUserProfile((session as any)?.user.token);
    var createdAt = new Date(profile.data.createdAt);

    return(
        <main className=" bg-slate-100 m-5 p-5">
            <h1 className="text-2xl font-medium ">{profile.data.name}'s Dashboard</h1>
            <table className="table-auto border border-separate border-spacing-2 ">
                <tbody>
                    <tr><td>Email</td><td>{profile.data.email}</td></tr>
                    <tr><td>Name</td><td>{profile.data.name}</td></tr>
                    <tr><td>Role</td><td>{profile.data.role}</td></tr>
                    <tr><td>Member since</td><td>{createdAt.toDateString()}</td></tr>
                </tbody>
            </table>

            {
                //g00dD@y$
                (profile.data.role == "user")?
                <form>
                    <div className="text-xl">Create Venue</div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4">Name Venue</label>
                        <input type="text" required id="nameVenue" name ="model" placeholder="VenueName"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none  focus:border-blue-400">
                        </input>
                    </div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4">Description Venue</label>
                        <input type="text" required id="description" name ="description" placeholder="description"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none  focus:border-blue-400">
                        </input>
                    </div>
                </form>
                :null
            
            }
        </main>

    )
}