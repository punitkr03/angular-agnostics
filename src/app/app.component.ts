import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  todoText: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-agnostics';
  todos: Todo[] = [];
  todoText: string = '';

  addTodo(todoText: string) {
    if (!todoText) {
      alert('Cannot add empty todo');
      return;
    }
    this.todos.push({
      id: this.todos.length + 1,
      todoText,
    });
    this.todoText = '';
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
