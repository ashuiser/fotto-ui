import LoginForm from "@/components/login-form";
import SignupForm from "@/components/signup-form";
import VerifyOTPForm from "@/components/verify-form";
import { useSearchParams } from "react-router";

type AuthMode = "login" | "signup" | "verify" | "forgot-password";

export default function AuthPage() {
  const [searchParams] = useSearchParams();
  const mode: AuthMode = searchParams.get("mode") as AuthMode;
  if (mode === "login") {
    return <LoginForm />;
  } else if (mode === "signup") {
    return <SignupForm />;
  } else if (mode === "verify") {
    return <VerifyOTPForm />;
  }
}
