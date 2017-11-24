import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterStatusCardComponent } from './monster-status-card.component';

describe('MonsterStatusCardComponent', () => {
  let component: MonsterStatusCardComponent;
  let fixture: ComponentFixture<MonsterStatusCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterStatusCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterStatusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
