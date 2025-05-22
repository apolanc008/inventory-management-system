'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './button';

export default function EditProfilePage() {
  const router = useRouter()
  const [userData, setUserData] = useState({
    name: '',
    lastname: '',
    username: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch('http://localhost:3000/user', {
        credentials: 'include',
      });
      if (res.ok) {
        const data = await res.json();
        setUserData(data);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/user', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(userData),
    });

    if (res.ok) {
      alert('Profile updated!');
      router.push('/dashboard'); 
    } else {
      alert('Failed to update profile');
    }
  };

  const handleDeleteAccount = async () => {
  const confirmed = confirm("Are you sure you want to delete your account?");
  if (!confirmed) return;

  const res = await fetch("http://localhost:3000/user", {
    method: "DELETE",
    credentials: "include",
  });

  if (res.ok) {
    alert("Account deleted");
    router.push("/"); 
  } else {
    alert("Failed to delete account");
  }
};

  return (
    <form 
        onSubmit={handleSubmit}
        className="relative z-10 bg-gray-100 p-10 rounded-full shadow-2xl w-[600px] min-h-[70px] flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-red-800 mt-8">EDIT PROFILE</h2>

        {/* First name */}
        <div className="flex items-center w-full gap-4 mb-10">
          <label className="block text-sm font-bold mb-8 text-red-800">First Name</label>
          <input
            name="name"
            value={userData.name}
            onChange={handleUpdate}
            className="w-full mb-10 p-2 border-0 border-b-2 border-red-500 focus:outline-none focus:border-red-700 bg-red-50 rounded-sm placeholder-gray-500 text-black"
            required
          />
        
         {/* Last name */}
          <label className="block text-sm font-bold mb-8 text-red-800">Last Name</label>
          <input
            name="lastname"
            value={userData.lastname}
            onChange={handleUpdate}
            className="w-full mb-10 p-2 border-0 border-b-2 border-red-500 focus:outline-none focus:border-red-700 bg-red-50 rounded-sm placeholder-gray-500 text-black"
            required
          />
        </div>

        {/* Username */}
        <div className="flex items-center w-full gap-4 mb-10">
          <label className="block text-sm font-bold mb-8 text-red-800">Username</label>
          <input
            name="username"
            value={userData.username}
            onChange={handleUpdate}
            className="w-full mb-10 p-2 border-0 border-b-2 border-red-500 focus:outline-none focus:border-red-700 bg-red-50 rounded-sm placeholder-gray-500 text-black"
            required
          />
        </div>

        <div className="flex items-center gap-4 mb-10">
          <Button type="submit">
            Save
          </Button>

          <Button 
            type="button"
            onClick={handleDeleteAccount}
          >
              Delete Account
          </Button>
        </div>
        
      </form>
  );
}
