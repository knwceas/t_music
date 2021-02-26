// 时间戳转分秒（ 转歌曲时长 ）
export function timeFormat(time) {
  let second = parseInt(time / 1000);
  let minutes = parseInt(second / 60)
  if (minutes < 10) {
    minutes = "0"+minutes
  }
  let seconds = parseInt(second % 60)
  if (seconds < 10) {
    seconds = "0"+seconds
  }
  return `${minutes}:${seconds}`
}