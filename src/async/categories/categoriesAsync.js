export const getCategories = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post-categories`
  );
  const data = await res.json();
  return data;
};
