import {Plus} from "lucide-react";

function ExpiringSoonComponent() {
    return <div>
        <h1 className={'text-4xl font-semibold'}>Expiring soon</h1>
        {/*    insert a divider*/}
        <div className={'bg-slate-700 h-[1px] w-[80%] my-3'}></div>
        <div
            className={'flex gap-2 h-[150px] w-[150px] border-2 border-[#6153BD] border-dashed  justify-center items-center'}>
            <Plus/>
            Add new
        </div>
    </div>
}

export default ExpiringSoonComponent