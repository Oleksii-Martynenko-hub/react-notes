import { CREATE_NOTE } from './types';

const initialState = {
  notes: [
    {
      key: 1,
      title: 'sunt aut facere repellat',
      content: 'quia et suscipit suscipit recusandae\nconsequuntur expedita ',
    },
    {
      key: 2,
      title: 'qui est esse',
      content: 'est rerum tempore vitae\nsimus qui neque nisi nulla',
    },
    {
      key: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut qui est esse',
      content:
        'et iusto sed quo exercitationem eligendi aut ad repellat qui ipsa sit iure\nvoluptatem occaecati exercitationem repellat qui ipsa sit omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
    },
    {
      key: 4,
      title: 'eum et est',
      content: 'ullam et saepe\nreiciendis volupt\nadipisci velit',
    },
    {
      key: 5,
      title: 'nesciunt quas',
      content:
        'repudiandae veniam\n quaerat sunt sed\nalias aut fugiat\nlor neque eligendi aut ad\n voluptatem occaecati\n exercitationem\naut ad repellat qui',
    },
    {
      key: 6,
      title: 'dolorem eum magni ',
      content:
        'ut aspernature ligendi aut ad sequi\nmollit eligendi aut ad id molest\n accusantium quas\nvoluptate et\ndoloremque molestiae',
    },
  ],
  fetchedPosts: [],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};

export default notesReducer;
