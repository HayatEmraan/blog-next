export const getSingleBlog = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post-details/${id}`
  );
  const data = await res.json();
  return data;
};
