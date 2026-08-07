import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private projectService = inject(ProjectService);

  projects = signal<Project[]>([]);
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((data) => {
      this.projects.set(data);
      this.isLoading.set(false);
    });
  }
}
