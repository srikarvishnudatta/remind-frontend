import RecentlyAddedComponent from "@/components/RecentlyAddedComponent.tsx";
import FavourtiesComponent from "@/components/FavourtiesComponent.tsx";
import ExpiringSoonComponent from "@/components/ExpiringSoonComponent.tsx";

function Dashboard(){
    return <div className={'p-3'}>
        <ExpiringSoonComponent/>
        <RecentlyAddedComponent />
        <FavourtiesComponent />
    </div>
}

export default Dashboard