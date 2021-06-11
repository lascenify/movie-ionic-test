import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IterableDiffers } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MovieDetailPage } from './movie-detail.page';

describe('MovieDetailPage', () => {
  let component: MovieDetailPage;
  let fixture: ComponentFixture<MovieDetailPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MovieDetailPage],
        imports: [
          IonicModule.forRoot(),
          HttpClientTestingModule,
          RouterModule.forRoot([]),
        ],
        providers: [{ provide: IterableDiffers }],
      }).compileComponents();

      fixture = TestBed.createComponent(MovieDetailPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
