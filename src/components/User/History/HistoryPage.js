import { OneDayHistory } from "./OneDayHistory"

export const HistoryPage=()=>{
    const historyDict={
        1:{1:['sajan','shrerstha'],2:['country','nepal'],3:['city','kathmandu']},
        2:{1:['any','kumar'],2:['country','india'],3:['city','banglore']}
    }
    return(
        <div className="flex flex-col items-center min-h-[80vh] p-2 bg-gray-100 ">
            <h1>History</h1>
            <div className="flex flex-col w-[70%] ">
            {Object.keys(historyDict).map((key)=>(
                <OneDayHistory key={key} oneDayData={historyDict[key]}/>
            ))}
            </div>
        </div>

    )
}
