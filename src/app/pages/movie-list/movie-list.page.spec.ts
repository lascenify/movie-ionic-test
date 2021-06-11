import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MovieListPage } from './movie-list.page';

describe('MovieListPage', () => {
  let component: MovieListPage;
  let fixture: ComponentFixture<MovieListPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MovieListPage],
        imports: [
          IonicModule.forRoot(),
          HttpClientTestingModule,
          RouterModule.forRoot([]),
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(MovieListPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
