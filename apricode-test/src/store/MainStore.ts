import {makeAutoObservable} from 'mobx'
import { v4 as uuidv4} from 'uuid';

import { TaskType } from '../types/types';
import { recursionFilter, recursionCompleteToggler, recursionSearch, childrenAdding } from '../utils/utils';

class MainStore {
  taskArray: TaskType[] = localStorage.mainStore ? JSON.parse(localStorage.mainStore) : [];
  activeTask: TaskType | null = null;
  taskTitle = '';
  taskText = '';

  constructor() {       
    makeAutoObservable(this)
  }

  titleHandler = (str: string) => {
    this.taskTitle = str;
  }

  textHandler = (str: string) => {
    this.taskText = str;
  }

  addTask = () => {
    if (this.taskTitle.trim().length) {
      this.taskArray.push({
        id: uuidv4(),
        title: this.taskTitle,
        text: this.taskText,
        isCompleted: false,
        children: [],
      });

      localStorage.setItem('mainStore', JSON.stringify(this.taskArray));
      this.taskTitle = '';
      this.taskText = '';
    }
  }

  addChildren = (id: string) => {
    if (this.taskTitle.trim().length) {
      const task = {
        id: uuidv4(),
        title: this.taskTitle,
        text: this.taskText,
        isCompleted: false,
        children: [],
      };

      this.taskArray = childrenAdding(id, this.taskArray, task);
      localStorage.setItem('mainStore', JSON.stringify(this.taskArray));
      this.taskTitle = '';
      this.taskText = '';
    }
  }

  removeTask = (id: string) => {
    this.taskArray = recursionFilter(id, this.taskArray);
    localStorage.setItem('mainStore', JSON.stringify(this.taskArray));

    if (!this.taskArray.length) {
      this.activeTask = null;
      localStorage.removeItem('mainStore');
    }
  }

  completeToggler = (id: string) => {
    this.taskArray = recursionCompleteToggler(id, this.taskArray);
    localStorage.setItem('mainStore', JSON.stringify(this.taskArray));
  }

  chooseTask = (id: string) => {
    this.activeTask = recursionSearch(id, this.taskArray);
  }    
}

const mainStore = new MainStore();

export default mainStore;
