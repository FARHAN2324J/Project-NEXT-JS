
import '../styles/globals.css'

export default function Login() {
    return (
        <div>
            <div className="my-30">
                <div className="p-10 m-auto w-[90%] Form-login ">
                    <h1 className="text-[#fff] text-center text-2xl underline">LOGIN</h1>
                    <form action=""  className="rounded-4xl text-[#fffc] flex flex-col items-center justify-center sm:text-lg">
                        <div className="flex flex-col items-center gap-3 my-10">
                            <label htmlFor="FirstName" className="cursor-pointer" >FirstName</label>
                            <input className="p-2 outline-none bg-transparent input-border-login"   type="text" id="FirstName" placeholder="Farhan"/>
                        </div>
                        <div className="flex flex-col items-center gap-3 my-10">
                            <label htmlFor="LastName" className="cursor-pointer" >LastName</label>
                            <input className="p-2 outline-none bg-transparent input-border-login"  type="text" id="LastName" placeholder="Fadayi"/>
                        </div>
                        <div className="flex flex-col items-center gap-3 my-10">
                            <label htmlFor="Password" className="cursor-pointer" >Password</label>
                            <input className="p-2 outline-none bg-transparent input-border-login" type="text" id="Password" placeholder="*****"/>
                        </div>
                        <button className="border-1 border-[#fffc] rounded-lg active:bg-[#fffc] active:text-[#000] cursor-pointer outline-none px-5 py-1">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}