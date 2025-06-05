"use server";

import { signIn } from "@/lib/auth";

async function handleRegister() {
  await signIn("github", { redirectTo: "/dashboard" });
}

export default handleRegister;

// const handleRegister = async () => {
//   await signIn("github", { redirectTo: "/dashboard" });
// };

// export default handleRegister;
