import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'IAAPP';
  authorized: boolean = false;
  una: boolean = false;
  srunning: boolean = false;
  hmode: string = 'easy';
  constructor(private http: HttpClient) {}
  linteg: number = 0;
  onlogins(inpus: string, mode: string) {
    this.srunning = true;
    class items {
      public authorized: boolean;
    }
    const operation = (list: items) => {
      if (list.authorized) {
        this.authorized = true;
        this.una = false;
      } else {
        this.authorized = false;
        this.una = true;
        const intern: number = this.linteg;
        this.linteg++;
        setTimeout(() => {
          if (this.linteg == intern && this.una) {
            this.una = false;
          }
        }, 1000);
      }
    };
    if (mode == 'b') {
      this.hmode = 'hard';
      this.http
        .post<string[]>('/api/login/hard', { pw: inpus })
        .subscribe((sta) => {
          const stri: string = atob(sta[0]);
          const sum: string = sta[1];
          if (stri == sum) {
            class itemsss{
              public authorized:number;
            }
            const itemss:itemsss=JSON.parse(stri);
            operation({authorized: (itemss.authorized&&itemss.authorized<=50)});
          }
        });
    } else {
      this.hmode = 'easy';
      this.http
        .post<items>('/api/login', { pw: inpus })
        .subscribe(operation);
    }
    this.srunning = false;
  }
  logouts() {
    this.srunning = true;
    this.authorized = false;
    this.una = false;
    this.srunning = false;
  }
}
