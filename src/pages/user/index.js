//Perlihatkan semua user
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function AllUser() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllUser = async () => {
    try {
      const res = await axios.get("https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user", {
        headers: {
          "Content-Type": "application/json",
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k`,
        },
      });
      setUsers(res.data.data);
      console.log("res", res.data.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching users", error);
      setLoading(false);
    }
  };
  const handleMyProfile = () => {
    router.push("/user/profile");
  };

  useEffect(() => {
    getAllUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <button onClick={() => handleMyProfile()}>Go to My Profile</button>
      </div>
      {users.map((user) => (
        <div key={user.id}>
          <img className="imageAllUser" src={user.profilePictureUrl} alt={user.name} />
          <h1>Nama : {user.name}</h1>
          <h1>Email : {user.email}</h1>
          <h1>Role : {user.role}</h1>
          <h1>Phone Number : {user.phoneNumber}</h1>
        </div>
      ))}
    </div>
  );
}
