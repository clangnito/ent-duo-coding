import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpCreationComponent } from './tp-creation.component';

describe('TpCreationComponent', () => {
  let component: TpCreationComponent;
  let fixture: ComponentFixture<TpCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
