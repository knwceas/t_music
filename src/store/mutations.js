import { timeFormat } from "common/uctil";
export const setUid = (state, name) => { 
  state.uid = name // 把方法传递过来的参数，赋值给state中的uid
}
export const setlovePlay = (state, name) => { 
  state.lovePlay = name 
  let i = 0;
  // 格式化时长
  for (i in  state.lovePlay) {
    state.lovePlay[i].dt = timeFormat(state.lovePlay[i].dt);
  }
}

export const setIndex = (state, name) => { 
  state.index = name 
}

export const setCurrentView = (state, name) => { 
  state.currentView = name 
}
export const setRecommend = (state, name) => { 
  state.recommend = name 
}




