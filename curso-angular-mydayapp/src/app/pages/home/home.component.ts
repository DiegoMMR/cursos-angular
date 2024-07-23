import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  editingIndex = signal<null|number>(null)
  newTask = signal('')
  tasks = signal<Task[]>([
    {
      id: 1,
      title: "una tarea",
      completed: false
    }
  ]);

  filter = signal('all')

  newTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [ 
      Validators.required,
      Validators.minLength(3),
    ]
  })

  filteredTask = computed(() => {
    return this.tasks().filter(task => {
      switch (this.filter()) {
        case 'pending':
          return !task.completed
        case 'completed':
          return task.completed
        default:
          return true;
      }
    })
  })

 updateFilter(newFilter: string) {
  this.filter.set(newFilter)
 }

  handleNewTaksInputChange() {
    if (this.newTaskCtrl.valid) {
      const newTask = this.newTaskCtrl.value.trim()

      if(newTask != '') {
        this.addTask(newTask)
        this.newTaskCtrl.reset()
      }
    }
  }

  clearCompleted() {
    this.tasks.update((tasks) => {
      return tasks.filter((task) => task.completed === false)
    })
  }

  startEditing(index: number) {
    this.editingIndex.set(index)
  }

  stopEditing(){
    this.editingIndex.set(null)
  }

  addTask(title: string) {
    const newTask = {id: Date.now().valueOf(), title, completed: false}
    this.tasks.update((tasks) => [...tasks, newTask])
  }

  deleteTask(id: number) {
    this.tasks.update(tasks => tasks.filter((task) => task.id !== id))
  }

  toggleCompleted(event: Event, id: number) {
    const checkbox = event.target as HTMLInputElement
    this.tasks.update(tasks => {
      tasks.find(task => task.id === id)!!.completed = checkbox.checked
      return tasks
    })
  }

  updateTaskTitle(event: Event, id: number) {
    const input = event.target as HTMLInputElement
    this.tasks.update(tasks => {
      const newTitle = input.value.trim()
      if (newTitle != '') {        
        tasks.find(task => task.id === id)!!.title = newTitle
      }

      return tasks
    })

    this.stopEditing()
  }

  getTaskClass(task: Task, i: number) {
    if (this.editingIndex() === i) return 'editing'
    if (task.completed) return 'completed'

    return ''
  }

  getUncompleteCount() {
    return this.tasks().filter(task => task.completed === false).length
  }
}