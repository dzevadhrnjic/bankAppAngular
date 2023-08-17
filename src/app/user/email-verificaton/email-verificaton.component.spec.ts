import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerificatonComponent } from './email-verificaton.component';

describe('EmailVerificatonComponent', () => {
  let component: EmailVerificatonComponent;
  let fixture: ComponentFixture<EmailVerificatonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailVerificatonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailVerificatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
