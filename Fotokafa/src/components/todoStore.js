import mobx, { observable, action, computed } from "mobx";
import React, { Component } from 'react';

class Store {
    @observable todos=[];
    @observable selectedStatus="all";

    @action('adding todo item')
    addTodo(todo){
        this.todos.push({
            id: this.todos[this.todos.length - 1].id +1,
            status: false,
            text: todo
        })
    }

    @action('Selected status changed')
    statusChange(status){
        this.selectedStatus = status;
    }

    @computed get filterTodos() {
        if(this.selectedStatus === 'all'){
            return this.todos;
        } else if( this.selectedStatus === 'done' ){
        return this.todos.filter(
            todo => todo.status === true);
        } else if( this.selectedStatus === 'todo' ){
        return this.todos.filter(
            todo => todo.status === false);
        }
    }

}

const todoStore = new Store()
export default todoStore;