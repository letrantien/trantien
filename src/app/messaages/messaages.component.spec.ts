import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessaagesComponent } from './messaages.component';

describe('MessaagesComponent', () => {
  let component: MessaagesComponent;
  let fixture: ComponentFixture<MessaagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessaagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessaagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
