import { useRouter } from "next/router"

export default function Err() {
    const router = useRouter();
    function goBack() {
        router.back();
    }
    return (
        <div>
            <h1 className="bg-[#161617cc] p-20 text-[#9ca3af] text-2xl text-center font-bold"> 404 </h1>
            <button className="bg-[#9ca3af] text-[#161617cc] p-3 rounded-lg top-0 z-50 absolute m-5" onClick={goBack}>Go Back</button>
        </div>
    )
}