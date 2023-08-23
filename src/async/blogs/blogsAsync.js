export const getBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post-newest`);
  const data = await res.json();
  return data;
};
