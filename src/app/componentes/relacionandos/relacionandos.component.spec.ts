import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionandosComponent } from './relacionandos.component';

describe('RelacionandosComponent', () => {
  let component: RelacionandosComponent;
  let fixture: ComponentFixture<RelacionandosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelacionandosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelacionandosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
