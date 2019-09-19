import { Container } from "unstated";

const defaultState = {
  list: [
    {
      id: 1,
      completed: false,
      text: "Read README"
    },
    {
      id: 2,
      completed: false,
      text: "Add one todo"
    },
    {
      id: 3,
      completed: false,
      text: "Add filters"
    },
    {
      id: 4,
      completed: false,
      text: "Add multiple lists"
    },
    {
      id: 5,
      completed: false,
      text: "Optional: add tests"
    }
  ],

  selectedCategory: "general",

  categoryList: {
    general: [
      {
        id: 1,
        completed: false,
        text: "Read README"
      },
      {
        id: 2,
        completed: false,
        text: "Add one todo"
      },
      {
        id: 3,
        completed: false,
        text: "Add filters"
      },
      {
        id: 4,
        completed: false,
        text: "Add multiple lists"
      },
      {
        id: 5,
        completed: false,
        text: "Optional: add tests"
      }
    ]
  }
};

class TodosContainer extends Container {
  constructor(props) {
    super(props);

    this.state = this.readStorage();
  }

  readStorage() {
    if (window && window.localStorage) {
      const state = window.localStorage.getItem("appState");
      if (state) {
        return JSON.parse(state);
      }
    }

    return defaultState;
  }

  syncStorage() {
    if (window && window.localStorage) {
      const state = JSON.stringify(this.state);
      window.localStorage.setItem("appState", state);
    }
  }

  getList() {
    return this.state.list;
  }

  getCategoryList(categoryName) {
    return this.state.categoryList[categoryName];
  }

  getAllCategories() {
    let sortedCategoriesArr = Object.keys(this.state.categoryList).sort();
    let categoriesWithKeys = sortedCategoriesArr.map((category, idx) => {
      return { id: idx, text: category };
    });
    return categoriesWithKeys;
  }

  getSelectedCategory() {
    return this.state.selectedCategory;
  }

  toggleComplete = async id => {
    const item = this.state.list.find(i => i.id === id);
    const completed = !item.completed;

    // We're using await on setState here because this comes from unstated package, not React
    // See: https://github.com/jamiebuilds/unstated#introducing-unstated
    await this.setState(state => {
      const list = state.list.map(item => {
        if (item.id !== id) return item;
        return {
          ...item,
          completed
        };
      });
      return { list };
    });

    this.syncStorage();
  };

  toggleComplete1 = async (categoryName, id) => {
    const item = this.state.categoryList[categoryName].find(i => i.id === id);
    const completed = !item.completed;

    await this.setState(state => {
      const list = state.categoryList[categoryName].map(item => {
        if (item.id !== id) return item;
        return {
          ...item,
          completed
        };
      });
      let retState = { ...state };
      retState.categoryList[categoryName] = list;
      console.log("retState", retState);
      return retState;
    });

    this.syncStorage();
  };

  createTodo = async text => {
    await this.setState(state => {
      const item = {
        completed: false,
        text,
        id: state.list.length + 1
      };

      const list = state.list.concat(item);
      return { list };
    });

    this.syncStorage();
  };

  createTodo1 = async (categoryName, text) => {
    console.log(categoryName, text);
    await this.setState(state => {
      const item = {
        completed: false,
        text,
        id: state.categoryList[categoryName].length + 1
      };
      console.log(item);

      const list = state.categoryList[categoryName].concat(item);
      console.log(list);
      let retState = { ...state };
      retState.categoryList[categoryName] = list;
      console.log(retState);
      return retState;
      // return { ...state.categoryList, categoryName: list };
    });

    this.syncStorage();
  };

  categoryClick1 = async text => {
    console.log("categoryClick1 text param", text);
    await this.setState(state => {
      let retState = { ...state };
      retState.selectedCategory = text;
      return retState;
    });
    this.syncStorage();
  };

  createCategory1 = async categoryName => {
    if (categoryName in this.state.categoryList) {
      throw new Error("category already exists");
    }
    await this.setState(state => {
      let retState = { ...state };
      retState.categoryList[categoryName] = [];
      return retState;
    });
    this.syncStorage();
  };
}

export default TodosContainer;
