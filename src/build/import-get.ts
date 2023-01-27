export default function(): Array{
  const reg: RegExp=/(import +.* +from +[\"\'].*[\"\'])|(import +[\"\'].*[\"\'])/g;
  let arr: Array;
  const result: Set=new Set();
  while ((arr=reg.exec(code)) !== null) {
    result.add(arr[0].replace(/import +.* +|import +/,""));
  }
  return Array.from(result);
}
