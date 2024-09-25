import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const UserProfile = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <h1> update {user.displayName} profile !</h1>
        </div>
    );
};

export default UserProfile;