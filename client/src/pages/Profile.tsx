import { useAuth } from '../context/AuthContext';

const Profile = () => {
    const { user, logout } = useAuth();

    return (
        <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Profile</h2>
            <div className="space-y-4">
                <div>
                    <label className="font-medium">Username:</label>
                    <p>{user?.username}</p>
                </div>
                <div>
                    <label className="font-medium">Email:</label>
                    <p>{user?.email}</p>
                </div>
                <button
                    onClick={logout}
                    className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Profile;