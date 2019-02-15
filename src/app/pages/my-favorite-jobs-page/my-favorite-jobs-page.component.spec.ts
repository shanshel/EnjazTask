import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavoriteJobsPageComponent } from './my-favorite-jobs-page.component';

describe('MyFavoriteJobsPageComponent', () => {
  let component: MyFavoriteJobsPageComponent;
  let fixture: ComponentFixture<MyFavoriteJobsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFavoriteJobsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFavoriteJobsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
