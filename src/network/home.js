import {request} from './request';

export function getSwiper() {
  return request({
    url: '/banner'
  })
}

export function Login( phone,password) {
  return request({
    url: '/login/cellphone',
    params: {
      phone,
      password
    }
  })
}

export function Logout() {
  return request({
    url: '/logout'
  })
}

export function recommendPlaylist(limit=10) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}




