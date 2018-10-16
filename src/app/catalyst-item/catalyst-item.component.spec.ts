import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalystItemComponent } from './catalyst-item.component';

describe('CatalystItemComponent', () => {
  let component: CatalystItemComponent;
  let fixture: ComponentFixture<CatalystItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalystItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalystItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
