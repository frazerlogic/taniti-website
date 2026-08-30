import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Transportationto } from './transportationto';

describe('Transportationto', () => {
  let component: Transportationto;
  let fixture: ComponentFixture<Transportationto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Transportationto],
    }).compileComponents();

    fixture = TestBed.createComponent(Transportationto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
