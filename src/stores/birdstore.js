import {observable, action, computed} from 'mobx';

export default class BirdStore {
    @observable Birds = [];

    @action 
    addBird = (bird) => {

    }
}