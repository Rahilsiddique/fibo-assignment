import fs from "fs";

const getLocalData = () => {
  const ye = fs.readFileSync("json/data.json", "utf8");
  console.log(ye);

  return fs.readFileSync("json/data.json", "utf8");
};

export default getLocalData;
