import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDuoCodingComponent } from './home-duo-coding.component';

describe('HomeDuoCodingComponent', () => {
  let component: HomeDuoCodingComponent;
  let fixture: ComponentFixture<HomeDuoCodingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDuoCodingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDuoCodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
