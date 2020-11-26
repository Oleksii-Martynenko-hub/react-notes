import { CREATE_POST, CHANGE_INPUT_VALUE_POST } from './types';

const initialState = {
  valueInputs: { title: '', descr: '' },
  posts: [
    {
      key: 1,
      title: 'sunt aut facere repellat',
      descr: 'quia et suscipit suscipit recusandae\nconsequuntur expedita ',
    },
    {
      key: 2,
      title: 'qui est esse',
      descr: 'est rerum tempore vitae\nsimus qui neque nisi nulla',
    },
    {
      key: 3,
      title:
        'ea molestias quasi exercitationem repellat qui ipsa sit aut qui est esse',
      descr:
        'et iusto sed quo exercitationem eligendi aut ad repellat qui ipsa sit iure\nvoluptatem occaecati exercitationem repellat qui ipsa sit omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
    },
    {
      key: 4,
      title: 'eum et est',
      descr: 'ullam et saepe\n reiciendis volupt\n adipisci velit',
    },
    {
      key: 5,
      title: 'nesciunt quas',
      descr:
        'repudiandae veniam\n quaerat sunt sed\nalias aut fugiat\nlor neque eligendi aut ad\n voluptatem occaecati\n exercitationem\naut ad repellat qui',
    },
    {
      key: 6,
      title: 'dolorem eum magni ',
      descr:
        'ut aspernature ligendi aut ad sequi\nmollit eligendi aut ad id molest\n accusantium quas\nvoluptate et\ndoloremque molestiae',
    },
  ],
  fetchedPosts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case CHANGE_INPUT_VALUE_POST:
      return { ...state, valueInputs: action.payload };
    default:
      return state;
  }
};
export const formCreatePostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case CHANGE_INPUT_VALUE_POST:
      return { ...state, valueInputs: action.payload };
    default:
      return state;
  }
};
