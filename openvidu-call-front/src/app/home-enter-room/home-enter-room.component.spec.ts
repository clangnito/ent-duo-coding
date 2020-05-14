import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEnterRoomComponent } from './home-enter-room.component';

describe('HomeEnterRoomComponent', () => {
  let component: HomeEnterRoomComponent;
  let fixture: ComponentFixture<HomeEnterRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEnterRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEnterRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
