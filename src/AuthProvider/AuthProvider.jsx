import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, deleteUser } from "firebase/auth";
import PropTypes from 'prop-types'

export const AuthContext = createContext('')

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)




    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }
    // const changePassword = () => {
    //     const newPassword = getASecureRandomPassword()
    //     return updatePassword(auth, newPassword)
    // }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => unSubscribe()
    }, [])

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }


    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const deleteProfile = () => {
        return deleteUser(auth.currentUser)
    }

    const authInfo = {
        user,
        createUser,
        loginUser,
        logOut,
        loading,
        verifyEmail,
        forgetPassword,
        deleteProfile,



    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;