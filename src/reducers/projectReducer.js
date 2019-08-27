const initState = {
  count: 0,
  posts: [{
    id: 1,
    title: 'sss',
    post: 'sss'
  }],
  isLogin: true,
  password: '',
  email: ''
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INC':
      return state = {
        count: state['count'] + 1,
        posts: state['posts']
      }

    case 'DEC':
      return {
        count: state['count'] - 1,
        posts: state['posts']
      }
    
    case 'POSTS_LOADED':
      return state = {
        count: state['count'],
        posts: action.payload
      }

    case 'REMOVE_POST':
      return state = {
        count: state['count'],
        posts: action.payload
      }

    case 'ADD_POST':
      return state = {
        count: state['count'],
        posts: action.payload
      }

    default:
      return initState
  }
};

export default projectReducer;