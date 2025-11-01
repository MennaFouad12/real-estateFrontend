// src/hooks/useAuth.js
import { supabase } from "../api/supabaseclient";
import { useUserStore } from "../store/userStore";

export function useAuth() {
  const { setUser, logout } = useUserStore();

  // ✅ تسجيل مستخدم جديد
async function signUp(name, email, password) {
  // 🟢 1. إنشاء مستخدم جديد في Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;

  const user = data.user;

  // 🟡 2. حفظ الاسم في جدول profiles (لو التسجيل تم بنجاح)
  if (user) {
    const { error: insertError } = await supabase.from("profiles").insert([
      {
        id: user.id,
        full_name: name,
        role: "user",
      },
    ]);

    if (insertError) throw insertError;
  }

  // 🟣 3. حفظ المستخدم في state أو context
  setUser(user);

  return data;
}


  // ✅ تسجيل الدخول
  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    const user = data.user;
    setUser(user);

    // 🟣 Fetch role from profiles table
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    // 🟢 Redirect based on role
    // if (profile?.role === "admin") {
    //   navigate("/dashboard");
    // } else {
    //   navigate("/");
    // }
  };

  // ✅ تسجيل الخروج
  async function signOut() {
    await supabase.auth.signOut();
    logout();
  }

  return { signUp, signIn, signOut };
}
