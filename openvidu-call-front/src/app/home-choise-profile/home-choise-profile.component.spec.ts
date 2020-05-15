import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChoiseProfileComponent } from './home-choise-profile.component';

describe('HomeChoiseProfileComponent', () => {
  let component: HomeChoiseProfileComponent;
  let fixture: ComponentFixture<HomeChoiseProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeChoiseProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChoiseProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
