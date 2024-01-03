import { Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'resolver';
  public loading = false;
  constructor(private router: Router) {}
  public ngOnInit(): void {
    this.router.events.subscribe((e: any) => {
      if (e instanceof ResolveStart) {
        this.loading = true;
      }
      if (e instanceof ResolveEnd) {
        this.loading = false;
      }
    });
  }
}
