// Memperoleh User yang telah login
// Memperoleh Semua User
// Update Profile yang sudah login
// Update Role yang telah login

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import usePost from "@/hooks/usePost";
import UserForm from "@/components/UserForm";

export async function getServerSideProps(context) {
  const res = await axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user`, {
    headers: {
      "Content-Type": "application/json",
      apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k`,
    },
  });
  return {
    props: {
      users: res.data.data,
    },
  };
}


export default function AllUser({ users }) {
    const router = useRouter();
    const { pos, loading } = usePost();

    const handleBack = () => {
        router.push("/");
    };

    return (
        
        <div>
            <img src={users?.profilePictureUrl} alt={users.name} />
            <h1></h1>
        </div>
    )
    }
    





// export async function getServerSideProps(context) {
//     const { req } = context;
//     const { token } = req.cookies;
//     if (!token) {
//         return {
//             redirect: {
//                 destination: "/login",
//                 permanent: false,
//             },
//         };
//     }
//     return {
//         props: {},
//     };
// }
