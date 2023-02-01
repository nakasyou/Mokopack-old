export default function(code: string): Array<string>{
  const reg: RegExp=/(import +.* +from +[\"\'].*[\"\'])|(import +[\"\'].*[\"\'])/g;
  let arr: RegExpExecArray | null;
  const result: Set<any>=new Set();
  while ((arr=reg.exec(code)) !== null) {
    result.add(arr[0].replace(/import +.* +|import +/,""));
  }
  return Array.from(result);
}
