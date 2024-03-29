import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firbase/Firebase.init";
import { useState } from "react";



const Login = () => {
    const [signIn, setSignUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth(app);
    //google sign in 
    const handelSiginGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const myUser = result.user;
                setSignUser(myUser)
                console.log(myUser)
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }
    // github sign in
    const handelGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            const gitUser=result.user
            setSignUser(gitUser)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handelSignOut = () => {
        signOut(auth)
            .then(result => {
                setSignUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }
    console.log(signIn)
    return (
        <div className="flext justify-center">
            <div className="flex gap-8">
                {
                    signIn ? <button onClick={handelSignOut} className="bg-green-600 p-3 text-center">sign Out google</button> :
                        <div className="flex gap-5">
                            <button onClick={handelSiginGoogle} className="bg-green-600 p-3 text-center">sig in google</button>
                            <button onClick={handelGithubSignIn} className="bg-green-600 p-3 text-center">sigin Github</button>
                        </div>
                }
            </div>


            {
                signIn && <div>
                    <h2 className="text-2xl">{signIn?.displayName}</h2>
                    <h2 className="text-2xl">{signIn?.email}</h2>
                    <img src={signIn?.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;