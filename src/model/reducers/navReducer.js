const initialState = {
  navItems: {
    news: {
      path: '/news',
      name: 'Новости'
    },
    about: {
      path: '/about',
      name: 'О нас'
    },
    help: {
      path: '/help',
      name: 'Помощь'
    },
    settings: {
      path: '/settings',
      name: 'Настройки'
    }
  },
};

export default function navReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  };
};