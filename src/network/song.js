import { request } from './request';
// 传用户id拿用户歌单
export function userPlaylist(uid) {
  return request({
    url: '/user/playlist',
    params: {
      uid
    }
  })
}
// res.playlist[0].id
// 传歌单id拿歌单详情
export function playlistDetail(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
// res.playlist.tracks[i].id
// 传歌曲id拿歌曲播放链接 res.data.url
export function songUrl(id) {
  return request({
    url: '/song/url',
    params: {
      id
    }
  })
}