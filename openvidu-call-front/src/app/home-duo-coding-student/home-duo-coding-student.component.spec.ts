import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDuoCodingStudentComponent } from './home-duo-coding-student.component';

describe('HomeDuoCodingStudentComponent', () => {
  let component: HomeDuoCodingStudentComponent;
  let fixture: ComponentFixture<HomeDuoCodingStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDuoCodingStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDuoCodingStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
