import { Component, signal, effect, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Todo item interface
interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // ============================================
  // Counter Example (COMMENTED OUT)
  // ============================================
  // counter = signal(0);

  // constructor() {
  //   effect(() => {
  //     console.log('Counter value changed:', this.counter());
  //   });
  // }

  // signalFirstValue = signal('M');

  // computedFullName = computed(() => {
  //   return `${this.signalFirstValue()} ${this.signalSecondValue()}`;
  // });

  // signalSecondValue = signal('Hello ss there');

  // incrementCount() {
  //   this.counter.update((value) => value + 1);
  // }

  // decrementCount() {
  //   this.counter.update((value) => {
  //     const newValue = value - 1;
  //     if (newValue < 0) {
  //       alert('Counter cannot be negative');
  //       return value;
  //     }
  //     return newValue;
  //   });
  // }

  // handleSubmit(firstValue: string, secondValue: string) {
  //   console.log(this.computedFullName());
  // }

  // ============================================
  // Todo List with Two-Way Binding
  // ============================================

  // Todo list data
  newTodoText: string = '';
  selectedPriority: 'low' | 'medium' | 'high' = 'medium';
  filterOption: 'all' | 'active' | 'completed' = 'all';

  todos: Todo[] = [
    {
      id: 1,
      text: 'Learn Angular Two-Way Binding',
      completed: true,
      priority: 'high',
      createdAt: new Date(),
    },
    {
      id: 2,
      text: 'Build a Todo App',
      completed: false,
      priority: 'medium',
      createdAt: new Date(),
    },
    {
      id: 3,
      text: 'Master FormsModule',
      completed: false,
      priority: 'high',
      createdAt: new Date(),
    },
  ];

  // Add new todo
  addTodo() {
    if (this.newTodoText.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: this.newTodoText.trim(),
        completed: false,
        priority: this.selectedPriority,
        createdAt: new Date(),
      };
      this.todos.unshift(newTodo);
      this.newTodoText = '';
      this.selectedPriority = 'medium';
    }
  }

  // Toggle todo completion
  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  // Delete todo
  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  // Clear all completed todos
  clearCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }

  // Get filtered todos
  get filteredTodos(): Todo[] {
    if (this.filterOption === 'active') {
      return this.todos.filter((todo) => !todo.completed);
    } else if (this.filterOption === 'completed') {
      return this.todos.filter((todo) => todo.completed);
    }
    return this.todos;
  }

  // Get statistics
  get totalTodos(): number {
    return this.todos.length;
  }

  get activeTodos(): number {
    return this.todos.filter((todo) => !todo.completed).length;
  }

  get completedTodos(): number {
    return this.todos.filter((todo) => todo.completed).length;
  }

  // Get priority color
  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'high':
        return '#ef4444';
      case 'medium':
        return '#f59e0b';
      case 'low':
        return '#10b981';
      default:
        return '#6b7280';
    }
  }
}
