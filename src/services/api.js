export const getDogs = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/8");
  const data = await response.json();
  return data.message;
};