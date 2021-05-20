import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  exercises = [{
    id: "01",
    title: "SymboLearn",
    subtitle: "Welcome to SymboLearn",
    developer: "Rock Lee",
    stats: {
      wpm: 59,
      accuracy: "85%"
    }
  },
  {
    id: "02",
    title: "Hamlet",
    subtitle: "Hamlet's first act",
    developer: "Baianinho de Mauá",
    stats: {
      wpm: 156,
      accuracy: "99%"
    }
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
