import {makeAutoObservable} from 'mobx'
import { v4 as uuidv4} from 'uuid';

import { TaskType } from '../types/types';

export default class MainStore {
    constructor() {
       
        makeAutoObservable(this)
    }

    
}
