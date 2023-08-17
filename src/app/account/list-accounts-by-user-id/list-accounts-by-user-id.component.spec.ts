import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccountsByUserIdComponent } from './list-accounts-by-user-id.component';

describe('ListAccountsByUserIdComponent', () => {
  let component: ListAccountsByUserIdComponent;
  let fixture: ComponentFixture<ListAccountsByUserIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAccountsByUserIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAccountsByUserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
