import { addDoc, collection } from "firebase/firestore"
import dbFireStore from "../firestore"
const Create=()=>{
    async function insert() {
        const data=await addDoc(collection(dbFireStore,"users"),{
            first:"adda2",
            last:"loveLace",
            born:1815
        })
        console.log("data.id......")
        console.log(data.id)
    }
    return(
        <div>
            <button onClick={insert}>Insert</button>
        </div>
    )
}
export default Create