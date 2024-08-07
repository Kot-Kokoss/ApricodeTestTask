import { TaskType } from "../types/types";

type ChildrenAddingProps = (
  id: string,
  array: TaskType[],
  task: TaskType,
) => TaskType[];

type RecursionProps = (
  id: string,
  array: TaskType[],
) => TaskType[];

type SearchProps = (
  id: string,
  array: TaskType[],
) => TaskType | null;

type CompleteTogglerProps = (
  array: TaskType[],
  state: boolean,
) => TaskType[];

export const childrenAdding:ChildrenAddingProps = (id, array, task) => {
  return array.reduce((arr: TaskType[], item) => {
    if (item.id === id) {
        item.children.push(task);
        arr.push(item);
    } else {
        arr.push({...item, children: childrenAdding(id, item.children, task)});
    }

    return arr;
  }, []);
};

export const recursionFilter:RecursionProps = (id, array) => {
  return array.reduce((arr: TaskType[], item) => {
    if (item.id !== id) {
      arr.push({...item, children: recursionFilter(id, item.children)});
    } 

    return arr;
  }, []);
};

export const recursionSearch:SearchProps = (id, array) => {
  for (const item of array) {
    if (item.id === id) {
      return item;
    }

    const childrenItem = recursionSearch(id, item.children);
    
    if (childrenItem) {
      return childrenItem;
    }
  }

  return null;
};

export const recursionCompleteToggler:RecursionProps = (id, array) => {
  return array.reduce((arr: TaskType[], item) => {
    if (item.id !== id) {
        arr.push({...item, children: recursionCompleteToggler(id, item.children)});
    } else {
        arr.push({
          ...item, 
          isCompleted: !item.isCompleted, 
          children: childrenCompleteToggler(item.children, !item.isCompleted)
        });
    }

    return arr;
  }, []);
};

export const childrenCompleteToggler:CompleteTogglerProps = (array, state) => {
  return array.reduce((arr: TaskType[], item) => {
    arr.push({
      ...item, 
      isCompleted: state, 
      children: childrenCompleteToggler(item.children, state)
    });

    return arr;
  }, []);
};