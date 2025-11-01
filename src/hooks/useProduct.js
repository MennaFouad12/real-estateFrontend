import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../api/supabaseclient";

export function useproduct() {
  const queryClient = useQueryClient();

  // ✅ FIX: use object form for useQuery
  const productQuery = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const { data, error } = await supabase.from("product").select("*");
      if (error) throw error;
      return data;
    },
  });

  // ✅ FIX: mutation object syntax is already correct
  const addProduct = useMutation({
    mutationFn: async (newProduct) => {
      const { error } = await supabase.from("product").insert([newProduct]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
  });

  const updateProduct = useMutation({
    mutationFn: async ({ id, ...rest }) => {
      const { error } = await supabase.from("product").update(rest).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
  });

  const deleteProduct = useMutation({
    mutationFn: async (id) => {
      const { error } = await supabase.from("product").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
  });

  return { productQuery, addProduct, updateProduct, deleteProduct };
}
