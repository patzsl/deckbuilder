import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecksComponent } from './decks.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DecksComponent', () => {
  let component: DecksComponent;
  let fixture: ComponentFixture<DecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecksComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
