import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../Firbase/Firebase.init";



const Login = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const handelSiginGoogle=()=>{
        signInWithPopup(auth, provider)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>{
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }
    return (
        <div className="flext justify-center">
           <button onClick={handelSiginGoogle} className="bg-green-600 p-3 text-center">sig in google</button>
        </div>
    );
};

export default Login;