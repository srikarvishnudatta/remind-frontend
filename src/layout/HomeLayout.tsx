import {NavLink, Outlet} from "react-router-dom";
import umbrella from "@/assets/umbrella.png";
import {Button} from "@/components/ui/button.tsx";
import {FileClock, Heart, History, TimerOff, Trash2, Plus} from "lucide-react";
const options = [
    {name: 'Dashboard', icon: FileClock, link: '/dashboard'},
    {name:'Recently added', icon: FileClock, link:'/recent'},
    {name: 'Expiring soon', icon: History, link: '/soon' },
    {name: 'Favourites', icon: Heart, link: '/favourites'},
    {name: 'Expired', icon: TimerOff, link: '/expired'},
    {name: 'Trash', icon: Trash2, link: '/trash'}
]

function HomeLayout(){

    return <div>
        {/*logo and website*/}
        <nav className={'p-3 flex justify-between'}>
            <div className={'flex gap-2'}>
                <img src={umbrella} alt="" height={36} width={36}/>
                <h1 className={"font-semibold text-3xl "}>
                    Remind
                </h1>
            </div>
            {/*profile, Logout button*/}
            <div className={'flex gap-2'}>
                <Button className={"hover:border-b border-b-[#6153BD]"}>Profile</Button>
                <Button variant={"outline"} className={"bg-customPurple text-slate-50"}>Logout</Button>
            </div>
        </nav>
            {/*left side dashboard with different options*/}
        <main className={'flex h-screen'}>
            <section className={'w-1/6'}>
                <ul className={'flex flex-col gap-4 pl-4 pt-2'}>
                    <Button className={'bg-customPurple w-1/2 ml-10 self-left text-slate-50 hover:text-black hover:outline'}><Plus/>Add new</Button>
                    {options.map((option, index) =>
                        <NavLink to={option.link} key={index} className={'flex gap-3 cursor-pointer'}>
                            <option.icon/>
                            {option.name}</NavLink>)}
                </ul>
            </section>
            <section className={'w-5/6'}>
                <Outlet />
            </section>
        </main>
    </div>
}

export default HomeLayout