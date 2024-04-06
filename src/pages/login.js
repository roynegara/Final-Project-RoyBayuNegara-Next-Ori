import UserForm from "@/components/UserForm";
import usePost from "@/hooks/usePost";
import { useRouter } from "next/router";

export default function LoginUserPage() {
  const router = useRouter();
  const { pos, loading } = usePost();

  const handleLogin = async ({ email, password }) => {
    pos("/api/v1/login", { email, password });
    router.push("/");
  };

  return (
    <div>
      <UserForm title="Login" onSubmitLogin={handleLogin} loading={loading} />
    </div>
  );
}
