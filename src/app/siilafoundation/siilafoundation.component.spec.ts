import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiilafoundationComponent } from './siilafoundation.component';

describe('SiilafoundationComponent', () => {
  let component: SiilafoundationComponent;
  let fixture: ComponentFixture<SiilafoundationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiilafoundationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiilafoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
