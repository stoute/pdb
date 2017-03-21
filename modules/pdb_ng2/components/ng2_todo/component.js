"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var store_1 = require('./services/store');
var Ng2Todo = (function () {
    function Ng2Todo(todoStore) {
        this.newTodoText = '';
        this.todoStore = todoStore;
    }
    Ng2Todo.prototype.stopEditing = function (todo, editedTitle) {
        todo.title = editedTitle;
        todo.editing = false;
    };
    Ng2Todo.prototype.cancelEditingTodo = function (todo) {
        todo.editing = false;
    };
    Ng2Todo.prototype.updateEditingTodo = function (todo, editedTitle) {
        editedTitle = editedTitle.trim();
        todo.editing = false;
        if (editedTitle.length === 0) {
            return this.todoStore.remove(todo);
        }
        todo.title = editedTitle;
    };
    Ng2Todo.prototype.editTodo = function (todo) {
        todo.editing = true;
    };
    Ng2Todo.prototype.removeCompleted = function () {
        this.todoStore.removeCompleted();
    };
    Ng2Todo.prototype.toggleCompletion = function (todo) {
        this.todoStore.toggleCompletion(todo);
    };
    Ng2Todo.prototype.remove = function (todo) {
        this.todoStore.remove(todo);
    };
    Ng2Todo.prototype.addTodo = function () {
        if (this.newTodoText.trim().length) {
            this.todoStore.add(this.newTodoText);
            this.newTodoText = '';
        }
    };
    Ng2Todo = __decorate([
        core_1.Component({
            moduleId: __moduleName,
            selector: 'ng2-todo',
            templateUrl: 'template.html',
            styleUrls: ['style.css'],
            providers: [store_1.TodoStore]
        }),
        __param(0, core_1.Inject(store_1.TodoStore)), 
        __metadata('design:paramtypes', [store_1.TodoStore])
    ], Ng2Todo);
    return Ng2Todo;
}());
exports.Ng2Todo = Ng2Todo;
//# sourceMappingURL=component.js.map