import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildComponent } from './build.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonListService } from 'modules/data-access/pokemon';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BuildComponent', () => {
  let component: BuildComponent;
  let fixture: ComponentFixture<BuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, HttpClientTestingModule],
      providers: [PokemonListService],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
