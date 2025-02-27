import { useState, useEffect } from "react"
import editIcon from "../assets/editIcon.png"

export default function Exercise(props){
    let [exerciseInfo, setExerciseInfo] = useState({id: props.id, name:'Exercise '+String(props.index+1), type:'exercise', distance: 0, time:'NaN:NaN'})

    useEffect(()=>{
        props.updateData(exerciseInfo)
    }, [exerciseInfo])
    
    function handleAmountOfPoolsChange(e){
        setExerciseInfo({...exerciseInfo , distance: e.target.value*25})
    }

    function handleTimeChange(e){
        setExerciseInfo({...exerciseInfo , time: e.target.value})
    }

    function handleExerciseNameChange(e){
        setExerciseInfo({...exerciseInfo , name: e.target.value})
    }

    function convertToSecs(mmss){
        if(mmss != undefined){
            let mins = mmss.substring(0,2);
            let secs = mmss.substring(3,5);

            return parseInt(mins)*60 + parseInt(secs);
        }
    }


    function convertToMins(s){
        let mins = parseInt(s/60)
        let secs = s%60

        return (mins<10 ? '0' + parseInt(mins) : parseInt(mins)) + ':' + (secs<10 ? '0' + parseInt(secs) : parseInt(secs))
    }

    return(
        <div className="exercise">
            <label><input type="text" onChange={(e) => {handleExerciseNameChange(e)}} className="exerciseName dataInput" placeholder="Exercise name" value={exerciseInfo.name}/><img className="editIcon" src={editIcon} alt="edit" /></label>
            <div className="dataInputsWrapper">
                <label>Liczba basenów(25m): <input type="number" min={0} onChange={(e)=>{handleAmountOfPoolsChange(e)}} className="dataInput exercisePoolsInput"/></label>
                <label>Czas(mm:ss): <input type="text" placeholder="mm:ss"onChange={(e)=>{handleTimeChange(e)}} className="dataInput exerciseTimeInput"/></label>
            </div>
            <div className="exerciseCalculations">
                <div className="exerciseDistance">Dystans(m): {exerciseInfo.distance}</div>
                <div className="exercisePace">Tempo(/100m): {convertToMins(convertToSecs(exerciseInfo.time)/(exerciseInfo.distance/100)) != 'NaN:NaN' ? convertToMins(convertToSecs(exerciseInfo.time)/(exerciseInfo.distance/100)) : '00:00'}</div>
            </div>
            <div className="exerciseButtons">
                <button className="deleteButton" onClick={()=>{props.deleteFunc(exerciseInfo.id)}}>X</button>
            </div>
        </div>
    )
}