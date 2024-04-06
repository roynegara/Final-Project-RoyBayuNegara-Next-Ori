//profil dari token
//update profil
//update role

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function ProfilePage() {
  const router = useRouter();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
      const profileEndpoint = "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user";

      fetch(profileEndpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Gagal mengambil profil userLogged");
          }
          return response.json();
        })
        .then((profileData) => {
          setProfileData(profileData);
        })
        .catch((error) => {
          console.error("Terjadi kesalahan", error);
        });
    } else {
      console.log("Token akses tidak tersedia di local storage");
    }
  }, []);

  const handleBack = () => {
    router.push("/user");
    };
    
    const handleUpdateProfile = () => {
        router.push("/user/update");
    }

  return (
    <div>
      {profileData ? (
        <div>
          <h1>Profil Saya</h1>
          <img src={profileData?.data?.profilPictureUrl} alt="Profile Picture" />
          <p>ID: {profileData?.data?.id}</p>
          <p>Nama: {profileData?.data?.name}</p>
          <p>Email: {profileData?.data?.email}</p>
          <p>Role: {profileData?.data?.role}</p>
          <p>phoneNumber: {profileData?.data?.phoneNumber}</p>
          {/* Tampilkan informasi profil pengguna lainnya sesuai kebutuhan */}
        </div>
      ) : (
        <p>Login First</p>
        // <p>Loading...</p>
      )}
          <button onClick={handleBack}>Back</button>
          <button onClick={handleUpdateProfile}>Update</button>
    </div>
  );
}

export default ProfilePage;

// import axios from "axios";
// import { useRouter } from "next/router";
// import usePost from "@/hooks/usePost";
// import UserForm from "@/components/UserForm";

// export function getServerSideProps() {

//   const res =  axios.get("https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user", {
//     headers: {
//       "Content-Type": "application/json",
//       apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
//       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k`,
//     },
//   });
//   return {
//     props: {
//       user: res.data.data,
//     },
//   };
// }

// export default function Profile({ user }) {
//   const router = useRouter();
//   const { pos, loading } = usePost();

//   const handleBack = () => {
//     router.push("/user");
//   };

//   const handleUpdateProfile = async ({ name, email, profilPictureUrl, phoneNumber }) => {
//     pos("/api/v1/update-profile", {
//       name,
//       email,
//       profilPictureUrl,
//       phoneNumber,
//     });
//     router.push("/profile");
//   };

//   const handleUpdateRole = async ({ role }) => {
//     pos(`/api/v1/update-user-role/${user?.id}`, {
//       role,
//     });
//     router.push("/profile");
//   };

//   return (
//     <div>
//       <div>
//         <img src={user?.profilePictureUrl} alt={user?.name} />
//         <h1>{user?.name}</h1>
//         <p>{user?.email}</p>
//         <p>{user?.phoneNumber}</p>
//         <p>{user?.role}</p>
//       </div>
//       <div>
//         <UserForm
//           title={`Update Profile ${user.name}`}
//           defaultNama={user.name}
//           defaultEmail={user.email}
//           defaultProfilPictureUrl={user.profilPictureUrl}
//           defaultPhoneNumber={user.phoneNumber}
//           loading={loading}
//           onSubmitProfile={handleUpdateProfile}
//         />
//       </div>
//       <div>
//         <UserForm title={`Update Role ${user.name}`} defaultRole={user.role} onSubmitRole={handleUpdateProfile} />
//       </div>
//       <div>
//         <button onClick={handleBack}>Back</button>
//       </div>
//     </div>
//   );
// }
