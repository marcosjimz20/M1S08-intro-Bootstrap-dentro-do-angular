import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjecaoLoginComponent } from './injecao-login.component';

describe('InjecaoLoginComponent', () => {
  let component: InjecaoLoginComponent;
  let fixture: ComponentFixture<InjecaoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjecaoLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjecaoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
