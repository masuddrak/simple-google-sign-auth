import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firbase/Firebase.init";
import { useState } from "react";



const Login = () => {
    const [signIn,setSignUser]=useState(null)
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    // sign in 
    const handelSiginGoogle=()=>{
        signInWithPopup(auth, provider)
        .then(result=>{
            const myUser = result.user;
            setSignUser(myUser)
            console.log(myUser)
        })
        .catch(error=>{
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }
    const handelSignOut=()=>{
        signOut(auth)
        .then(result=>{
            setSignUser(null)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    console.log(signIn)
    return (
        <div className="flext justify-center">
            {
                signIn?<button onClick={handelSignOut} className="bg-green-600 p-3 text-center">sign Out google</button> :<button onClick={handelSiginGoogle} className="bg-green-600 p-3 text-center">sig in google</button>
            }
          
           
           {
            signIn && <div>
                <h2 className="text-2xl">{signIn?.displayName}</h2>
                <img src={signIn?.photoURL} alt="" />
            </div>
           }
        </div>
    );
};

export default Login;